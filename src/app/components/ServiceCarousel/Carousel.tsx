"use client";

import React, { ReactNode } from "react";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative w-3/4 md:w-full max-w-[1400px]">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex mr-8">{children}</div>
      </div>
      <div className="hidden absolute w-full sm:flex justify-between top-1/2 -translate-y-1/2 ">
        <PrevButton
          className="translate-x-2"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className="-translate-x-2"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>

      <div className="flex px-2 gap-2 items-center w-full justify-center my-5">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === selectedIndex ? " bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
