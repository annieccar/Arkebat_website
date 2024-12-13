import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

import Button from "./components/Button";
import ServiceCarousel from "./components/ServiceCarousel/ServiceCarousel";
import SliderHomePage from "./components/SliderHomePage/SliderHomePage";
import contact from "../contact.json";

export default function Home() {
  return (
    <div className="bg-background w-full text-white flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <SliderHomePage />
        <section className=" m-5 lg:m-10 lg:p-10 p-5 text-center text-md max-w-[1400px] lg:text-xl">
          <p>
            Arkebat est une entreprise générale de{" "}
            <span className="font-bold text-icon">maçonnerie</span> dédiée à
            l&apos;éco-construction. Nos artisans maçons sont spécialisés dans
            l&apos;utilisation de matériaux{" "}
            <span className="font-bold text-icon">écologiques</span> et de
            techniques de construction{" "}
            <span className="font-bold text-icon">durables</span>.<br></br>{" "}
            <br></br>Nous proposons une large gamme de service, allant de la
            construction de maisons individuelles, création d&apos;extension, à
            la rénovation totale de bâtiments existants.
          </p>
          <p>
            <br></br>
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
      </div>
      <section className="w-full flex flex-col items-center pb-10">
        <h2 className="w-4/5 text-center text-3xl mb-5">Prestations</h2>
        <ServiceCarousel />
      </section>
      <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center mt-10 md:mt-20 lg:hidden">
        <div className="w-fit px-2 mt-6 md:mt-0">
          <div className="flex text-icon items-center mt-3 md:mt-0">
            <MdAlternateEmail size={24} />
            <p className="text-sm ml-2">{contact.email}</p>
          </div>
          <div className="flex text-icon items-center mt-3">
            <FiPhoneCall size={24} />
            <div className="text-sm ml-2 flex">
              <p>{contact.phone1}</p>
              <p>&nbsp;/&nbsp;</p>
              <p>{contact.phone2}</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3 ">{contact.opening_hours}</p>
        <Button title="Nous contacter" isLink={true} />
      </section>
      <section className="xl:w-5/6 flex flex-col md:flex-row md:justify-around md:w-full items-center mt-24 max-[1023px]:hidden">
        <div className="flex text-icon items-center ">
          <MdAlternateEmail size={30} />
          <p className="text-lg xl:text-xl ml-2">{contact.email}</p>
        </div>
        <div className="flex text-icon items-center">
          <FiPhoneCall size={30} />
          <div className="text-lg xl:text-xl ml-3 flex flex-col">
            <p>{contact.phone1}</p>
            <p> {contact.phone2}</p>
          </div>
        </div>
        <p className="text-lg xl:text-xl ml-2 ">{contact.opening_hours}</p>
        <Button title="Nous contacter" isLink={true} />
      </section>
    </div>
  );
}
