'use client'

import { useRecipeContext } from '@/context/RecipeContext';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaBowlFood } from "react-icons/fa6";
import { CiForkAndKnife } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RecipePage({params}) {
    const { items } = useRecipeContext();
    const recipe = items.find(item => item.id === params.id);

    return (
        <main className="recipe-detail sm:py-24 py-12">
            <div className="recipe-detail__container container mx-auto px-4">
                {recipe ? (
                    <div className="recipe-detail__columns grid grid-cols-3 gap-10">
                        <div className="recipe-detail__column recipe-detail__column--1 col-span-3 sm:col-span-1">
                            <motion.div
                                className="recipe-detail__image-wrapper rounded-lg overflow-hidden shadow-2xl dark:shadow-white"
                                initial={ {
                                    opacity: 0,
                                    transform: 'scale(0.5)'
                                } }
                                animate={ {
                                    opacity: 1,
                                    transform: 'scale(1)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut' } }
                            >
                                <Image
                                    priority={true}
                                    width={500}
                                    height={500}
                                    src={recipe.imageUrl}
                                    alt={recipe.title}
                                    className="w-full h-full aspect-square object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="recipe-detail__column recipe-detail__column--2 col-span-3 sm:col-span-2 flex flex-col gap-10">
                            <motion.h1
                                className="text-5xl text-red-600"
                                initial={ {
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                } }
                                animate={ {
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut', delay: 0.2 } }
                            >
                                {recipe.title}
                            </motion.h1>

                            <motion.div
                                className="recipe-detail__ingredients"
                                initial={ {
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                } }
                                animate={ {
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut', delay: 0.4 } }
                            >
                                <div className='flex items-center gap-2 text-black-600'>
                                    <div><FaBowlFood /></div>
                                    <h2 className="block uppercase text-lg text-red-600">Ingredients:</h2>
                                </div>

                               <p>{recipe.ingredients}</p>

                            </motion.div>

                            <motion.div
                                className="recipe-detail__instructions"
                                initial={ {
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                } }
                                animate={ {
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut', delay: 0.6 } }
                            >
                                <div className='flex items-center gap-2 text-black-600'>
                                    <div><CiForkAndKnife /></div>
                                    <h3 className="block uppercase text-lg text-red-600">Instructions:</h3>
                                </div>
                                <p>{recipe.instructions}</p>
                            </motion.div>

                            <Avatar>
                                <AvatarImage src={recipe.avatarUrl} />
                                <AvatarFallback>X</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-h-screen py-24">Loading...</div>
                )}
            </div>
        </main>
    );
}
