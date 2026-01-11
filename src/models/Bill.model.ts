import mongoose, { Schema } from "mongoose";

const BillSchema = new Schema({
  items: [
    {
      product: { type: {} },
      quantity: Number,
      appliedOffer: { type: {} },
      discountAmount: Number,
      finalPrice: Number,
    },
  ],
  totalDiscount: Number,
  finalAmount: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bill", BillSchema);
