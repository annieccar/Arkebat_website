"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsChevronCompactDown } from "react-icons/bs";

import photos from "../../../sliderPhotos.json";
import Link from "next/link";

function CarouselClient() {
  let [firstImageIndex, setFirstImageIndex] = useState(0);
  let [secondImageIndex, setSecondImageIndex] = useState(0);

  const photos1 = photos[0];
  const photos2 = photos[1];

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setFirstImageIndex((prevIndex) => {
        if (prevIndex < photos1.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
      const interval = setInterval(() => {
        setFirstImageIndex((prevIndex) => {
          if (prevIndex < photos1.length - 1) {
            return prevIndex + 1;
          } else {
            return 0;
          }
        });
      }, 6000);
      return () => clearInterval(interval);
    }, 3000);

    const interval2 = setInterval(() => {
      setSecondImageIndex((prevIndex) => {
        if (prevIndex < photos2.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 6000);
    return () => {
      clearInterval(interval2);
      clearTimeout(firstTimeout);
    };
  }, [photos1.length, photos2.length]);

  return (
    <div
      className="w-full h-screen z-10
 relative flex flex-col items-center justify-center mb-10"
    >
      <div className="w-full flex flex-col lg:flex-row h-screen">
        {photos.map((photoArray, arrayIndex) => (
          <div
            key={arrayIndex}
            className="relative w-full h-1/2 lg:h-full lg:w-1/2 transition-opacity ease-in-out duration-1000 "
          >
            {photoArray.map((photo, photoIndex) => (
              <Image
                key={photo.alt}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width:768px): 100vw, 50vw"
                style={{
                  opacity:
                    arrayIndex === 0
                      ? firstImageIndex === photoIndex
                        ? 1
                        : 0
                      : secondImageIndex === photoIndex
                      ? 1
                      : 0,
                  transition: "opacity 1s ease-in-out",
                  position: "absolute",
                  inset: 0,
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        ))}
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
      </div>
      <div className="z-10 absolute flex flex-col gap-6 lg:gap-10 w-5/6 ">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium">
          Entreprise générale du bâtiment
        </h1>
        <h2 className="text-center text-lg md:text-xl 2xl:text-3xl font-text  uppercase">
          Gros Oeuvre et Eco Construction
        </h2>
      </div>

      <Link
        href="/#presentation"
        className="z-10 absolute text-title bottom-0 text-xl md:text-2xl font-light flex flex-col items-center"
      >
        <div>Nous découvrir</div>
        <BsChevronCompactDown size={70} className="motion-safe:animate-float" />
      </Link>
    </div>
  );
}

export default CarouselClient;
