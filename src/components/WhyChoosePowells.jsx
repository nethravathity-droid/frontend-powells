import "./WhyChoosePowells.css";
import { useEffect, useRef, useState } from "react";

export default function WhyChoosePowells() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      
      {/* Overlay */}
      <div className="why-overlay"></div>

      <div className="why-container">
        
        {/* Title */}
        <div className={`why-title-card ${visible ? "show" : ""}`}>
          <h2>Why Do You Choose Us?</h2>
          <p>Powells India Corporation</p>
        </div>

        {/* Grid */}
        <div className="why-grid">
          
          {[
            { icon: "🎯", title: "High Precision & Accuracy", text: "Our digital meters deliver reliable real-time data for critical applications." },
            { icon: "💡", title: "Innovative Technology", text: "We integrate cutting-edge technologies for future-ready solutions." },
            { icon: "🛠️", title: "Customizable Solutions", text: "Tailored systems designed to meet specific industry requirements." },
            { icon: "🧱", title: "Durability & Reliability", text: "Engineered with rigorous testing standards for long-term performance." },
            { icon: "💰", title: "Cost-Effective Solutions", text: "Value-driven products maximizing ROI without compromising quality." },
            { icon: "🤝", title: "Expert Customer Support", text: "Dedicated assistance for installation and maintenance." },
            { icon: "🌱", title: "Sustainability Commitment", text: "Helping businesses monitor energy and support eco-friendly practices." },
            { icon: "🏆", title: "Proven Track Record", text: "Trusted brand backed by experience and growing client base." }
          ].map((item, index) => (
            <div
              key={index}
              className={`why-card ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}