import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, required: true },
    address: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    products: [],
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
    },
  },
  { timestamps: true }
);

export const Order =
  mongoose.models.Order ?? mongoose.model("Order", orderSchema);
