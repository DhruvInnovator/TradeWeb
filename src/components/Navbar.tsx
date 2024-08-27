"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import MobMenu from './MobMenu';
import { UserButton } from '@clerk/nextjs';
import { Ghost } from 'lucide-react';

function Navbar() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='sticky top-0 w-full z-50'>
      <div className='flex items-center justify-between h-16 p-2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg w-full'>
        <div className='flex items-center flex-grow'>
          <div className='h-8 flex items-center'>
            <Image
              src="/realloogo.png"
              alt="logo"
              width={50}
              height={50}
              className="transform transition-transform duration-300 scale-100"
            />
          </div>
          <div className='md:flex flex-col ml-4 text-black'>
            <h1 className='text-xl font-semibold'>
              𝚁𝚊𝚜𝚑𝚒 𝚃𝚛𝚊𝚍𝚒𝚗𝚐 𝚌𝚘
            </h1>
            <h6 className='text-sm'>
              HOMEDECORE, KITCHENWARE AND CROCKERY
            </h6>
          </div>
        </div>

        <div className='hidden md:flex items-center gap-4'>
          <Button
            variant={activeButton === 'trading' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'trading' ? 'text-black' : 'text-black'}`}
            onClick={() => handleButtonClick('trading')}
          >
            Start Trading
          </Button>
          <Button
            variant={activeButton === 'login' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'login' ? 'text-black' : 'text-black'}`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobMenu />

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex flex-row items-center justify-end gap-6 flex-grow'>
          <Link href="/" className="relative group text-center text-black hover:text-black pb-1">
            Home
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'home' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/about" className="relative group text-black hover:text-black pb-1">
            About
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'about' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/services" className="relative group text-black hover:text-black pb-1">
            Services
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'services' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/products" className="relative group text-black hover:text-black pb-1">
            Products
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'products' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/contact" className="relative group text-black hover:text-black pb-1">
            Contact
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'contact' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
