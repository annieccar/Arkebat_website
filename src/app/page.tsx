import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuClock4 } from "react-icons/lu";

import SliderHomePage from "./components/SliderHomePage/SliderHomePage";
import contact from "../contact.json";
import services from "../services.json";
import ServiceCardV2 from "./components/V2/serviceCardV2";
import ProjectCarouselV2 from "./components/Carousel/ProjectCarouselV2";
import ContactForm from "./components/ContactForm";

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
      <div className="w-full">
        <SliderHomePage />
      </div>
      <div className="text-white flex flex-col px-8 md:px-20 container gap-20 lg:gap-32 items-center my-20 lg:my-20 max-w-[1400px] ">
        <section
          className="lg:p-20 sm:p-10 p-6 text-center bg-green/70 backdrop-blur-md
           text-sm md:text-base lg:text-lg xl:text-xl text-white rounded-md border-2 border-light_green scroll-mt-36"
          id="presentation"
        >
          <p className="text-title">
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
          <p className="text-title">
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
        <section className="w-full flex justify-center" id="prestations">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-2xl md:text-3xl font-semibold lg:text-4xl mb-5 text-white">
              Nos prestations
            </h2>
            <div className="border-b-4 w-28 border-light_green mb-16"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 gap-8 w-full">
              {services.map((service, index) => (
                <ServiceCardV2 key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center" id="realisations">
          <div className="w-full flex flex-col items-center">
            <h2 className=" text-2xl md:text-3xl font-semibold lg:text-4xl mb-5 text-white">
              Nos réalisations
            </h2>
            <div className="border-b-4 w-28 border-light_green mb-16"></div>

            <ProjectCarouselV2 />
            <div className="w-full justify-end flex mt-5">
              <Link href="/realisations">
                <div className=" text-light_green xl:text-lg 2xl:text-xl flex items-center gap-3">
                  <div>Voir tous les projets</div>
                  <HiArrowLongRight size={25} className="translate-y-[1px]" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="w-full flex flex-col items-center scroll-mt-36"
          id="contact"
        >
          <div className="flex flex-col items-center lg:hidden">
            <h2 className="text-2xl md:text-3xl font-semibold lg:text-4xl mb-5 text-white">
              Nous contacter
            </h2>
            <div className="border-b-4 w-28 border-light_green mb-16"></div>
          </div>
          <div className="w-full flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start">
            <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col items-start">
              <div className="lg:flex flex-col hidden">
                <h2 className=" text-3xl font-semibold lg:text-4xl mb-5 text-white">
                  Nous contacter
                </h2>
                <div className="border-b-4 w-28 border-light_green mb-16"></div>
              </div>
              <p className="text-center lg:text-start text-title lg:pr-10 lg:text-lg">
                Arkébat est à votre disposition pour discuter de votre projet et
                répondre à toutes vos questions. Contactez-nous aujourd&apos;hui
                pour obtenir un devis{" "}
                <span className="font-bold text-light_green">gratuit</span> et{" "}
                <span className="font-bold text-light_green">
                  sans engagement
                </span>
              </p>
              <div className="w-full lg:flex flex-col xl:flex-row mt-20 hidden">
                <div className="flex text-light_green items-center mt-3 md:mt-0">
                  <MdAlternateEmail size={24} />
                  <p className="xl:text-lg text-title ml-2">{contact.email}</p>
                </div>
                <div className="flex text-light_green items-center mt-3 xl:ml-10">
                  <FiPhoneCall size={24} />
                  <div className="xl:text-lg ml-4 text-title flex flex-col">
                    <p className="text-title">{contact.phone1}</p>
                    <p className="text-title"> {contact.phone2}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 hidden lg:flex items-center gap-4 text-light_green">
                <LuClock4 size={24} />
                <p className="xl:text-lg  text-title">
                  {contact.opening_hours}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col items-center ">
              <ContactForm />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 md:mt-20 lg:hidden w-full">
            <div className="flex text-light_green items-center justify-center sm:justify-start md:mt-0">
              <MdAlternateEmail size={22} />
              <p className="text-sm ml-2 text-title">{contact.email}</p>
            </div>
            <div className="flex text-light_green items-center justify-center sm:justify-start">
              <FiPhoneCall size={22} />
              <div className="text-sm ml-2 text-title flex">
                <p className="text-title">{contact.phone1}</p>
                <p className="text-title">&nbsp;/&nbsp;</p>
                <p className="text-title"> {contact.phone2}</p>
              </div>
            </div>

            <div className="flex text-light_green items-center gap-2 justify-center sm:justify-start">
              <LuClock4 size={22} />
              <p className="text-sm  text-title">{contact.opening_hours}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
