import { Ressource } from "../../../types";
import { ressourceType, ressourcesLevels, resssourcesCategories } from "../../helpers";

export const personnal_book: Ressource = {
  slug: 'personnal_book',
  name: 'Dossier personnel d\'astronomie',
  category: resssourcesCategories.general,
  downloadNames: ["Journal & Dossier de suivi personnel d'astronomie"],
  subtitle: 'Complétez vos progrès et vos découvertes avec ce dossier personnel d\'astronomie',
  description: "Le dossier personnel d'astronomie est le document parfait pour compléter vos progrès et vos découvertes. Il vous permettra de garder une trace de vos observations et de vos progrès !\n\n&#9888; Ce document est à compléter soi-même au fil de vos avancées en astronomie. Il contient plus de 50 pages à l'heure actuelle. &#9888;\n\nVous trouverez dans ce dossier :\n- Liste de votre matériel à compléter\n- Catalogue de Messier complet\n- Cartes des constellations de l'hémisphère nord\n- Fiches d'informations sur les objets du système solaire\n- Fiches d'utilisation du matériel d'astronomie\n\nCe document de ma conception pourra vous aider et vous guider (je l'espère) dans vos premiers pas en astronomie !",
  notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
  level: ressourcesLevels.beginner,
  format: [ressourceType.fillable],
  tags: ['Apprentissage', 'Activité', 'Dossier personnel', 'Observation', 'Matériel'],
  image: '/images/pdfs/guide.png',
  links: ['/docs/guide.pdf'],
  creadted: new Date(2023, 8, 28), // 28 september 2023
  updated: new Date(2023, 8, 28), // 28 september 2023
}