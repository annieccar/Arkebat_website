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
    <section className="embla relative w-full md:w-full max-w-[360px] sm:max-w-none lg:max-w-[1024px] xl:max-w-[1400px] flex flex-col">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex mr-8">{children}</div>
      </div>

      <div className="flex px-2 gap-2 items-center w-full justify-center mt-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="flex px-2 gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-2 lg:w-2.5 lg:h-2.5 h-2 rounded-full ${
                index === selectedIndex ? " bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default Carousel;
