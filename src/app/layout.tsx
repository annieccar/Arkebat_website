import type { Metadata } from "next";
import { Inter, Josefin_Sans, Overpass } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-Inter" });
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-Josefin",
});
const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-Overpass",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${josefin_sans.variable} ${overpass.variable}`}
    >
      <body className="min-h-screen flex flex-col items-center bg-background">
        <Navbar />
        <main className="grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
