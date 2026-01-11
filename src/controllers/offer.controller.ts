import Offer from "../models/Offer.model";
import { Request, Response } from "express";

export const createOffer = async (req: Request, res: Response) => {
  const offer = await Offer.create(req.body);

  res.json(offer);
};

export const findAllOffer = async (req: Request, res: Response) => {
  const offer = await Offer.find({ isActive: true });

  res.json(offer);
};
