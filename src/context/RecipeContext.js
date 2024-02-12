'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, storage } from '@/firebase/firebase';
import { collection, doc, addDoc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const RecipeContext = createContext();

export const useRecipeContext = () => {
    return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ title: '', ingredients: '', instructions: '', imageUrl: '' });

    const addItem = async () => {
        if (newItem.title !== '' && newItem.ingredients !== '' && newItem.instructions !== '' && newItem.imageUrl !== '') {
            await addDoc(collection(db, 'items'), {
                title: newItem.title.trim(),
                ingredients: newItem.ingredients.trim(),
                instructions: newItem.instructions.trim(),
                imageUrl: newItem.imageUrl,
            });

            setNewItem({ title: '', ingredients: '', instructions: '', imageUrl: '' });
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
