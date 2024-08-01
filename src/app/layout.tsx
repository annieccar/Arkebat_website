import type { Metadata } from "next";
import { Inter, Josefin_Sans, Overpass } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-Inter" });
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-Josefin",
});
const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-Overpass",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
      <body>
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}