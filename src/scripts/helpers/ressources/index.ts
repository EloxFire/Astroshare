import { Ressource, RessourceCategory } from "../../types"
import { constellations_cheat_sheets } from "./general/constellation_cheat_sheets"
import { personnal_book } from "./general/personnal_book"

export const ressources: Ressource[] = [
  personnal_book,
  constellations_cheat_sheets,
]

export const ressourcesCategories: RessourceCategory[] = [
  {
    name: 'Général',
    slug: 'general',
    description: 'Ressources générales',
    longDescription: "Ces ressources généralistes sont utiles notemment pour les débutants.",
  },
  {
    name: 'Observation',
    slug: 'observation',
    description: 'Observation du ciel',
    icon: "/images/categories/observation.svg",
    longDescription: "Ces ressources sont utiles pour l'observation du ciel. Elles fournissent des supports pour vous aider lors de vos sessions d'observations.",
  },
  {
    name: 'Matériel',
    slug: 'material',
    description: 'Maitrise du matériel',
    icon: "/images/categories/material.svg",
    longDescription: "Ces ressources sont utiles pour maitriser votre matériel. Elles fournissent des supports pour vous aider à vous familiariser avec votre matériel.",
  },
]