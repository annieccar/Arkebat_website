import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import type { Metadata } from "next";

import Button from "./components/Button";
import ServiceCarousel from "./components/ServiceCarousel/ServiceCarousel";
import SliderHomePage from "./components/SliderHomePage/SliderHomePage";
import contact from "../contact.json";

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
  return (
    <div className=" w-full text-white flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <SliderHomePage />
        <div className="w-full bg-green flex justify-center">
          <section
            className="my-10 lg:my-20 lg:p-20 p-10 text-center bg-white/30
           text-md max-w-[1400px] mx-10 sm:mx-20 lg:text-xl text-white rounded-md"
          >
            <p>
              Arkebat est une entreprise générale de{" "}
              <span className="font-bold text-light_green">maçonnerie</span>{" "}
              dédiée à l&apos;éco-construction. Nos artisans maçons sont
              spécialisés dans l&apos;utilisation de matériaux{" "}
              <span className="font-bold text-light_green">écologiques</span> et
              de techniques de construction{" "}
              <span className="font-bold text-light_green">durables</span>.
              <br></br> <br></br>Nous proposons une large gamme de service,
              allant de la construction de maisons individuelles, création
              d&apos;extension, à la rénovation totale de bâtiments existants.
            </p>
            <p>
              <br></br>
              Nous prenons en charge les travaux essentiels à la{" "}
              <span className="font-bold text-light_green">solidité</span> et à
              la
              <span className="font-bold text-light_green">
                {" "}
                durabilité
              </span>{" "}
              des structures: Terrassement, fondation, maçonnerie, charpente
              ainsi que les ravalement de façade et création
              d&apos;assainissement. Notre démarche, axée sur le{" "}
              <span className="font-bold text-light_green">conseil </span>
              et l&apos;accompagnement, vous guide dans l&apos;intégration de
              solutions durables et responsables.
            </p>
          </section>
        </div>
      </div>
      <div className="w-full flex justify-center bg-beige">
        <section className=" lg:p-10 max-w-[1400px] mx-10 sm:mx-20 w-full flex flex-col items-center">
          <h2 className="text-center text-3xl lg:text-4xl mb-5 text-almost_black mt-10">
            Nos prestations
          </h2>
          <ServiceCarousel />
        </section>
      </div>

      <div className="w-full bg-almost_black flex justify-center">
        <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center my-10 md:m-20 lg:hidden">
          <div className="w-fit px-2 mt-6 md:mt-0">
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
      </div>
    </div>
  );
}
