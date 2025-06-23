import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full justify-center flex bg-almost_black">
      <footer className="flex flex-col lg:flex-row-reverse lg:justify-between pb-10 pt-5 lg:pt-10 items-center w-screen lg:w-5/6  lg:py-20 lg:px-10">
        <div className="flex text-white justify-center">
          {/* <FaFacebook size={24} className="mx-3" /> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/arkebat_renovation/"
          >
            <FaInstagram size={24} className="mx-3 hover:text-light_green" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ark%C3%A9bat-r%C3%A9novation-266001304/"
          >
            <FaLinkedin size={24} className="mx-3 hover:text-light_green" />
          </a>
        </div>
        <div className="flex text-white md:w-3/4 text-xs md:text-sm lg:text-base lg:justify-start lg:gap-4 justify-around mt-6 mb-4 lg:my-0 text-center w-full">
          <p className="px-2">© 2024 Arkébat</p>
          <Link
            href={"/mentions_legales"}
            className="px-2 hover:text-light_green "
          >
            Mentions légales
          </Link>
          <Link href={"/cgv"} className="px-2 hover:text-light_green ">
            CGV
          </Link>
        </div>
      </footer>
    </div>
  );
}
