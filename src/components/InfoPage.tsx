"use client";

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import React from 'react';
import { Button } from './ui/button'; // Assuming you have a Button component available

function InfoPage() {
  return (
    <div className='p-12'>
      <div className="w-full">
        <h1 className='text-6xl font-bold text-gray-800 m-4 pb-4 font-sans text-center'>Dive Into the quality Products</h1>
        <AspectRatio ratio={22 / 9}>
          <img
            src="https://images.pexels.com/photos/7130535/pexels-photo-7130535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div className="mt-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Elevate Your Culinary Experience
        </h2>
        <p className="text-lg text-gray-600">
          Discover our premium collection of crockery and kitchenware that blends style with functionality. Perfect for every kitchen, our products are designed to make every meal an extraordinary experience.
        </p>
        <Button variant="default" className="px-6 py-3 rounded-lg text-white bg-orange-500 hover:bg-orange-600">
          Shop Now
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">Quality Craftsmanship</h3>
          <p className="mt-2 text-gray-600">
            Our products are crafted with the finest materials to ensure durability and elegance in your kitchen.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">Stylish Designs</h3>
          <p className="mt-2 text-gray-600">
            Explore our wide range of designs that cater to every taste, from modern minimalism to classic elegance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">Customer Satisfaction</h3>
          <p className="mt-2 text-gray-600">
            Rated 5 stars by our customers, we are committed to providing the best shopping experience and quality products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
