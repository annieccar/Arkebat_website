import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from "react";
import Slider from "react-slick";

import photoEnduits from "../../../public/Photos/Home/enduit1.jpg";

const services = [
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
  { name: "Enduits", photo: photoEnduits, alt: "Une maison en pierre" },
];

const ServiceCarouselMobile = () => {
  const settings = {
    dots: true,
    className: "center",
    speed: 500,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // customPaging: (i) => <div className="w-3 h-3 bg-white rounded-full" />,
  };
  return (
    <div className="w-5/6">
      <Slider {...settings}>
        {services.map((service, i) => (
          <div key={service.name} className=" relative w-1/3 flex-none">
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
      </Slider>
    </div>
  );
};

export default ServiceCarouselMobile;
