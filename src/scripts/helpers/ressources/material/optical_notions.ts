import { Ressource } from "../../../types";
import { ressourceType, ressourcesLevels, resssourcesCategories } from "../../helpers";

export const optical_notion: Ressource = {
  slug: 'optical_notions',
  name: 'Télescopes et notions d\'optique',
  category: resssourcesCategories.material,
  downloadNames: ["Télescopes et notions d'optique"],
  subtitle: 'Découvrez le fonctionnement de l\'optique dans les télescopes',
  description: "Ce document sur le fonctionnement de l'optique au sein des télescopes vous permet de mieux comprendre le fonctionnement général de votre appareil et de sa capacité à vous montrer une image nette des objets célestes que vous observez.\n\nDans ce document, vous apprendrez notamment :\n- Fonctionnement de l'optique d'un télescope\n- Les types de télesccopes\n- L'entretient d'un télescope",
  notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
  level: ressourcesLevels.beginner,
  format: [ressourceType.pdf],
  tags: ['Apprentissage', 'Matériel', 'Optique'],
  image: '/images/pdfs/optical_notions.jpg',
  links: ['/docs/guide.pdf'],
  creadted: new Date(2023, 8, 28), // 28 septembre 2023
  updated: new Date(2023, 8, 28), // 28 septembre 2023
}