import {RoleType} from "../enum/RoleType";

export interface User {

  id: number;
  login: string;
  password: String;
  firstName: string;
  lastName: string;
  role?: RoleType;
  token?: string;

}
