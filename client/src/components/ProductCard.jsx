import { useState } from "react";
import { Heart } from "lucide-react";
import Img from "./Img";
import { productFit } from "../data/siteData";

// Photo-r shape dekhe card-e ki vabe boshbe seta auto thik kore:
//  - normal photo (beshirbhag)   -> cover, ager moto-i (kono poriborton nai)
//  - onek lomba photo (dress)    -> contain, puro product dekha jay
//  - onek chowra photo (jooto)   -> contain, puro product dekha jay
// Manually force korte chaile product data-te `fit: "cover"` ba `fit: "contain"` dite paro.
const TALL = 0.72;  // er cheye lomba hole contain
const WIDE = 1.6;   // er cheye chowra hole contain

function analyse(img, force) {
  const ratio = img.naturalWidth / img.naturalHeight;
  let axis = ratio < TALL ? "portrait" : ratio > WIDE ? "landscape" : "";
  let fit = axis ? "contain" : "cover";
  if (force === "cover") { fit = "cover"; axis = ""; }
  if (force === "contain" && !axis) { axis = ratio < 1 ? "portrait" : "landscape"; fit = "contain"; }

  // contain hole white background photo card-er rong-e mishe jay (shudhu tokhon-i)
  let white = false;
  if (fit === "contain") {
    try {
      const c = document.createElement("canvas");
      c.width = c.height = 32;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, 32, 32);
      const pts = [[0, 0], [30, 0], [0, 30], [30, 30], [0, 15], [30, 15]];
      white = pts.every(([x, y]) => {
        const d = ctx.getImageData(x, y, 2, 2).data;
        return (d[0] + d[1] + d[2]) / 3 >= 246;
      });
    } catch { /* canvas block hole skip */ }
  }
  return { fit, axis, white, ratio };
}

export default function ProductCard({ product: p }) {
  const [m, setM] = useState({ fit: "cover", axis: "", white: false, ratio: 1 });

  return (
    <article className="card">
      <div
        className={`card-media fit-${m.fit} ${m.axis} ${m.white ? "white" : ""}`}
        style={{ "--ar": m.ratio }}
      >
        {p.badge && <span className="badge">{p.badge}</span>}
        <button className="wish" aria-label="Add to wishlist"><Heart size={16} /></button>
        <Img src={p.image} alt={p.name} label="Product" onImageLoad={(img) => setM(analyse(img, p.fit || productFit[p.id]))} />
      </div>
      <h4>{p.name}</h4>
      <p><b>${p.price.toFixed(2)}</b> <s>${p.oldPrice.toFixed(2)}</s></p>
    </article>
  );
}
