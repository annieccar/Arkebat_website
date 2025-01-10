import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Arkebat",
  description:
    "Consultez les Conditions Générales de Vente d'Arkebat, pour connaître les termes et conditions qui régissent nos services de construction, rénovation, et éco-construction.",

  openGraph: {
    title: "Conditions Générales de Vente - Arkebat",
    description:
      "Découvrez les Conditions Générales de Vente d'Arkebat, qui détaillent les modalités des services que nous proposons en matière de construction, rénovation, et éco-construction.",
    url: "https://arkebat.fr/cgv", // Replace with the actual URL of the CGV page
    type: "website",
  },
  twitter: {
    card: "summary", // No image needed for CGV page
    title: "Conditions Générales de Vente - Arkebat",
    description:
      "Consultez les Conditions Générales de Vente d'Arkebat pour en savoir plus sur nos services, les obligations et les droits liés à vos projets de construction.",
  },
};

function cgv() {
  return (
    <div className="mt-20 px-10 max-w-[600px] lg:max-w-[800px] xl:max-w-[1024px] mx-auto ">
      <h1 className="py-10 text-2xl md:text-3xl">
        Conditions générales de vente
      </h1>
      <p className="text-justify text-sm md:text-base mb-5">
        Le présent contrat s&apos;applique à tous travaux de construction,
        d&apos;extension, de modification ou d&apos;aménagement d&apos;une
        maison individuelle, d&apos;un logement ou de toute construction pour un
        particulier ou une personne morale, il est établi pour apporter au
        client des garanties de compétence et de qualité. Toute commande
        acceptée par la société Arkebat SARL entraîne pour le client son
        adhésion aux présentes conditions générales. Toutes clauses contraires
        imprimées ou non sur les documents du client sont inopposables à la
        société Arkebat SARL. En l&apos;absence de tout contrat signé avant le
        début des travaux, la présente proposition s&apos;appliquera en totalité
        et sans réserve.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.1 – DESCRIPTION DE L&apos;OPERATION
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL déclare que les prestations de maitrise d’œuvre,
        l’assistance à maitrise d’ouvrage et les travaux seront exécutés suivant
        les règles de l&apos;art et conformément aux textes et documents
        techniques applicables aux travaux, objet du présent contrat. La société
        Arkebat SARL n&apos;est engagée que par des opérations portées et
        chiffrées sur le devis à l&apos;exclusion de toutes autres. Toutes
        modifications de prestations de maitrise d’œuvre, d’assistance à
        maitrise d’ouvrage ou travaux, demandées par le client feront
        l&apos;objet d&apos;un avenant définissant la nature des modifications
        et le nouveau prix global qui en découle.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.2 – PROTECTION DU CONSOMMATEUR
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        1- Il est fait application de la loi n°72.1137 du 22 décembre 1972.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        2- Les opérations visées à l&apos;article 1er (de la loi du 22/12/1972)
        doivent faire l&apos;objet d&apos;un contrat/devis dont un exemplaire
        doit être remis au client et comporter sous peine de nullité les
        mentions suivantes :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li className="text-justify text-sm  md:text-base mb-5">
          Désignation précise de la nature et des caractéristiques des
          marchandises ou des objets offerts ou des services proposés.
        </li>
        <li>
          Conditions d&apos;exécution du contrat notamment les modalités et le
          délai de livraison des marchandises ou objets, ou d&apos;exécution de
          la prestation de services.
        </li>
        <li>Prix global à payer et modalités de paiement.</li>
      </ul>
      <p className="text-justify text-sm  md:text-base mb-5">
        3- Dans les sept jours, jours fériés compris à compter de la commande ou
        de l&apos;engagement d&apos;achat, le client a la faculté d&apos;y
        renoncer par lettre recommandée avec AR. Toute clause du contrat par
        laquelle le client abandonne son droit de renoncer à sa commande ou son
        engagement d&apos;achat est nulle et non-avenue.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        4- Avant l&apos;expiration du délai de réflexion prévu à l&apos;article
        3 nul ne peut exiger ou obtenir du client directement ou indirectement à
        quelque titre ni sous quelque forme que ce soit une contrepartie
        quelconque ni aucun engagement.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">ART.3 – CONDITIONS DE PRIX</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Le prix global des travaux comprend :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>
          Le prix de base hors taxe, tel que mentionné dans le contrat et ses
          avenants.
        </li>
        <li>
          La TVA calculée en vigueur à la date du règlement. Ce prix ne comprend
          pas les impôts taxes redevances.
        </li>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.4 – ACTUALISATION DU PRIX
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Le prix énoncé est ferme et définitif jusqu&apos;à la fin du chantier
        sous réserve que l&apos;ordre de démarrage notifié par le client
        intervienne au plus tard deux mois après la signature des présentes. A
        défaut, le délai qui s&apos;écoulera entre le terme de deux mois et la
        date de démarrage entraînera une revalorisation selon les indices BT01
        du dernier trimestre paru.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.5 – DELAI D&apos;EXECUTION
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Les travaux débuteront dans les délais d&apos;usage de la société
        Arkebat SARL.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.6 – FORMALITES A ACCOMPLIR AVANT LE DEBUT DES TRAVAUX
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL peut demander au client, avant le début des
        travaux, de lui adresser, suivant le cas :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>Permis de construire, ou modificatif dudit permis.</li>
        <li>Plans, coupes, et autres éléments définissant les travaux.</li>
        <li>Attestation de propriété ou de l&apos;accord du propriétaire.</li>
        <li>Confirmation de l&apos;obtention des prêts.</li>
        <li>
          L&apos;autorisation de démolition. Le client s&apos;engage à ne pas
          retarder la satisfaction des conditions ainsi énumérées. Le délai de
          démarrage des travaux seront comptés à partir de la date à laquelle la
          dernière des conditions énumérées ci-dessus est remplie et sous
          réserve qu&apos;aient été levées les conditions suspensives au permis
          de construire et/ou au prêt.
        </li>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">ART.7 – OBLIGATION DU CLIENT</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Il s&apos;engage à :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>Payer régulièrement ses situations de travaux.</li>
        <li>
          Laisser le libre accès à la société Arkebat SARL pendant toute la
          durée des travaux.
        </li>
        <li>
          Fournir gratuitement l&apos;eau et l&apos;énergie nécessaire aux
          travaux.
        </li>
        <li>
          Assister régulièrement aux réunions de chantier demandées par la
          société Arkebat SARL.
        </li>
        <li>Ne pas donner d&apos;ordre au personnel exécutant.</li>
        <li>Régler directement les taxes et impôts privés.</li>
        <li>
          Ne pas traiter les travaux supplémentaires avec les exécutants
          sous-traitants. Cette liste n&apos;est pas limitative.
        </li>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.8 – DEROULEMENT DES TRAVAUX
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL sous son entière responsabilité sous-traite tout
        ou partie des travaux à toutes entreprises de son choix, dans les
        conditions légales et règlementaires. Elle se réserve également le droit
        :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>
          D&apos;interdire l&apos;accès au chantier à toute personne étrangère
          ou parties contractantes.
        </li>
        <li>
          De faire visiter le chantier au client, à la demande de ce dernier ou
          à sa propre initiative, sans que ces visites puissent avoir un
          caractère abusif.
        </li>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.9 – RECEPTION DES TRAVAUX
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Dès l&apos;achèvement des travaux, le client sera convoqué à la
        réception par la société Arkebat SARL. Cette réception sera consignée
        dans un procès-verbal, signé par les parties qui indiquera les réserves
        éventuelles et le délai accordé à la société Arkebat SARL pour les
        lever. Les travaux seront réceptionnés au plus tard 15 jours après leur
        achèvement. A défaut de cette réception dans les 30 jours suivant
        l’achèvement des travaux, ceux-ci seront considérés comme acceptés sans
        réserve.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">ART.10 – REGLEMENT</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Sauf stipulation contraire et écrite lors de l&apos;enregistrement de la
        commande, l&apos;acheteur devra verser un acompte de 30% du montant
        global du devis TTC.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Sauf stipulation contraire et écrite, nos factures sont payables net au
        comptant sans remise, ni escompte. Le règlement s&apos;effectue à
        l’échéance stipulée sur la facture, par chèque à l&apos;ordre d’Arkebat
        SARL, ou par virement bancaire avec les références de la facture
        indiquées :
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Crédit Agricole Pyrénées Gascogne
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        IBAN : FR76 1690 6030 0887 0548 7821 237 BIC AGRIFRPP869
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.11 – INDEMNITES DE RETARD A LA CHARGE DU CLIENT
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Le paiement des situations doit se faire aux dates convenues sur les
        factures intermédiaires.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Le non- paiement, donnera lieu de plein droit et sans qu&apos;aucune
        mise en demeure ne soit nécessaire à des pénalités de retard sur la base
        du taux BCE majoré de dix (10) points et au paiement d&apos;une
        indemnité forfaitaire pour frais de recouvrement d&apos;un montant de
        40€. Si le règlement n&apos;intervient pas quinze jours après mise en
        demeure adressée par lettre recommandée avec AR. La société Arkebat SARL
        suspendra les travaux sans autre formalité.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Ce retard prolongera d&apos;autant le délai d&apos;exécution et la date
        de réception.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        La résiliation du contrat ne pourra avoir lieu qu&apos;un mois après la
        réception de la mise en demeure notifiée au client par lettre
        recommandée avec AR, à moins que les parties ne concluent un accord
        amiable modifiant la durée du chantier et les délais de paiement et
        prévoient la révision du prix de la manière indiquée ci-après. Cet
        accord devra être conclu par écrit. A défaut d&apos;accord, la
        résolution judiciaire pourra être demandée. La société Arkebat SARL doit
        le notifier au client par lettre recommandée avec AR ou par acte extra
        judiciaire. Si avant que la résolution judiciaire ne soit prononcée, le
        client désire reprendre les travaux, la société Arkebat SARL pourra
        exiger :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>Le règlement des indemnités prévues ci-dessus.</li>
        <li>
          L&apos;annulation de la clause de l&apos;article 10 par avenant au
          contrat.
        </li>
        <li>
          Un constat d&apos;huissier aux frais avancés par le client pour
          constater les détériorations ou les voies d&apos;ouvrages déjà
          réalisées ou mises en œuvre sur le chantier.
        </li>
        <li>
          Le règlement du montant établi par l&apos;expert en vue de la remise
          en l&apos;état du chantier, la société Arkebat SARL étant seule
          habilitée pour en assurer ou en faire assurer l&apos;exécution.
        </li>
        <li>
          Le règlement du montant des frais engagés par la société Arkebat SARL
          pour le repli la nouvelle amenée et la nouvelle installation du
          chantier.
        </li>
        <li>
          La révision du coût des travaux depuis la notification d&apos;appel de
          fonds jusqu&apos;à la reprise. La notification d&apos;avoir à
          effectuer cette reprise sera à faire par le client par lettre
          recommandée avec AR ou par acte extra judiciaire. La société Arkebat
          SARL aura alors un délai d&apos;un mois pour effectuer cette reprise.
          L&apos;indice de révision choisi est l&apos;indice du bâtiment BT01
          avec pour base le dernier indice connu lors de la notification de
          l&apos;appel de fonds par rapport au dernier connu lors de la reprise
          des travaux.
        </li>
      </ul>
      <h2 className=" pb-5 text-lg md:text-xl">ART.12–ASSURANCES</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL ne sera tenue à aucune indemnisation envers le
        client pour des dommages à des biens distincts de l&apos;objet du
        contrat ou manque à gagner. Tout dégât survenant lors des travaux doit
        faire l&apos;objet d&apos;une déclaration par lettre recommandée au
        siège de la société Arkebat SARL dans les huit jours suivant la fin des
        travaux. Passé ce délai, la société Arkebat SARL déclinera toute
        responsabilité. La société Arkebat SARL déclare être assurée contre les
        conséquences pécuniaires de sa responsabilité civile dans les conditions
        imposées par la loi 78.12 du 04/01/1978 et le cas échéant, pour sa
        responsabilité biennale et décennale mise en charge par les articles
        1792.2770 et annexe du code civil.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Nos assurances et notre garantie ne fonctionneront que sur les travaux
        réalisés par Arkebat SARL. Cette assurance ne s&apos;applique pas, en
        cas de modification ou de réparations effectuées par des personnes
        autres que Arkebat SARL, en cas d&apos;accident, décharges électriques,
        foudre, produits chimiques, surtension de l&apos;alimentation et de tout
        phénomène anormal, en cas de mauvaise utilisation du matériel installé.
        Le client doit avoir souscrit une police d&apos;assurance contre les
        risques d&apos;incendie ainsi qu&apos;une assurance chômage.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        SMA SERVICES CS 71201 8 RUE LOUIS ARMAND - pose de matériaux contribuant
        à l&apos;isolation, 75738 PARIS CEDEX 15
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        N° Contrat : 8632000 / 003 193644/0
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        L&apos;indication de la date de démarrage souhaitée portée sur le devis
        n&apos;est donnée qu&apos;à titre indicatif et ne peut en aucune manière
        engager la société Arkebat SARL ni donner droit à une quelconque
        indemnité de la part de la société Arkebat SARL. Pour ce délai
        d&apos;exécution, se rapporter aux conditions particulières du présent
        contrat. Ces délais seront prorogés de plein droit :
      </p>
      <ul className="text-justify text-sm  md:text-base mb-5 list-disc pl-5">
        <li>
          En cas de force majeure telle que : grèves, intempéries. À ce titre,
          la force majeure s&apos;entend de tout événement extérieur,
          imprévisible et irrésistible au sens de l&apos;article
        </li>
      </ul>

      <h2 className=" pb-5 text-lg md:text-xl">
        ART.13 – CLAUSES RESOLUTOIRES
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Le contrat est résilié de plein droit si la demande de permis de
        construire ou la demande de modification de permis de construire
        renouvelée une fois, fait l&apos;objet d&apos;un second refus. Les
        sommes seront restituées dans le mois de la résolution pour les travaux
        nécessitant ce permis ou de modificatif. Le client déclare que le prix
        sera payé partiellement au moyen de prêts. En cas de refus total de ces
        prêts, il sera remboursé intégralement dans le mois suivant la
        résolution. En cas de refus partiel ou de diminution de ses possibilités
        financières, la société Arkebat SARL lui proposera un allègement de son
        plan ou de ses prestations. L&apos;obtention partielle du financement
        n&apos;entraîne pas la caducité du présent contrat, mais seulement sa
        modification dans le sens d&apos;un réajustement aux nouvelles
        conditions financières. Le contrat sera résolu de plein droit si le
        client fait preuve d&apos;une carence persistante en particulier au
        niveau de ses paiements. Cette résolution entraînera à sa charge :
        indemnités, dommages et intérêts appréciés par les tribunaux.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">ART.14 – INDEMNITES</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        En dehors des clauses ci-dessus, si le client dénonce son contrat avant
        le début des travaux, il règlera à la société Arkebat SARL, à titre de
        dommages et intérêts, une somme égale à 20% du montant du devis.
        S&apos;il renonce à son contrat de travaux entrepris (toute phase
        commencée étant due en totalité) il devra verser à la société Arkebat
        SARL une indemnité égale à 15% du montant dû. S&apos;il décide, en cours
        de travaux, de retirer à la société Arkebat SARL une prestation
        qu&apos;il souhaite de réserver, il devra verser une indemnité de 20% du
        montant ainsi annulé.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL reste seule propriétaire des matériaux et
        éléments techniques, qu&apos;ils soient seulement approvisionnés sur le
        chantier ou qu&apos;ils soient incorporés à l&apos;ouvrage, et ce
        jusqu&apos;au paiement effectif de la part du client.
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL conserve en toute hypothèse ses droits, et
        notamment l&apos;entière propriété de ses plans, études avant-projets
        avec l&apos;exclusivité des droits de reproduction (conformément à la
        loi du 11/03/1957 et à toute autre loi en vigueur ou à venir).
      </p>
      <p className="text-justify text-sm  md:text-base mb-5">
        Tout litige relatif à l&apos;interprétation et à l&apos;exécution des
        présentes conditions générales de vente est soumis au droit français. À
        défaut de résolution amiable, il est fait attribution de compétence aux
        tribunaux du siège social de notre entreprise.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">
        ART.15 – PROPRIETE DES MATERIAUX
      </h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL reste seule propriétaire des matériaux et
        éléments techniques, qu&apos;ils soient seulement approvisionnés sur le
        chantier ou qu&apos;ils soient incorporés à l&apos;ouvrage, et ce
        jusqu&apos;au paiement effectif de la part du client.
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">ART.16 – PROPRIETE DES PLANS</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        La société Arkebat SARL conserve en toute hypothèse ses droits, et
        notamment l&apos;entière propriété de ses plans, études avant-projets
        avec l&apos;exclusivité des droits de reproduction (conformément à la
        loi du 11/03/1957 et à toute autre loi en vigueur ou à venir).
      </p>
      <h2 className=" pb-5 text-lg md:text-xl">ART.17 – TRIBUNAL COMPETENT</h2>
      <p className="text-justify text-sm  md:text-base mb-5">
        Tout litige relatif à l&apos;interprétation et à l&apos;exécution des
        présentes conditions générales de vente est soumis au droit français. À
        défaut de résolution amiable, il est fait attribution de compétence aux
        tribunaux du siège social de notre entreprise.
      </p>
    </div>
  );
}

export default cgv;
