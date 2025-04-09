import React from "react";
import ServiceCard from "./ServiceCard";
import projects from "../../../projets.json";
import Carousel from "./Carousel";
import { ProjectCardV2 } from "./ProjectCardV2";

function ServiceCarousel() {
  return (
    <Carousel>
      {projects.map((projet, index) => (
        <div
          className="flex-none flex items-center justify-center lg:basis-1/3 basis-full md:basis-1/2 overflow-hidden "
          key={index}
        >
          <ProjectCardV2 index={index} projet={projet} />
        </div>
      ))}
    </Carousel>
  );
}

export default ServiceCarousel;
