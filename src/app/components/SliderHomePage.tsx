import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import BriqueChanvre from "../../../public/Photos/Home/brique_chanvre.jpg";
import Enduit1 from "../../../public/Photos/Home/enduit1.jpg";
import Extension from "../../../public/Photos/Home/extension.jpg";
import JointPierre from "../../../public/Photos/Home/joint_pierre.jpg";
import Maconnerie from "../../../public/Photos/Home/maconnerie.jpg";
import Piscine from "../../../public/Photos/Home/Piscine.jpg";

function SliderHomePage() {
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
    }, 6000);

    const timeout = setTimeout(() => {
      const interval2 = setInterval(() => {
        setSecondImageIndex((prevIndex) => {
          if (prevIndex < photos2.length - 1) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 6000);
      return () => clearInterval(interval2);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [photos1.length, photos2.length]);

  return (
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
            fill
            sizes="(max-width:768px): 100vw, 50vw"
          />
        </div>
        <div className="relative w-full h-1/2 md:h-full md:w-1/2">
          <Image
            src={photos2[secondImageIndex].src}
            alt={photos2[secondImageIndex].alt}
            objectFit="cover"
            fill
            sizes="(max-width:768px): 100vw, 50vw"
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
  );
}

export default SliderHomePage;
