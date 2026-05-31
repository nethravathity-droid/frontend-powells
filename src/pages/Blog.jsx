import { useEffect, useRef, useState } from "react";
import "./Blog.css";
import { FaPlay } from "react-icons/fa";

export default function Blog() {
  const exhibitionImages = [
    "/image/P1.png",
    "/image/P2.jpeg",
    "/image/P3.jpeg",
    "/image/p4.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef();

  // MODERN AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === exhibitionImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="blog-hero">

        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
           <source
    src="https://res.cloudinary.com/dl0wzjzax/video/upload/v1780166052/powells_nada9f.mp4"
    type="video/mp4"
  />
          </video>
        </div>

        <div className="blog-overlay"></div>

        <div className="blog-content reveal">
          <span className="blog-tag">
            POWELLS EXHIBITION 2026
          </span>

          <h1>
            Future Of Intelligent
            <br />
            Electrical Technology
          </h1>

          <p>
            Experience innovation, automation and industrial excellence through
            our next-generation electrical solutions showcased globally.
          </p>

        </div>

      </section>

      {/* 3D SLIDER SECTION */}
      <section className="expo-section">

        {/* LEFT */}
        <div className="expo-left reveal">

          <div className="modern-slider" ref={sliderRef}>

            {exhibitionImages.map((img, i) => (
              <div
                key={i}
                className={`slide-card ${
                  i === current
                    ? "active"
                    : i === (current + 1) % exhibitionImages.length
                    ? "next"
                    : i ===
                      (current - 1 + exhibitionImages.length) %
                        exhibitionImages.length
                    ? "prev"
                    : "hidden"
                }`}
              >
                <img src={img} alt="Expo" />

                <div className="slide-content">
                  <h3>ELSIA Exhibition 2026</h3>

                  <p>
                    Advanced industrial electrical systems & smart automation
                    technology.
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* DOTS */}
          <div className="slider-dots">
            {exhibitionImages.map((_, i) => (
              <span
                key={i}
                className={current === i ? "dot active" : "dot"}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="expo-right reveal">

          <span className="small-title">
            GLOBAL INDUSTRIAL EXPO
          </span>

          <h2>
            Revolutionizing Electrical
            Infrastructure & Automation
          </h2>

          <p>
            Powells India Corporation proudly presented intelligent electrical
            systems, power monitoring solutions, industrial switchgear and
            automation technologies during the international ELSIA exhibition.
          </p>

          <p>
            Our exhibition experience included live demonstrations, product
            showcases, client interactions, and advanced energy management
            innovations for modern industries.
          </p>

          <div className="feature-list">

            <div className="feature-card">
              <h4>Smart Metering</h4>
              <span>AI Integrated Monitoring</span>
            </div>

            <div className="feature-card">
              <h4>Automation</h4>
              <span>Industrial Control Solutions</span>
            </div>

            <div className="feature-card">
              <h4>Switchgear</h4>
              <span>Reliable Power Distribution</span>
            </div>

          </div>

        </div>

      </section>

      {/* PREMIUM VIDEO SECTION */}
      <section className="video-section">

        <div className="video-content reveal">

          <span className="small-title">
            LIVE EXHIBITION EXPERIENCE
          </span>

          <h2>
            Exhibition Walkthrough & Product Showcase
          </h2>

          <p>
            Discover our live exhibition presentation featuring innovative
            electrical products, advanced automation systems, and industrial
            power technologies.
          </p>

        </div>

        <div className="video-box reveal">

          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            className="expo-video"
          >
 <source
    src="https://res.cloudinary.com/dl0wzjzax/video/upload/v1780166052/powells_nada9f.mp4"
    type="video/mp4"
  />          </video>

          <div className="video-gradient"></div>

          <div className="video-play">
            <FaPlay />
          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="gallery-section">

        <div className="gallery-heading reveal">

          <span className="small-title">
            EXHIBITION GALLERY
          </span>

          <h2>
            Moments Of Innovation & Technology
          </h2>

        </div>

        <div className="gallery-grid">

          {[
            "p5.jpeg",
            "p6.jpeg",
            "p7.jpeg",
            "p12.jpeg",
            "p11.jpeg",
            "p10.jpeg",
          ].map((img, i) => (
            <div className="gallery-card reveal" key={i}>

              <div className="gallery-image-wrap">
                <img src={`/image/${img}`} alt="expo" />
              </div>

              <div className="gallery-info">

                <h3>Industrial Innovation</h3>

                <p>
                  High-performance industrial electrical solutions and smart
                  automation systems displayed during exhibition.
                </p>

              </div>

            </div>
          ))}<video
  autoPlay
  muted
  loop
  playsInline
  className="hero-video"
>
  <source
    src="https://res.cloudinary.com/your-cloud-name/video/upload/v123456789/powells.mp4"
    type="video/mp4"
  />
</video>

        </div>

      </section>
    </>
  );
}