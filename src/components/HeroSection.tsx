"use client";

import React from 'react';
import { Button } from './ui/button';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useToast } from "@/components/ui/use-toast";
import Link from 'next/link';

function HeroSection() {
  const { toast } = useToast();

  return (
    <div className='p-2 lg:py-16 sm:py-14'>
      <section className="relative w-full py-18 md:py-32 lg:py-30 bg-fit bg-cover bg-no-repeat bg-center rounded-2xl overflow-hidden" style={{ backgroundImage: 'url(/crockery.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container flex flex-col items-center justify-center space-y-6 text-white z-10">
          <h1 className="text-5xl px-6 py-8 font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl sm:p-8">
            <span className='text-8xl gap-2'>D</span>
            iscover the Best <br /> of Our Products...
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl">Transform Every Meal with Our Elegant Crockery and Stylish Kitchenware</h2>
          <Link href='/contact'>
          <Button 
            variant={'default'} 
            onClick={() => {
              toast({
                title: "Get contact with us now!",
                description: "We are here to help you with any queries you may have. Contact us now to get started.",
              });
            }}
            className='p-6 rounded-3xl'
          >
            Start Trading Now &rarr;
          </Button>
          </Link>
          
        </div>
        <h1 className="relative flex justify-center mt-12 px-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:px-5 text-center text-white z-10">
          Rated 4.8 Stars by Our Customers for Quality Crockery -- Excellent 
        </h1>
        <div className="mb-4 md:mb-0">
          <div className='relative flex justify-center mt-8 gap-1 text-white z-10'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
