import React from "react";
import Image from "next/image";
import photoEnduits from "../../../public/Photos/Home/enduit1.jpg";

const services = [
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
];

const ServiceCarousel = () => {
  return (
    <div className="flex bg-background w-4/6 h-96 p-4 overflow-hidden">
      <div className="h-full flex gap-x-4">
        {services.map((service, i) => (
          <div className=" relative w-1/3 flex-none">
            <Image
              src={service.photo}
              className="object-cover object-center h-full w-full "
              alt={service.alt}
            />
            <div className="absolute inset-0 bg-background bg-opacity-25"></div>
            <h1 className="z-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl">
              {service.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
