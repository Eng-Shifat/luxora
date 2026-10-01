import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import { nav } from "../data/siteData";

export default function Navbar() {
  return (
    <header className="nav container">
      <a className="logo" href="#top"><span className="logo-mark" />LUXORA</a>
      <nav aria-label="Main">
        {nav.map((n, i) => (
          <a key={n} href="#" className={i === 0 ? "active" : ""}>
            {n}{n === "Pages" && <ChevronDown size={14} />}
          </a>
        ))}
      </nav>
      <div className="nav-icons">
        <button aria-label="Search"><Search size={20} /></button>
        <button aria-label="Account"><User size={20} /></button>
        <button aria-label="Cart" className="cart"><ShoppingBag size={20} /><b>2</b></button>
      </div>
    </header>
  );
}
