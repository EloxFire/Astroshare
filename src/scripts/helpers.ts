import { Ressource } from "./types";

export const birthdate = new Date(2000, 11, 9);

export const calculateAge = (birthday: Date) => { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const ressourcesNames = [
  'personnal_book',
  'technical_sheets_constellations',
]

export const ressources: Ressource[] = [
  {
    slug: 'personnal_book',
    name: 'Dossier personnel d\'astronomie',
    subtitle: 'Complétez vos progrès et vos découvertes avec ce dossier personnel d\'astronomie',
    description: "Le dossier personnel d'astronomie est le document parfait pour compléter vos progrès et vos découvertes. Il vous permettra de garder une trace de vos observations et de vos progrès !.\n\nVous trouverez dans ce dossier :\n- Liste de votre matériel à compléter\n- Catalogue de Messier complet\n- Cartes des constellations de l'hémisphère nord\n- Fiches d'informations sur les objets du système solaire\n- Fiches d'utilisation du matériel d'astronomie\n\nCe document de ma conception pourra vous aider et vous guider (je l'espère) dans vos premiers pas en astronomie !",
    notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
    level: "Débutant",
    format: ['PDF (complétable)'],
    tags: ['Apprentissage', 'Activité', 'Dossier personnel', 'Observation', 'Matériel'],
    image: '/images/pdfs/guide.png',
    link: '/docs/guide.pdf',
    creadted: new Date(2023, 7, 22),
    updated: new Date(2023, 7, 22),
  },
  {
    slug: 'technical_sheets_constellations',
    name: 'Fiches techniques : Les constellations',
    subtitle: 'Fiches mémo pour vous aider dans vos observations',
    description: "Les fiches mémo sont des fiches d'informations sur les constellations. Elles vous permettront de vous aider dans vos observations et de vous guider dans le ciel nocturne.\n\nVous trouverez dans ce document :\n- 44 fiches d'informations sur les constellations de l'hémisphère Nord",
    notes: "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !",
    level: "Débutant",
    format: ['PDF'],
    tags: ['Apprentissage', 'Activité', 'Fiches mémo', 'Observation', 'Constellations'],
    image: '/images/pdfs/guide.png',
    link: '/docs/guide.pdf',
    creadted: new Date(2023, 7, 22),
    updated: new Date(2023, 7, 22),
  }
]