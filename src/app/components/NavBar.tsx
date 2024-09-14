
"use client";

import Link from "next/link";
import { useState } from "react"
import { navLinks } from "../constants";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import ScrollProgressBar from "./ScrollProgressBar";

const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");
    return (
        <nav className="sm:px-16 bg-background px-6 w-full flex items-center py-3 fixed top-0 z-20 border-b-2">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <a
                    href="/#"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                >
                    <img src="/logo.svg" alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Ben Cheung &nbsp;<span className='md:block hidden'>|&nbsp;张弘弦</span></p>
                </a>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                 ? 'text-slate-400'
                 : 'text-primary'
              } hover:text-slate-400 text-[18px] font-medium cursor-pointer`} 
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
                </ul>

            <Popover open={toggle}>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <PopoverTrigger>
                    <img
                        src={toggle ? "/close.svg" : "/menu.svg"}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {setToggle(!toggle)}}
                    />
                    </PopoverTrigger>
            <PopoverContent className="rounded-xl">

            <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                 ? 'text-slate-400'
                 : 'text-white'
              } font-poppins font-medium cursor-pointer text-[16px]`} 
              onClick={() => {
                setActive(link.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
                    
                    </PopoverContent>
                </div>
                </Popover>
            </div>
            <ScrollProgressBar />
        </nav>
    )
}


export default Navbar;