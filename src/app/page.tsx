"use client";

import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import MainPhoto from "../../public/Photos/maison_pierre.jpg";
import enduitChanvre from "../../public/Photos/ensuitChanvre.jpg";
import Piscine from "../../public/Photos/piscine.jpg";
import EnduitPierre from "../../public/Photos/enduitPierre.jpg";
import ServiceCarousel from "./components/ServiceCarousel";

import Button from "./components/Button";
import { useEffect, useState } from "react";

export default function Home() {
  let [firstImageIndex, setFirstImageIndex] = useState(0);
  let [secondImageIndex, setSecondImageIndex] = useState(0);

  const photos1 = [
    { src: MainPhoto, alt: "Maison en pierre" },
    {
      src: enduitChanvre,
      alt: "Enduit en chanvre",
    },
  ];

  const photos2 = [
    { src: Piscine, alt: "Maison en pierre" },
    {
      src: EnduitPierre,
      alt: "Enduit en chanvre",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstImageIndex((prevIndex) => {
        if (prevIndex < photos1.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 4000);

    const timeout = setTimeout(() => {
      const interval2 = setInterval(() => {
        setSecondImageIndex((prevIndex) => {
          if (prevIndex < photos2.length - 1) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 4000);
      return () => clearInterval(interval2);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-background w-full text-white flex flex-col items-center">
      <section className="w-full flex flex-col items-center">
        <div
          className="w-full h-screen z-10
       relative flex flex-col items-center justify-center"
        >
          <div className="w-full flex flex-col md:flex-row h-screen">
            <div className="relative w-full h-1/2 md:h-full md:w-1/2">
              <Image
                src={photos1[firstImageIndex].src}
                alt={photos1[firstImageIndex].alt}
                objectFit="cover"
                fill={true}
              />
            </div>
            <div className="relative w-full h-1/2 md:h-full md:w-1/2">
              <Image
                src={photos2[secondImageIndex].src}
                alt={photos2[secondImageIndex].alt}
                objectFit="cover"
                fill={true}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-background bg-opacity-30"></div>

          <div className="z-10 absolute ">
            <h1 className="text-center text-4xl lg:text-5xl 2xl:text-6xl font-semibold">
              Entreprise générale du bâtiment
            </h1>
            <h2 className="text-center text-2xl lg:text-3xl 2xl:text-4xl font-title font-normal mt-10">
              Gros Oeuvre et Eco Construction
            </h2>
          </div>
        </div>

        <p className="w-full px-3 text-center mt-4 text-md">
          Arkebat est une entreprise générale de{" "}
          <span className="font-bold text-icon">maçonnerie</span> dédiée à
          l'éco-construction. Nos artisans maçons sont spécialisés dans
          l'utilisation de matériaux{" "}
          <span className="font-bold text-icon">écologiques</span> et de
          techniques de construction{" "}
          <span className="font-bold text-icon">durables</span>. <br></br>Nous
          proposons une large gamme de service, allant de la construction de
          maisons individuelles, création d’extension, à la rénovation totale de
          bâtiments existants.
        </p>
        <p className="w-full px-3 text-center mt-4 text-md">
          Nous prenons en charge les travaux essentiels à la{" "}
          <span className="font-bold text-icon">solidité</span> et à la
          <span className="font-bold text-icon"> durabilité</span> des
          structures : Terrassement, fondation, maçonnerie, charpente ainsi que
          les ravalement de façade et création d’assainissement.<br></br>Notre
          démarche est aussi axée sur le{" "}
          <span className="font-bold text-icon">conseil </span>
          et l'accompagnement, vous amenant à intégrer des solutions durable et
          responsable.<br></br> Nos chantiers sont livrés dans le respect des
          délais et des budgets préalablement définis.
        </p>
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <h1 className="w-4/5 text-center text-3xl">Nos Services</h1>
        <ServiceCarousel />
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <Button />
        <div className="w-fit px-2 mt-6">
          <div className="flex text-icon items-center mt-3">
            <MdAlternateEmail size={24} />
            <p className="text-sm ml-2">arkebat.renovation@gmail.com</p>
          </div>
          <div className="flex text-icon items-center mt-3">
            <FiPhoneCall size={24} />
            <div className="text-sm ml-2">
              <p>06 10 69 63 83 / 06 84 59 05 96</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3">Lundi - Vendredi - 8h - 18h</p>
      </section>
    </div>
  );
}
