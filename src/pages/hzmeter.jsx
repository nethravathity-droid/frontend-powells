import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/hz.png",
];

export default function ProductHero() {
  const [index, setIndex] = useState(0);
  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="product-hero">
    <section className="product-hero">
      <div className="hero-left">
        <img
          src={images[index]}
          alt="Product"
          className="slide-image"
        />

        <div className="slider-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>



        <div className="hero-right">
          <h1>Hertz (HZ)</h1>
          <p>
          How an Hertz (HZ) Works.
            <ul>
          <li>Equipment malfunction</li>
          <li>Power synchronization failure</li>
          <li>Generator instability.</li>
          <li>Motor speed variation.</li>
        </ul>
</p><p> <ul>
          <li>Industrial Grade Components.</li>
          <li>Trusted Frequency Meter Manufacturer.</li>

        </ul></p><br/>
<a
  href="/image/Powells.pdf"
  download
  className="catalogue-btn"
  style={{ marginRight: '15px' }} // Adds space
>
  Download Catalogue
</a>
<a
  href="/contact"
  className="catalogue-btn"
>
  Get a Quote
</a><br/><br/><br/>


          <button
            className="more-btn"
            onClick={() =>
              document
                .getElementById("more-products")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            More ↓
          </button>
        </div>
      </section>

      {/* NEXT SECTIONS */}
    <section className="product-details" id="more-products">

      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li>Accuracy Class: 1.0</li>
          <li>Display: seven segment LED, 3 digit, 2 line</li>
          <li>Aux Supply: 100-270 VAC, 50/60Hz</li>
          <li>Phase: 1phase 2 wire</li>
          <li>Dimension: 96×96×40</li>
          <li>Temperature
Operating: 0°C to +55°C
Storage: 0°C to +55°C</li>
          <li>Humidity(non-condensing)
Up to 85% RH</li>
        </ul>
      </div>

      {/* 2️⃣ DIAGRAM */}
      <div className="detail-block">
        <h3>Diagram</h3>
        <div className="diagram-box">
          <img src="/image/fr.png" alt="Front Bezel Diagram" />
          <img src="/image/fr2.png" alt="Panel Cutout Diagram" />
        </div>
      </div>

      {/* 3️⃣ PRODUCT TABLE */}
      <div className="detail-block">
        <h3>Product Details</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Packed (HxWxL) CM</th>
                <th>UnPacked
(HxWxL)</th>
                <th>Phase</th>
                <th>Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HZ 9600</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 4.5 × 10</td>
                <td>1Ø</td>
                <td>96 × 96</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
    </>
  );
}
