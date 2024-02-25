import { AstroObjectTypes } from "../../enums/AstroObjectTypes";

export const getObjectTypeFromEnum = (type: string) => {
  return Object.entries(AstroObjectTypes).find(([key, value]) => value === type)?.[0];
}