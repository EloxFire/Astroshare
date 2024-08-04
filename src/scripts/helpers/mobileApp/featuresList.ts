import { MobileAppFeature } from "../../types/MobileAppFeature";

export const appFeaturesList: MobileAppFeature[] = [
  {
    status: 'available',
    title: "Catalogue d'objets",
    subtitle: "// Cherchez, trouvez !",
    img: '/images/icons/astro/CL+N.png',
    alt: "Icône représentant une nébuleuse et un amas d'étoiles ouvert",
    description: [
      "Profitez d'une base de données de plus de 13000 objets du ciel profond, provenants des catalogues : Messier, NGC, IC, UGC, PGC",
      "Découvrez les détails de chaque objets, sa position, ses heures de lever et de couchez, les conditions d'observation, et plus encore !"
    ]
  },
  {
    status: 'available',
    title: 'Météo en direct',
    subtitle: "// C'est l'heure de sortir de télescope !",
    img: '/images/icons/FiSun.png',
    alt: 'Icône du Soleil',
    description: [
      "Cosultez la météo pour votre position actuelle ou n'importe où dans le monde de manière simple et gratuite. Découvrez si les conditions météorologiques sont favorables pour vos sessions d'observations !.",
      "Plus aucun moment de ciel dégagé ne vous échappera. Alors, c'est l'heure de sortir de télescope !"
    ]
  },
  {
    status: 'available',
    title: 'Mise en station',
    subtitle: "// Votre assistant de mise en station",
    img: '/images/icons/FiCompass.png',
    alt: 'Icône de la boussole',
    description: [
      "Notre viseur polaire digital vous permet de d'aligner votre monture avec l'étoile polaire de manière simple et précise.",
      "Profitez d'une mise à jours en temps réel du graphique pour une précision maximale. Plus besoin de chercher ailleur, Astroshare vous le permet."
    ]
  },
  {
    status: 'available',
    title: "Phases de la lune",
    subtitle: "// Calculez les phases de la lune",
    img: '/images/icons/FiMoon.png',
    alt: 'Icône de la lune',
    description: [
      "Profitez de notre outil de calcul des phases de la lune ! Ce dernier vous permet de connaître toutes les informations de notre satellite pour une date donnée."
    ]
  },
  {
    status: 'available',
    title: "Météo solaire",
    subtitle: "// Situation de notre étoile en temps réel !",
    img: '/images/icons/FiSolarWind.png',
    alt: 'Icône représentant le vent solaire',
    description: [
      "Contemplez le Soleil sous toutes ses coutures et découvrez les conditions solaires actuelles.",
      "Profitez d'images et de vidéos en temps quasi réel de tous les instruments disponibles en orbite autour du Soleil."
    ]
  },
  {
    status: 'available',
    title: "APOD",
    subtitle: "// Image du jour de la NASA",
    alt: "Image de la nébuleuse de la Trifide (crédits: NASA)",
    background: 'url("/images/promo/app/tools/apod.png")',
    description: [
      "Découvrez la position de la Station Spatiale en temps réel, ainsi qu'une prévisualisation de sa trajectoire autour du globe.",
      "*Repérez également les prochains passages de l'ISS au dessus de votre position afin de l'observer dans les méeilleures conditions."
    ]
  },
  {
    status: 'available',
    title: "ISS Tracker",
    subtitle: "// Image du jour de la NASA",
    alt: "Image de la nébuleuse de la Trifide (crédits: NASA)",
    background: 'url("/images/promo/app/tools/isstracker.png")',
    description: [
      "Découvrez la position de la Station Spatiale en temps réel, ainsi qu'une prévisualisation de sa trajectoire autour du globe.",
      "*Repérez également les prochains passages de l'ISS au dessus de votre position afin de l'observer dans les méeilleures conditions."
    ]
  },
  {
    status: 'coming-soon',
    title: 'Carte du ciel',
    subtitle: "// La voûte céleste en temps réel",
    alt: 'Icône de calendrier',
    background: 'url("/images/promo/app/tools/skymap.png")',
    description: [
      "Profitez d'un planétarium interactif intégré à Astroshare. Visualisez la position de chaque objet du ciel en temps réel et préparez vous soirée en suivant les heures de lever et de coucher de chaque objet."
    ]
  }
]