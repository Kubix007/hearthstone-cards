import { Schema, model } from "mongoose";
import IUser from "../interfaces/userInterface";

const userSchema = new Schema<IUser>(
  {
    login: {
      type: String,
      required: [true, "Proszę wprowadź nazwę użytkownika"],
    },
    email: {
      type: String,
      required: [true, "Proszę wprowadź adres e-mail"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Proszę wprowadź hasło"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>("User", userSchema);
