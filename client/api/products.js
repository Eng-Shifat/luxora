import { products } from "./_data/products.js";

export default function handler(req, res) {
  const { category } = req.query;
  const list = category && category !== "All" ? products.filter((p) => p.category === category) : products;
  res.status(200).json(list);
}
