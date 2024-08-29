"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  HomeIcon,
  ShoppingCartIcon,
  BoxIcon,
  InfoIcon,
  PhoneIcon,
  MenuIcon,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function MobMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    {
      href: "/services",
      label: "Services",
      icon: <ShoppingCartIcon className="w-5 h-5" />,
    },
    {
      href: "/products",
      label: "Products",
      icon: <BoxIcon className="w-5 h-5" />,
    },
    {
      href: "/about",
      label: "About",
      icon: <InfoIcon className="w-5 h-5" />,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <PhoneIcon className="w-5 h-5" />,
    },
  ];

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      {/* Mobile Menu Toggle Button */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={handleOpen}
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent
        className={`fixed top-0 right-0 h-full w-3/5 bg-white backdrop-blur-lg shadow-lg border border-gray-200 z-50 p-6 sm:p-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <nav className="flex flex-col text-lg font-medium gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0 transition-colors duration-200 ease-in-out"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Badge at the Bottom */}
          <div className="mt-auto text-center text-sm text-gray-500">
            <p className="py-2 border-t border-gray-300">
              Developed by <span className="font-semibold text-gray-800">DhruvNegi</span>
            </p>
            <Button
              variant="outline"
              className="w-full mt-6"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </SheetContent>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ease-in-out"
          onClick={handleClose}
        ></div>
      )}
    </Sheet>
  );
}
