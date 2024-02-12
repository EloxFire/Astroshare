import { raToDegrees } from "./raToDegrees";

// Fonction pour calculer le nombre de jours juliens
export const julianDay = (year: number, month: number, day: number, hours: number, minutes: number, seconds: number): number => {
  const A = Math.floor((14 - month) / 12);
  const Y = year + 4800 - A;
  const M = month + 12 * A - 3;
  return day + Math.floor((153 * M + 2) / 5) + 365 * Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(Y / 400) - 32045 + (hours - 12 + (minutes / 60) + (seconds / 3600)) / 24;
};

// Fonction pour calculer le temps sidéral local
export const calculateLST = (longitude: number, date: string, time: string): string => {
  // Convertir la longitude en radians
  const longRad = longitude * (Math.PI / 180); // Conversion de degrés en radians

  // Extraire les composants de la date et de l'heure
  const [year, month, day] = date.split('-').map(Number);
  const [hours, minutes, seconds] = time.split(':').map(Number);

  // Calculer le temps sidéral local (en heures)
  const JD = julianDay(year, month, day, hours, minutes, seconds);
  const T = (JD - 2451545.0) / 36525; // Nombre de siècles depuis l'époque J2000.0
  const GMST = 280.46061837 + 360.98564736629 * (JD - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000; // Temps sidéral moyen de Greenwich (en degrés)
  let LST = (GMST + longRad * 180 / Math.PI) % 360; // Temps sidéral local (en degrés)

  // Convertir le temps sidéral local en heures, minutes et secondes
  LST = LST < 0 ? LST + 360 : LST; // Ajustement pour s'assurer que LST est positif
  const lstHours = Math.floor(LST / 15) - 1; // Conversion de degrés en heures (-1 pour prise en compte de mo, fuseau horaire)
  const lstMinutes = Math.floor((LST % 15) * 4); // Conversion de minutes (1 heure = 60 minutes, 360 degrés = 24 heures => 1 degré = 4 minutes)
  const lstSeconds = Math.round((((LST % 15) * 4) - lstMinutes) * 60); // Conversion de secondes (1 minute = 60 secondes)



  // Formater l'heure locale sidérale comme une chaîne HH:MM:SS
  const lstString = `${lstHours.toString().padStart(2, '0')}h ${lstMinutes.toString().padStart(2, '0')}m ${lstSeconds.toString().padStart(2, '0')}s`;
  console.log("Heure locale sidérale :", lstString);

  const lstStringValues = lstString.split(' ');

  console.log(parseInt(lstStringValues[0].slice(0, -1)), parseFloat(lstStringValues[1].slice(0, -1)), parseFloat(lstStringValues[2].slice(0, -1)));

  console.log(raToDegrees(parseInt(lstStringValues[0].slice(0, -1)), parseFloat(lstStringValues[1].slice(0, -1)), parseFloat(lstStringValues[2].slice(0, -1))));

  // const utcHours = Math.floor((hours - (longitude / 15) + 24) % 24); // Ajustement pour le décalage horaire
  //const utcString = `${utcHours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  //console.log("Heure UTC :", utcString);

  return lstString;
};