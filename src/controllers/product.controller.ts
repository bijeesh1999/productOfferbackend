import { Request, Response } from "express";
import ProductModel from "../models/product.model";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await ProductModel.create(req.body);
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
    const products = await ProductModel.find().populate("offers");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error
    });
  }
};

