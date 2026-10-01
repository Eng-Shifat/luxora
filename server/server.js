import express from "express";
import cors from "cors";
import { products } from "./data/products.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const { category } = req.query;
  const list = category && category !== "All" ? products.filter((p) => p.category === category) : products;
  res.json(list);
});

app.post("/api/newsletter", (req, res) => {
  const { email } = req.body || {};
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: "Enter a valid email address." });
  // TODO: database / email service e save korbe
  res.json({ message: "Subscribed. Check your inbox for your discount." });
});

app.post("/api/claim-offer", (req, res) => res.json({ code: "WELCOME15" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
