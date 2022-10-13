import { User } from "../models/userModel";
import { RequestHandler, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export const protect: RequestHandler = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    let token: string = "";
    const authorization = (req.headers as { authorization: string })
      .authorization;

    if (authorization && authorization.startsWith("Bearer")) {
      try {
        //Get token from header
        token = authorization.split(" ")[1];

        //Verify token
        const decoded: JwtPayload = jwt.verify(
          token,
          process.env.JWT_SECRET as Secret
        ) as JwtPayload;

        //Get user from the token
        req.user = await User.findById(decoded.id).select("-password"); //Zwracamy usera bez hasła

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Nieuzyskano autoryzacji");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Nieautoryzowano, brak tokenu");
    }
  }
);
