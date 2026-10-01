const p = (id, name, price, oldPrice, category, badge) => ({
  id, name, price, oldPrice, category, badge, image: `/images/products/product-${String(id).padStart(2, "0")}`,
});

export const products = [
  p(1, "Linen Puff Sleeve Top", 34.99, 49.99, "Women", "NEW"),
  p(2, "Floral Midi Dress", 39.99, 49.99, "Women", "-20%"),
  p(3, "Striped Knit Sweater", 32.99, 44.99, "Women", "NEW"),
  p(4, "Classic Tote Bag", 49.99, 59.99, "Accessories", "-15%"),
  p(5, "Casual Linen Shirt", 29.99, 39.99, "Men", "NEW"),
  p(6, "Smart Polo T-Shirt", 24.99, 34.99, "Men", "-25%"),
  p(7, "High Rise Jeans", 42.99, 54.99, "Women", "NEW"),
  p(8, "Utility Bomber Jacket", 59.99, 84.99, "Men", "-30%"),
  p(9, "Minimal Watch", 39.99, 49.99, "Accessories", "NEW"),
  p(10, "Classic White Sneakers", 44.99, 54.99, "Men", "-20%"),
];
