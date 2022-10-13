import { Document } from "mongoose";

export default interface IUser extends Document {
  login: string;
  email: string;
  password: string;
}
