import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

const NEWS_ITEMS = [
  "Smart Energy Monitoring Systems for industrial applications.",
  "New ATS & Changeover Switch Series with advanced protection.",
  "Expanded manufacturing with innovative automation.",
];

const EVENT_SLIDES = [
  { src: "/image/event.jpeg", alt: "Powells exhibition event" },
  { src: "/image/event1.jpeg", alt: "Powells industry event" },
  { src: "/image/event2.jpeg", alt: "Powells product launch event" },
];

const INNOVATION_CARDS = [
  {
    title: "Smart Technology",
    desc: "Advanced monitoring and intelligent control systems.",
  },
  {
    title: "Customer Focus",
    desc: "Solutions engineered for practical industrial requirements.",
  },
  {
    title: "Quality Assurance",
    desc: "Reliable products tested to international standards.",
  },
  {
    title: "Future Ready",
    desc: "Designed for modern automation and smart infrastructure.",
  },
];

export default function Event() {
  const navigate = useNavigate();
  const [newsIndex, setNewsIndex] = useState(0);
  const sectionRef = useRef(null);

  const scrollImages = [...EVENT_SLIDES, ...EVENT_SLIDES];

  useEffect(() => {
    const newsTimer = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % NEWS_ITEMS.length);
    }, 4500);
    return () => clearInterval(newsTimer);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goBlog = () => navigate("/pages/Blog");

  return (
    <section className="updates-section" ref={sectionRef}>
      <div className="updates-left">
        <div
          className="updates-panel"
          onClick={goBlog}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && goBlog()}
        >
          <div className="updates-panel-head">
            <span className="updates-panel-head-dot" aria-hidden="true" />
            Latest News
          </div>

          <div className="updates-news-viewport">
            <div
              className="updates-news-track"
              style={{ transform: `translateY(-${newsIndex * 100}%)` }}
            >
              {NEWS_ITEMS.map((text, i) => (
                <p key={i} className="updates-news-line">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="updates-news-dots">
            {NEWS_ITEMS.map((_, i) => (
              <span
                key={i}
                className={`updates-dot ${i === newsIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <div className="updates-event-strip">
            <div className="updates-event-scroll">
              {scrollImages.map((item, i) => (
                <div key={`${item.src}-${i}`} className="updates-event-slide">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="updates-right">
        <span className="updates-anim updates-anim-1 updates-section-tag">
          INNOVATION & TECHNOLOGY
        </span>

        <h2 className="updates-anim updates-anim-2">
          Driving The Future Of Smart Electrical Engineering
        </h2>

        <div className="updates-innovation-grid">
          {INNOVATION_CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`updates-innovation-card updates-anim updates-anim-card-${i + 1}`}
            >
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
