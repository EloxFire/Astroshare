import { birthdate } from './../helpers/helpers';
import { UserRoles } from "../enums/roles";

export type User = {
  email: string;
  role: UserRoles;
  downloadsCount: number;
  downloadsHistory: string[];
  uid: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  birthdate?: Date;
  ref?: string;
  createdAt?: Date;
  updatedAt?: Date;
}