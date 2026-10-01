import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Je link/button er page ekhono nai, sheta click korle ei popup ashbe.
export default function ComingSoon() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const open = (n) => setName(n || "This page");
    const onSoon = (e) => open(e.detail);
    const onClick = (e) => {
      const a = e.target.closest('a[href="#"]');
      if (!a) return;
      e.preventDefault();
      open(a.textContent.trim().replace(/\s+/g, " ").slice(0, 40));
    };
    const onKey = (e) => e.key === "Escape" && setName(null);
    window.addEventListener("soon", onSoon);
    document.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("soon", onSoon);
      document.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (name === null) return null;
  return (
    <div className="soon-wrap" onClick={() => setName(null)} role="dialog" aria-modal="true" aria-label="Coming soon">
      <div className="soon" onClick={(e) => e.stopPropagation()}>
        <button className="soon-x" aria-label="Close" onClick={() => setName(null)}><X size={18} /></button>
        <span className="logo-mark" />
        <small>Coming Soon</small>
        <h3>{name ? `“${name}”` : "This page"} is on its way</h3>
        <p>We're polishing this page right now. Check back very soon!</p>
        <button className="btn" onClick={() => setName(null)}>Got it</button>
      </div>
    </div>
  );
}
