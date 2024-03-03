// Convertit une chaîne de caractères représentant RA en heures en radians
const raStringToRadians = (ra: string): number => {
    const parts = ra.split(" ");
    const hours = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);
    const totalHours = hours + minutes / 60 + seconds / 3600;
    return totalHours * (2 * Math.PI / 24);
};

// Convertit une chaîne de caractères représentant DEC en degrés en radians
const decStringToRadians = (dec: string): number => {
    const parts = dec.split(" ");
    const degrees = parseFloat(parts[0]);
    const minutes = parseFloat(parts[1]);
    const seconds = parseFloat(parts[2]);
    const totalDegrees = degrees + minutes / 60 + seconds / 3600;
    return totalDegrees * (Math.PI / 180);
};

// Vérifie si l'objet est au-dessus de l'horizon
const isObjectVisible = (zenithRA: string, zenithDEC: string, objectRA: string, objectDEC: string): boolean => {
    // Convertir les coordonnées du zénith et de l'objet en radians
    const zenithRARad = raStringToRadians(zenithRA);
    const zenithDECRad = decStringToRadians(zenithDEC);
    const objectRARad = raStringToRadians(objectRA);
    const objectDECRad = decStringToRadians(objectDEC);

    // Calculer l'angle horaire de l'objet par rapport au zénith
    const hourAngle = zenithRARad - objectRARad;

    // Calculer la hauteur de l'objet au-dessus de l'horizon
    const altitude = Math.asin(Math.sin(zenithDECRad) * Math.sin(objectDECRad) + Math.cos(zenithDECRad) * Math.cos(objectDECRad) * Math.cos(hourAngle));

    // Vérifier si l'objet est au-dessus de l'horizon (altitude positive)
    return altitude > 0;
};