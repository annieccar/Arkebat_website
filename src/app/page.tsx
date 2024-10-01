import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import MainPhoto from "../../public/Photos/maison_pierre.jpg";
import enduitChanvre from "../../public/Photos/ensuitChanvre.jpg";
import ServiceCarousel from "./components/ServiceCarousel";
import Button from "./components/Button";

export default function Home() {
  const photos1 = [
    { src: MainPhoto, alt: "Maison en pierre" },
    {
      src: enduitChanvre,
      alt: "Enduit en chanvre",
    },
  ];

  return (
    <div className="bg-background w-full text-white flex flex-col items-center">
      <section className="w-full flex flex-col items-center">
        <div className="w-full h-72 md:h-screen z-10">
          <div
            className="w-full h-72 md:h-screen z-10
       relative flex flex-col items-center justify-center"
          >
            <div className="w-full flex h-screen">
              <div className="relative w-1/2 h-screen">
                <Image
                  src={MainPhoto}
                  alt="Maison avec pierre et joints en enduit blancs"
                  objectFit="cover"
                  fill={true}
                />
              </div>
              <div className="relative w-1/2 h-screen">
                <Image
                  src={enduitChanvre}
                  alt="Maison avec pierre et joints en enduit blancs"
                  objectFit="cover"
                  fill={true}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-background bg-opacity-30"></div>
            <div></div>
            <div className="z-10 absolute ">
              <h1 className="text-center text-5xl font-semibold">
                Entreprise générale du bâtiment
              </h1>
              <h1 className="text-center text-4xl font-normal mt-10">
                Gros Oeuvre et Eco Construction
              </h1>
            </div>
          </div>
        </div>

        <h2 className="font-title text-gray font-semibold text-center pt-2">
          Maçonnerie - Rénovation - Eco Construction
        </h2>
        <p className="w-4/5 text-center mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna
          blandit, rutrum est non, laoreet nisi. Donec id nibh ut tortor
          vehicula euismod in vitae diam. Curabitur consectetur pharetra
          dignissim. Nunc quis laoreet dui. Praesent dapibus nunc elit, ac
          facilisis enim lacinia eu. Etiam luctus lobortis leo, id porta ligula.{" "}
        </p>
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <h1 className="w-4/5 text-center text-3xl">Nos Services</h1>
        <ServiceCarousel />
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <Button />
        <div className="w-fit px-2 mt-6">
          <div className="flex text-icon items-center mt-3">
            <MdAlternateEmail size={24} />
            <p className="text-sm ml-2">arkebat.renovation@gmail.com</p>
          </div>
          <div className="flex text-icon items-center mt-3">
            <FiPhoneCall size={24} />
            <div className="text-sm ml-2">
              <p>06 10 69 63 83 / 06 84 59 05 96</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3">Lundi - Vendredi - 8h - 18h</p>
      </section>
    </div>
  );
}
