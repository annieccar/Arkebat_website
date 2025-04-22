import React from "react";
import { Gallery } from "next-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkébat - Terrassement & Assainissement",
  description:
    "Arkébat réalise vos travaux de terrassement, de fondations, de démolition, de réseaux, ainsi que l'installation de systèmes d'assainissement autonome et de récupération d'eau pluviale.",
  keywords: [
    "assainissement",
    "travaux de terrassement",
    "fondations",
    "démolition",
    "réseaux",
    "accès chantier",
    "assainissement autonome",
    "cuve de récupération d'eau pluviale",
    "installation assainissement",
    "construction durable",
  ],
  openGraph: {
    title: "Arkébat - Terrassement & Assainissement",
    description:
      "Découvrez nos services de terrassement et d'assainissement pour vos projets de construction : fondations, réseaux, démolition, ainsi que la pose de filières d'assainissement autonome.",
    url: "https://arkebat.fr/prestations/terrassement_assainissement",
    images: [
      {
        url: "https://arkebat.fr/Photos/terrassement/RLHU5043.jpg",
        alt: "Pose d'une station d'assainissement autonome – Arkébat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkébat - Terrassement & Assainissement",
    description:
      "Arkébat propose des solutions de terrassement, de fondations et d'assainissement autonome pour vos projets de construction. Contactez-nous pour plus d'informations.",
    images: "https://arkebat.fr/Photos/terrassement/RLHU5043.jpg",
  },
};

const Terrassement = () => {
  const images = [
    {
      src: "/Photos/terrassement/RLHU5043.jpg",
      aspect_ratio: 600 / 800,
      alt: "Pose d'une station d'assainissement autonome",
    },
    {
      src: "/Photos/terrassement/IMG_2608.jpg",
      aspect_ratio: 3264 / 2448,
      alt: "Travaux de terrassement sur terrain",
    },
    {
      src: "/Photos/terrassement/IMG_4849.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Travaux d'empierrement pour accès",
    },
    {
      src: "/Photos/terrassement/GXPY5958.jpg",
      aspect_ratio: 800 / 600,
      alt: "Travaux de terrassement sur terrain",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 2, 4, 3];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1300px] mx-auto ">
      <h1 className="py-10 text-center text-2xl md:text-3xl">
        Terrassement et Assainissement
      </h1>

      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Grâce à notre parc matériel, nous exécutons les travaux de terrassement
        liés à la construction: fondations, démolitions, réseaux, accès...
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Nos équipes sont également formées à la pose de filières
        d&apos;assainissements autonome et cuve de récupération d&apos;eau
        pluviales.
      </p>

      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
};

export default Terrassement;
