import { ZenithObject } from "../../types/ZenithObject";
import { calculateLST } from "./calculateLST";
import { timeRaToRadians } from "./timeRaToRadians";

export const calculateZenith = (latitude: number, longitude: number, date: string, time: string): ZenithObject => {
  const lst = calculateLST(longitude, date, time);
  const zenithRa = lst;
  const zenithDec = latitude;

  console.log("Zénith :", { ra: zenithRa, ra_rad: timeRaToRadians(zenithRa), dec: zenithDec });
  return { ra: zenithRa, ra_rad: timeRaToRadians(zenithRa), dec: zenithDec }
}