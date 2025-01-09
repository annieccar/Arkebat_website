import Image from "next/image";

import photos from "../../../sliderPhotos.json";

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
      <div className="z-10 absolute flex flex-col gap-3 w-5/6 ">
        <h1 className="text-center text-5xl lg:text-5xl 2xl:text-6xl font-medium">
          Entreprise générale du bâtiment
        </h1>
        <h2 className="text-center text-3xl lg:text-3xl 2xl:text-4xl font-title font-light">
          Gros Oeuvre et Eco Construction
        </h2>
      </div>
    </div>
  );
}

export default CarouselServer;
