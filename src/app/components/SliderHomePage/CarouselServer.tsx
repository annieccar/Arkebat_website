import Image from "next/image";

import photos from "../../../sliderPhotos.json";
import { BsChevronCompactDown } from "react-icons/bs";
import Link from "next/link";

function CarouselServer() {
  const serverPhotos = [photos[0][0], photos[1][0]];

  return (
    <div
      className="w-full h-screen z-10
 relative flex flex-col items-center justify-center mb-10"
    >
      <div className="w-full flex flex-col lg:flex-row h-screen">
        {serverPhotos.map((photo) => (
          <div
            key={photo.alt}
            className="relative w-full h-1/2 lg:h-full lg:w-1/2 transition-opacity ease-in-out duration-1000 "
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width:768px): 100vw, 50vw"
              style={{
                position: "absolute",
                inset: 0,
                objectFit: "cover",
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-background bg-opacity-30"></div>
      </div>
      <div className="z-10 absolute flex flex-col gap-5  w-5/6 ">
        <h1 className="text-center text-5xl lg:text-5xl 2xl:text-6xl font-title font-medium">
          Entreprise générale du bâtiment
        </h1>
        <h2 className="text-center text-3xl font-text lg:text-2xl 2xl:text-3xl font-thin uppercase">
          Gros Oeuvre et Eco Construction
        </h2>
      </div>
      <Link
        href="/#presentation"
        className="z-10 absolute text-title bottom-0 text-2xl font-light flex flex-col items-center"
      >
        <div>Nous découvrir</div>
        <BsChevronCompactDown size={70} className="motion-safe:animate-float" />
      </Link>
    </div>
  );
}

export default CarouselServer;
