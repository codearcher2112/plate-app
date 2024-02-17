'use client'

import { useState } from 'react';
import Hero from '@/components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { useRecipeContext } from '@/context/RecipeContext';
import { UserAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
    const { user } = UserAuth();
    const { items, newItem, setNewItem, addItem, deleteItem, handleImageUpload } = useRecipeContext();
    const [open, setOpen] = useState(false);

    const handleAddItem = () => {
        addItem();
        setOpen(false);
    };

    const staggerDelay = (index) => index * 0.1;

    return (
        <>
            <Hero />
            <main className="min-h-screen py-24">
                <div className="container mx-auto px-4">
                    <div className="main__inner-conatiner flex flex-col items-center">
                        <Dialog open={open} onOpenChange={setOpen}>
                            {!user ? null : (
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="fixed bottom-12 right-10 z-10 bg-black border-black text-white transition-all duration-500 ease-in-out dark:bg-white dark:border-white dark:text-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white"
                                    >
                                        <PlusIcon className="w-5 h-5 mr-2" />
                                        Add New Recipe
                                    </Button>
                                </DialogTrigger>
                            )}

                            <DialogContent className="max-w-[90%] sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>
                                        Add A New Recipe
                                    </DialogTitle>

                                    <DialogDescription>
                                        Welcome to the Recipe Creator! Remember, simplicity and clarity make for the best recipes. Happy cooking!
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            placeholder="Enter A Dish Title"
                                            value={newItem.title}
                                            onChange={e => setNewItem({...newItem, title: e.target.value})}
                                        />
                                    </div>

                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="ingredients">Ingredients</Label>
                                        <Textarea
                                            id="ingredients"
                                            className="resize-none"
                                            placeholder="Ingredients"
                                            value={newItem.ingredients}
                                            onChange={e => setNewItem({...newItem, ingredients: e.target.value})}
                                        />
                                    </div>

                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="instructions">Instructions</Label>
                                        <Textarea
                                            id="instructions"
                                            className="resize-none"
                                            placeholder="Instructions"
                                            value={newItem.instructions}
                                            onChange={e => setNewItem({...newItem, instructions: e.target.value})}
                                        />
                                    </div>

                                    <div className="grid w-full items-center gap-2">
                                        <Label htmlFor="picture">Picture</Label>
                                        <Input
                                            id="picture"
                                            type="file"
                                            onChange={(e) => handleImageUpload(e.target.files[0])}
                                        />
                                    </div>
                                </div>

                                <DialogFooter>
                                    <Button type="submit" onClick={handleAddItem}>
                                        Add to recipe list
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <div className="max-w-2xl text-center">
                            <motion.h2
                                className="text-2xl sm:text-4xl"
                                initial={ {
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                } }
                                whileInView={ {
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut', } }
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <span className="text-red-600">Explore</span> an extensive collection of easy-to-follow recipes curated from around the world, all in one convenient place.
                            </motion.h2>

                            <motion.p
                                className="mt-8"
                                initial={ {
                                    opacity: 0,
                                    transform: 'translateY(20px)'
                                } }
                                whileInView={ {
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                } }
                                exit={ {
                                    opacity: 0,
                                } }
                                transition={ { duration: 0.6, ease: 'easeInOut', } }
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                From quick weeknight dinners to indulgent desserts, discover dishes to satisfy every craving and skill level.
                                Say goodbye to recipe ruts and hello to delicious possibilities with Plate.
                            </motion.p>
                        </div>

                        <div className="w-full">
                            {items.length < 1 ? ('') : (
                                <motion.div
                                    className="mt-5"
                                    initial={ {
                                        opacity: 0,
                                    } }
                                    whileInView={ {
                                        opacity: 1,
                                    } }
                                    exit={ {
                                        opacity: 0,
                                    } }
                                    transition={ { duration: 0.6, ease: 'easeInOut', } }
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    {`${items.length} dishes`}
                                </motion.div>
                            )}

                            <ul className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <AnimatePresence>
                                    {items.map((item, index) => (
                                        <motion.li
                                            key={item.id}
                                            initial={ {
                                                opacity: 0,
                                                transform: 'translateY(15px)'
                                            } }
                                            whileInView={ {
                                                opacity: 1,
                                                transform: 'translateY(0)'
                                            } }
                                            exit={ {
                                                opacity: 0,
                                            } }
                                            transition={ { duration: 0.6, ease: 'easeInOut', delay: staggerDelay(index), } }
                                            viewport={{ once: true, amount: 0.7 }}
                                        >
                                            <Card className="card h-full rounded-md overflow-hidden group">
                                                <CardHeader className="relative p-0 space-y-0">
                                                    <div className="card__image-wrapper relative overflow-hidden after:absolute after:inset-0 after:bg-black/40">
                                                        <Image
                                                            priority={true}
                                                            width={400}
                                                            height={400}
                                                            src={item.imageUrl}
                                                            alt={item.title}
                                                            className="w-full h-full aspect-square object-cover transition-all duration-500 ease-out group-hover:scale-110"
                                                        />
                                                    </div>

                                                    <CardContent className="absolute inset-0 pt-6 px-6 pb-20">
                                                        <CardTitle className="capitalize text-white">
                                                            {item.title}
                                                        </CardTitle>
                                                    </CardContent>

                                                    <Link className="absolute inset-0 block" href={`/recipes/${item.id}`} />

                                                    <CardFooter className="absolute right-0 bottom-0 p-6">
                                                        <Avatar>
                                                            <AvatarImage src={item.avatarUrl} />
                                                            <AvatarFallback>X</AvatarFallback>
                                                        </Avatar>

                                                        {!user ? null : (
                                                                <Button
                                                                    type="button"
                                                                    variant="destructive"
                                                                    className="rounded-md duration-300 hover:bg-red-400"
                                                                    onClick={() => deleteItem(item.id)}
                                                                >
                                                                    <TrashIcon className="w-6 h-6" />
                                                                </Button>
                                                        )}
                                                    </CardFooter>
                                                </CardHeader>
                                            </Card>
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
