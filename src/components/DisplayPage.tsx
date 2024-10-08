import React from 'react';
import Image from 'next/image';

function DisplayPage() {
  return (
    <div className='p-5'>
      <section
        className="relative w-full py-20 md:p-24 lg:p-32 overflow-hidden rounded-2xl"
        style={{
          backgroundImage: 'url(/back5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-20"></div>
        <div className="relative z-20 container grid max-w-5xl items-center justify-center gap-6 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3 font-bold">
              <h1 className="text-5xl font-bold tracking-tighter lg:text-7xl">
                Discover the Art of Culinary Delight
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                Explore a world of flavors, where every dish is a masterpiece and every bite a symphony of taste.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-16">
            <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-xl">
              <Image
                src="/image1.jpg"
                alt="Culinary Dish"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-lg mt-16">
              <Image
                src="/image2.jpg"
                alt="Culinary Dish"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-lg">
              <Image
                src="/image3.jpg"
                alt="Culinary Dish"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-lg mt-16">
              <Image
                src="/image4.jpg"
                alt="Culinary Dish"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DisplayPage;
