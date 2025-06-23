import type { Metadata } from "next";
import {
  Inter,
  Josefin_Sans,
  Overpass,
  Montserrat,
  ABeeZee,
} from "next/font/google";
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
const abeezee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-Abeezee",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-Montserrat",
});

export const metadata: Metadata = {
  title: "Arkébat",
  description: "Arkébat, entreprise de maçonnerie du pays basque",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${josefin_sans.variable} ${overpass.variable} ${abeezee.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col items-center bg-background">
        <Navbar />
        <main className="grow w-full flex flex-col items-center mb-10 lg:mb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
