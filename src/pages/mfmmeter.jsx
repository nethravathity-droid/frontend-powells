import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/mfm.png",
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
          <h1>MULTI FUNCTIONAL
METER (MFM)</h1>
          <p>
          How MFM Works.
            <ul>
          <li>Replaces multiple meters in one device — saves panel space and wiring.</li>
          <li>Provides real-time and precise measurement of electrical parameters.</li>
          <li>Reduces installation cost and maintenance compared to multiple meters.</li>
          <li>Helps monitor consumption, reduce losses, and improve efficiency.</li>
        </ul>
</p><p> <ul>
          <li>Available with RS485 Modbus, enabling integration with SCADA/BMS systems.</li>
          <li>High Accuracy & Reliability.</li>

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
      <section id="more-products" className="more-products">
      <h2>Available Models</h2>

<div className="product-grid">
  {[
    {
      img: "mfm.png",
      name: "MFM 96",
      desc: "High-accuracy Single Phase Ammeter."
    },
    {
      img: "mfm.png",
      name: "MFM 96 RS",
      desc: "Three Phase Ammeter."
    },
    {
      img: "mfm.png",
      name: "MFM 96 DS",
      desc: "Single Phase Ammeter with 96X48 "
    }
  ].map((product, i) => (
    <div key={i} className="product-card">
      <img src={`/image/${product.img}`} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
    </div>
  ))}
</div>
    </section>

    <section className="product-details">
            <div className="detail-block">
        <h3>Features</h3>
        <ul>
          <li>3 Phase True RMS (Voltage, Current)</li>
          <li>3 Phase Power (Active, Apparent, Reactive)</li>
          <li>Energy (Active, Apparent, Reactive)</li>
          <li>Programmable CT & PT (Primary & Secondary)</li>
        </ul>
      </div>

      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li>Accuracy Class: 1.0</li>
          <li>Input Voltage Rated: 30–300V AC (L-N), 50–520V AC (L-L)</li>
          <li>Auxiliary Supply: 100–270V AC, 50/60Hz</li>
          <li>Operating Temperature: 0°C to +55°C</li>
          <li>Storage Temperature: 0°C to +75°C</li>
          <li>Humidity: Up to 85% RH (non-condensing)</li>
          <li>CT Primary: 5A to 6000A (Programmable)</li>
          <li>CT Secondary: 5A / 1A</li>
          <li>PT Primary: 415, 440, 2.2KV, 3.3KV,
          6.6KV, 11KV, 22KV, 33KV, 66KV.</li>
          <li>PT Secondary: 110V/415V AC</li>
          <li>Power Consumption : less than 4VA AC</li>
          <li>Resolution Power & Energy resolution 
          depends on CT & PT</li>
          <li>RPM: 1350-1950 (Pole: 4 (Range: 4-32 
          selectable) Frequency: 45-65Hz)</li>
          <li>Run Hour: 0 - 999999 H</li>
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
        <h3>Product Variants</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Packed Size (cm)</th>
                <th>Unpacked Size (cm)</th>
                <th>Phase</th>
                <th>Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MFM 96</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 96</td>
              </tr>
              <tr>
                <td>MFM 96 RS</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 96</td>
              </tr>
              <tr>
                <td>MFM 96 DS</td>
                <td>10.5 × 5.7 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 96</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4️⃣ ADDITIONAL DETAILS */}
      <div className="detail-block">
        <h3>Additional Features</h3>
        <ul>
          <li>Display Color: Red</li>
          <li>Digit Height: 0.56 inch</li>
          <li>Display Scrolling: Automatic / Manual</li>
          <li>Update Time: 1 second</li>
          <li>Packed Weight: 250 g</li>
          <li>Unpacked Weight: 200 g</li>
        </ul>
      </div>

    </section>
    </>
  );
}
