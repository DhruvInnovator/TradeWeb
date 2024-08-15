import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="flex flex-col items-start justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Meet the Owner
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Learn more about the founder and driving force behind our business.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Nishant Srivastava</h2>
                    <p className="text-muted-foreground md:text-lg">
                      Nishant is the founder and CEO of Rashi trading company. With over 5 years of experience in the industry, he
                      has a deep passion for innovation and delivering exceptional products and services to his customers.
                      <br />
                      <br />
                      Prior to starting this business, Nishant held various leadership roles at top technology companies, where he
                      honed his skills in product development, marketing, and business strategy. His entrepreneurial
                      spirit and drive to make a difference led him to create Acme, a company dedicated to revolutionizing
                      the way people interact with technology.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Achievements & Awards</h2>
                    <ul className="space-y-2 text-muted-foreground md:text-lg">
                      <li>
                        <span className="font-semibold">Entrepreneur of the Year</span> - Awarded by the local Chamber of
                        Commerce in 2020
                      </li>
                      <li>
                        <span className="font-semibold">Top 40 Under 40</span> - Recognized by a leading industry
                        publication in 2018
                      </li>
                      <li>
                        <span className="font-semibold">Innovative Product of the Year</span> - Awarded for Acme's
                        flagship product in 2021
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
              <div className="flex justify-center">
                <Image
                  src=""
                  alt="Nishant Srivastava"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover"
                  style={{ aspectRatio: '500/500', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Page;
