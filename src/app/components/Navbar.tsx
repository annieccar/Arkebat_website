import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="bg-background w-full h-20 flex md:justify-center relative">
      <div className="text-title flex w-full md:w-5/6 lg:w-4/5 h-full justify-between items-center mx-3">
        <div className="flex items-center gap-2 h-full">
          <Image src={logo} alt="Arkébat logo" height={60} />
          <div className="font-logo text-title text-lg font-semibold translate-y-1">
            ARKEBAT
          </div>
        </div>
        <Menu />
      </div>
    </nav>
  );
}
