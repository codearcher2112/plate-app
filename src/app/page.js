'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useRecipeContext } from '@/context/RecipeContext';
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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusIcon } from '@radix-ui/react-icons';

export default function Home() {
    const { items, newItem, setNewItem, addItem, deleteItem } = useRecipeContext();

    return (
        <main className="min-h-screen py-24">
            <div className="container mx-auto px-4">
                <div className="main__inner-conatiner flex flex-col items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="fixed bottom-12 right-10 z-10 bg-black border-black text-white transition-all duration-500 ease-in-out dark:bg-white dark:border-white dark:text-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white"
                            >
                                <PlusIcon className="w-5 h-5 mr-2" />
                                Add New Recipe
                            </Button>
                        </DialogTrigger>

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
                                    <Input id="picture" type="file"/>
                                </div>
                            </div>

                            <DialogFooter>
                                <Button type="submit" onClick={addItem}>Add to recipe list</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <h1 className="max-w-2xl text-3xl text-center">
                        Plate is a web application designed to bring a world of delicious recipes to your fingertips
                    </h1>

                    <div className="w-full">
                        {items.length < 1 ? ('') : (
                            <div className="mt-5">
                                {`${items.length} dishes`}
                            </div>
                        )}

                        <ul className="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <AnimatePresence>
                                {items.map((item) => (
                                    <motion.li
                                        key={item.id}
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
                                        <Card className="h-full">
                                            <CardHeader>
                                                <CardTitle className="capitalize">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription>
                                                    {`Ingredients are: ${item.ingredients}`}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent>
                                                <p>{`${item.instructions}`}</p>
                                            </CardContent>

                                            <CardFooter>
                                                <p>Card Footer</p>
                                            </CardFooter>
                                        </Card>
                                        {/*<span className="flex justify-end">
                                            <button
                                                type="button"
                                                className="self-end"
                                                onClick={() => deleteItem(item.id)}
                                            >
                                                X
                                            </button>
                                        </span>*/}
                                </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
