"use client";

import React from 'react';
import { Button } from './ui/button';
import { CiStar } from "react-icons/ci";
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useToast } from "@/components/ui/use-toast";

function HeroSection() {
  const { toast } = useToast();

  return (
    <div className='rounded-3xl p-4'>
      <section className="relative w-full py-18 md:py-32 lg:py-40 bg-cover bg-center" style={{ backgroundImage: 'url(/crockery.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
        <div className="relative container flex flex-col items-center justify-center space-y-6 text-white z-10">
          <h1 className="text-5xl px-6 py-8 font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl sm:p-8">
            <span className='text-8xl gap-2'>D</span>
            iscover the Best <br />  of Our Products...
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl">Transform Every Meal with Our Elegant Crockery and Stylish Kitchenware</h2>
          <Button 
            variant={'default'} 
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }}
            className='p-6 rounded-3xl'
          >
            Start Trading Now &rarr;
          </Button>
        </div>
        <h1 className="relative flex justify-center mt-12 px-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:px-5 text-center text-white z-10">
          Rated 4.8 Stars by Our Customers for Quality Crockery -- Excellent 
        </h1>
        <div className="mb-4 md:mb-0"> {/* Apply margin to a wrapping div */}
          <div className='relative flex justify-center mt-8 gap-1 text-white z-10'>
            <FaStar/>
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
