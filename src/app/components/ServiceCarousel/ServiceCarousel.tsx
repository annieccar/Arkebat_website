import React from "react";
import ServiceCard from "./ServiceCard";
import services from "../../../services.json";
import Carousel from "./Carousel";

function ServiceCarousel() {
  return (
    <Carousel>
      {services.map((service, index) => (
        <div
          className="flex-none flex items-center justify-center sm:basis-1/3 basis-full overflow-hidden pl-8"
          key={index}
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </Carousel>
  );
}

export default ServiceCarousel;
