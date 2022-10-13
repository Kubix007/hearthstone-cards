import { Request, Response } from "express";
import { User } from "../models/userModel";
import { compare, genSalt, hash } from "bcryptjs";
import IUserRequest from "../interfaces/userReguestInterface";

const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// @desc Register new user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { login, email, password } = req.body as {
      login: string;
      email: string;
      password: string;
    };

    if (!login || !email || !password) {
      res.status(400);
      throw new Error("Proszę wypełnij wszystkie pola");
    }

    //Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("Użytkownik już istnieje");
    }

    //Hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    //Create user
    const user = await User.create({
      login,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        login: user.login,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  //Check for user email
  const user = await User.findOne({ email });

  if (user && (await compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      login: user.login,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Nieprawidłowe dane");
  }
});

// @desc Get user data
// @route Get /api/users/me
// @access Private
export const getMe = asyncHandler(async (req: IUserRequest, res: Response) => {
  const { _id, login, email } = (await User.findById(req.user.id)) as {
    _id: number;
    login: string;
    email: string;
  };

  res.status(200).json({
    id: _id,
    login,
    email,
  });
});

//Generate JWT
const generateToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
