import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  offers: [{ type: Schema.Types.ObjectId, ref: "Offer" }],
  quantity: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
});

export default mongoose.model("Product", ProductSchema);
