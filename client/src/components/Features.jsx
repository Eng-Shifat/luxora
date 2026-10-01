import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";
import { features } from "../data/siteData";

const ICONS = { Truck, RotateCcw, ShieldCheck, Headphones };

export default function Features({ compact = false }) {
  return (
    <section className={`features container ${compact ? "compact" : ""}`}>
      {features.map((f) => {
        const Icon = ICONS[f.icon];
        return (
          <div className="feature" key={f.title}>
            <Icon size={compact ? 22 : 26} />
            <div><strong>{f.title}</strong><span>{f.text}</span></div>
          </div>
        );
      })}
    </section>
  );
}
