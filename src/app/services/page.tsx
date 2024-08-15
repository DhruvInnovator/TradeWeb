"use client";

import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import Image from 'next/image';

function Page() {
  return (
    <div className='p-4'>
      <section className="relative w-full py-12 md:py-24 lg:py-32 rounded-2xl bg-slate-300 bg-cover overflow-hidden" >
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 p-2">
              <div className="inline-block rounded-lg bg-primary p-3 text-sm">Our Products</div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-7xl">Elevate Your Cooking Experience...</h2>
              <p className="max-w-[900px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our range of high-quality kitchenware designed to make cooking more enjoyable and efficient.
              </p>
            </div>
          </div>
          
          {/* Glassmorphism Container */}
          <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-2 md:divide-x md:divide-y-0 bg-white bg-opacity-5 backdrop-blur-md shadow-lg p-6 md:p-10">
            <div className="grid gap-1 p-8 md:p-10">
              <Image
                src="back4.jpg"
                alt="Cookware"
                width={300}
                height={200}
                className="rounded-lg mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold">Cookware</h3>
              <p className="text-muted-foreground">
                Our premium cookware sets are designed for durability and performance, making them perfect for both novice and professional chefs.
              </p>
            </div>
            <div className="grid gap-1 p-8 md:p-10">
              <Image
                src="image4.jpg"
                alt="Cutlery"
                width={300}
                height={200}
                className="rounded-lg mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold">Cutlery</h3>
              <p className="text-muted-foreground">
                Our collection of cutlery features precision blades and ergonomic handles to enhance your cooking and dining experience.
              </p>
            </div>
            <div className="grid gap-1 p-8 md:p-10">
              <Image
                src="image3.jpg"
                alt="Kitchen Tools"
                width={300}
                height={200}
                className="rounded-lg mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold">Kitchen Tools</h3>
              <p className="text-muted-foreground">
                From spatulas to tongs, our kitchen tools are crafted to provide comfort and ease, making every cooking task a breeze.
              </p>
            </div>
            <div className="grid gap-1 p-8 md:p-10">
              <Image
                src="image2.jpg"
                alt="Bakeware"
                width={300}
                height={200}
                className="rounded-lg mb-4"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold">Bakeware</h3>
              <p className="text-muted-foreground">
                Our bakeware collection includes everything you need to create delicious baked goods with ease, from cake pans to cookie sheets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
