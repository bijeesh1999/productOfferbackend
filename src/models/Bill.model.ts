import mongoose, { Schema } from "mongoose";

const BillSchema = new Schema({
  items: [
    {
      productId: Schema.Types.ObjectId,
      quantity: Number,
      appliedOffer: Schema.Types.ObjectId,
      discountAmount: Number,
      finalPrice: Number
    }
  ],
  totalDiscount: Number,
  finalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Bill", BillSchema);
