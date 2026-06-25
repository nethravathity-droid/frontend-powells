import { useEffect, useState } from "react";
import "./HeroSlider.css";

const slides = [
  {
    image: "/image/lab6.png",
    subtitle: "Reliable power switching for critical operations",
  },
  {
    image: "/image/lab3.png",
    subtitle: "Accurate electrical measurement and analytics",
  },
  {
    image: "/image/lab5.png",
    subtitle: "Engineered panels and industrial solutions",
  },
  {
    image: "/image/lab7.png",
    subtitle: "Smart automation for modern infrastructure",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider" aria-label="Hero slideshow">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className="overlay" />
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
