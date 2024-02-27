import { raToDegrees } from "./raToDegrees";

export const isObjectVisible = (zenithRA: string, zenithDec: number, objectRA: string, objectDec: number): boolean => {
  console.log("Calculating object visibility...");
  
  const objectRaValues = objectRA.split(' ');
  const zenithRaValues = zenithRA.split(' ');

  console.log(objectRaValues);
  console.log(zenithRaValues);
  console.log(parseInt(objectRaValues[0].slice(0, -1)), parseFloat(objectRaValues[1].slice(0, -1)), parseFloat(objectRaValues[2].slice(0, -1)));
  console.log(parseInt(zenithRaValues[0].slice(0, -1)), parseFloat(zenithRaValues[1].slice(0, -1)), parseFloat(zenithRaValues[2].slice(0, -1)));



  const objectRaDeg = raToDegrees(parseInt(objectRaValues[0].slice(0, -1)), parseFloat(objectRaValues[1].slice(0, -1)), parseFloat(objectRaValues[2].slice(0, -1)))
  const zenithRaDeg = raToDegrees(parseInt(zenithRaValues[0].slice(0, -1)), parseFloat(zenithRaValues[1].slice(0, -1)), parseFloat(zenithRaValues[2].slice(0, -1)))

  // Convertir les coordonnées en radians
  const zenithDecRad = zenithDec * (Math.PI / 180);
  const objectDecRad = objectDec * (Math.PI / 180);

  // Calculer la différence en ascension droite entre l'objet et le zénith
  const deltaRA = objectRaDeg - zenithRaDeg;

  // Calculer la hauteur de l'objet par rapport au zénith en utilisant la formule de la trigonométrie sphérique
  const height = Math.asin(Math.sin(zenithDecRad) * Math.sin(objectDecRad) + Math.cos(zenithDecRad) * Math.cos(objectDecRad) * Math.cos(deltaRA));

  // Convertir la hauteur en degrés
  const heightDegrees = height * (180 / Math.PI);

  return heightDegrees > 0 && heightDegrees < 90;
}