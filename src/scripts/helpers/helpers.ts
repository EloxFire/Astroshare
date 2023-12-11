export const birthdate = new Date(2000, 11, 9);

export const calculateAge = (birthday: Date) => { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const ressourceType = {
  pdf: 'PDF',
  fillable: 'PDF (complétable)',
  zip: 'ZIP',
  image: 'Image',
  video: 'Vidéo',
  audio: 'Audio',
  website: 'Site web',
  other: 'Autre',
}

export const resssourcesCategories = {
  general: 'general',
  observation: 'observation',
  theory: 'theory',
  material: 'material',
  other: 'other',
}

export const ressourcesLevels = {
  all: 'Tous niveaux',
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
}

export const imageProperties = {
  url: "Url de l'image",
  resolution: "Résolution de l'image",
  fileFormat: "Format du fichier",
  tags: "Tags de l'image",
  cameraSettings: {
    name: "Nom de l'appareil photo",
    iso: "ISO (Number)",
    shutter: "Vitesse d'obturation",
    aperture: "Ouverture",
    fps: "FPS (Number)",
    focalLength: "Longueur focale",
  },
  scopeSettings: {
    name: "Nom du télescope",
    mount: "Monture",
    focal: "Longueur focale (Number)",
    diameter: "Diamètre (Number)",
    focalRatio: "Rapport focal",
    eyePiece: "Oculaire",
    eyePieceMagnification: "Grossissement (Number)",
    barlow: "Barlow",
  },
  processingSettings: {
    software: "Logiciel de traitement",
    stacking: "Empilement (Oui / Non)",
    stackingSoftware: "Logiciel d'empilement",
    stackingFrames: "Nombre d'images empilées",
    stackingTime: "Temps d'acquisition par image",
    stackingTimeTotal: "Temps total d'acquisition",
  }
}

export const ressourceProperties = {
  subtitle: "Sous-titre",
  notes: "Notes",
  format: "Format",
  image: "Image",
  links: "Liens",
  tags: "Tags",
}

export const genericRessourceNotes = "Ce document est accessible gratuitement. Des mises à jour sont postés régulièrement, n'hésitez pas à télécharger la dernière version !"