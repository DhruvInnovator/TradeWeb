"use client";

import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from "next/link"
import React from 'react';

function Page() {
  return (
    <div className="w-full p-4 rounded-2xl">
      <section className="bg-gray-200 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
              Discover Our Diverse Product Offerings
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Explore our wide range of high-quality products across various categories to find the perfect fit for your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View {product.name}</span>
              </Link>
              <img
                src={product.imageSrc}
                alt={product.alt}
                width={450}
                height={300}
                className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "450/300", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
                {product.price && (
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Button size="sm"><ShoppingCart /></Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Featured Products</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Check out our top-selling and most popular products across various categories.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Link href="#" className="absolute inset-0 z-10">
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  src={product.imageSrc}
                  alt={product.alt}
                  width={450}
                  height={300}
                  className="h-64 w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ aspectRatio: "450/300", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-muted-foreground">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Button size="sm"><ShoppingCart /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Example product data arrays
interface Product {
  name: string;
  imageSrc: string;
  alt: string;
  description: string;
  price?: string;
}

const products: Product[] = [
  {
    name: "Ladies Purse",
    imageSrc: "/bag.webp",
    alt: "Clothing",
    description: "Discover our stylish and high-quality clothing options.",
  },
  {
    name: "Gift Items",
    imageSrc: "/gift.png",
    alt: "Electronics",
    description: "Explore our cutting-edge electronic devices and accessories.",
  },
  {
    name: "Crockery Set",
    imageSrc: "/crockery1.png",
    alt: "Home & Garden",
    description: "Enhance your living space with our home and garden products.",
  },
  {
    name: "Kitchenware",
    imageSrc: "/kitcenare.png",
    alt: "Accessories",
    description: "Explore our wide range of stylish and functional accessories.",
  },
];

const featuredProducts = [
  {
    name: "Coustemizable cup",
    imageSrc: "/placeholder.svg",
    alt: "Product 1",
    description: "A high-quality product that meets your needs.",
    price: "$49.99",
  },
  {
    name: "Crockery Set",
    imageSrc: "/placeholder.svg",
    alt: "Product 2",
    description: "A versatile product that fits your lifestyle.",
    price: "$29.99",
  },
  {
    name: "Women's Bag",
    imageSrc: "/placeholder.svg",
    alt: "Product 3",
    description: "A durable product that will last you for years.",
    price: "$79.99",
  },
  {
    name: "Surprise gift",
    imageSrc: "/placeholder.svg",
    alt: "Product 4",
    description: "A premium product that will exceed your expectations.",
    price: "$99.99",
  },
];

export default Page;
