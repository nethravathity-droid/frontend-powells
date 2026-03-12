import "./Home.css";
import { Helmet } from "react-helmet-async";
import HeroSlider from "../components/HeroSlider";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeShowcase.css";
import WhyChoosePowells from "../components/WhyChoosePowells";
import HomeStats from "../components/HomeStats";
import {
  Users,
  Package,
  UserCheck,
  Store
} from "lucide-react";
import "./MeterShowcase.css";
import ScrollSection from "./ScrollSection";

import img1 from "/image/ats2.png";
import img2 from "/image/ats8.png";
import img3 from "/image/ats10.png";
import img4 from "/image/ats12.png";

const categories = [
  {
    title: "Automatic Transfer Switch",
    description: "Our ATS ensures uninterrupted power supply for residential, commercial and industrial applications.",
    image: "/image/ats8.png",
  },
  {
    title: "Surge Protection Device",
    description:
      "Precision digital measurement systems engineered for reliability.",
    image: "/image/spd.png",
  },
  {
    title: "ATS 2 & 4 Pole",
    description:
      "Smart protection and timing devices built for modern control panels.",
    image: "/image/spd.png",
  },
];

const categories1 = [
  {
    title: "SPD 2 Pole",
    description:
      "Surge Protection Device 2 Pole.",
    image: "/image/spd.jpg",
  },
  {
    title: "SPD 3 Pole",
    description: "Surge Protection Device 3 Pole.",
    image: "/image/spd1.jpg",
  },
  {
    title: "SPD 4 Pole",
    description:
      "Surge Protection Device 4 Pole.",
    image: "/image/spd4.jpg",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("mission");
const atsRef = useRef(null);
const [atsVisible, setAtsVisible] = useState(false);
  const meters = [
    "/image/elr.png",
    "/image/mt1.png",
    "/image/avm.png",
    "/image/mt3.png",
    "/image/mt4.png",
     "/image/mt5.png",
      "/image/mfm.png",
       "/image/vm1.png",
       "/image/vm3.png",
       "/image/hz.png",
       "/image/kwh.png",
  ];
    const images = [
   "/image/po4.png",
    "/image/lab1.png",
    "/image/lab2.png",
    "/image/lab4.png",
  ];
  const visibleCount = 4;
  const cardWidth = 120; // card + padding
  const gap = 40;
  const step = cardWidth + gap;
  const maxIndex = meters.length - visibleCount;
    useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAtsVisible(true);
      }
    },
    { threshold: 0.2 }
  );

  if (atsRef.current) {
    observer.observe(atsRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <>
      <Helmet>
        <title>Powells India | Electrical & Energy Solutions</title>
      </Helmet>

      <section className="hero">
        <HeroSlider />

        <div className="hero-content">
          <h1>
            Seamless <span>Power</span><br />
            Intelligent <span>Control</span>
          </h1>

          <p>
            Advanced electrical solutions for energy monitoring,
            automation and industrial protection.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/contact")}>Get in Touch</button>
            <button className="btn-secondary" onClick={() => navigate("/Products")}>Explore Products</button>
          </div>
        </div>
      </section>


    <section className="meter-section">
      <div className="meter-slider">

        {/* LEFT ARROW */}
        <button
          className="arrow-btn left"
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          disabled={index === 0}
        >
          ‹
        </button>

        {/* VIEWPORT */}
        <div className="meter-viewport">
          <div
            className="meter-track"
            style={{ transform: `translateX(-${index * step}px)` }}
          >
            {meters.map((src, i) => (
              <div
                key={i}
                className={`meter-card ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <img src={src} alt="Meter" className="meter-image" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
 <button
  className="arrow-btn left"
  onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
  disabled={index === 0}
>
  ‹
</button>

<button
  className="arrow-btn right"
  onClick={() => setIndex((prev) => Math.min(prev + 1, maxIndex))}
  disabled={index === maxIndex}
>
  ›
</button>


      </div>
    </section>
  

<section className="hero" ref={atsRef}>
<div className={`hero-text ${atsVisible ? "show-text" : ""}`}>
          <h1>
          AUTOMATIC TRANSFER <br />
          SWITCH / ATS <br />
          2 AND 4 POLE
        </h1>
        <p className="subtitle1">
A Real-time Automatic Power Switching    </p>
        <button
          className="more-btn"
          onClick={() => navigate("/pages/Ats")}
        >
          Click More →
        </button>
      </div>

<div className={`hero-images ${atsVisible ? "show-images" : ""}`}>

  <img src={img1} className="img img-top" alt="Top ATS" />
  
  <img src={img2} className="img img-main" alt="Main ATS" />
  
  <img src={img3} className="img img-bottom" alt="Bottom ATS" />
  
  <img src={img4} className="img img-right" alt="Small ATS" />

</div>

    </section>

 

  <section className="category-section" >
      <div className="category-container">
        {categories1.map((item, index) => (
          <div key={index} className="category-card">
            <div className="card-top">
              <img src={item.image} alt={item.title} />
              <div className="orange-strip"></div>
            </div>

            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="view-btn" onClick={() => navigate("/pages/SPD")}>View Products</button>
            </div>
          </div>
        ))}
      </div>
    </section>

  
 <section className="home-showcase">
      {/* LEFT – GLASS SLIDER */}
      <div className="showcase-left">
        <div className="glass-slider">
          <img src={images[index]} alt="Product" />
        </div>
      </div>

      {/* RIGHT – CONTENT */}
      <div className="showcase-right">
        <h2>Powering Intelligent Electrical Solutions</h2>

        <p>
          Powells India is a trusted manufacturer of advanced electrical
          equipment including Energy Meters, ATS Panels, AMF Controllers,
          Surge Protection Devices and smart power management systems.
        </p>

        <ul>
          <li>✔ Precision-engineered electrical products</li>
          <li>✔ Trusted by industries & utilities</li>
          <li>✔ Pan-India dealer & service network</li>
        </ul>

        <button
          className="more-btn"
          onClick={() => navigate("/pages/About")}
        >
          Click More →
        </button>
      </div>
    </section>

    <HomeStats />

    
<section className="about-section">

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <p className="tagline">Driven • Innovative • Trusted</p>

          <h2>Our Journey & Vision</h2>

          {/* TABS */}
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

          {/* CONTENT */}

          {activeTab === "mission" && (
            <p className="about-text">
              Our mission is to deliver reliable and advanced electrical
              solutions that improve efficiency, safety and sustainability.
              We focus on developing innovative products that empower
              industries to operate smarter and more effectively in a
              rapidly evolving technological landscape.
            </p>
          )}

          {activeTab === "expertise" && (
            <p className="about-text">
              With years of engineering excellence, we specialize in
              manufacturing high-quality electrical components designed
              for durability and performance. Our expertise allows us
              to deliver solutions that meet modern power management
              and industrial automation requirements.
            </p>
          )}

          {activeTab === "team" && (
            <p className="about-text">
              Our team consists of experienced engineers, designers
              and technical specialists dedicated to delivering
              innovative electrical solutions. Through collaboration
              and continuous improvement, we ensure every product
              meets the highest standards of quality and reliability.
            </p>
          )}

        </div>


        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img src="/image/team.png" alt="Team working" />
        </div>

      </div>

    </section>
 
<section className="about-progress">

  <div className="progress-container">

    <div className="progress-left">

      <p className="small-title">Driven • Innovative • Trusted</p>

      <h2>
        Empowering Electrical Innovation <br/>
        With Proven Expertise
      </h2>

      <p className="desc">
        At Powells India Corporation, we develop advanced electrical solutions 
        designed to enhance performance, safety and reliability. 
        Our focus on engineering excellence and continuous innovation 
        helps industries operate with greater efficiency and confidence.
      </p>

    </div>


    <div className="progress-right">

      <div className="progress-box">
        <p>Customer Satisfaction 90%</p>
        <div className="progress-bar">
          <span style={{width:"90%"}}></span>
        </div>
      </div>

      <div className="progress-box">
        <p>Industry Competitiveness 82%</p>
        <div className="progress-bar">
          <span style={{width:"82%"}}></span>
        </div>
      </div>

      <div className="progress-box">
        <p>Product Reliability 95%</p>
        <div className="progress-bar">
          <span style={{width:"95%"}}></span>
        </div>
      </div>

    </div>

  </div>

</section>

          <WhyChoosePowells />

    </>
  );
}
