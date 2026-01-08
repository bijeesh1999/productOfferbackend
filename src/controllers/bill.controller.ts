import { Request, Response } from "express";
import Product from "../models/product.model";
import Bill from "../models/Bill.model";
import { applyBestOffer } from "../services/billing.service";
import mongoose from "mongoose";

interface BillItemInput {
  _id: string;
  qty: number;
}

interface BillItemOutput {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  appliedOffer?: mongoose.Types.ObjectId;
  discountAmount: number;
  finalPrice: number;
}

export const generateBill = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const items: { items: BillItemInput[] } = req.body;

    if (!Array.isArray(items)) {
      res.status(400).json({ message: "Items must be an array" });
      return;
    }

    let finalAmount = 0;
    let totalDiscount = 0;
    const billItems: BillItemOutput[] = [];

    for (const item of items) {
      const product = await Product.findById(item._id).populate("offers");

      if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      const { bestOffer, discount } = applyBestOffer(
        product.offers as any[],
        product.price,
        item.qty
      );
      const price = product.price * item.qty - discount;

      totalDiscount += discount;
      finalAmount += price;

      billItems.push({
        productId: product._id,
        quantity: item.qty,
        appliedOffer: bestOffer?._id,
        discountAmount: discount,
        finalPrice: price,
      });
    }

    const bill = await Bill.create({
      items: billItems,
      totalDiscount,
      finalAmount,
    });

    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate bill", error });
  }
};
