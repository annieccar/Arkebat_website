import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import React, { useRef } from "react";
import Slider from "react-slick";

import Enduits from "../../../public/Photos/Services/enduits.jpg";
import Assainissement from "../../../public/Photos/Services/assainissement.jpg";
import Charpente from "../../../public/Photos/Services/charpente.jpg";
import ChauxChanvre from "../../../public/Photos/Services/chaux-chanvre.jpg";
import Eco from "../../../public/Photos/Services/eco.jpg";
import Maconnerie from "../../../public/Photos/Services/maconnerie.jpg";

const ServiceCarousel = () => {
  const services = [
    { name: "Enduits", photo: Enduits, alt: "Une maison en pierre" },
    {
      name: "Maçonnerie Gros Oeuvre",
      photo: Maconnerie,
      alt: "Une maison en pierre",
    },
    { name: "Eco Construction", photo: Eco, alt: "Une maison en pierre" },
    { name: "Charpente", photo: Charpente, alt: "Une maison en pierre" },
    { name: "Chaux Chanvre", photo: ChauxChanvre, alt: "Une maison en pierre" },
    {
      name: "Terrassement Assainissement",
      photo: Assainissement,
      alt: "Une maison en pierre",
    },
  ];

  return (
    <Splide
      className="w-5/6"
      hasTrack={false}
      options={{
        perPage: 3,
        perMove: 1,
        rewind: false,
        height: "20rem",
        gap: "1rem",
        arrows: true,
        easing: "ease-in",
        breakpoints: {
          768: {
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
            resetProgress: false,
            arrows: false,
          },
        },
      }}
    >
      <SplideTrack className="w-full h-80 lg:h-96">
        {services.map((service) => {
          return (
            <SplideSlide key={service.name} className="h-full">
              <div
                key={service.name}
                className="w-full h-80 lg:h-96 relative overflow-hidden"
              >
                <Image
                  src={service.photo}
                  alt={service.alt}
                  placeholder="blur"
                  fill
                  objectFit="cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-background bg-opacity-25"></div>
                <h1 className="z-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl font-light text-center">
                  {service.name}
                </h1>
              </div>
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
};

export default ServiceCarousel;
