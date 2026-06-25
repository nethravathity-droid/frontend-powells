import "./Home.css";
import "./HomeSliders.css";
import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeShowcase.css";
import WhyChoosePowells from "../components/WhyChoosePowells";
import CustomerFeedback from "../components/CustomerFeedback";
import HowCanWeHelp from "../components/HowCanWeHelp";
import SubscribeSection from "../components/SubscribeSection";
import HomeStats from "../components/HomeStats";
import "./MeterShowcase.css";
import "./McbShowcase.css";
import "./CategorySection.css";
import "./AboutProgress.css";
import Event from "./Event";

const TRUST_METRICS = [
  { label: "Customer Satisfaction", rating: 4.5 },
  { label: "Industry Competitiveness", rating: 4.0 },
  { label: "Product Reliability", rating: 4.8 },
];

import img1 from "/image/ats160a.png";
import img2 from "/image/ats250.png";
import img3 from "/image/ats2pole.png";
import img4 from "/image/ats4pole.png";

const tickerItems = [
  "Energy Meters",
  "Automatic Transfer Switch",
  "Surge Protection Devices",
  "MCB & RCCB",
  "Isolators",
  "AMF Controllers",
  "Industrial Automation",
  "Smart Power Management",
];

const showcaseSlides = [
  {
    image: "/image/po4.png",
    title: "Powering Intelligent Electrical Solutions",
    desc: "Powells India is a trusted manufacturer of advanced electrical equipment including Energy Meters, ATS Panels, AMF Controllers, and Surge Protection Devices.",
    points: [
      "Precision-engineered electrical products",
      "Trusted by industries & utilities",
      "Pan-India dealer & service network",
    ],
  },
  {
    image: "/image/lab1.png",
    title: "Engineering Excellence in Every Product",
    desc: "Our state-of-the-art manufacturing facility ensures every meter and switchgear product meets international quality standards.",
    points: [
      "ISO-certified production processes",
      "Rigorous quality testing",
      "Continuous R&D innovation",
    ],
  },
  {
    image: "/image/lab2.png",
    title: "Built for Reliability & Performance",
    desc: "From residential to industrial applications, Powells products deliver consistent performance under demanding conditions.",
    points: [
      "Long service life design",
      "Low maintenance operation",
      "Wide operating temperature range",
    ],
  },
  {
    image: "/image/lab4.png",
    title: "Your Partner in Power Management",
    desc: "With decades of expertise, we help businesses and utilities optimize energy usage and protect critical infrastructure.",
    points: [
      "Dedicated technical support",
      "Custom solution engineering",
      "Fast nationwide delivery",
    ],
  },
];

const categories1 = [
  {
    title: "SPD 2 Pole",
    description: "Surge Protection Device 2 Pole.",
    image: "/image/spd.jpg",
  },
  {
    title: "SPD 3 Pole",
    description: "Surge Protection Device 3 Pole.",
    image: "/image/spd1.jpg",
  },
  {
    title: "SPD 4 Pole",
    description: "Surge Protection Device 4 Pole.",
    image: "/image/spd4.jpg",
  },
];

const meters = [
  "/image/am9601.png",
  "/image/avm9600.png",
  "/image/kwh93.png",
  "/image/vaf9603.png",
  "/image/vm96dc.png",
  "/image/vm4801.png",
  "/image/am9603.png",
  "/image/vm9601.png",
];

export default function Home() {
  const navigate = useNavigate();
  const meterViewportRef = useRef(null);
  const atsRef = useRef(null);
  const mcbRef = useRef(null);
  const categoryRef = useRef(null);
  const progressRef = useRef(null);
  const [starsActive, setStarsActive] = useState(false);
  const [meterIndex, setMeterIndex] = useState(0);
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("mission");
  const [meterMetrics, setMeterMetrics] = useState({ step: 150, maxIndex: 4 });

  const measureMeter = useCallback(() => {
    const el = meterViewportRef.current;
    if (!el) return;
    const track = el.querySelector(".meter-track");
    const card = el.querySelector(".meter-card");
    if (!card || !track) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 16;
    const step = card.offsetWidth + gap;
    const visible = Math.max(1, Math.floor(el.offsetWidth / step));
    const maxIndex = Math.max(0, meters.length - visible);
    setMeterMetrics({ step, maxIndex });
  }, []);

  useEffect(() => {
    measureMeter();
    const el = meterViewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measureMeter);
    ro.observe(el);
    window.addEventListener("resize", measureMeter);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measureMeter);
    };
  }, [measureMeter]);

  useEffect(() => {
    setMeterIndex((prev) => Math.min(prev, meterMetrics.maxIndex));
  }, [meterMetrics.maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setMeterIndex((prev) => (prev >= meterMetrics.maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [meterMetrics.maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = atsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ats-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = mcbRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("mcb-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = categoryRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("category-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("progress-visible");
          setStarsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const StarRating = ({ rating }) => (
    <div
      className="trust-rating"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(Math.max(rating - (star - 1), 0), 1);
        return (
          <span key={star} className="trust-star">
            <span className="trust-star-bg" aria-hidden="true">
              ★
            </span>
            <span
              className="trust-star-fill"
              aria-hidden="true"
              style={{ width: starsActive ? `${fill * 100}%` : "0%" }}
            >
              <span>★</span>
            </span>
          </span>
        );
      })}
      <span className="trust-rating-value">{rating.toFixed(1)}</span>
    </div>
  );

  const meterProgress =
    meterMetrics.maxIndex > 0
      ? (meterIndex / meterMetrics.maxIndex) * 100
      : 100;

  return (
    <>
      <Helmet>
        <title>Powells India | Electrical & Energy Solutions</title>
      </Helmet>

      <section className="hero">
        <HeroSlider />

        <div className="hero-content">
          <h1>
            Seamless <span>Power</span>
            <br />
            Intelligent <span>Control</span>
          </h1>

          <p>
            Advanced electrical solutions for energy monitoring, automation and
            industrial protection.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary btn-pro btn-pro-primary"
              onClick={() => navigate("/pages/Contact")}
            >
              Get in Touch
            </button>
            <button
              className="btn-secondary btn-pro btn-pro-outline"
              onClick={() => navigate("/products")}
            >
              Explore Products
            </button>
          </div>
        </div>
      </section>

      <div className="home-ticker" aria-hidden="true">
        <div className="home-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="home-ticker-item">
              <span>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="meter-section reveal">
        <div className="meter-section-head">
          <span>Product Range</span>
          <h2>Precision Energy Meters</h2>
        </div>

        <div className="meter-slider">
          <button
            className="arrow-btn left"
            onClick={() => setMeterIndex((prev) => Math.max(prev - 1, 0))}
            disabled={meterIndex === 0}
            aria-label="Previous meters"
          >
            ‹
          </button>

          <div className="meter-viewport" ref={meterViewportRef}>
            <div
              className="meter-track"
              style={{
                transform: `translateX(-${meterIndex * meterMetrics.step}px)`,
              }}
            >
              {meters.map((src, i) => (
                <div
                  key={i}
                  className={`meter-card ${active === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <img
                    src={src}
                    alt="Energy meter product"
                    className="meter-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="arrow-btn right"
            onClick={() =>
              setMeterIndex((prev) =>
                Math.min(prev + 1, meterMetrics.maxIndex)
              )
            }
            disabled={meterIndex === meterMetrics.maxIndex}
            aria-label="Next meters"
          >
            ›
          </button>
        </div>

        <div className="meter-progress">
          <div
            className="meter-progress-fill"
            style={{ width: `${meterProgress}%` }}
          />
        </div>
      </section>

      <section className="ats-hero" ref={atsRef}>
        <div className="ats-content">
          <h1 className="ats-text ats-text-1">AUTOMATIC TRANSFER SWITCH / ATS</h1>
          <h2 className="ats-text ats-text-2">2 AND 4 POLE</h2>

          <div className="ats-images">
            <img
              className="ats-img ats-from-left"
              src={img1}
              alt="ATS 160A"
              loading="lazy"
            />
            <img
              className="ats-img ats-from-bottom"
              src={img2}
              alt="ATS 250A"
              loading="lazy"
            />
            <img
              className="ats-img ats-from-right"
              src={img3}
              alt="2 Pole ATS"
              loading="lazy"
            />
            <img
              className="ats-img ats-from-top"
              src={img4}
              alt="4 Pole ATS"
              loading="lazy"
            />
          </div>

          <p className="ats-subtitle ats-text ats-text-3">
            A Real-time Automatic Power Switching
          </p>

          <button
            className="ats-btn ats-text ats-text-4"
            onClick={() => navigate("/pages/Ats")}
          >
            Click More →
          </button>
        </div>
      </section>

      <section className="mcb-showcase" ref={mcbRef}>
        <div className="mcb-content">
          <div className="mcb-tags">
            <span className="mcb-newly-launched mcb-text mcb-text-0">
              <span className="mcb-newly-launched-dot" aria-hidden="true" />
              Newly Launched
            </span>
          </div>

          <h2 className="mcb-text mcb-text-2">
            Miniature Circuit
            <br />
            Breakers (MCB)
          </h2>

          <p className="mcb-launch-note mcb-text mcb-text-2b">
            2025 Edition — Now available for residential, commercial &amp; industrial
            installations across India.
          </p>

          <p className="mcb-text mcb-text-3">
            Designed for superior electrical protection, Powells MCBs safeguard
            residential, commercial and industrial systems against overloads and
            short circuits while ensuring maximum reliability and safety.
          </p>

          <div className="mcb-buttons mcb-text mcb-text-4">
            <a href="/pages/Contact" className="enquire-btn">
              Enquire Now
            </a>
            <a href="/pages/Mcb" className="learn-btn">
              View Product
            </a>
          </div>
        </div>

        <div className="mcb-images-wrap">
          <div className="mcb-launch-ribbon mcb-text mcb-text-ribbon" aria-hidden="true">
            <span>New</span>
          </div>
          <div className="mcb-images">
          <img
            src="/image/1p_mcb.png"
            alt="1 Pole MCB"
            className="mcb-img mcb-img-1"
            loading="lazy"
          />
          <img
            src="/image/2pole_mcb.png"
            alt="2 Pole MCB"
            className="mcb-img mcb-img-2"
            loading="lazy"
          />
          <img
            src="/image/3pole_mcb.png"
            alt="3 Pole MCB"
            className="mcb-img mcb-img-3"
            loading="lazy"
          />
          <img
            src="/image/4pole_mcb.png"
            alt="4 Pole MCB"
            className="mcb-img mcb-img-4"
            loading="lazy"
          />
          </div>
        </div>
      </section>

      <Event />

      <section className="category-section" ref={categoryRef}>
        <div className="spd-surge-track" aria-hidden="true">
          <span className="spd-surge-bolt">⚡</span>
          <span className="spd-surge-line" />
        </div>

        <div className="category-section-head">
          <span className="category-eyebrow spd-anim spd-anim-eyebrow">
            Powells Protection Series
          </span>
          <h2 className="spd-anim spd-anim-title">Surge Protection Device</h2>
          <p className="spd-anim spd-anim-desc">
            Reliable SPD solutions for 2, 3 and 4 pole applications — protecting
            equipment from voltage surges and electrical disturbances.
          </p>
          <p className="spd-unique-tag spd-anim spd-anim-tag">
            Powells Exclusive · Built for harsh Indian grid conditions
          </p>
        </div>

        <div className="category-container">
          {categories1.map((item, index) => (
            <div
              key={index}
              className={`category-card spd-card spd-card-${index + 1}`}
            >
              <span className="spd-card-badge">{index + 2} Pole</span>
              <span className="spd-card-shine" aria-hidden="true" />

              <div className="card-top">
                <div className="card-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="orange-strip" />
              </div>

              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button
                  className="view-btn"
                  onClick={() => navigate("/pages/SPD")}
                >
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-showcase reveal">
        <div className="showcase-left">
          <div className="showcase-slider-wrap">
            <div className="glass-slider">
              {showcaseSlides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.image}
                  alt={slide.title}
                  className={i === showcaseIndex ? "active" : ""}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="showcase-right">
          <div className="showcase-text-stack">
            {showcaseSlides.map((slide, i) => (
              <div
                className={`showcase-text-slide ${i === showcaseIndex ? "active" : ""}`}
                key={i}
              >
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <ul>
                  {slide.points.map((point, j) => (
                    <li key={j}>✔ {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="showcase-dots">
            {showcaseSlides.map((_, i) => (
              <button
                key={i}
                className={`showcase-dot ${i === showcaseIndex ? "active" : ""}`}
                onClick={() => setShowcaseIndex(i)}
                aria-label={`Showcase slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="more-btn btn-pro btn-pro-primary"
            onClick={() => navigate("/pages/About")}
          >
            Learn More →
          </button>
        </div>
      </section>

      <HomeStats />

      <section className="about-section reveal">
        <div className="about-container">
          <div className="about-left">
            <p className="tagline">Driven • Innovative • Trusted</p>
            <h2>Our Journey & Vision</h2>

            <div className="tabs">
              <button
                className={activeTab === "mission" ? "active" : ""}
                onClick={() => setActiveTab("mission")}
              >
                Mission
              </button>
              <button
                className={activeTab === "expertise" ? "active" : ""}
                onClick={() => setActiveTab("expertise")}
              >
                Expertise
              </button>
              <button
                className={activeTab === "team" ? "active" : ""}
                onClick={() => setActiveTab("team")}
              >
                Team
              </button>
            </div>

            {activeTab === "mission" && (
              <p className="about-text">
                Our mission is to deliver reliable and advanced electrical
                solutions that improve efficiency, safety and sustainability. We
                focus on developing innovative products that empower industries
                to operate smarter and more effectively in a rapidly evolving
                technological landscape.
              </p>
            )}

            {activeTab === "expertise" && (
              <p className="about-text">
                With years of engineering excellence, we specialize in
                manufacturing high-quality electrical components designed for
                durability and performance. Our expertise allows us to deliver
                solutions that meet modern power management and industrial
                automation requirements.
              </p>
            )}

            {activeTab === "team" && (
              <p className="about-text">
                Our team consists of experienced engineers, designers and
                technical specialists dedicated to delivering innovative
                electrical solutions. Through collaboration and continuous
                improvement, we ensure every product meets the highest standards
                of quality and reliability.
              </p>
            )}
          </div>

          <div className="about-right">
            <img src="/image/p14.jpeg" alt="Team working" />
          </div>
        </div>
      </section>

      <section className="about-progress" ref={progressRef}>
        <div className="progress-bg-grid" aria-hidden="true" />

        <div className="progress-inner">
          <div className="progress-left">
            <span className="progress-eyebrow">Driven · Innovative · Trusted</span>
            <h2>
              Empowering Electrical Innovation With Proven Expertise
            </h2>
            <p className="progress-desc">
              At Powells India Corporation, we develop advanced electrical
              solutions designed to enhance performance, safety and reliability.
              Our focus on engineering excellence helps industries operate with
              greater efficiency and confidence.
            </p>
            <div className="progress-highlights">
              <span className="progress-highlight">
                <strong>25+</strong> Years
              </span>
              <span className="progress-highlight">
                <strong>500+</strong> Clients
              </span>
              <span className="progress-highlight">
                <strong>ISO</strong> Certified
              </span>
            </div>
          </div>

          <div className="progress-cards">
            {TRUST_METRICS.map((item, index) => (
              <div
                key={item.label}
                className={`trust-card trust-card-${index + 1}`}
              >
                <div className="trust-card-header">
                  <span className="trust-card-label">{item.label}</span>
                  <StarRating rating={item.rating} />
                </div>
                <div className="trust-bar">
                  <div
                    className="trust-bar-fill"
                    style={{
                      width: starsActive
                        ? `${(item.rating / 5) * 100}%`
                        : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoosePowells />

      <CustomerFeedback />

      <HowCanWeHelp />

      <SubscribeSection />
    </>
  );
}
