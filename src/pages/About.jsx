import React, { useEffect, useState } from "react";
import "./About.css";
import aboutVideo from "/image/about.mp4";

export default function About() {
  const [showContent, setShowContent] = useState(false);

  // Video title fade-in delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      
      {/* 🔹 Video Section */}
      <section className="video-section">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className={`video-content ${showContent ? "fade-in" : ""}`}>
          <h1>About Our Company</h1>
        </div>
      </section><br/><br/><br/>
<section>
      {/* 🔹 Section 1 */}
      <div className="about-row fade-up">
        <div className="about-image">
          <img src="/image/po1.png" alt="Factory" />
        </div>
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            Established in 2023, Powells India Corporation is a growing and
            customer-focused organization delivering innovative electrical solutions.
          </p>
          <p>
            We specialize in power management, automation, and control products
            designed for industries and commercial sectors.
          </p>
          <p>
            Our mission is to provide high-performance products that enhance
            efficiency, safety, and sustainability.
          </p>
        </div>
      </div>

      {/* 🔹 Section 2 */}
      <div className="about-row reverse fade-up">
        <div className="about-image">
          <img src="/image/po2.png" alt="Mission" />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To provide innovative and reliable electrical products that enhance
            safety and improve efficiency.
          </p>

          <ul>
            <li><b>Quality First:</b> World-class electrical components</li>
            <li><b>Innovation:</b> Continuous R&D investment</li>
            <li><b>Sustainability:</b> Eco-friendly solutions</li>
            <li><b>Customer Centricity:</b> Long-term partnerships</li>
          </ul>
        </div>
      </div>

      {/* 🔹 Section 3 */}
      <div className="about-row fade-up">
        <div className="about-image">
          <img src="/image/po3.png" alt="Vision" />
        </div>
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            To become a globally trusted brand delivering smart energy solutions
            that power the future.
          </p>
          <p>
            To redefine the future of power through engineering excellence and
            smart technology.
          </p>
        </div>
      </div>
</section>
    </section>
  );
}