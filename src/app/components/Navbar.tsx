"use client";

import Image from "next/image";

import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isBgTransparent = scrolled <= 20 && isHomePage;

  const updatePosition = () => {
    setScrolled(window.scrollY);
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <header className="w-full">
      <nav
        className={`hover:bg-almost_black w-full p-2 h-20 text-title flex md:justify-center fixed top-0 z-30 transition-all duration-200 ease-in-out ${
          isBgTransparent
            ? "bg-transparent"
            : "bg-almost_black/20 backdrop-blur-lg"
        }`}
      >
        <div className="flex w-full h-full justify-between items-center md:mx-2">
          <Link href="/">
            <div className="flex items-center gap-4 h-full w-full">
              <div className="h-12 md:h-16">
                <Image
                  src="/ARKEBAT-blanc.png"
                  alt="Arkébat logo"
                  width={480}
                  height={600}
                  className="h-full w-auto"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="font-logo text-xl font-semibold translate-y-1">
                  ARKEBAT
                </div>
                <div className="font-text text-sm font-normal mt-1">
                  Pays Basque et Sud Landes
                </div>
              </div>
            </div>
          </Link>

          <Menu />
        </div>
      </nav>
    </header>
  );
}
