import { ErrorRequestHandler, Response } from "express";
import { Error } from "mongoose";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req,
  res: Response,
  _next
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
