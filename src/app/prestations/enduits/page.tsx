import React from "react";
import { Gallery } from "next-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Arkebat- Enduits à la Chaux et Monocouches pour Ravalement de Façade, Pays Basque & Sud Landes",
  description:
    "Découvrez nos solutions d'enduits à la chaux et monocouches pour le ravalement de façade. Arkébat, spécialiste en maçonnerie, vous propose des finitions durables et esthétiques pour vos bâtiments dans le Pays Basque et le Sud des Landes",
  openGraph: {
    title:
      "Arkebat- Enduits à la Chaux et Monocouches pour Ravalement de Façade, Pays Basque & Sud Landes",
    description:
      "Découvrez nos solutions d'enduits à la chaux et monocouches pour le ravalement de façade. Arkébat, spécialiste en maçonnerie, vous propose des finitions durables et esthétiques pour vos bâtiments dans le Pays Basque et le Sud des Landes",
    url: "https://arkebat.fr/prestations/enduits",
    images: [
      {
        url: "https://arkebat.fr/Photos/enduits/enduits-apres.jpg",
        alt: " Enduit de façade réaliseé par Arkebat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arkebat- Enduits à la Chaux et Monocouches pour Ravalement de Façade, Pays Basque & Sud Landes",
    description:
      "Découvrez nos solutions d'enduits à la chaux et monocouches pour le ravalement de façade. Arkébat, spécialiste en maçonnerie, vous propose des finitions durables et esthétiques pour vos bâtiments dans le Pays Basque et le Sud des Landes",
    images: "https://arkebat.fr/Photos/maconnerie/IMG_3199.jpg",
  },
};
const Enduits = () => {
  const images = [
    {
      src: "/Photos/enduits/IMG_0564.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Application de la sous-couche d'enduit",
    },
    {
      src: "/Photos/enduits/enduits-apres.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Enduit de ravalement de façade",
    },
    {
      src: "/Photos/enduits/IMG_3735.jpg",
      aspect_ratio: 3024 / 4032,
      alt: "Mur avec isolant chaux-chanvre",
    },
    {
      src: "/Photos/enduits/DSC0753.jpg",
      aspect_ratio: 1230 / 640,
      alt: "Enduit de finition intérieur",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 1, 3, 3];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1300px] mx-auto">
      <h1 className="py-10 text-center text-2xl md:text-3xl">Enduits</h1>
      <h2 className="mb-5 text-xl md:text-2xl">
        Solutions d&apos;enduits pour ravalement de façade
      </h2>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        En fonction du type de construction et des pathologies observées, nous
        proposons deux solutions principales pour vos ravalements de façade :
        les enduits à la chaux et les enduits monocouches.
      </p>
      <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-decimal pl-5">
        <li className="text-justify text-base  md:text-base lg:text-lg">
          <h3 className="mb-5 text-xl md:text-2xl">
            Enduit à la chaux : protection et esthétique
          </h3>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            L&apos;enduit à la chaux combine protection, durabilité et
            esthétisme. Ses propriétés permettent à l&apos;humidité de
            s&apos;échapper naturellement des murs, prévenant ainsi la
            condensation et l&apos;apparition de moisissures.
          </p>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            Il est particulièrement recommandé pour :
          </p>
          <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-disc pl-5">
            <li className="text-justify text-base  md:text-base lg:text-lg">
              Les bâtiments en pierre ou en mâchefer
            </li>
            <li className="text-justify text-base  md:text-base lg:text-lg">
              Les façades présentant des traces d&apos;humidité ou de salpêtre.
            </li>
          </ul>
        </li>
        <li className="text-justify text-base  md:text-base lg:text-lg">
          <h3 className="mb-5 text-xl md:text-2xl">
            Enduit monocouche : une solution moderne
          </h3>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            L&apos;enduit monocouche est spécialement conçu pour être appliqué
            sur des constructions en béton ou en briques.
          </p>
        </li>
      </ul>
      <h2 className="mb-5 text-xl md:text-2xl">Finitions et teintes:</h2>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Nous proposons plusieurs types de finitions pour répondre à vos attentes
        esthétiques. Cependant, la finition talochée est reconnue pour sa
        durabilité et sa résistance dans le temps.
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Des échantillons de teintes sont disponibles pour vous aider à choisir
        l&apos;aspect final de votre façade.
      </p>

      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
};

export default Enduits;
