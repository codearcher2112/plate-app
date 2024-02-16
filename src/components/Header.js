"use client";

import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import ModeToggle from '@/components/ModeToggle';
import GitHubLink from '@/components/GitHubLink';
import { FiMenu } from 'react-icons/fi';
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from "./ui/button";
import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';

const Header = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 300));
            setLoading(false);
        }

        checkAuthentication();
    }, [user]);

    return (
        <header className="header sticky top-0 z-40 w-full backdrop-blur shadow-md flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 supports-backdrop-blur:bg-white/60 dark:shadow-none dark:bg-black/95">
            <div className="header__container container mx-auto px-4">
                <div className="header__inner flex justify-between items-center py-4 gap-5">
                    <Sheet>
                        <SheetTrigger>
                            <FiMenu size={40}/>
                        </SheetTrigger>

                        <SheetContent className="py-10" side="left">
                            <SheetHeader>
                                <SheetTitle>
                                    Plate is a web application designed to bring a world of
                                    delicious recipes to your fingertips
                                </SheetTitle>

                                <SheetClose asChild>
                                    <Button asChild>
                                        <Link href="/profile">
                                            My Profile
                                        </Link>
                                    </Button>
                                </SheetClose>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Logo className={"w-16 mr-auto"} />

                    {loading ? null : !user ? (
                        <Button onClick={handleSignIn} variant="link">
                            Sign in
                        </Button>
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer" asChild>
                                <Avatar>
                                    <AvatarImage src={user.photoURL} />
                                    <AvatarFallback>X</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>
                                    {user.displayName}
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        {user.email}
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                                    Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        )
                    }

                    <div className="flex items-center gap-2">
                        <ModeToggle/>
                        <GitHubLink/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
