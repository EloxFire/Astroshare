import dayjs, { Dayjs } from "dayjs";

interface Coordinates {
  lat: number;
  long: number;
}

interface CelestialObject {
  RA: string;
	Dec: string;
	name: string;
}

interface ObservationParams {
  coords: Coordinates;
  dateTime: Dayjs;
  celestialObject: CelestialObject;
}

export const calculateCelestialPosition = ({
  coords,
  dateTime,
  celestialObject,
}: ObservationParams): { altitude: number; azimuth: number, name: string } => {
  // Parse RA (Right Ascension) and Dec (Declination) strings into numeric values
  const [raHours, raMinutes, raSeconds] = celestialObject.RA.split(/[^\d.-]+/).filter(Boolean).map(parseFloat);
	const [decDegrees, decMinutes, decSeconds] = celestialObject.Dec.split(/[^\d.-]+/).filter(Boolean).map(parseFloat);

  // Calculate Julian Day
  const jd = dayjs(dateTime).utc().startOf('day').add(0.5, 'day').valueOf() / 86400000 + 2440587.5;

  // Calculate local sideral time
  const lw = -coords.long * (Math.PI / 180);
  const j2000 = jd - 2451545.0;
  const gms = 18.697374558 + 24.06570982441908 * j2000;
  const gmst = (gms % 24) / 24 * 360 * (Math.PI / 180) + lw;
  const lst = (gmst * 180 / Math.PI) % 360;

  // Convert RA and Dec to radians
  const raRad = (15 * (raHours + raMinutes / 60 + raSeconds / 3600)) * (Math.PI / 180);
  const decRad = (Math.abs(decDegrees) + decMinutes / 60 + decSeconds / 3600) * (Math.PI / 180);
  const latRad = coords.lat * (Math.PI / 180);

  // Calculate hour angle
  const ha = lst - raRad;

  // Calculate altitude
  const alt = Math.asin(Math.sin(latRad) * Math.sin(decRad) + Math.cos(latRad) * Math.cos(decRad) * Math.cos(ha));

  // Calculate azimuth
  const az = Math.atan2(
    -Math.sin(ha),
    Math.tan(decRad) * Math.cos(latRad) - Math.sin(latRad) * Math.cos(ha)
  );

  return {
    altitude: alt * (180 / Math.PI), // Convert altitude from radians to degrees
		azimuth: (az >= 0 ? az : az + 2 * Math.PI) * (180 / Math.PI), // Convert azimuth from radians to degrees and normalize to [0, 360)
		name: celestialObject.name,
  };
};