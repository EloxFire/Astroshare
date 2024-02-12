import { calculateLST } from "./calculateLST";

export const calculateZenith = (latitude: number, longitude: number, date: string, time: string): { ra: string, dec: number } => {
  const lst = calculateLST(longitude, date, time);
  const zenithRa = lst;
  const zenithDec = latitude;

  console.log("Zénith :", { ra: zenithRa, dec: zenithDec });
  return { ra: zenithRa, dec: zenithDec }
}