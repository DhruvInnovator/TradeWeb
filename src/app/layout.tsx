import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rashitrading.com"),
  title: "Rashi-Trading-Co",
  description:
    "Welcome to Rashi Trading Co., your trusted partner in quality trade and distribution. We specialize in providing top-notch products with exceptional service, catering to a wide range of industries. Our commitment is to ensure seamless transactions and timely deliveries, fostering long-term relationships with our valued clients.",
  authors: {
    name: "Rashi Trading Co.",
  },
  openGraph: {
    title: {
      default: "Rashi Trading Co.",
      template: "%s | Rashi Trading Co.",
    },
    description: "Discover the excellence of trading with Rashi Trading Co.",
    images: [
      {
        url: "https://rashitrading.com/logo.jpg", // Replace with the correct image URL
      },
    ],
    url: "https://rashitrading.com/",
    siteName: "Rashi Trading Co.",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: { apple: "/logo.jpg" }, // Replace with the correct image URL
  keywords: [
    "rashi trading co",
    "trading company",
    "trade and distribution",
    "quality products",
    "industry solutions",
    "rashi trading",
    "distribution services",
    "rashi trading business",
    "rashi trading commerce",
    "rashi trading supply chain",
    "rashi trading logistics",
    "rashi trading wholesale",
    "rashi trading supply",
    "rashi trading excellence",
    "rashi trading customer service",
    "rashi trading industry",
    "rashi trading partnerships",
    "rashi trading trade partner",
    "rashi trading co website",
    "rashi trading co services",
    "rashi trading co portfolio",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
