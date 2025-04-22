"use client";

import { useEffect, useRef, useState } from "react";
import projets from "../../projets.json";

import {
  ProjectCardDesktop,
  ProjectCardMobile,
} from "../components/ProjectCard";
import {
  ProjectCardDesktopV2,
  ProjectCardMobileV2,
} from "../components/ProjectCardV2";

const Realisations = () => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navbarHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      let currentVisibleIndex: number = 0;

      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const fullyVisible =
            rect.top >= navbarHeight && rect.bottom <= window.innerHeight;

          if (fullyVisible) {
            currentVisibleIndex = index;
          }
        }
      });

      setVisibleIndex(currentVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" relative mt-28 w-full flex flex-col items-center z-0 my-10">
      <h1 className="text-3xl text-almost_black mb-10">Nos réalisations</h1>
      <div className="w-5/6 max-w-[1024px] xl:max-w-[1200px] grid-cols-2 gap-14 justify-center items-center hidden laptop:grid ">
        {projets?.map((projet, index) => {
          return (
            <ProjectCardDesktopV2 index={index} projet={projet} key={index} />
          );
        })}
      </div>
      <div className="w-5/6 sm:w-2/3 md:w-1/2  flex flex-col gap-10 items-center laptop:hidden ">
        {projets?.map((projet, index) => {
          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`w-full relative transition-all duration-300 ease-in-out aspect-square  ${
                visibleIndex === index
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-50"
              }`}
            >
              <ProjectCardMobileV2
                index={index}
                projet={projet}
                isVisible={visibleIndex === index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Realisations;
