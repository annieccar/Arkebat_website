import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-background">
      <div className="flex text-title mt-10 justify-center">
        <FaFacebook size={24} className="mr-3 ml-3" />
        <FaInstagram size={24} className="mr-3 ml-3" />
        <FaLinkedin size={24} className="mr-3 ml-3" />
      </div>
      <div className="flex text-gray text-xs gap-4 justify-center mt-6 mb-4 mr-2 ml-2 text-center">
        <p className="w-fit">© 2024 Arkébat</p>
        <Link href={"/mentions"} className="w-fit">
          Mentions légales
        </Link>
        <Link href={"/cgv"} className="w-fit">
          CGV
        </Link>
        <Link href={"/cookies"} className="w-fit">
          Cookies
        </Link>
      </div>
    </footer>
  );
}
