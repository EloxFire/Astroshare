import { Ressource } from "../../../types";
import { ressourceType, ressourcesLevels, resssourcesCategories } from "../../helpers";

export const northen_constellations_maps: Ressource = {
  slug: 'northen_constellations_maps',
  name: 'Cartes des constellations de l\'hémisphère nord',
  category: resssourcesCategories.observation,
  downloadNames: ["Cartes des constellations de l'hémisphère nord"],
  subtitle: 'Repérez vous dans le ciel et trouvez les objets qui vous intéressent grâce à ces cartes des constellations',
  description: "Ce document contenant les cartes des constellations de l'hémisphère Nord vous permettra de vous repérer dans le ciel et de trouver les objets qui vous intéressent. Vous trouverez également pour chaque constellation les objets les plus intéressants à observer.\n\n&#9888; Toutes les constellations ne sont pas encore disponibles. N'hésitez pas à vérifier régulièrement les mises a jours &#9888;\n\nVous trouverez dans ce document :\n- 20 cartes des constellations majeures de l'hémisphère Nord",
  notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
  level: ressourcesLevels.all,
  format: [ressourceType.pdf],
  tags: ['Apprentissage', 'Observation'],
  image: '/images/pdfs/northen_constellation_maps.jpg',
  links: ['/docs/guide.pdf'],
  creadted: new Date(2023, 8, 28), // 28 septembre 2023
  updated: new Date(2023, 8, 28), // 28 septembre 2023
}