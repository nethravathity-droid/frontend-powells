import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HeroSlider.css";
import { heroProductSlides } from "../data/heroProductSlides";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const total = heroProductSlides.length;
  const current = heroProductSlides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total]);

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="hero-slider" aria-label="Electrical products showcase">
      <div
        className="hero-slider-bg"
        style={{ background: current.gradient }}
        key={`bg-${index}`}
      />
      <div className="hero-slider-grid" aria-hidden="true" />
      <div className="hero-slider-glow" aria-hidden="true" />

      {/* scrolling product ribbon */}
      <div className="hero-product-ribbon" aria-hidden="true">
        <div className="hero-product-ribbon-track">
          {[...heroProductSlides, ...heroProductSlides].map((item, i) => (
            <div key={`${item.src}-${i}`} className="hero-ribbon-item">
              <img src={item.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-meter-stage">
        <p className="hero-meter-tag">{current.category}</p>

        <div className="hero-meter-viewport">
          <div
            className="hero-meter-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {heroProductSlides.map((product, i) => (
              <div key={product.src + product.label} className="hero-meter-slide">
                <div
                  className="hero-meter-card"
                  style={{
                    background: `linear-gradient(160deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)`,
                  }}
                >
                  <img
                    src={product.src}
                    alt={product.label}
                    loading={i <= 2 ? "eager" : "lazy"}
                  />
                </div>
                <span className="hero-meter-label">{product.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-meter-controls">
          <button type="button" className="hero-nav-btn" onClick={prev} aria-label="Previous product">
            <ChevronLeft size={20} />
          </button>

          <div className="hero-meter-progress">
            <div
              className="hero-meter-progress-fill"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>

          <span className="hero-meter-count">
            {index + 1} / {total}
          </span>

          <button type="button" className="hero-nav-btn" onClick={next} aria-label="Next product">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hero-thumb-strip">
          {heroProductSlides.map((product, i) => (
            <button
              key={product.label}
              type="button"
              className={`hero-thumb ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={product.label}
              title={product.label}
            >
              <img src={product.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
