"use client";

import Image from "next/image";

import React, { useState, useEffect } from "react";
import logo from "../../../public/logo.png";
import Menu from "./Menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(0);

  const updatePosition = () => {
    setScrolled(window.scrollY);
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    console.log(scrolled);
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${
          scrolled >= 20 ? "bg-background" : "bg-none"
        } hover:bg-background w-full py-2 h-20 text-title flex md:justify-center fixed top-0 z-30 transition-all duration-200 ease-in-out`}
      >
        <div className="flex w-full h-full justify-between items-center mx-5">
          <div className="flex items-center gap-2 h-full w-full">
            <Image src={logo} alt="Arkébat logo" height={60} />
            <div className="flex flex-col items-start my-1">
              <div className="font-logo text-xl font-semibold translate-y-1">
                ARKEBAT
              </div>
              <div className="font-text text-sm font-normal mt-1">
                Pays Basque et Sud Landes
              </div>
            </div>
          </div>

          <Menu />
        </div>
      </nav>
    </header>
  );
}
