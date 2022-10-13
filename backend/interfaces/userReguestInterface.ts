import { Request } from "express";
import IUser from "./userInterface";

export default interface IUserRequest extends Request {
  user: IUser;
}
