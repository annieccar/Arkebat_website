import React from "react";
import Image from "next/image";

type Service = {};

function ServiceCard({ service }) {
  return (
    <div
      key={service.name}
      className="w-full aspect-square relative overflow-hidden"
    >
      <Image
        src={service.photo}
        alt={service.alt}
        fill
        objectFit="cover"
        sizes="(max-width:768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-background bg-opacity-25"></div>
      <h1 className="z-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl font-light text-center">
        {service.name}
      </h1>
    </div>
  );
}

export default ServiceCard;
