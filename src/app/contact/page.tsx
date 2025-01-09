import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import contact from "../../contact.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Arkébat - Construction, Rénovation et Éco-Construction",
  description:
    "Contactez-nous pour discuter de vos projets de construction, rénovation ou éco-construction. Notre équipe d'experts est là pour mener à bien votre projet dans le Pays Basque et Sud des Landes.",
  openGraph: {
    title: "Contactez Arkébat - Construction et Rénovation",
    description:
      "Vous avez un projet de construction, de rénovation ou d'éco-construction ? Contactez Arkébat pour obtenir un devis ou plus d'informations.",
    url: "https://arkebat.fr/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contactez Arkébat - Construction et Rénovation",
    description:
      "Besoin d'un devis pour vos travaux ? Contactez Arkébat pour discuter de vos projets de construction, rénovation ou éco-construction.",
  },
};

const Contact = () => {
  return (
    <div className="mt-28 lg:mt-36 w-full flex flex-col items-center px-4 ">
      <h1 className="text-3xl lg:text-4xl mb-10 text-center lg:text-left lg:w-5/6">
        Contact
      </h1>
      <div className="w-full flex flex-col items-center lg:flex-row lg:w-5/6  lg:items-start">
        <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col items-start">
          <p className="text-center lg:text-start lg:pr-10 lg:text-lg">
            Arkébat est à votre disposition pour discuter de votre projet et
            répondre à toutes vos questions. Contactez-nous aujourd`&apos;`hui
            pour obtenir un devis{" "}
            <span className="font-bold text-icon">gratuit</span> et{" "}
            <span className="font-bold text-icon">sans engagement</span>
          </p>
          <div className="w-full flex items-center mt-20 max-[1023px]:hidden">
            <div className="flex text-icon items-center mt-3 md:mt-0">
              <MdAlternateEmail size={24} />
              <p className="xl:text-lg ml-2">{contact.email}</p>
            </div>
            <div className="flex text-icon items-center mt-3 ml-10">
              <FiPhoneCall size={24} />
              <div className="xl:text-lg ml-4 flex flex-col">
                <p>{contact.phone1}</p>
                <p> {contact.phone2}</p>
              </div>
            </div>
          </div>
          <p className="xl:text-lg mt-6 max-[1024px]:hidden">
            {contact.opening_hours}
          </p>
        </div>

        <div className="w-full lg:w-2/5 xl:w-1/2 flex flex-col items-center ">
          <ContactForm />
        </div>
      </div>

      <section className="flex flex-col md:flex-row md:justify-around md:w-full items-center mt-4 md:mt-20 lg:hidden">
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
              <p> {contact.phone2}</p>
            </div>
          </div>
        </div>
        <p className="text-sm ml-2 mt-3 ">{contact.opening_hours}</p>
      </section>
    </div>
  );
};

export default Contact;
