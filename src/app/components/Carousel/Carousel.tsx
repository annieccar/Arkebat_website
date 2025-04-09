"use client";

import React, { ReactNode } from "react";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({
  children,
  isProjectCarousel,
}: {
  children: ReactNode;
  isProjectCarousel?: boolean;
}) => {
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
    <section className={`embla relative w-full flex flex-col`}>
      <div className="embla__viewport overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex gap-8 md:px-4 lg:px-8 ">
          {children}
        </div>
      </div>

      <div className="flex px-2 gap-2 items-center w-full justify-center mt-8">
        {!isProjectCarousel && (
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        )}
        <div className="flex px-2 gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-2 lg:w-2.5 lg:h-2.5 h-2 rounded-full ${
                index === selectedIndex ? " bg-green" : "bg-green/50"
              }`}
            />
          ))}
        </div>

        {!isProjectCarousel && (
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        )}
      </div>
    </section>
  );
};

export default Carousel;
