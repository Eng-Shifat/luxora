import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import { nav } from "../data/siteData";

const LINKS = { Home: "#top", Shop: "#new", Categories: "#categories", "New In": "#new" }; // baki gulo = Coming Soon
const soon = (name) => window.dispatchEvent(new CustomEvent("soon", { detail: name }));

export default function Navbar() {
  return (
    <header className="nav container">
      <a className="logo" href="#top"><span className="logo-mark" />LUXORA</a>
      <nav aria-label="Main">
        {nav.map((n, i) => (
          <a key={n} href={LINKS[n] || "#"} className={i === 0 ? "active" : ""}>
            {n}{n === "Pages" && <ChevronDown size={14} />}
          </a>
        ))}
      </nav>
      <div className="nav-icons">
        <button aria-label="Search" onClick={() => soon("Search")}><Search size={20} /></button>
        <button aria-label="Account" onClick={() => soon("Account")}><User size={20} /></button>
        <button aria-label="Cart" className="cart" onClick={() => soon("Cart")}><ShoppingBag size={20} /><b>2</b></button>
      </div>
    </header>
  );
}
