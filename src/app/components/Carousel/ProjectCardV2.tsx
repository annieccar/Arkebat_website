"use client";

import React, { useState } from "react";
import Image from "next/image";
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

export const ProjectCardV2 = (props: ProjectCardDesktopProps) => {
  const { index, projet } = props;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      key={index}
      className="w-full aspect-square relative rounded-md overflow-hidden "
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={projet.img2}
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
        src={projet.img1}
        style={{
          objectFit: "cover",
          opacity: hoveredIndex === index ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        alt={projet.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
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
