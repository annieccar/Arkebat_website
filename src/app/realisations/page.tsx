"use client";

import React, { useEffect, useState } from "react";

import Piscine from "../../../public/Photos/Services/maconnerie.jpg";
import Enduit from "../../../public/Photos/Services/enduits.jpg";
import Image, { StaticImageData } from "next/image";

const Realisations = () => {
  const projets: Projets = [
    {
      title: "Construction d'une piscine maçonnée",
      location: "Saint-Pierre-D'Irube",
      img1: Piscine,
      img2: Enduit,
    },
    {
      title: "Construction d'une piscine maçonnée",
      location: "Saint-Pierre-D'Irube",
      img1: Piscine,
      img2: Enduit,
    },
    {
      title: "Construction d'une piscine maçonnée",
      location: "Saint-Pierre-D'Irube",
      img1: Piscine,
      img2: Enduit,
    },
    {
      title: "Construction d'une piscine maçonnée",
      location: "Saint-Pierre-D'Irube",
      img1: Piscine,
      img2: Enduit,
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileImage, setMobileImage] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileImage((prevIndex) => {
        if (prevIndex === 1) {
          return 2;
        } else {
          return 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(mobileImage);

  type Projets = {
    title: string;
    location: string;
    img1: StaticImageData;
    img2: StaticImageData;
  }[];

  return (
    <div className="mt-28 w-full flex flex-col items-center">
      <h1 className="text-3xl mb-10">Nos réalisations</h1>
      <div className="w-5/6 xl:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center hidden lg:grid ">
        {projets?.map((projet, index) => {
          return (
            <div
              key={index}
              className="w-full h-60 lg:h-72 xl:h-80 relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={hoveredIndex === index ? projet.img2 : projet.img1}
                objectFit="cover"
                alt={projet.title}
                fill
              />
              <div className="absolute inset-0 bg-background bg-opacity-25"></div>
              <div className="z-10 absolute bottom-0 left-0 p-4">
                <h1 className=" text-lg font-normal">{projet.title}</h1>
                <p className="text-title text-sm">{projet.location}</p>
              </div>
              <div className="absolute inset-2 solid border-[1px] border-title border-opacity-60" />
            </div>
          );
        })}
      </div>
      <div className="w-5/6 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center lg:hidden ">
        {projets?.map((projet, index) => {
          return (
            <div
              key={index}
              className="w-full h-60 lg:h-72 xl:h-80 relative cursor-pointer"
            >
              <Image
                src={mobileImage === 2 ? projet.img2 : projet.img1}
                objectFit="cover"
                alt={projet.title}
                fill
              />
              <div className="absolute inset-0 bg-background bg-opacity-25"></div>
              <div className="z-10 absolute bottom-0 left-0 p-4">
                <h1 className=" text-lg font-normal">{projet.title}</h1>
                <p className="text-title text-sm">{projet.location}</p>
              </div>
              <div className="absolute inset-2 solid border-[1px] border-title border-opacity-80" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Realisations;
