import { User } from "./user";

export interface ResponseApi {
  results: Array<User>;
  info: object;
}
