"use client";

import Logo from "@/components/Logo";
import ModeToggle from "@/components/ModeToggle";
import GitHubLink from "@/components/GitHubLink";
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";

const Header = () => {
  return (
  <header className="header sticky top-0 z-40 w-full backdrop-blur shadow-md flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 supports-backdrop-blur:bg-white/60 dark:shadow-none dark:bg-black/95">
      <div className="header__container container mx-auto px-4">
        <div className="header__inner flex justify-between items-center py-4 gap-5">
            <Sheet>
                <SheetTrigger>
                    <FiMenu size={40} />
                </SheetTrigger>
                <SheetContent className="py-10" side="left">
                    <SheetHeader>
                        <SheetTitle>
                            Plate is a web application designed to bring a world of
                            delicious recipes to your fingertips
                        </SheetTitle>
                        <SheetDescription>
                            <br/>
                            <Button variant='outline'>My Profile</Button>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <Logo className={"w-16 mr-auto"} />

            <div className="flex items-center gap-2">
                <ModeToggle />
                <GitHubLink />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
