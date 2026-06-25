import "./WhyChoosePowells.css";
import { useEffect, useRef, useState } from "react";
import {
  Target,
  Lightbulb,
  Settings2,
  ShieldCheck,
  BadgeIndianRupee,
  Headphones,
  Leaf,
  Award,
} from "lucide-react";
import ElectricalBackdrop from "./ElectricalBackdrop";

const FEATURES = [
  {
    icon: Target,
    title: "High Precision & Accuracy",
    text: "Our digital meters deliver reliable real-time data for critical applications.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    text: "We integrate cutting-edge technologies for future-ready solutions.",
  },
  {
    icon: Settings2,
    title: "Customizable Solutions",
    text: "Tailored systems designed to meet specific industry requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Durability & Reliability",
    text: "Engineered with rigorous testing standards for long-term performance.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Cost-Effective Solutions",
    text: "Value-driven products maximizing ROI without compromising quality.",
  },
  {
    icon: Headphones,
    title: "Expert Customer Support",
    text: "Dedicated assistance for installation and maintenance.",
  },
  {
    icon: Leaf,
    title: "Sustainability Commitment",
    text: "Helping businesses monitor energy and support eco-friendly practices.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    text: "Trusted brand backed by experience and a growing client base.",
  },
];

export default function WhyChoosePowells() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`why-section elec-section-light elec-accent-strip${visible ? " why-visible" : ""}`}
      ref={sectionRef}
    >
      <ElectricalBackdrop variant="light" />
      <div className="why-container">
        <header className="why-header">
          <span className="why-eyebrow elec-eyebrow">Why Powells</span>
          <h2>Why Do You Choose Us?</h2>
          <p className="why-subtitle">Powells India Corporation</p>
        </header>

        <div className="why-grid">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="why-card"
                style={{ animationDelay: `${0.08 + index * 0.07}s` }}
              >
                <div className="why-card-icon">
                  <Icon size={22} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
