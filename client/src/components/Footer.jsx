import { useState } from "react";
import { Instagram, Music2, Send } from "lucide-react";
import { footer } from "../data/siteData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const r = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setMsg((await r.json()).message);
      if (r.ok) setEmail("");
    } catch {
      setMsg("Couldn't subscribe right now. Please try again.");
    }
  };

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
        <div>
          <h5>Newsletter</h5>
          <p className="tag">Subscribe to get updates on new arrivals & exclusive offers.</p>
          <form className="news" onSubmit={submit}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" required />
            <button aria-label="Subscribe"><Send size={16} /></button>
          </form>
          {msg && <p className="msg" role="status">{msg}</p>}
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2024 Luxora. All rights reserved.</span>
        <span className="pay">
          <b className="visa">VISA</b>
          <span className="mc" aria-label="Mastercard"><i /><i /></span>
          <b className="pp">PayPal</b>
          <b>Apple Pay</b>
        </span>
      </div>
    </footer>
  );
}
