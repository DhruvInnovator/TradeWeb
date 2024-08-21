import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, ShoppingCartIcon, BoxIcon, InfoIcon, PhoneIcon, MenuIcon, UserIcon } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { UserButton } from '@clerk/nextjs';

export default function MobMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

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
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <nav className="flex flex-col text-lg font-medium gap-6">
            <Link
              href="/"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              Services
            </Link>
            <Link
              href="/products"  
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <BoxIcon className="w-5 h-5" />
              Products
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <InfoIcon className="w-5 h-5" />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-4 text-muted-foreground hover:text-foreground border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <PhoneIcon className="w-5 h-5" />
              Contact
            </Link>
            <UserButton showName />
          </nav>
          <Button variant="outline" className="w-full" onClick={handleClose}>
            Close
          </Button>
        </div>
      </SheetContent>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={handleClose}
        ></div>
      )}
    </Sheet>
  );
}
