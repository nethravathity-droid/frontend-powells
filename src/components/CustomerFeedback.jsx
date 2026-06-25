import "./CustomerFeedback.css";
import { useEffect, useRef, useState } from "react";
import { Quote, User } from "lucide-react";

const FEEDBACK = [
  {
    role: "Plant Manager",
    company: "Chennai Steel Works",
    product: "Energy Meters",
    rating: 5,
    text: "Powells energy meters give us accurate readings every shift. Installation was smooth and support responded within hours.",
  },
  {
    role: "Electrical Consultant",
    company: "Mumbai",
    product: "ATS Panels",
    rating: 5,
    text: "Their ATS panels are reliable under load switching. We have deployed them across three commercial sites without issues.",
  },
  {
    role: "Facility Head",
    company: "Kochi Industries",
    product: "MCB & Switchgear",
    rating: 4.5,
    text: "Solid build quality and clear documentation. Powells switchgear has reduced our downtime noticeably over the past year.",
  },
  {
    role: "Project Engineer",
    company: "Delhi Power Projects",
    product: "SPD Solutions",
    rating: 5,
    text: "Excellent surge protection range and competitive pricing. Our clients trust the Powells name on every panel we deliver.",
  },
];

const FEATURED = {
  role: "Operations Director",
  company: "Bangalore Tech Park",
  product: "Full Product Range",
  rating: 5,
  text: "We partnered with Powells India for meters, ATS and protection devices across our campus. Consistent quality, on-time delivery and a team that understands industrial requirements — that is why we keep choosing Powells.",
};

const STATS = [
  { value: "4.8", label: "Average Rating" },
  { value: "500+", label: "Happy Clients" },
  { value: "98%", label: "Would Recommend" },
];

function FeedbackStars({ rating, active }) {
  return (
    <div className="fb-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(Math.max(rating - (star - 1), 0), 1);
        return (
          <span key={star} className="fb-star">
            <span className="fb-star-bg" aria-hidden="true">
              ★
            </span>
            <span
              className="fb-star-fill"
              aria-hidden="true"
              style={{ width: active ? `${fill * 100}%` : "0%" }}
            >
              <span>★</span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function CustomerFeedback() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`customer-feedback${visible ? " fb-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="fb-deco fb-deco-circle-1" aria-hidden="true" />
      <div className="fb-deco fb-deco-circle-2" aria-hidden="true" />
      <div className="fb-deco fb-deco-circle-3" aria-hidden="true" />
      <div className="fb-deco fb-deco-square-1" aria-hidden="true" />
      <div className="fb-deco fb-deco-square-2" aria-hidden="true" />
      <div className="fb-grid-bg" aria-hidden="true" />

      <div className="fb-container">
        <header className="fb-header">
          <span className="fb-eyebrow">Powells Voices</span>
          <h2>What Our Customers Say</h2>
          <p>
            Real feedback from industries that rely on Powells electrical
            solutions every day.
          </p>
        </header>

        <div className="fb-stats">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="fb-stat-circle"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className="fb-stat-value">{stat.value}</span>
              <span className="fb-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="fb-layout">
          <article className="fb-featured">
            <div className="fb-featured-frame" aria-hidden="true" />
            <div className="fb-quote-circle">
              <Quote size={22} strokeWidth={2.5} aria-hidden="true" />
            </div>

            <div className="fb-featured-top">
              <div className="fb-avatar fb-avatar-lg">
                <User size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="fb-featured-meta">
                <FeedbackStars rating={FEATURED.rating} active={visible} />
                <span className="fb-product-tag">{FEATURED.product}</span>
              </div>
            </div>

            <blockquote>{FEATURED.text}</blockquote>

            <footer>
              <span>
                {FEATURED.role} · {FEATURED.company}
              </span>
            </footer>
          </article>

          <div className="fb-cards">
            {FEEDBACK.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="fb-card"
                style={{ animationDelay: `${0.15 + index * 0.08}s` }}
              >
                <div className="fb-card-square-accent" aria-hidden="true" />
                <div className="fb-card-head">
                  <div className="fb-avatar">
                    <User size={18} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>{item.role}</strong>
                    <span>{item.company}</span>
                  </div>
                </div>

                <FeedbackStars rating={item.rating} active={visible} />
                <p>{item.text}</p>
                <span className="fb-product-tag fb-product-tag-sm">
                  {item.product}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="fb-brand-mark" aria-hidden="true">
          <span className="fb-brand-circle">P</span>
          <span className="fb-brand-text">Powells India Corporation</span>
        </div>
      </div>
    </section>
  );

}
