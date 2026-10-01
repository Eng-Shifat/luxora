// Image path gulo extension chhara (.jpg/.png/.webp auto detect). Folder guide: IMAGE_GUIDE.md
export const nav = ["Home", "Shop", "Categories", "New In", "Lookbook", "Pages"];

export const hero = {
  // Slide gulo auto-play hoy. Notun slide add korte shudhu ekta object add koro (01, 02, 03... auto toiri hobe).
  interval: 6000, // ms — protita slide koto sec thakbe
  // type: "full" = puro rectangle photo (background shoho) | "cutout" = transparent PNG (circle + leaf CSS diye hoy)
  type: "full",
  cta: "Explore Now",
  rating: "4.8",
  customers: "20K+ Happy Customers",
  slides: [
    {
      image: "/images/hero/hero",
      position: "60% top", // desktop photo crop position
      positionMobile: "66% top", // mobile-e photo-r kon ongsho dekhabe
      eyebrow: "New Season 2024",
      title: ["Own Your", "Signature Style"],
      text: ["Timeless pieces. Modern silhouettes.", "Made for the way you live."],
    },
    {
      image: "/images/hero/hero2",
      position: "50% 18%",
      positionMobile: "50% top",
      eyebrow: "Summer Edit",
      title: ["Soft Florals,", "Easy Days"],
      text: ["Breezy dresses in fresh, natural tones.", "Made for long, golden afternoons."],
    },
  ],
};

export const features = [
  { icon: "Truck", title: "Free Shipping", text: "On orders over $79" },
  { icon: "RotateCcw", title: "Easy Returns", text: "Within 30 days" },
  { icon: "ShieldCheck", title: "Secure Payments", text: "100% protected" },
  { icon: "Headphones", title: "24/7 Support", text: "We're here to help" },
];

export const categories = [
  { id: "summer", title: "Summer Vibes", text: "Fresh styles for sunny days", tone: "sand", size: "tall", image: "/images/categories/summer" },
  { id: "acc", title: "Chic Accessories", text: "Complete your look", tone: "sage", image: "/images/categories/accessories" },
  { id: "foot", title: "Trendy Footwear", text: "Step into comfort", tone: "sand", image: "/images/categories/footwear" },
  { id: "sun", title: "Sunglasses Collection", text: "Style that shines", tone: "mist", image: "/images/categories/sunglasses" },
  { id: "eff", title: "Effortless Outfits", text: "Everyday essentials", tone: "blush", image: "/images/categories/outfits" },
];

export const tabs = ["All", "Women", "Men", "Accessories"];

export const footer = {
  tagline: "Elevated fashion for every moment of your life.",
  columns: {
    Shop: ["All Products", "Women", "Men", "Accessories", "Sale"],
    Help: ["Contact Us", "Shipping Info", "Returns", "FAQs", "Size Guide"],
    Company: ["About Us", "Our Story", "Careers", "Privacy Policy", "Terms & Conditions"],
  },
};

// Kono product-er photo card-e kete gele ekhane fit set koro: { productId: "contain" } (puro dekha jay) ba "cover" (card bhore).
export const productFit = {
  10: "contain", // Classic White Sneakers
};
