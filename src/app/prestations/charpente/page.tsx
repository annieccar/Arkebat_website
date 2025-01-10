import React from "react";
import { Gallery } from "next-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkebat - Charpente Bois : Construction et Aménagement Durable",
  description:
    "Découvrez les prestations d'Arkebat en charpente bois, offrant des solutions traditionnelles ou industrielles, ainsi que des aménagements extérieurs en bois de qualité.",
  keywords: [
    "charpente bois",
    "charpente traditionnelle",
    "charpente industrielle",
    "aménagement extérieur bois",
    "bardage bois",
    "terrasses en bois",
    "brise-vues bois",
    "bois massif",
    "pin des Landes",
    "Shou Sugi Ban",
    "maçonnerie et charpente",
    "construction durable",
    "aménagement bois",
  ],
  openGraph: {
    title: "Arkebat - Charpente Bois : Construction et Aménagement Durable",
    description:
      "Spécialistes en charpente bois, Arkebat propose des charpentes traditionnelles et industrielles, ainsi que des aménagements extérieurs en bois robustes et esthétiques.",
    url: "https://arkebat.fr/prestations/charpente",
    images: [
      {
        url: "https://arkebat.fr/Photos/charpente/IMG_4893.jpg",
        alt: "Charpente en bois – Arkebat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charpente Bois – Arkebat",
    description:
      "Découvrez les charpentes bois d'Arkebat : des solutions en bois massif pour vos projets de construction et aménagement extérieur, alliant robustesse et esthétique.",
    images: "https://arkebat.fr/Photos/charpente/IMG_4893.jpg",
  },
};

const Charpente = () => {
  const images = [
    {
      src: "/Photos/charpente/IMG_4893.jpg",
      aspect_ratio: 3024 / 4032,
      alt: "Charpente en bois",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 3, 3, 3.2];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1300px] mx-auto">
      <h1 className="py-10 text-center text-2xl md:text-3xl">Charpente</h1>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Nous réalisons des charpentes traditionnelles ou industrielles, ainsi
        que divers aménagements en bois pour l&apos;extérieur. En centralisant
        ces travaux au sein d&apos;une seule entreprise, nous optimisons la
        coordination des étapes du gros œuvre, ce qui permet de réduire les
        délais sur chantier.
      </p>
      <h2 className="mb-5 text-xl md:text-2xl">
        Aménagements bois et intégration avec la maçonnerie
      </h2>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Nos prestations incluent :
      </p>
      <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-base  md:text-base lg:text-lg">
          La pose de bardages sur isolation thermique extérieure (ITE)
        </li>
        <li>La création de terrasses en bois</li>
        <li>La conception de brise-vues élégants et fonctionnels.</li>
      </ul>{" "}
      <p className="text-justify text-base md:text-base mb-5 lg:text-lg">
        Ces éléments s&apos;intègrent harmonieusement avec les ouvrages de
        maçonnerie pour un résultat esthétique et durable.
      </p>
      <h2 className="mb-5 text-xl md:text-2xl">
        Matériaux utilisés : qualité et durabilité
      </h2>
      <p className="text-justify text-base md:text-base mb-5 lg:text-lg">
        Nous travaillons principalement avec du bois massif, tel que le pin des
        Landes, reconnu pour sa robustesse et sa fiabilité.
      </p>
      <p className="text-justify text-base md:text-base mb-5 lg:text-lg">
        Pour les bardages, nous proposons également du bois brûlé (technique
        Shou Sugi Ban), apprécié pour son esthétique unique et sa grande
        longévité.
      </p>
      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
};

export default Charpente;
