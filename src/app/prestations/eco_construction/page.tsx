import React from "react";
import { Gallery } from "next-gallery";

const Eco = () => {
  const imagesBiosys = [
    {
      src: "/Photos/eco/APLQ5626.jpg",
      aspect_ratio: 800 / 600,
      alt: "Extension en briques de chanvre Biosys",
    },
    {
      src: "/Photos/eco/IMG_1873.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Extension en briques de chanvre Biosys",
    },
    {
      src: "/Photos/eco/IMG_1870.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Extension en briques de chanvre Biosys",
    },
    {
      src: "/Photos/eco/COSC2128.jpg",
      aspect_ratio: 4032 / 3024,
      alt: "Construction murs paille",
    },
  ];

  const imagesLiege = [
    {
      src: "/Photos/eco/PHPX9663.jpg",
      aspect_ratio: 720 / 718,
      alt: "Isolation d'un mur en panneaux de liège",
    },
    {
      src: "/Photos/eco/EMXA4378.jpg",
      aspect_ratio: 600 / 800,
      alt: "Isolation d'un plancher en liège",
    },
  ];

  const widths = [640, 1024, 1280];
  const ratios = [1, 1, 3, 3];
  const gap = "6px";
  const lastRowBehavior = "fill";

  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] mx-auto ">
      <h1 className="py-10 text-center text-2xl md:text-3xl">
        Eco-Construction: Des bâtiments durables avec Arkébat
      </h1>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Chez Arkebat, nous faisons de la durabilité une priorité. Nous nous
        engageons à construire des bâtiments respectueux de l’environnement en
        privilégiant des matériaux écologiques qui réduisent l’empreinte carbone
        tout en améliorant le confort des habitations.
      </p>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Ces matériaux polyvalents conviennent aussi bien aux constructions
        neuves qu’aux projets de rénovation. Leur sélection s’effectue en
        fonction des besoins spécifiques de chaque projet et peut inclure des
        solutions comme le béton de chanvre, la pierre, la terre crue ou le
        liège.
      </p>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Les matériaux que nous utilisons :
      </p>
      <h2 className="mb-5 text-xl md:text-2xl">Briques de chanvre Biosys</h2>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Les blocs de béton de chanvre Biosys, conçus pour s’emboîter facilement,
        sont associés à une structure porteuse en poteaux et poutres de béton
        armé, intégrée directement dans des blocs spécifiques. Idéals pour la
        réalisation de murs de façade avec isolation répartie, ces matériaux
        conviennent :
      </p>
      <ul className="text-justify text-sm  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-sm  md:text-base lg:text-lg">
          Aux maisons individuelles
        </li>
        <li>
          Aux petits bâtiments tertiaires (construction jusqu’à R+1 avec toiture
          légère).
        </li>
      </ul>{" "}
      <div className="mb-5">
        <Gallery
          {...{
            images: imagesBiosys,
            widths,
            ratios,
            gap,
            lastRowBehavior,
          }}
        />
      </div>
      <h2 className="mb-5 text-xl md:text-2xl">
        Parpaings en ciment d’argiles Materrup
      </h2>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Materrup propose un matériau innovant, performant et accessible : un
        parpaing géosourcé à base de ciment d’argile non calcinée. Ce procédé
        offre des performances mécaniques et environnementales remarquables.
        Fabriqué à partir d’argile locale, ce parpaing s’adapte à tous les
        projets, quelle que soit leur envergure.
      </p>
      <h2 className="mb-5 text-xl md:text-2xl">Briques de terre crue</h2>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Produit naturel fabriqué en France, la brique de terre crue offre de
        multiples avantages :
      </p>
      <ul className="text-justify text-sm  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-sm  md:text-base lg:text-lg">
          Excellente masse thermique
        </li>
        <li>Régulation de l’humidité</li>
        <li>Amélioration de la qualité de l’air intérieur</li>
        <li>Réduction des coûts de chauffage.</li>
      </ul>{" "}
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Applications possibles :
      </p>
      <ul className="text-justify text-sm  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-sm  md:text-base lg:text-lg">
          Remplissage de colombages
        </li>
        <li>Murs d’inertie (par exemple derrière un poêle à bois)</li>
        <li>Cloisons</li>
        <li>Murs porteurs (sous conditions)</li>
      </ul>{" "}
      <h2 className="mb-5 text-xl md:text-2xl">
        {" "}
        Produits en liège : panneaux isolants et isolation acoustique des sols
      </h2>
      <p className="text-justify text-sm md:text-base lg:text-lg mb-5">
        Le liège est un matériau isolant exceptionnel, 100 % naturel, compact,
        imputrescible et chimiquement neutre. Ses atouts:
      </p>
      <ul className="text-justify text-sm  md:text-base lg:text-lg mb-5 list-disc pl-5">
        <li className="text-justify text-sm  md:text-base lg:text-lg">
          Utilisable en intérieur et extérieur (nécessite un bardage ou un
          enduit en extérieur)
        </li>
        <li>Facilement recyclable et réutilisable</li>
        <li>Longévité illimitée</li>
        <li>Propriétés isolantes thermiques et acoustiques incomparables</li>
      </ul>{" "}
      <p className="text-justify text-sm md:text-base mb-5 lg:text-lg">
        Arkebat met à votre disposition ces matériaux pour concevoir des
        bâtiments performants, sains et en parfaite harmonie avec
        l’environnement.
      </p>
      <div className="mb-5">
        <Gallery
          {...{
            images: imagesLiege,
            widths,
            ratios: [1, 1, 4, 4],
            gap,
            lastRowBehavior,
          }}
        />
      </div>
    </div>
  );
};

export default Eco;
