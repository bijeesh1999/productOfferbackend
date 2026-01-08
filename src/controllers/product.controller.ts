import { Request, Response } from "express";
import Product from "../models/Product.model";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error
    });
  }
};

export const getProducts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find().populate("offers");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error
    });
  }
};

