import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import type { Metadata } from "next";

import Button from "./components/Button";
import ServiceCarousel from "./components/ServiceCarousel/ServiceCarousel";
import SliderHomePage from "./components/SliderHomePage/SliderHomePage";
import contact from "../contact.json";
import services from "../services.json";
import ServiceCard from "./components/ServiceCarousel/ServiceCard";
import ServiceCardV2 from "./components/V2/serviceCardV2";

export const metadata: Metadata = {
  title:
    "Arkebat - Entreprise générale du bâtiment au Pays Basque et Sud Landes, spécialisée dans l'éco-construction",
  description:
    "Arkebat, expert en maçonnerie écologique au Pays Basque et Sud Landes. Nous réalisons des projets de construction et rénovation avec des matériaux durables.",
  openGraph: {
    title:
      "Arkebat - Entreprise générale du bâtiment au Pays Basque et Sud Landes, spécialisée dans l'éco-construction",
    description:
      "Arkebat est spécialisé dans la construction et la rénovation écologique au Pays Basque et Sud Landes. Découvrez nos prestations respectueuses de l'environnement.",
    url: "https://arkebat.fr",
    images: [
      {
        url: "https://arkebat.fr/Photos/Home/maconnerie.jpg",
        width: 800,
        height: 600,
        alt: "Chantier de construction de maison",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arkebat - Entreprise générale du bâtiment au Pays Basque et Sud Landes, spécialisée dans l'éco-construction",
    description:
      "Expertise en maçonnerie écologique, Arkebat propose des services de construction et rénovation au Pays Basque et Sud Landes.",
    images: ["https://arkebat.fr/Photos/Home/maconnerie.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  console.log("services:", services);

  return (
    <>
      <SliderHomePage />
      <div className="text-white flex flex-col mx-10 md:mx-28 gap-10 lg:gap-20 items-center my-10 lg:my-20 max-w-[1400px] ">
        <section
          className="lg:p-20 sm:p-10 p-6 text-center bg-green/70
           text-md lg:text-xl text-white rounded-md"
        >
          <p>
            Arkebat est une entreprise générale de{" "}
            <span className="font-bold text-light_green">maçonnerie</span>{" "}
            dédiée à l&apos;éco-construction. Nos artisans maçons sont
            spécialisés dans l&apos;utilisation de matériaux{" "}
            <span className="font-bold text-light_green">écologiques</span> et
            de techniques de construction{" "}
            <span className="font-bold text-light_green">durables</span>.
            <br></br> <br></br>Nous proposons une large gamme de service, allant
            de la construction de maisons individuelles, création
            d&apos;extension, à la rénovation totale de bâtiments existants.
          </p>
          <p>
            <br></br>
            Nous prenons en charge les travaux essentiels à la{" "}
            <span className="font-bold text-light_green">solidité</span> et à la
            <span className="font-bold text-light_green"> durabilité</span> des
            structures: Terrassement, fondation, maçonnerie, charpente ainsi que
            les ravalement de façade et création d&apos;assainissement. Notre
            démarche, axée sur le{" "}
            <span className="font-bold text-light_green">conseil </span>
            et l&apos;accompagnement, vous guide dans l&apos;intégration de
            solutions durables et responsables.
          </p>
        </section>
        <div className="w-full flex justify-center">
          <section className="w-full flex flex-col items-center">
            <h2 className="text-center text-3xl font-semibold lg:text-4xl mb-5 text-white">
              Nos prestations
            </h2>
            <div className="border-b-4 w-28 border-light_green mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-8 w-full">
              {services.map((service, index) => (
                <ServiceCardV2 key={index} service={service} />
              ))}
            </div>
            {/* <ServiceCarousel /> */}
          </section>
        </div>

        {/* <div className="w-full flex justify-center">
        <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center my-10 lg:hidden">
          <div className="w-fit">
            <div className="flex text-white items-center mt-3 md:mt-0">
              <MdAlternateEmail size={24} />
              <p className="text-sm ml-2">{contact.email}</p>
            </div>
            <div className="flex text-white items-center mt-3">
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
          <div className="flex text-white items-center ">
            <MdAlternateEmail size={30} className="text-light_green" />
            <p className="text-lg xl:text-xl ml-2 text-white">
              {contact.email}
            </p>
          </div>
          <div className="flex items-center">
            <FiPhoneCall size={30} className="text-light_green" />
            <div className="text-lg text-white xl:text-xl ml-3 flex flex-col">
              <p>{contact.phone1}</p>
              <p> {contact.phone2}</p>
            </div>
          </div>
          <p className="text-lg xl:text-xl ml-2 text-white ">
            {contact.opening_hours}
          </p>
          <Button title="Nous contacter" isLink={true} />
        </section>
      </div> */}
      </div>
    </>
  );
}
