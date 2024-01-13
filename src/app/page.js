'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useRecipeContext } from '@/context/RecipeContext';

export default function Home() {
    const { items, newItem, setNewItem, addItem, deleteItem } = useRecipeContext();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-y-4 p-24">
            <h1 className="max-w-2xl text-3xl text-center">
                Plate is a web application designed to bring a world of delicious recipes to your fingertips
            </h1>

            <div className="p-4">
                <form className="flex gap-x-2">
                    <input
                        className="py-1 px-3 border border-solid border-black dark:border-slate-50/[0.5] rounded-xl outline-0 transition-all duration-300 ease-in-out focus:border-black"
                        type="text"
                        placeholder="Enter dish name"
                        value={newItem.name}
                        onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                    />
                    <input
                        className="py-1 px-3 border border-solid border-black dark:border-slate-50/[0.5] rounded-xl outline-0 transition-all duration-300 ease-in-out focus:border-black"
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
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.li
                                key={item.id}
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
                    </AnimatePresence>
                </ul>
            </div>
        </main>
    )
}
