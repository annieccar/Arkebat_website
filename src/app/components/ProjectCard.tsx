"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ProjectCardDesktopProps = {
  index: number;
  projet: {
    title: string;
    location: string;
    img1: string;
    img2: string;
  };
};

export const ProjectCardDesktop = (props: ProjectCardDesktopProps) => {
  const { index, projet } = props;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      key={index}
      className="w-full h-60 lg:h-72 xl:h-80 relative cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={hoveredIndex === index ? projet.img2 : projet.img1}
        style={{ objectFit: "cover" }}
        alt={projet.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-background bg-opacity-25"></div>
      <div className="z-10 absolute bottom-0 left-0 p-4">
        <h1 className=" text-lg font-normal">{projet.title}</h1>
        <p className="text-title text-sm">{projet.location}</p>
      </div>
      <div className="absolute inset-2 solid border-[1px] border-title border-opacity-60" />
    </div>
  );
};

export const ProjectCardMobile = (props: ProjectCardDesktopProps) => {
  const { index, projet } = props;
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

  return (
    <div
      key={index}
      className="w-full h-60 lg:h-72 xl:h-80 relative cursor-pointer"
    >
      <Image
        src={mobileImage === 2 ? projet.img2 : projet.img1}
        style={{ objectFit: "cover" }}
        alt={projet.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-background bg-opacity-25"></div>
      <div className="z-10 absolute bottom-0 left-0 p-4">
        <h1 className=" text-lg font-normal">{projet.title}</h1>
        <p className="text-title text-sm">{projet.location}</p>
      </div>
      <div className="absolute inset-2 solid border-[1px] border-title border-opacity-80" />
    </div>
  );
};
