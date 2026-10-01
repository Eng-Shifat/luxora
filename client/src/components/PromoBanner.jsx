import { useState } from "react";
import { Ticket, ShoppingBag, ShoppingCart, BadgePercent, ArrowRight } from "lucide-react";

// Scalloped (wavy-edge) badge shape
const sealPath = (() => {
  const pts = [];
  for (let a = 0; a < 360; a += 3) {
    const t = (a * Math.PI) / 180;
    const r = 48 * (1 + 0.045 * Math.cos(14 * t));
    pts.push(`${(r * Math.cos(t)).toFixed(2)} ${(r * Math.sin(t)).toFixed(2)}`);
  }
  return `M${pts.join(" L")}Z`;
})();

export default function PromoBanner() {
  const [code, setCode] = useState("");
  const claim = async () => {
    try {
      const r = await fetch("/api/claim-offer", { method: "POST" });
      setCode((await r.json()).code);
    } catch {
      setCode("");
    }
  };
  return (
    <section className="promo container">
      <div className="promo-icon"><Ticket size={38} strokeWidth={1.6} /></div>
      <div className="promo-main">
        <small>Special Offer</small>
        <h3>Get 15% Off</h3>
        <p>On Your First Order!</p>
        <button className="btn sm" onClick={claim}>{code ? `Code: ${code}` : "Claim Offer"} {!code && <ArrowRight size={14} />}</button>
      </div>
      <div className="steps">
        <div><ShoppingBag size={30} strokeWidth={1.4} /><strong>Shop</strong><span>Your Favorites</span></div>
        <i>→</i>
        <div><ShoppingCart size={30} strokeWidth={1.4} /><strong>Add to Cart</strong><span>Easily</span></div>
        <i>→</i>
        <div><BadgePercent size={30} strokeWidth={1.4} /><strong>Get Discount</strong><span>On Checkout</span></div>
      </div>
      <div className="seal" aria-label="15% off">
        <svg viewBox="-52 -52 104 104" aria-hidden="true">
          <defs>
            <linearGradient id="sealG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#CD5A33" />
              <stop offset="1" stopColor="#A8421F" />
            </linearGradient>
          </defs>
          <path d={sealPath} fill="url(#sealG)" />
        </svg>
        <div><b>15%</b><span>OFF</span></div>
      </div>
    </section>
  );
}
