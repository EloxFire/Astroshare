import { Ressource, RessourceCategory } from "../../types"
import { constellations_cheat_sheets } from "./general/constellation_cheat_sheets"
import { personnal_book } from "./general/personnal_book"

export const ressources: Ressource[] = [
  personnal_book,
  constellations_cheat_sheets
]

export const ressourcesCategories: RessourceCategory[] = [
  {
    name: 'Général',
    slug: 'general',
    description: 'Ressources générales',
  },
  {
    name: 'Observation',
    slug: 'observation',
    description: 'Observation du ciel',
    icon: "/images/categories/observation.svg"
  },
  {
    name: 'Matériel',
    slug: 'material',
    description: 'Maitrise du matériel',
    icon: "/images/categories/material.svg"
  },
]