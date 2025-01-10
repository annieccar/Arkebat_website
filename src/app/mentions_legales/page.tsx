import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Mentions Légales - Arkebat",
  description:
    "Consultez les mentions légales d'Arkebat, qui détaillent les informations légales obligatoires relatives à notre site et à notre activité de construction et rénovation.",
  openGraph: {
    title: "Mentions Légales - Arkebat",
    description:
      "Les mentions légales d'Arkebat détaillent les informations nécessaires sur notre entreprise et le site web, conformément aux exigences légales.",
    url: "https://arkebat.fr/mentions_legales",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mentions Légales - Arkebat",
    description:
      "Accédez aux mentions légales d'Arkebat, où vous trouverez toutes les informations légales requises pour notre site web et nos services.",
  },
};

function mentions() {
  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] mx-auto ">
      <h1 className="py-10 text-2xl md:text-3xl">
        Informations légales et confidentialité
      </h1>
      <h2 className=" pb-5 text-lg md:text-xl">Mentions légales</h2>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>
          Identité de l&apos;enreprise:<br></br> Arkebat SARL 14 allée de cantau
          64600 Anglet{" "}
        </li>
        <li>
          Numéro d&apos;immatriculation au RCS: 952 142 701 R.C.S. Bayonne{" "}
        </li>
        <li>Adresse mail: arkebat.renovation@gmail.com </li>
        <li>Numéro de téléphone: 06 84 59 05 96/ 06 10 69 63 83 </li>
        <li>Numéro d&apos;identification à la TVA: FR51952142701 </li>
        <li>SIRET: 952 142 701 00012 </li>
        <li>Identité de l&apos;hébergeur du site :</li>
        <ul className="text-justify text-sm  md:text-base mb-5  pl-5">
          <li>Hébergeur : Vercel Inc.</li>
          <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
          <li>
            Site web :{" "}
            <span>
              <Link
                className="underline decoration-1 hover:text-icon"
                href="https://vercel.com"
              >
                https://vercel.com
              </Link>
            </span>
          </li>
        </ul>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">Politique de confidentialité</h2>
      <p className="text-justify text-sm md:text-base mb-5">
        Nous attachons une grande importance à la confidentialité de vos données
        personnelles. Cette page explique quelles informations nous collectons,
        comment nous les utilisons et vos droits concernant vos données
        personnelles.
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Le responsable du traitement des données collectées via ce site est :
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        SARL ARKEBAT<br></br>
        E-mail : arkebat.renovation@gmail.com
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Nous collectons uniquement les informations personnelles que vous nous
        fournissez volontairement via le formulaire de contact, notamment :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>Votre nom</li>
        <li>Votre adresse e-mail</li>
        <li>Votre numéro de téléphone</li>
        <li>Le contenu du message que vous nous envoyez</li>
      </ul>
      <p className="text-justify text-sm md:text-base mb-5">
        Ces informations sont nécessaires pour répondre à vos demandes ou
        questions.
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Les données collectées via le formulaire de contact sont utilisées
        uniquement pour répondre à vos messages et demandes. Vos données ne
        seront jamais vendues, louées ou partagées avec des tiers à des fins
        commerciales.
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Nous conservons vos données personnelles uniquement le temps nécessaire
        pour traiter vos demandes, sauf si la loi impose une période de
        conservation plus longue.
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Notre formulaire de contact utilise le service Formspree, qui agit en
        tant que sous-traitant pour collecter vos messages et les transmettre à
        notre adresse e-mail. Pour plus d’informations sur la gestion de vos
        données par Formspree, consultez leur{" "}
        <Link
          href="https://formspree.io/legal/privacy-policy/"
          className="underline decoration-1 hover:text-icon"
          target="_blank"
        >
          politique de confidentialité.
        </Link>
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Nous mettons en œuvre des mesures techniques et organisationnelles pour
        protéger vos données personnelles contre tout accès non autorisé, perte,
        destruction ou divulgation.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">Vos droits</h2>
      <p className="text-justify text-sm md:text-base mb-5">
        En vertu du RGPD, vous avez les droits suivants :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>
          Accès : Demander une copie des données que nous détenons à votre
          sujet.
        </li>
        <li>
          Rectification : Corriger toute information inexacte ou incomplète.
        </li>
        <li>
          Suppression : Demander la suppression de vos données personnelles.
        </li>
        <li>
          Opposition : Vous opposer au traitement de vos données pour des motifs
          légitimes.
        </li>
        <li>
          Portabilité : Recevoir vos données dans un format structuré et
          transférable.
        </li>
      </ul>
      <p className="text-justify text-sm md:text-base mb-5">
        Pour exercer vos droits, veuillez nous contacter à
        arkebat.renovation@gmail.com.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">Cookies</h2>
      <p className="text-justify text-sm md:text-base mb-5">
        Ce site utilise uniquement les cookies strictement nécessaires à son
        fonctionnement et ne collecte pas de données analytiques ou
        publicitaires.<br></br> Si des cookies étaient ajoutés à l’avenir, nous
        vous en informerons et vous demanderons votre consentement conformément
        à la législation applicable.
      </p>

      <p className="text-justify text-sm md:text-base mb-5">
        Cette politique peut être mise à jour pour refléter des changements
        législatifs ou des améliorations apportées à notre site. Nous vous
        invitons à consulter régulièrement cette page.
      </p>
      <p className="text-justify text-sm md:text-base mb-5">
        Pour toute question concernant cette politique ou vos données
        personnelles, vous pouvez nous contacter à arkebat.renovation@gmail.com.
      </p>
    </div>
  );
}

export default mentions;
