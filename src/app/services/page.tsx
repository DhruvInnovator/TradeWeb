"use-client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { url } from "inspector";

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundImage: 'url(/backg.jpg)' }}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Business Potential
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our comprehensive suite of services is designed to help your business thrive. From strategy to
                  execution, we&#39;ve got you covered.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </div>
            <Image
              src="/service.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a wide range of services to help your business succeed. From strategy to execution, we&#39;ve got
                you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-primary p-4">
                <PocketKnifeIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Culinary Services</h3>
              <p className="text-muted-foreground">
                Our experienced chefs and culinary experts will help you create delicious and memorable dining
                experiences.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-primary p-4">
                <GiftIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Gift Shop</h3>
              <p className="text-muted-foreground">
                Discover a curated selection of unique and thoughtful gifts for any occasion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-primary p-4">
                <PinIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Cookware</h3>
              <p className="text-muted-foreground">
                Browse our selection of high-quality cookware to elevate your culinary experience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-primary p-4">
                <UtensilsIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Kitchenware</h3>
              <p className="text-muted-foreground">
                Discover essential kitchen tools and gadgets to make cooking and baking a breeze.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to learn how our services can help your business thrive.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2">
              <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
              <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
              <Textarea placeholder="Message" className="max-w-lg flex-1" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function CookieIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </svg>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <line x1="12" x2="12" y1="8" y2="21" />
      <path d="M9 8V7a3 3 0 1 1 6 0v1" />
      <path d="M21 8h-6a3 3 0 0 0-6 0H3" />
    </svg>
  );
}

function PinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11V2H7" />
      <path d="M7 11l7 7 3-3-7-7" />
      <path d="M14 6l7 7-3 3-7-7" />
      <path d="M3 21h7" />
    </svg>
  );
}

function PocketKnifeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3h4v4h-4z" />
      <path d="M9.5 3h-4v4h4z" />
      <path d="M17 17l-5 5-5-5H1v-6h16z" />
      <path d="M15.5 9l-3-3-3 3" />
      <path d="M9 17v-4a3 3 0 1 1 6 0v4" />
    </svg>
  );
}

function UtensilsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3h4" />
      <path d="M6 7V3" />
      <path d="M4 21h4V10H4z" />
      <path d="M10 14h2" />
      <path d="M10 21h2V10h-2" />
      <path d="M14 10h7v7" />
      <path d="M14 14h2v7" />
      <path d="M18 14h2v7" />
      <path d="M18 10V7" />
      <path d="M15 10V7" />
    </svg>
  );
}
