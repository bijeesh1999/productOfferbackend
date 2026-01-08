import mongoose, { Schema } from "mongoose";

const OfferSchema = new Schema({
  name: { type: String, required: true },

  type: {
    type: String,
    enum: ["BUY_X_GET_Y", "PERCENTAGE", "QUANTITY"],
    required: true
  },

  config: {
    type: Schema.Types.Mixed,
    required: true
  },

  priority: { type: Number, required: true },

  startDate: Date,
  endDate: Date,

  isActive: { type: Boolean, default: true }
});

export default mongoose.model("Offer", OfferSchema);
