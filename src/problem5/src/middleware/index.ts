import { NextFunction, Response, Request } from "express";
import { Resource } from "../models";

// Middleware to validate resource request
export const validateResourceRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { name, description } = req.body as Resource;
  if (!name?.trim()?.length) {
    res.status(400).send({ message: "Invalid request: 'name' is required" });
    return;
  }
  if (!description?.trim()?.length) {
    res
      .status(400)
      .send({ message: "Invalid request: 'description' is required" });
    return;
  }
  next();
};
