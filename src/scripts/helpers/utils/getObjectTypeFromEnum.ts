import { AstroObjectTypes } from "../../enums/AstroObjectTypes";

export const getObjectTypeFromEnum = (type: string) => {
  // Returns the value of the enum from the key
  console.log(AstroObjectTypes[type as keyof typeof AstroObjectTypes]);
  
  return AstroObjectTypes[type as keyof typeof AstroObjectTypes];
}