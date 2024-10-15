import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row-reverse lg:justify-between items-center w-screen lg:w-5/6  lg:py-20 lg:px-10">
      <div className="flex text-title mt-10 lg:my-0 justify-center">
        <FaFacebook size={24} className="mx-3" />
        <FaInstagram size={24} className="mx-3" />
        <FaLinkedin size={24} className="mx-3" />
      </div>
      <div className="flex text-gray md:w-3/4 text-xs md:text-sm lg:text-base lg:justify-start lg:gap-4 justify-around mt-6 mb-4 lg:my-0 text-center w-full">
        <p className="px-2">© 2024 Arkébat</p>
        <Link href={"/mentions"} className="px-2">
          Mentions légales
        </Link>
        <Link href={"/cgv"} className="px-2">
          CGV
        </Link>
        <Link href={"/cookies"} className="px-2">
          Cookies
        </Link>
      </div>
    </footer>
  );
}
