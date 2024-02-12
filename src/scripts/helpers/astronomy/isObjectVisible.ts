export const isObjectVisible = (zenithRA: string, zenithDec: number, objectRA: string, objectDec: number): boolean => {

  const objectRaValues = objectRA.split(' ');
  const zenithRaValues = zenithRA.split(' ');

  console.log(objectRA);
  console.log(zenithRA);


  const objectRaDeg = raToDegrees(parseInt(objectRaValues[0].slice(0, -1)), parseFloat(objectRaValues[1].slice(0, -1)), parseFloat(objectRaValues[2].slice(0, -1)))
  const zenithRaDeg = raToDegrees(parseInt(zenithRaValues[0].slice(0, -1)), parseFloat(zenithRaValues[1].slice(0, -1)), parseFloat(zenithRaValues[2].slice(0, -1)))

  // console.log("Object RA DEG :", objectRaDeg);
  // console.log("Zenith RA DEG :", zenithRaDeg);


  // Convertir les coordonnées en radians
  const zenithDecRad = zenithDec * (Math.PI / 180);
  const objectDecRad = objectDec * (Math.PI / 180);

  // Calculer la différence en ascension droite entre l'objet et le zénith
  const deltaRA = objectRaDeg - zenithRaDeg;

  // console.log("Delta RA :", Math.abs(deltaRA));


  // Calculer la hauteur de l'objet par rapport au zénith en utilisant la formule de la trigonométrie sphérique
  const height = Math.asin(Math.sin(zenithDecRad) * Math.sin(objectDecRad) + Math.cos(zenithDecRad) * Math.cos(objectDecRad) * Math.cos(deltaRA));

  // Convertir la hauteur en degrés
  const heightDegrees = height * (180 / Math.PI);

  // console.log("Object height :", heightDegrees);

  // console.log("Object visible :", Math.abs(deltaRA) < 90);

  // Vérifier si la hauteur est inférieure à 90 degrés
  return heightDegrees > 0 && heightDegrees < 90;
}


const raToDegrees = (hours: number, minutes: number, seconds: number) => {
  return (hours + minutes / 60 + seconds / 3600) * 15;
}