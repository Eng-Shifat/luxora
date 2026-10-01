import { Instagram, Music2 } from "lucide-react";
import { footer } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="foot-grid">
        <div>
          <a className="logo" href="#top"><span className="logo-mark" />LUXORA</a>
          <p className="tag">{footer.tagline}</p>
          <div className="social">
            <span aria-label="Facebook">f</span>
            <span aria-label="Instagram"><Instagram size={14} /></span>
            <span aria-label="Pinterest">P</span>
            <span aria-label="TikTok"><Music2 size={14} /></span>
          </div>
        </div>
        {Object.entries(footer.columns).map(([h, links]) => (
          <div key={h}><h5>{h}</h5>{links.map((l) => <a key={l} href="#">{l}</a>)}</div>
        ))}
      </div>
      <div className="foot-bottom">
        <span>© 2026 Luxora. All rights reserved.</span>
        <span className="dev">Developed by <strong>Yeasin Kabir Shifat</strong></span>
      </div>
    </footer>
  );
}
