"use client";

import React from "react";

import { MdAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="mt-28 lg:mt-36 w-full flex flex-col items-center px-4 ">
      <h1 className="text-3xl lg:text-4xl mb-10 text-center lg:text-left lg:w-5/6">
        Contact
      </h1>
      <div className="w-full flex flex-col items-center lg:flex-row lg:w-5/6 lg:items-start">
        <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col items-start">
          <p className="text-center lg:text-start lg:pr-10 lg:text-lg">
            Arkébat est à votre disposition pour discuter de votre projet et
            répondre à toutes vos questions. Contactez-nous aujourd'hui pour
            obtenir un devis{" "}
            <span className="font-bold text-icon">gratuit</span> et{" "}
            <span className="font-bold text-icon">sans engagement</span>
          </p>
          <div className="w-full flex items-center mt-20 max-[1024px]:hidden">
            <div className="flex text-icon items-center mt-3 md:mt-0">
              <MdAlternateEmail size={24} />
              <p className="xl:text-lg ml-2">arkebat.renovation@gmail.com</p>
            </div>
            <div className="flex text-icon items-center mt-3 ml-10">
              <FiPhoneCall size={24} />
              <div className="xl:text-lg ml-4 flex flex-col">
                <p>06 10 69 63 83</p>
                <p> 06 84 59 05 96</p>
              </div>
            </div>
          </div>
          <p className="xl:text-lg mt-6 max-[1024px]:hidden">
            Lundi - Vendredi - 8h - 18h
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
      </section>
    </div>
  );
};

export default Contact;
