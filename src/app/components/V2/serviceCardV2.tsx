import React from "react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  photo: string;
  alt: string;
  href: string;
};

function ServiceCardV2({ service }: { service: Service }) {
  return (
    <div className="w-full h-full overflow-hidden group rounded-md hover:shadow-md">
      <div
        key={service.name}
        className="w-full aspect-[4/3] relative overflow-hidden"
      >
        <Image
          src={service.photo}
          alt={service.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width:768px) 100vw, 33vw"
          className="group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
      </div>
      <div className="w-full p-5 bg-white ">
        <h1 className="font-text text-xl font-bold text-green transition-all duration-300 ease-in-out">
          {service.name}
        </h1>
        <Link href={service.href}>
          <div className="text-green">Voir plus</div>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCardV2;
