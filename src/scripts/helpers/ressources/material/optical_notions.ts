import { Ressource } from "../../../types";
import { ressourceType, ressourcesLevels, resssourcesCategories } from "../../helpers";

export const optical_notion: Ressource = {
  slug: 'optical_notions',
  name: 'Notions d\'optique',
  category: resssourcesCategories.material,
  downloadNames: ["Télescopes et notions d'optique"],
  subtitle: 'Guide de démarrage avec le fonctionnement et les notions d\'optique des télescopes',
  description: "Ce document sur le fonctionnement de l'optique au sein des télescopes vous permet d'appréender",
  shortDescription: "Le dossier personnel d'astronomie est le document parfait pour compléter vos progrès et vos découvertes. Il vous permettra de garder une trace de vos observations et de vos progrès !",
  notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
  level: ressourcesLevels.beginner,
  format: [ressourceType.pdf],
  tags: ['Apprentissage', 'Matériel', 'Optique'],
  image: '/images/pdfs/optical_notions.jpg',
  links: ['/docs/guide.pdf'],
  creadted: new Date(2023, 8, 28), // 28 septembre 2023
  updated: new Date(2023, 8, 28), // 28 septembre 2023
}