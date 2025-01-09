import React from "react";
import { Gallery } from "next-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkébat - Maçonnerie & Gros Oeuvre : Construction Durable",
  description:
    "Découvrez les services de maçonnerie et gros œuvre d'Arkébat, spécialisés dans la construction de fondations, murs porteurs, extensions, et plus.",
  keywords: [
    "maçonnerie",
    "gros œuvre",
    "construction durable",
    "fondations",
    "extension",
    "murs porteurs",
    "maçon pays basque",
    "maçonnerie éco-construction",
    "construction écologique",
    "murs de soutènement",
    "création d'ouvertures",
    "piscines",
    "dalles béton armé",
    "réalisation d'extensions",
  ],
  openGraph: {
    title: "Arkébat - Maçonnerie & Gros Oeuvre : Construction Durable",
    description:
      "Spécialistes en maçonnerie et gros œuvre, Arkébat réalise des fondations, des murs porteurs, des extensions, et bien plus encore. Découvrez nos réalisations durables.",
    url: "https://arkebat.fr/prestations/maconnerie",
    images: [
      {
        url: "https://arkebat.fr/Photos/maconnerie/IMG_3199.jpg",
        alt: "Maçonnerie – Arkébat : Réalisation de fondations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maçonnerie & Gros Oeuvre – Arkébat",
    description:
      "Découvrez les services de maçonnerie d'Arkébat : extension, fondations, murs porteurs, et plus, dans une démarche de construction durable.",
    images: "https://arkebat.fr/Photos/maconnerie/IMG_3199.jpg",
  },
};

const Maçonnerie = () => {
  const images = [
    {
      src: "/Photos/maconnerie/IMG_0532.jpg",
      aspect_ratio: 3024 / 4032,
      alt: "Création d'ouvertures",
    },
    {
      src: "/Photos/maconnerie/IMG_3199.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Réalisation de fondations",
    },
    {
      src: "/Photos/maconnerie/IMG_3793.jpg",
      aspect_ratio: 5240 / 3900,
      alt: "Réalisation d'une extension d'habitation",
    },
    {
      src: "/Photos/maconnerie/IMG_3510.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Construction d'un mur de soutènement",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 3, 3, 3.2];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1300px] mx-auto ">
      <h1 className="py-10 text-center text-2xl md:text-3xl">
        Maçonnerie & Gros Oeuvre
      </h1>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Notre entreprise prend en charge l&apos;ensemble des travaux de
        structure et de fondations, que ce soit pour une extension, une maison
        individuelle ou un local commercial.
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Grâce à une équipe qualifiée et expérimentée, nous assurons :
      </p>
      <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-base  md:text-base lg:text-lg">
          La construction de murs porteurs
        </li>
        <li>La réalisation de dalles en béton armé</li>
        <li>Les ouvrages de maçonnerie générale</li>
      </ul>{" "}
      <p className="text-justify text-base md:text-base mb-5 lg:text-lg">
        Nous intervenons également pour des projets spécifiques, tels que :
      </p>
      <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-base  md:text-base lg:text-lg">
          La construction de piscines
        </li>
        <li>La réalisation de murs de soutènement</li>
      </ul>{" "}
      <p className="text-justify text-base md:text-base mb-5 lg:text-lg">
        Avec notre expertise, nous garantissons des ouvrages solides, durables
        et conformes aux normes en vigueur.
      </p>
      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
};

export default Maçonnerie;
