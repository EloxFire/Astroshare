import { Dayjs } from "dayjs";
import { raToDegrees } from "./raToDegrees";

// Fonction pour calculer le temps sidéral local (LST)
export const calculateLST = (latitude: number, longitude: number, date: Dayjs): number => {
    // Convertir la latitude et la longitude en radians
    const latRad = latitude * (Math.PI / 180); // Conversion de degrés en radians
    const longRad = longitude * (Math.PI / 180); // Conversion de degrés en radians

    // Extraire les composants de la date
    const year = date.year();
    const month = date.month() + 1; // Mois (de 0 à 11)
    const day = date.date();
    const hours = date.hour();
    const minutes = date.minute();
    const seconds = date.second();

    // Calculer le nombre de jours juliens
    const julianDay = (year: number, month: number, day: number, hours: number, minutes: number, seconds: number): number => {
        const A = Math.floor((14 - month) / 12);
        const Y = year + 4800 - A;
        const M = month + 12 * A - 3;
        return day + Math.floor((153 * M + 2) / 5) + 365 * Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(Y / 400) - 32045 + (hours - 12 + (minutes / 60) + (seconds / 3600)) / 24;
    };

    // Calculer le temps sidéral local (en heures)
    const JD = julianDay(year, month, day, hours, minutes, seconds);
    const T = (JD - 2451545.0) / 36525; // Nombre de siècles depuis l'époque J2000.0
    const GMST = 280.46061837 + 360.98564736629 * (JD - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000; // Temps sidéral moyen de Greenwich (en degrés)
    let LST = (GMST + longRad * 180 / Math.PI) % 360; // Temps sidéral local (en degrés)

    return LST; // Retourne le temps sidéral local (en degrés)
};