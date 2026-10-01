import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { tabs } from "../data/siteData";

export default function NewArrivals() {
  const [tab, setTab] = useState("All");
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    setStatus("loading");
    fetch(`/api/products?category=${tab}`)
      .then((r) => { if (!r.ok) throw new Error("bad response"); return r.json(); })
      .then((data) => { setItems(data); setStatus("ok"); })
      .catch(() => setStatus("error"));
  }, [tab]);

  return (
    <section className="arrivals container" id="new">
      <div className="arrivals-head">
        <h2>New Arrivals</h2>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <a className="btn outline" href="#">View All <ArrowRight size={14} /></a>
      </div>
      <div className="grid">
        {status === "error" && <p className="grid-msg" role="alert">Products couldn't be loaded. Please try again in a moment.</p>}
        {status === "ok" && items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
