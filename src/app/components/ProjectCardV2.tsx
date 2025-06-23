"use client";

import React, { useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel/Carousel";
import { SlLocationPin } from "react-icons/sl";

export type ProjectCardDesktopProps = {
  index: number;
  projet: {
    title: string;
    location: string;
    img1: string;
    img2: string;
    autresPhotos?: string[];
  };
  isVisible?: boolean;
};

export const ProjectCardDesktopV2 = (props: ProjectCardDesktopProps) => {
  const { index, projet } = props;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      key={index}
      className="w-full aspect-[4/3] relative rounded-md overflow-hidden "
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={projet.img1}
        style={{
          objectFit: "cover",
          opacity: hoveredIndex === index ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
        alt={projet.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src={projet.img2}
        style={{
          objectFit: "cover",
          opacity: hoveredIndex === index ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        alt={projet.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="z-10 absolute bottom-0 w-full p-4  justify-between flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <SlLocationPin size={20} className="text-title" />
          <p className="text-title text-sm font-medium">{projet.location}</p>
        </div>
        <h1 className="text-title/80 xl:text-lg text-sm tracking-tight ">
          {projet.title}
        </h1>
      </div>
    </div>
  );
};

export const ProjectCardMobileV2 = (props: ProjectCardDesktopProps) => {
  const { projet } = props;

  const photos = [projet.img1, projet.img2, ...(projet.autresPhotos || [])];

  return (
    <div>
      <div className="z-10 absolute bottom-[40px] left-0 p-4 flex flex-col items-start">
        <div className="flex items-center gap-2 mb-2">
          <SlLocationPin size={20} className="text-title" />
          <p className="text-title text-sm font-medium">{projet.location}</p>
        </div>
        <h1 className="text-title/80 xl:text-lg text-sm tracking-tight ">
          {projet.title}
        </h1>
      </div>
      <Carousel isProjectCarousel={true}>
        {photos.map((photo, index) => (
          <div
            className="flex-none flex items-center justify-center basis-full overflow-hidden rounded-md"
            key={index}
          >
            <div className="w-full aspect-square relative cursor-pointer">
              <Image
                src={photo}
                style={{
                  opacity: 0.75,
                  transition: "opacity 1s ease-in-out",
                  objectFit: "cover",
                }}
                alt={projet.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 z-8 h-1/2 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
