import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CategoryGrid from "./components/CategoryGrid";
import NewArrivals from "./components/NewArrivals";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";

const REVEAL = ".features,.cat,.arrivals-head,.grid>*,.promo,.foot-grid>div,.foot-bottom";

// Scroll korle element gulo smooth fade-up hoye ashe (product gulo async load hole o kaj kore)
function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.05 });
    const scan = () => document.querySelectorAll(REVEAL).forEach((el) => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      el.style.setProperty("--d", `${Math.min([...el.parentNode.children].indexOf(el), 6) * 70}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
}

function useScrollBar() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    const on = () => {
      const h = document.documentElement;
      bar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
      document.querySelector(".nav")?.classList.toggle("stuck", h.scrollTop > 20);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
}

export default function App() {
  useReveal();
  useScrollBar();
  return (
    <>
      <div id="progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategoryGrid />
        <NewArrivals />
        <PromoBanner />
        <Features compact />
      </main>
      <Footer />
      <ComingSoon />
    </>
  );
}
