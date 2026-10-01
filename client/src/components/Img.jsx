import { useEffect, useState } from "react";

// Extension chhara path dile (jemon "/images/products/product-01") ei 4 ta format automatic try kore.
const EXTS = ["webp", "jpg", "jpeg", "png"];
const hasExt = (s) => /\.(webp|jpe?g|png|avif|svg)$/i.test(s);

export default function Img({ src, alt = "", label = "Image", className = "", onImageLoad }) {
  const [i, setI] = useState(0);
  const [ok, setOk] = useState(false);
  useEffect(() => { setI(0); setOk(false); }, [src]);

  const url = !src ? null : hasExt(src) ? src : i < EXTS.length ? `${src}.${EXTS[i]}` : null;

  return (
    <>
      {url && (
        <img
          className={`img ${className}`}
          style={ok ? undefined : { display: "none" }}
          src={url}
          alt={alt}
          onLoad={(e) => { setOk(true); onImageLoad && onImageLoad(e.currentTarget); }}
          onError={() => setI((n) => n + 1)}
        />
      )}
      {!ok && (
        <div className={`ph ${className}`} role="img" aria-label={alt || label}><span>{label}</span></div>
      )}
    </>
  );
}
