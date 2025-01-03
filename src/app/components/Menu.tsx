"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import menu from "../../../public/menu.png";
import expertises from "../../services.json";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  useEffect(() => {
    // Close the menu when clicking outside
    const handleClickOutside = (event: any) => {
      if (
        expertiseOpen &&
        !event.target.closest(".expertise-menu") // Adjust selector to match your menu container
      ) {
        setExpertiseOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expertiseOpen]);

  return (
    <div className="h-full">
      <div className="text-title font-title flex h-full items-center">
        <div className="h-full items-center gap-8 pr-2 text-xl hidden md:flex translate-y-1">
          <Link href="/">Accueil</Link>
          <button
            className="flex text-white items-center gap-1 relative h-full"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
          >
            <div>Prestations</div>
            {!expertiseOpen ? (
              <FaChevronDown size={15} />
            ) : (
              <FaChevronUp size={15} />
            )}
            {expertiseOpen && (
              <>
                <div
                  className="absolute top-full left-0 bg-background w-fit"
                  onClick={() => setExpertiseOpen(false)}
                >
                  {expertises.map((expertise) => (
                    <Link href={expertise.href} key={expertise.name}>
                      <div className="font-title text-nowrap  text-title text-left hover:bg-title hover:text-background  py-3 px-2 text-lg font-normal border-b border-gray/50">
                        {expertise.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </button>

          <Link href="/realisations">Réalisations</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={menu} alt="Mobile menu Icon" className="md:hidden" />
        </div>
      </div>
      {menuOpen ? (
        <div className="absolute top-20 left-0 w-full flex flex-col">
          <div
            className=" bg-background text-text md:hidden z-20"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/">
              <div className="font-title text-title py-3 pl-3 text-lg font-normal border-b border-gray/50">
                ACCUEIL
              </div>
            </Link>
            <div className="font-title text-title py-3 pl-3 text-lg font-normal border-b border-gray/50">
              PRESTATIONS
            </div>
            {expertises.map((expertise) => (
              <Link href={expertise.href} key={expertise.name}>
                <div className="font-title text-title py-3 pl-10 text-lg font-normal border-b border-gray/50">
                  {expertise.name}
                </div>
              </Link>
            ))}

            <Link href="/realisations">
              <div className="font-title text-title py-3 pl-3 text-lg font-normal border-b border-gray/50">
                REALISATIONS
              </div>
            </Link>
            <Link href="/contact">
              <div className="font-title text-title py-3 pl-3 text-lg font-normal border-b border-gray/50">
                CONTACT
              </div>
            </Link>
          </div>
          <div
            className="fixed inset-0 top-20 bg-background/70 z-10"
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
