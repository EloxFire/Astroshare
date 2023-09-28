import { Ressource } from "../../../types";
import { ressourceType, ressourcesLevels, resssourcesCategories } from "../../helpers";

export const constellations_cheat_sheets: Ressource = {
  slug: 'technical_sheets_constellations',
  name: 'Fiches techniques : Les constellations',
  category: resssourcesCategories.general,
  downloadNames: [
    "Toutes les constelations de l'hémisphère nord",
    "Fiche technique : La Grande Ourse",
    "Fiche technique : Hercule",
    "Fiche technique : Sagittaire",
  ],
  subtitle: 'Fiches mémo pour vous aider dans vos observations',
  description: "Les fiches mémo sont des fiches d'informations sur les constellations. Elles vous permettront de vous aider dans vos observations et de vous guider dans le ciel nocturne.\n\nVous trouverez dans ce document :\n- 44 fiches d'informations sur les constellations de l'hémisphère Nord",
  shortDescription: "Les fiches mémo sont des fiches d'informations sur les constellations. Elles vous permettront de vous aider dans vos observations et de vous guider dans le ciel nocturne.",
  notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
  level: ressourcesLevels.beginner,
  format: [ressourceType.pdf, ressourceType.zip],
  tags: ['Apprentissage', 'Activité', 'Fiches mémo', 'Observation', 'Constellations'],
  image: '/images/pdfs/cheat_sheets.png',
  links: [
    '/docs/cheat_sheets/constellations/north.zip',
    '/docs/cheat_sheets/constellations/ursa_major.pdf',
    '/docs/cheat_sheets/constellations/hercules.pdf',
    '/docs/cheat_sheets/constellations/sagittarius.pdf',
    '/docs/cheat_sheets/constellations/cygnus.pdf',
    '/docs/cheat_sheets/constellations/lyra.pdf',
  ],
  creadted: new Date(2023, 7, 22), // 22 august 2023
  updated: new Date(2023, 8, 15), // 15 september 2023
}