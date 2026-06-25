import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

const NEWS_ITEMS = [
  "Powells introduces next-generation Smart Energy Monitoring Systems for industrial applications.",
  "New ATS & Changeover Switch Series launched with advanced safety protection features.",
  "Powells expands manufacturing capabilities with innovative automation technologies.",
];

const EVENT_IMAGES = [
  "/image/P1.jpeg",
  "/image/P2.jpeg",
  "/image/P3.jpeg",
  "/image/p4.jpeg",
  "/image/p5.jpeg",
  "/image/p6.jpeg",
];

export default function Event() {
  const navigate = useNavigate();
  const [newsIndex, setNewsIndex] = useState(0);
  const sectionRef = useRef(null);

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
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const galleryImages = [...EVENT_IMAGES, ...EVENT_IMAGES];

  return (
    <section className="updates-section reveal" ref={sectionRef}>

      <div className="updates-left">

        <div
          className="updates-news-box"
          onClick={() => navigate("/pages/Blog")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/pages/Blog")}
        >
          <div className="updates-box-header">
            <span>Latest News</span>
          </div>

          <div className="updates-news-slider">
            <div
              className="updates-news-track"
              style={{ transform: `translateY(-${newsIndex * 100}%)` }}
            >
              {NEWS_ITEMS.map((text, i) => (
                <p key={i} className="updates-news-text">{text}</p>
              ))}
            </div>
          </div>

          <div className="updates-news-dots">
            {NEWS_ITEMS.map((_, i) => (
              <span key={i} className={`updates-dot ${i === newsIndex ? "active" : ""}`} />
            ))}
          </div>
        </div>

        <div
          className="updates-event-box"
          onClick={() => navigate("/pages/Blog")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/pages/Blog")}
        >
          <div className="updates-box-header">
            <span>Upcoming Events</span>
          </div>

          <h3>Powells Industrial Electrical Exhibition 2026</h3>

          <div className="updates-event-marquee">
            <div className="updates-event-track">
              {galleryImages.map((src, i) => (
                <img key={`${src}-${i}`} src={src} alt="Event showcase" loading="lazy" />
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="updates-right">

        <span className="updates-section-tag">INNOVATION & TECHNOLOGY</span>

        <h2>Driving The Future Of Smart Electrical Engineering</h2>

        <p>
          Powells India Corporation continuously invests in advanced electrical
          technologies, intelligent automation systems, and modern power management
          solutions designed to meet evolving industrial demands worldwide.
        </p>

        <p>
          Through engineering excellence and customer-driven innovation, we develop
          products that improve efficiency, reliability, safety, and energy performance
          across industrial and commercial applications.
        </p>

        <div className="updates-innovation-grid">
          {[
            { title: "Smart Technology", desc: "Advanced monitoring and intelligent control systems." },
            { title: "Customer Focus", desc: "Solutions engineered for practical industrial requirements." },
            { title: "Quality Assurance", desc: "Reliable products tested to international standards." },
            { title: "Future Ready", desc: "Designed for modern automation and smart infrastructure." },
          ].map((card) => (
            <div key={card.title} className="updates-innovation-card">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="updates-cta-btn"
          onClick={() => navigate("/pages/Blog")}
        >
          Explore Updates <span aria-hidden>→</span>
        </button>

      </div>

    </section>
  );
}
