"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import MobMenu from './MobMenu';

function Navbar() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='relative h-16 w-full flex-auto md:fixed z-50'>
      <div className='flex h-16 flex-row items-center justify-between p-2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg'>
        <div className='flex items-center'>
          <div className='h-24 w-18 flex items-center justify-start'>
            <Image
              src="/realloogo.png"
              alt="logo"
              width={100}
              height={100}
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className='md:flex flex-col justify-center text-black'>
            <h1 className='text-2xl font-semibold'>
              𝚁𝚊𝚜𝚑𝚒 𝚃𝚛𝚊𝚍𝚒𝚗𝚐 𝚌𝚘
            </h1>
            <h5 className='text-sm'>
              HOMEDECORE, KITCHENWARE AND CROCKERY
            </h5>
          </div>
        </div>

        <div className='absolute left-1/2 transform -translate-x-1/2 hidden sm:flex items-center bg-primary p-1 gap-1 overflow-hidden cursor-pointer rounded-lg shadow-sm'>
          <Button
            variant={activeButton === 'trading' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'trading' ? ' text-black' : ' text-black'}`}
            onClick={() => handleButtonClick('trading')}
          >
            Start Trading
          </Button>
          <div className='w-1 h-full bg-gray-300'></div>
          <Button
            variant={activeButton === 'login' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'login' ? ' text-black' : ' text-black'}`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobMenu />

        {/* Desktop Navigation Links */}
        <div className='hidden text-md md:flex flex-row items-center justify-end gap-6'>
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
          <Link href="/contact" className="relative group text-black hover:text-black pb-1">
            Contact
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'contact' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/products" className="relative group text-black hover:text-black pb-1">
            Products
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'products' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
