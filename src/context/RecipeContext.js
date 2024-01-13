'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '@/firebase/firebase';
import { collection, doc, addDoc, onSnapshot, deleteDoc } from 'firebase/firestore';

const RecipeContext = createContext();

export const useRecipeContext = () => {
    return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', cookingTime: '' });

    const addItem = async (e) => {
        e.preventDefault();

        if (newItem.name !== '' && newItem.cookingTime !== '') {
            await addDoc(collection(db, 'items'), {
                name: newItem.name.trim(),
                cookingTime: newItem.cookingTime.trim(),
            });

            setNewItem({ name: '', cookingTime: '' });
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

    const contextValue = {
        items,
        newItem,
        setNewItem,
        addItem,
        deleteItem,
    };

    return <RecipeContext.Provider value={contextValue}>{children}</RecipeContext.Provider>;
};
