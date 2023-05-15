import {RoleType} from "../enum/RoleType";

export interface User {

  id: number;
  login: string;
  firstName: string;
  lastName: string;
  role?: RoleType;
  token?: string;

}
