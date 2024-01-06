'use client'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { db } from './firebase';
import { collection, doc, addDoc, onSnapshot, deleteDoc } from 'firebase/firestore';

export default function Home() {
    const [items, setItems] = useState([
        // { name: 'Sushi', cookingTime: '1h'},
        // { name: 'Pizza', cookingTime: '30m'},
        // { name: 'Cheeseburger', cookingTime: '15m'},
    ]);
    const [newItem, setNewItem] = useState({ name: '', cookingTime: '' })

    // Add item to database
    const addItem = async (e) => {
        e.preventDefault();

        if (newItem.name !== '' && newItem.cookingTime !== '') {
            // setItems([...items, newItem]);
            await addDoc(collection(db, 'items'), {
                name: newItem.name.trim(),
                cookingTime: newItem.cookingTime.trim(),
            });

            setNewItem({ name: '', cookingTime: '' })
        }
    }

    // Read item from database
    useEffect(() => {
        const q = collection(db, 'items');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemArr = [];

            querySnapshot.forEach(doc => {
                itemArr.push({...doc.data(), id: doc.id});
            })

            setItems(itemArr);
        });

        // Cleanup the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    // Delete item from database
    const deleteItem = async (id) => {
        await deleteDoc(doc(db, 'items', id))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 p-24">
            <h1 className="max-w-2xl text-3xl text-center">
                Plate is a web application designed to bring a world of delicious recipes to your fingertips
            </h1>

            <div className="p-4">
                <form className="flex gap-x-2">
                    <input
                        className="py-1 px-3 border border-solid border-transparent rounded-xl outline-0 text-black transition-all duration-300 ease-in-out focus:border-black"
                        type="text"
                        placeholder="Enter dish name"
                        value={newItem.name}
                        onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    />
                    <input
                        className="py-1 px-3 border border-solid border-transparent rounded-xl outline-0 text-black transition-all duration-300 ease-in-out focus:border-black"
                        type="text"
                        placeholder="Enter cooking time"
                        value={newItem.cookingTime}
                        onChange={e => setNewItem({ ...newItem, cookingTime: e.target.value })}
                    />
                    <button
                        className="bg-cyan-400 py-1 px-3 rounded-xl capitalize transition-all duration-300 ease-in-out hover:opacity-80"
                        type="submit"
                        onClick={addItem}
                    >
                        Add to list
                    </button>
                </form>

                {items.length < 1 ? ('') : (
                    <div className="mt-5">
                        {`${items.length} dishes`}
                    </div>
                )}

                <ul className="grid gap-y-2 mt-5">
                    {items.map((item, id) => (
                        <motion.li
                            key={id}
                            className="grid grid-cols-3 gap-4 py-2 px-3 bg-cyan-400 rounded-xl"
                            initial={ {
                                opacity: 0,
                                transform: 'translateY(-15px)'
                            } }
                            animate={ {
                                opacity: 1,
                                transform: 'translateY(0)'
                            } }
                            exit={ {
                                opacity: 0,
                                transform: 'translateY(-15px)'
                            } }
                            transition={ { duration: 0.6, ease: 'easeInOut' } }
                        >
                            <span>
                                {item.name}
                            </span>
                            <span>
                                {`Cooking time is ${item.cookingTime}`}
                            </span>
                            <span className="flex justify-end">
                                <button
                                    type="button"
                                    className="self-end"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    X
                                </button>
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
