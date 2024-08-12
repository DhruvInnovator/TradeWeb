"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { BoxIcon, HomeIcon, MenuIcon, PhoneIcon, X } from 'lucide-react';
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null); // State to track the active button

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };

  return (
    <div className='relative h-16 w-full flex-auto justify-center bg-slate-100 z-50'>
      <div className='flex h-16 flex-row items-center justify-between p-2'>
        <div className='h-24 w-28 flex items-center justify-start'>
          <Image src="/logo.png" alt="logo" width={200} height={200} className="transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Toggle Button with Yellow Color Shift */}
        <div className='hidden items-center bg-primary p-1 gap-1 overflow-hidden cursor-pointer rounded-lg shadow-sm sm:flex'>
          <Button
            variant={activeButton === 'trading' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'trading' ? ' text-black' : ' text-black'}`}
            onClick={() => handleButtonClick('trading')}
          >
            Start Trading
          </Button>
          <div className='w-6px h-full bg-gray-300'></div>
          <Button 
            variant={activeButton === 'login' ? 'secondary' : 'default'}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'login' ? ' text-black' : ' text-black'}`}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </Button>
        </div>

        {/* Hamburger Menu Icon (Visible on mobile) */}
        <div className='md:hidden p-2 flex items-center'>
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </Button>
        </div>

        {/* Desktop Navigation Links */}
        <div className='hidden text-sm md:flex flex-row items-center justify-end gap-6'>
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
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'products' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
          <Link href="/contact" className="relative group text-black hover:text-black pb-1">
            Contact
            <span className={`absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 ease-in-out ${activeButton === 'contact' ? 'w-full' : 'group-hover:w-full'}`}></span>
          </Link>
        </div>
      </div>

      {/* Sidebar Menu (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link href="/" className="flex items-center gap-4 text-black hover:text-orange-500">
            <HomeIcon className="w-6 h-6" />
            Home
          </Link>
          <Link href="/about" className="flex items-center gap-4 text-black hover:text-orange-500">
            <FaMagnifyingGlass className="w-6 h-6" />
            About
          </Link>
          <Link href="/services" className="flex items-center gap-4 text-black hover:text-orange-500">
            <BoxIcon className="w-6 h-6" />
            Services
          </Link>
          <Link href="/contact" className="flex items-center gap-4 text-black hover:text-orange-500">
            <PhoneIcon className="w-6 h-6" />
            Contact
          </Link>
          
          <div className="flex flex-col items-center space-y-4 px-4">
            <Link href="/privacy" className="text-sm text-black hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-black hover:text-orange-500">
              Terms & Conditions
            </Link>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.59.58-2.46.69a4.301 4.301 0 001.88-2.37c-.83.5-1.75.86-2.73 1.06A4.27 4.27 0 0015.75 4c-2.37 0-4.29 1.92-4.29 4.28 0 .34.04.68.1 1-3.57-.18-6.73-1.89-8.85-4.47-.37.64-.58 1.39-.58 2.18 0 1.5.77 2.83 1.95 3.61-.72-.02-1.39-.22-1.98-.55v.06c0 2.09 1.49 3.84 3.45 4.23-.36.1-.75.16-1.14.16-.28 0-.55-.03-.82-.08.55 1.72 2.15 2.97 4.05 3a8.58 8.58 0 01-5.3 1.83c-.34 0-.68-.02-1.01-.06a12.09 12.09 0 006.52 1.91c7.83 0 12.1-6.48 12.1-12.1 0-.18-.01-.36-.02-.54A8.63 8.63 0 0022.46 6z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-500">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.496v-9.294H9.742v-3.62h3.08V8.413c0-3.066 1.871-4.74 4.602-4.74 1.311 0 2.438.098 2.765.142v3.205l-1.899.001c-1.488 0-1.777.707-1.777 1.744v2.287h3.555l-.464 3.62h-3.091V24h6.063C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <div className='sm:hidden items-center md:bottom-2 bg-gray-300 p-1 gap-1 overflow-hidden cursor-pointer rounded-lg shadow-sm '>
            <Button
              variant={activeButton === 'trading' ? 'secondary' : 'default'}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'trading' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleButtonClick('trading')}
            >
              Start Trading
            </Button>

            <div className='w-4px h-full bg-gray-300'></div>

            <Button
              variant={activeButton === 'login' ? 'secondary' : 'ghost'}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeButton === 'login' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleButtonClick('login')}
            >
              Login
            </Button>
        </div> */}
      </div>

      {/* Background Blur (When Sidebar is Open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
