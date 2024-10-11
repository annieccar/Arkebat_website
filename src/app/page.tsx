"use client";

import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import BriqueChanvre from "../../public/Photos/Home/brique_chanvre.jpg";
import Enduit1 from "../../public/Photos/Home/enduit1.jpg";
import Extension from "../../public/Photos/Home/extension.jpg";
import JointPierre from "../../public/Photos/Home/joint_pierre.jpg";
import Maconnerie from "../../public/Photos/Home/maconnerie.jpg";
import Piscine from "../../public/Photos/Home/Piscine.jpg";

import Button from "./components/Button";
import { useEffect, useState } from "react";

import ServiceCarousel from "./components/ServiceCarousel";

export default function Home() {
  let [firstImageIndex, setFirstImageIndex] = useState(0);
  let [secondImageIndex, setSecondImageIndex] = useState(0);

  const photos1 = [
    { src: JointPierre, alt: "Maison en pierre" },
    {
      src: Enduit1,
      alt: "Enduit en chanvre",
    },
    {
      src: BriqueChanvre,
      alt: "Brique de chanvre",
    },
  ];

  const photos2 = [
    { src: Piscine, alt: "Piscine maconnée" },
    {
      src: Extension,
      alt: "Extension de maison",
    },
    {
      src: Maconnerie,
      alt: "Nouvelle",
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
  }, [photos1.length, photos2.length]);

  return (
    <div className="bg-background w-full text-white flex flex-col items-center">
      <section className="w-full flex flex-col items-center">
        <div
          className="w-full h-screen z-10
       relative flex flex-col items-center justify-center mb-10"
        >
          <div className="w-full flex flex-col md:flex-row h-screen">
            <div className="relative w-full h-1/2 md:h-full md:w-1/2 transition-opacity duration-1000 ">
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

          <div className="z-10 absolute flex flex-col gap-3 w-5/6">
            <h1 className="text-center text-5xl lg:text-5xl 2xl:text-6xl font-medium">
              Entreprise générale du bâtiment
            </h1>
            <h2 className="text-center text-3xl lg:text-3xl 2xl:text-4xl font-title font-light">
              Gros Oeuvre et Eco Construction
            </h2>
          </div>
        </div>

        <p className="w-full px-5 text-center mt-4 text-md md:w-5/6 lg:text-xl">
          Arkebat est une entreprise générale de{" "}
          <span className="font-bold text-icon">maçonnerie</span> dédiée à
          l&apos;éco-construction. Nos artisans maçons sont spécialisés dans
          l&apos;utilisation de matériaux{" "}
          <span className="font-bold text-icon">écologiques</span> et de
          techniques de construction{" "}
          <span className="font-bold text-icon">durables</span>.<br></br>{" "}
          <br></br>Nous proposons une large gamme de service, allant de la
          construction de maisons individuelles, création d&apos;extension, à la
          rénovation totale de bâtiments existants.
        </p>
        <p className="w-full px-3 text-center mt-4 text-md hidden md:block md:w-3/4 lg:text-xl ">
          Nous prenons en charge les travaux essentiels à la{" "}
          <span className="font-bold text-icon">solidité</span> et à la
          <span className="font-bold text-icon"> durabilité</span> des
          structures: Terrassement, fondation, maçonnerie, charpente ainsi que
          les ravalement de façade et création d&apos;assainissement. Notre
          démarche, axée sur le{" "}
          <span className="font-bold text-icon">conseil </span>
          et l&apos;accompagnement, vous guide dans l&apos;intégration de
          solutions durables et responsables.
        </p>
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <h1 className="w-4/5 text-center text-3xl mb-5">Prestations</h1>
        <ServiceCarousel />
      </section>
      <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center mt-10 md:mt-20 lg:hidden">
        <div className="w-fit px-2 mt-6 md:mt-0">
          <div className="flex text-icon items-center mt-3 md:mt-0">
            <MdAlternateEmail size={24} />
            <p className="text-sm ml-2">arkebat.renovation@gmail.com</p>
          </div>
          <div className="flex text-icon items-center mt-3">
            <FiPhoneCall size={24} />
            <div className="text-sm ml-2 flex">
              <p>06 10 69 63 83</p>
              <p>&nbsp;/&nbsp;</p>
              <p> 06 84 59 05 96</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3 ">Lundi - Vendredi - 8h - 18h</p>
        <Button />
      </section>
      <section className="xl:w-5/6 flex flex-col md:flex-row md:justify-around md:w-full items-center mt-24 max-[1023px]:hidden">
        <div className="flex text-icon items-center ">
          <MdAlternateEmail size={30} />
          <p className="text-lg xl:text-xl ml-2">
            arkebat.renovation@gmail.com
          </p>
        </div>
        <div className="flex text-icon items-center">
          <FiPhoneCall size={30} />
          <div className="text-lg xl:text-xl ml-3 flex flex-col">
            <p>06 10 69 63 83</p>
            <p> 06 84 59 05 96</p>
          </div>
        </div>
        <p className="text-lg xl:text-xl ml-2 ">Lundi - Vendredi - 8h - 18h</p>
        <Button />
      </section>
    </div>
  );
}
