import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// ✅ Create new order
router.post("/", async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items provided" });
    }

    const newOrder = new Order({ items, total });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating order", error: err.message });
  }
});

// ✅ Get all orders (for user history / later owner view)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: err.message });
  }
});

export default router;
