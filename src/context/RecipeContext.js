'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, storage } from '@/firebase/firebase';
import { collection, doc, addDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { UserAuth } from '@/context/AuthContext';
const RecipeContext = createContext();

export const useRecipeContext = () => {
    return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ avatarUrl: '', title: '', ingredients: '', instructions: '', imageUrl: '' });

    const addItem = async () => {
        if (newItem.title !== '' && newItem.ingredients !== '' && newItem.instructions !== '' && newItem.imageUrl !== '') {
            await addDoc(collection(db, 'items'), {
                avatarUrl: newItem.avatarUrl,
                title: newItem.title.trim(),
                ingredients: newItem.ingredients.trim(),
                instructions: newItem.instructions.trim(),
                imageUrl: newItem.imageUrl,
            });

            setNewItem({ avatarUrl: '', title: '', ingredients: '', instructions: '', imageUrl: '' });
        }
    };

    useEffect(() => {
        const q = collection(db, 'items');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemArr = [];

            querySnapshot.forEach((doc) => {
                itemArr.push({ ...doc.data(), id: doc.id });
            });

            setItems(itemArr);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const deleteItem = async (id) => {
        await deleteDoc(doc(db, 'items', id));
    };

    const handleImageUpload = async (file) => {
        const storageRef = ref(storage, 'images/' + file.name);

        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            setNewItem((prevItem) => ({ ...prevItem, imageUrl: downloadURL }));
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const { user } = UserAuth();

    useEffect(() => {
        if (user) {
            setNewItem((prevItem) => ({ ...prevItem, avatarUrl: user.photoURL }));
        }
    }, [user]);

    const contextValue = {
        items,
        newItem,
        setNewItem,
        addItem,
        deleteItem,
        handleImageUpload,
    };

    return <RecipeContext.Provider value={contextValue}>{children}</RecipeContext.Provider>;
};
