import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsBricks, BsHouse } from "react-icons/bs";
import { FaTrowelBricks } from "react-icons/fa6";
import { LuLeaf } from "react-icons/lu";
import { FaHammer } from "react-icons/fa";
import { LuShovel } from "react-icons/lu";
import { PiHouseBold } from "react-icons/pi";

type Service = {
  name: string;
  photo: string;
  alt: string;
  href: string;
  logo: string;
};

function ServiceCardV2({ service }: { service: Service }) {
  function getLogo(logo: string) {
    switch (logo) {
      case "enduit":
        return <FaTrowelBricks size={20} />;
      case "maconnerie":
        return <BsBricks size={20} />;
      case "eco":
        return <LuLeaf size={20} />;
      case "charpente":
        return <FaHammer size={20} />;
      case "chaux":
        return <PiHouseBold size={20} />;
      case "terrassement":
        return <LuShovel size={20} />;
    }
  }

  const logoComponent = getLogo(service.logo);

  return (
    <div className="w-full hover:scale-[1.03] transition-all duration-300 ease-in-out overflow-hidden group rounded-md hover:shadow-md border border-gray/40 ">
      <div
        key={service.name}
        className="w-full h-[250px] xl:h-[300px] relative overflow-hidden"
      >
        <Image
          src={service.photo}
          alt={service.alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
      </div>
      <div className="w-full bg-white h-[130px] relative">
        <div className="text-green bg-gray/80 p-4 w-fit rounded-full left-5 -top-6 absolute z-10">
          {logoComponent}
        </div>
        <div className="p-5 pt-10 flex flex-col h-full gap-2 justify-between">
          <h1 className="font-text text-lg xl:text-xl font-bold text-green transition-all leading-tight duration-300 ease-in-out">
            {service.name}
          </h1>
          <Link href={service.href}>
            <div className=" text-green/70 xl:text-lg 2xl:text-xl  flex items-center gap-3 font-semibold">
              <div>Voir plus</div>
              <HiArrowLongRight size={20} className="translate-y-[1px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardV2;
