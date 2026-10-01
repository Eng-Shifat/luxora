import { ArrowRight } from "lucide-react";
import Img from "./Img";
import { categories } from "../data/siteData";

export default function CategoryGrid() {
  return (
    <section className="cats container" id="categories">
      {categories.map((c) => (
        <a href="#" key={c.id} className={`cat cat-${c.id} ${c.tone} ${c.size || ""}`}>
          <div className="cat-text">
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <span className="link">Shop Now <ArrowRight size={12} /></span>
          </div>
          <Img className="cat-img" src={c.image} label={c.title} />
        </a>
      ))}
    </section>
  );
}
