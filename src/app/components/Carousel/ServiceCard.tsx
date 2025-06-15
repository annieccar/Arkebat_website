import React from "react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  photo: string;
  alt: string;
  href: string;
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="w-full h-full overflow-hidden group hover:cursor-pointer shadow-md rounded-md"
    >
      <div key={service.name} className="w-full aspect-square relative">
        <Image
          src={service.photo}
          alt={service.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width:768px) 100vw, 33vw"
          className="group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
        <h1 className="z-10 absolute font-text top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl font-light text-center group-hover:-translate-y-[60%] transition-all duration-300 ease-in-out">
          {service.name}
        </h1>
      </div>
    </Link>
  );
}

export default ServiceCard;
