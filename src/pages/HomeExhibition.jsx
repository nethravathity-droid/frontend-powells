import { useEffect, useState } from "react";
import "./HomeExhibition.css";

import { useNavigate } from "react-router-dom";
export default function HomeExhibition() {

  const images = [
    "/image/p13.jpeg",
    "/image/p12.jpeg",
    "/image/p11.jpeg",
    "/image/p10.jpeg",
    "/image/p9.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="home-exhibition">

        {/* LEFT CONTENT */}
        <div className="exhibition-content">

          <span className="expo-subtitle">
            GLOBAL EXHIBITION EXPERIENCE
          </span>

          <h1>
            Intelligent Electrical
            <br />
            Innovation Showcase
          </h1>

          <p>
            Powells India Corporation presents next-generation industrial
            electrical systems, smart automation technologies and advanced
            power solutions showcased at international exhibitions.
          </p>
<br/>
         <button

          className="expo-btn"

          onClick={() => navigate("/pages/Blog")}

        >

          Explore Gallery

        </button>

        </div>

       <div className="slider-container">

  <div
    className="slider-track"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >

    {images.map((img, index) => (
      <div className="slide-item" key={index}>
        <img src={img} alt="Exhibition" />
      </div>
    ))}

  </div>

  {/* DOTS */}
  <div className="modern-dots">

    {images.map((_, i) => (
      <span
        key={i}
        className={current === i ? "dot active" : "dot"}
        onClick={() => setCurrent(i)}
      ></span>
    ))}

  </div>

</div>
      </section>
    </>
  );
}