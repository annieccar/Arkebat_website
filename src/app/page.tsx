"use client";

import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import Button from "./components/Button";

import ServiceCarousel from "./components/ServiceCarousel";
import SliderHomePage from "./components/SliderHomePage";

export default function Home() {
  return (
    <div className="bg-background w-full text-white flex flex-col items-center">
      <section className="w-full flex flex-col items-center">
        <SliderHomePage />

        <p className="w-full px-5 text-center mt-4 text-md md:w-5/6 lg:text-xl">
          Arkebat est une entreprise générale de{" "}
          <span className="font-bold text-icon">maçonnerie</span> dédiée à
          l&apos;éco-construction. Nos artisans maçons sont spécialisés dans
          l&apos;utilisation de matériaux{" "}
          <span className="font-bold text-icon">écologiques</span> et de
          techniques de construction{" "}
          <span className="font-bold text-icon">durables</span>.<br></br>{" "}
          <br></br>Nous proposons une large gamme de service, allant de la
          construction de maisons individuelles, création d&apos;extension, à la
          rénovation totale de bâtiments existants.
        </p>
        <p className="w-full px-3 text-center mt-4 text-md hidden md:block md:w-3/4 lg:text-xl ">
          Nous prenons en charge les travaux essentiels à la{" "}
          <span className="font-bold text-icon">solidité</span> et à la
          <span className="font-bold text-icon"> durabilité</span> des
          structures: Terrassement, fondation, maçonnerie, charpente ainsi que
          les ravalement de façade et création d&apos;assainissement. Notre
          démarche, axée sur le{" "}
          <span className="font-bold text-icon">conseil </span>
          et l&apos;accompagnement, vous guide dans l&apos;intégration de
          solutions durables et responsables.
        </p>
      </section>
      <section className="w-full flex flex-col items-center mt-10">
        <h1 className="w-4/5 text-center text-3xl mb-5">Prestations</h1>
        <ServiceCarousel />
      </section>
      <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center mt-10 md:mt-20 lg:hidden">
        <div className="w-fit px-2 mt-6 md:mt-0">
          <div className="flex text-icon items-center mt-3 md:mt-0">
            <MdAlternateEmail size={24} />
            <p className="text-sm ml-2">arkebat.renovation@gmail.com</p>
          </div>
          <div className="flex text-icon items-center mt-3">
            <FiPhoneCall size={24} />
            <div className="text-sm ml-2 flex">
              <p>06 10 69 63 83</p>
              <p>&nbsp;/&nbsp;</p>
              <p> 06 84 59 05 96</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3 ">Lundi - Vendredi - 8h - 18h</p>
        <Button title="Nous contacter" />
      </section>
      <section className="xl:w-5/6 flex flex-col md:flex-row md:justify-around md:w-full items-center mt-24 max-[1023px]:hidden">
        <div className="flex text-icon items-center ">
          <MdAlternateEmail size={30} />
          <p className="text-lg xl:text-xl ml-2">
            arkebat.renovation@gmail.com
          </p>
        </div>
        <div className="flex text-icon items-center">
          <FiPhoneCall size={30} />
          <div className="text-lg xl:text-xl ml-3 flex flex-col">
            <p>06 10 69 63 83</p>
            <p> 06 84 59 05 96</p>
          </div>
        </div>
        <p className="text-lg xl:text-xl ml-2 ">Lundi - Vendredi - 8h - 18h</p>
        <Button title="Nous contacter" />
      </section>
    </div>
  );
}
