"use client";
import Logo from "@/components/Logo";
import ModeToggle from "@/components/ModeToggle";
import GitHubLink from "@/components/GitHubLink";
import { LiaHamburgerSolid } from "react-icons/lia";
import Select from "./select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { useState } from "react";
const Header = () => {

const [meals,setMeals] = useState(false)

function showMeals(e){
    e.preventDefault()
    setMeals(true)
    console.log('show meals')
}
  return (
    <header className="header sticky top-0 z-40 w-full backdrop-blur shadow-md flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.5] bg-white/95 supports-backdrop-blur:bg-white/60 dark:shadow-none dark:bg-transparent">
      <div className="header__container container mx-auto px-4">
        <div className="header__inner flex justify-between items-center py-4">
          <Logo className={"w-16"} />
          <Sheet>
            <SheetTrigger>
              <LiaHamburgerSolid size={70} />
            </SheetTrigger>
            <SheetContent side="left">
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
          
          <div className="flex items-center gap-2">
            <Select/>
            <ModeToggle />
            <GitHubLink />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
