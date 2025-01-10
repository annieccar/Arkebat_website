import React from "react";
import { Gallery } from "next-gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arkebat - Isolation Écologique : Chaux-Chanvre pour Votre Habitat",
  description:
    "Découvrez la technique d'isolation écologique à base de chaux-chanvre d'Arkebat. Une solution naturelle, durable et efficace pour réguler l'humidité et préserver votre confort.",
  keywords: [
    "chaux-chanvre",
    "isolation écologique",
    "isolation murale",
    "régulation humidité",
    "bâtiment durable",
    "construction écologique",
    "rénovation écologique",
    "protection contre la condensation",
    "isolation à la chaux",
    "enduit chaux-chanvre",
    "technique de projection",
    "isolation thermique",
    "isolation respirante",
    "chaux-chanvre rénovation",
  ],
  openGraph: {
    title: "Arkebat - Isolation Écologique : Chaux-Chanvre pour Votre Habitat",
    description:
      "Spécialistes en isolation écologique, Arkebat propose des solutions en chaux-chanvre pour réguler l'humidité et améliorer la performance thermique de vos bâtiments en Pays Basque et Sud Landes.",
    url: "https://arkebat.fr/prestations/chaux_chanvre",
    images: [
      {
        url: "https://arkebat.fr/Photos/chaux_chanvre/IMG_4723.jpg",
        alt: "Chaux-Chanvre – Arkebat : Application de l'isolant chaux-chanvre",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isolation Écologique au Chaux-Chanvre – Arkebat",
    description:
      "Améliorez la performance énergétique de votre bâtiment avec l'isolation en chaux-chanvre d'Arkebat. Une solution naturelle, durable et efficace pour réguler l'humidité et préserver votre confort.",
    images: "https://arkebat.fr/Photos/chaux_chanvre/IMG_4723.jpg",
  },
};

const ChauxChanvre = () => {
  const images = [
    {
      src: "/Photos/chaux_chanvre/IMG_4723.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Application de l'isolant chaux-chanvre",
    },
    {
      src: "/Photos/chaux_chanvre/IMG_2174.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Application de l'isolant chaux-chanvre",
    },
    {
      src: "/Photos/chaux_chanvre/IMG_2172.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Mur avec isolant chaux-chanvre",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 1, 3, 3];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1300px] mx-auto ">
      <h1 className="py-10 text-center text-2xl md:text-3xl">Chaux-Chanvre</h1>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Le chaux-chanvre, qu&apos;il soit projeté ou banché, constitue une
        technique d&apos;isolation à la fois légère et respirante, permettant
        une régulation optimale de l&apos;hygrométrie au sein d&apos;un
        bâtiment. Ce procédé est particulièrement adapté aux murs en pierre ou
        en brique, ce qui en fait une solution idéale pour notre région. Il joue
        un rôle essentiel dans la gestion de l&apos;humidité intérieure et
        contribue à prévenir les problèmes de condensation.
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        En rénovation, le béton de chanvre s&apos;avère très efficace pour
        unifier un mur hétérogène ou pour faire face à la masse froide des murs
        extérieurs massifs. Il peut être appliqué sur les murs, plafonds et
        sols.
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        La technique de projection permet une application rapide et efficace sur
        de grandes surfaces, garantissant une finition homogène.
      </p>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Le processus de mise en œuvre du chaux-chanvre se déroule en trois
        étapes :
      </p>
      <ul className="text-justify text-base  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-base  md:text-base lg:text-lg">
          <h2 className="mb-5 text-xl md:text-2xl">Préparation du support :</h2>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            Les murs doivent être sains et débarrassés des joints détériorés
            ainsi que des résidus de peinture éventuels. Selon l&apos;épaisseur
            à projeter, une ossature en bois peut être nécessaire pour servir de
            squelette au mur.
          </p>
        </li>
        <li className="text-justify text-base  md:text-base lg:text-lg">
          <h2 className="mb-5 text-xl md:text-2xl">
            Projection du béton de chanvre :{" "}
          </h2>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            Une fois la préparation effectuée, l&apos;étape de projection est
            réalisée. Après cette phase, un temps de séchage est nécessaire,
            pouvant varier de 2 à 4 mois selon la saison, l&apos;épaisseur
            projetée et le niveau de ventilation.
          </p>
        </li>
        <li className="text-justify text-base  md:text-base lg:text-lg">
          <h2 className="mb-5 text-xl md:text-2xl">
            Application du parement final :
          </h2>
          <p className="text-justify text-base md:text-base lg:text-lg mb-5">
            Cette étape consiste en l&apos;application de deux couches : la
            première, appelée couche de corps, vise à assurer une planéité
            parfaite du mur, suivie de la couche de finition.
          </p>
        </li>
      </ul>
      <p className="text-justify text-base md:text-base lg:text-lg mb-5">
        Différentes options de finition sont possibles, offrant une variété de
        couleurs et de textures. On peut appliquer un enduit en terre, un enduit
        fin de type marmorino, un enduit chaux/sable, ou encore un enduit
        chaux-chanvre de finition.
      </p>
      <Gallery {...{ images, widths, ratios, gap, lastRowBehavior }} />
    </div>
  );
};

export default ChauxChanvre;
