import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import Img from "./Img";
import { hero } from "../data/siteData";

const pad = (n) => String(n + 1).padStart(2, "0");

export default function Hero() {
  const full = hero.type === "full";
  const { slides, interval } = hero;
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback((i) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Tab hidden thakle auto-play pause (battery + smooth resume)
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const s = slides[index];
  const autoplay = count > 1 && !reduced;

  return (
    <section
      className={`hero container ${full ? "full" : ""}`}
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div className="hero-text">
        {/* key = slide change hole text-ta smooth ভাবে নতুন kore animate hoy */}
        <div className="hero-copy" key={index} aria-live={autoplay && !paused ? "off" : "polite"}>
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>{s.title[0]}<br />{s.title[1]}</h1>
          <p className="lead">{s.text[0]}<br />{s.text[1]}</p>
        </div>
        <a className="btn" href="#new">{hero.cta} <ArrowRight size={16} /></a>
        <div className="proof">
          <div className="avatars">{[0, 1, 2, 3].map((i) => <span key={i} />)}</div>
          <div>
            <strong>{hero.customers}</strong>
            <div className="stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={13} fill="currentColor" />)} <em>{hero.rating}</em></div>
          </div>
        </div>
      </div>

      <div
        className={`hero-visual ${full ? "full" : ""}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {!full && (
          <>
            <div className="circle" />
            <svg className="leaf" viewBox="0 0 60 160" aria-hidden="true">
              <path d="M30 158 C28 110 32 60 44 6" stroke="#7C8B5F" strokeWidth="2" fill="none" />
              <g fill="#7C8B5F">
                <path d="M33 120 C52 114 58 98 56 88 C38 90 30 104 33 120Z" />
                <path d="M31 100 C12 96 8 80 10 70 C28 72 36 86 31 100Z" />
                <path d="M35 74 C52 68 56 54 54 46 C40 48 33 60 35 74Z" />
                <path d="M38 52 C22 48 18 36 20 28 C34 30 41 40 38 52Z" />
                <path d="M44 8 C38 18 40 28 44 32 C50 24 49 14 44 8Z" />
              </g>
            </svg>
          </>
        )}
        {slides.map((sl, i) => (
          <div
            key={sl.image}
            className={`hero-slide ${i === index ? "on" : ""}`}
            style={{ "--pos": sl.position || "60% top", "--pos-m": sl.positionMobile || sl.position || "60% top" }}
            aria-hidden={i !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <Img className="hero-img" src={sl.image} alt={sl.title.join(" ")} label="Hero image" />
          </div>
        ))}
      </div>

      {count > 1 && (
        <ol className="slides" aria-label="Choose slide">
          {slides.map((sl, i) => (
            <li key={sl.image} className={i === index ? "on" : ""}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${sl.title.join(" ")}`}
                aria-current={i === index ? "true" : undefined}
              >
                <span>{pad(i)}</span>
                <i className="bar">
                  {i === index && (
                    <b
                      className={autoplay ? "run" : "still"}
                      style={{ animationDuration: `${interval}ms`, animationPlayState: paused ? "paused" : "running" }}
                      onAnimationEnd={next}
                    />
                  )}
                </i>
              </button>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
