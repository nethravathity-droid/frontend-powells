import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/avm.png",
  "/image/avm.png",
  
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
          <h1>AVM Meter</h1>
           <p>
How an AVM Meter Works            <ul>
          <li>Measuring voltage directly from the supply line.</li>
          <li>Measuring current either directly (low current) or through a Current Transformer (CT) for higher current applications.</li>
          <li>Processing input signals through internal electronic circuitry or microcontroller.</li>
          <li>Displaying real-time readings on LED or LCD screen.</li>
        </ul>
</p><p> <ul>
          <li>Monitor voltage and load current</li>
                    <li>Detect over-voltage and under-voltage conditions</li>


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
      img: "avm.png",
      name: "AVM 9601",
      desc: "Single Phase Ammeter & Voltmeter."
    },
     {
      img: "avm.png",
      name: "AVM 4801",
      desc: "Single Phase Ammeter & Voltmeter with 96X48."
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

      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li>Accuracy Class: 1.0</li>
          <li>Input Voltage Rated: 30–300V AC (L-N), 50–520V AC (L-L)</li>
          <li>Auxiliary Supply: 100–270V AC, 50/60Hz</li>
          <li>Operating Temperature: 0°C to +55°C</li>
          <li>Storage Temperature: 0°C to +55°C</li>
          <li>Humidity: Up to 85% RH (non-condensing)</li>
          <li>CT Primary: 5A to 6000A (Programmable)</li>
          <li>CT Secondary: 5A / 1A</li>
          <li>Frequency Range: 50 / 60 Hz</li>
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
                <td>AVM 9601</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 4.5 × 10</td>
                <td>1Ø</td>
                <td>96 × 96</td>
              </tr>
              <tr>
                <td>AVM 9603</td>
                <td>10.5 × 5 × 10.5</td>
                <td>5 × 8.8 × 5</td>
                <td>1Ø</td>
                <td>96 × 48</td>
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
