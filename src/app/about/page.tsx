import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="flex flex-col items-start justify-center space-y-6 flex-1">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Meet the Visionary Behind Our Success
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Discover the inspiring journey of our founder, whose passion and leadership drive our business forward.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Nishant Srivastav</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Nishant Srivastav is the dynamic founder and CEO of Rashi Trading Company. With over five years of 
                    industry experience, he brings a deep-seated passion for innovation, a commitment to excellence, and an 
                    unwavering dedication to delivering exceptional products and services. 
                    <br />
                    <br />
                    Prior to founding Rashi Trading Company, Nishant held pivotal leadership roles at top-tier technology 
                    companies. During this time, he refined his expertise in product development, marketing, and strategic 
                    business planning. His entrepreneurial spirit, combined with a vision to transform the technological landscape, 
                    led him to establish Rashi Trading Company—a venture aimed at revolutionizing customer interaction with 
                    cutting-edge solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Notable Achievements & Prestigious Awards</h2>
                  <ul className="space-y-2 text-muted-foreground md:text-lg">
                    <li>
                      <span className="font-semibold">Entrepreneur of the Year (2020)</span> - Honored by the local Chamber 
                      of Commerce for outstanding entrepreneurial achievement.
                    </li>
                    <li>
                      <span className="font-semibold">Top 40 Under 40 (2018)</span> - Featured by a leading industry 
                      publication as one of the most influential young leaders.
                    </li>
                    <li>
                      <span className="font-semibold">Innovative Product of the Year (2021)</span> - Awarded for Rashi Trading 
                      Company’s groundbreaking flagship product, recognized for its innovation and impact.
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                <Button>Contact Me</Button>
              </Link>
            </div>
            <div className="flex justify-center w-full lg:w-1/2">
              <Image
                src="/owner2.jpg" // Replace with actual image path
                alt="Nishant Srivastav"
                width={500}
                height={500}
                className="rounded-xl object-cover"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
