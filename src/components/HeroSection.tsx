"use client";

import React from 'react';
import { Button } from './ui/button';
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';
import { useToast } from "@/components/ui/use-toast";

function HeroSection() {
  const { toast } = useToast(); // Moved the useToast hook inside the component function

  return (
    <section className="w-full py-18 md:py-32 lg:py-40">
      <div className="container flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl sm:px-4">
          <span className='text-orange-500 text-8xl gap-2'>D</span>
          iscover the Best <br />  of Our Products...
        </h1>
        <h2>"Transform Every Meal with Our Elegant Crockery and Stylish Kitchenware"</h2>
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
      <h1 className="flex justify-center mt-12 px-2 text-base sm:text-lg md:text-xl lg:text-2xl sm:px-5 text-center">
        Rated 4.8 Stars by Our Customers for Quality Crockery -- Excellent 
      </h1>
      <div className='flex justify-center mt-8 gap-1'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <CiStar/>
      </div>
    </section>
  );
}

export default HeroSection;
