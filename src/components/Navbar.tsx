"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

const onClick = () => {
  console.log("clicked");
  alert("clicked");
};

function Navbar() {
  return (
    <div className='h-full w-screen flex-auto border-1 md:px-4 bg-slate-200 '>
      <div className='flex flex-row items-center justify-evenly px-4 '>
        <div className='h-24 w-28 flex items-center justify-end'>
          <img src="logo.png" alt="logo" className="transform transition-transform duration-300 hover:scale-110" />
        </div>

        <div className='bg-gray-300 p-2 rounded-3xl'>
          <div className='flex items-center gap-2 overflow-hidden cursor-pointer rounded-lg shadow-sm'>
            <Button variant={'secondary'} className='px-4 py-2 rounded-lg '>
              Start Trading
            </Button>

            <div className='w-4px h-full bg-gray-300'></div>

            <Button onClick={onClick} variant={'ghost'} className='px-4 '>
              Login
            </Button>
          </div>
        </div>

        <div className='text-md flex-row items-center justify-center gap-6 hidden md:flex'>
          <Link href="/home" className="relative group text-black hover:text-black pb-1">
            Home
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group text-black hover:text-black pb-1">
            About
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="/products" className="relative group text-black hover:text-black pb-1">
            Products
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group text-black hover:text-black pb-1">
            Contact
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>
      </div>
      <div className='hidden'>
        <MenuIcon/>
      </div>
    </div>
  );
}

export default Navbar;
