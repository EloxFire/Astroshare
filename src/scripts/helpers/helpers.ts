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