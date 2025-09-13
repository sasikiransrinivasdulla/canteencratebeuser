import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: { type: [String], required: true }, // ["Cake", "Burger"]
  total: { type: Number, required: true }, // total price
  status: { type: String, default: "Paid" }, // default = Paid
  date: { type: Date, default: Date.now }, // order timestamp
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
