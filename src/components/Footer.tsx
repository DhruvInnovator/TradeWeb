import { HandPlatterIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2">
            <HandPlatterIcon className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">Crockery Co.</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Discover the finest handcrafted crockery for your home. Elevate your dining experience with our curated
            collection.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Quick Links</h3>
          <Link href="#" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
          <Link href="/products" className="text-sm hover:underline">
            Products
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Categories</h3>
          
            <Link href="/products" className="text-sm hover:underline">
              Plates
            </Link>
            <Link href="/products" className="text-sm hover:underline">
              Bowls
            </Link>
            <Link href="/products" className="text-sm hover:underline">
              Mugs
            </Link>
            <Link href="/products" className="text-sm hover:underline">
              Cutlery
            </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-base">Contact</h3>
          <p className="text-sm">
            123 Main Street, Anytown USA
            <br />
            <br />
            info@crockeryco.com
            <br />
            <br />
            +91 88008-66380
          </p>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">&copy; 2024 Crockery Co. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer;

// function HandPlatterIcon(props) {
//   return (
//     <
//     <div
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 3V2" />
//       <path d="M5 10a7.1 7.1 0 0 1 14 0" />
//       <path d="M4 10h16" />
//       <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
//       <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
//       <path d="M5 14v7H2
//     </div>
//   )
// }



