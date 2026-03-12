import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/vaf.png",
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
          <h1>VOLTAGE,AMPERAGE AND
FREQUENCY (VAF)</h1>
          <p>
            How a VAF Meter Works.
<ul>
          <li>Measuring input voltage directly from the power line.</li>
          <li>Measuring current through CT (Current Transformer) connection.</li>
          <li>Detecting frequency by calculating the rate of AC waveform cycles per second.</li>
          <li>Processing signals through an internal microcontroller.</li>
          <li>Displaying real-time values on an LED/LCD screen.</li>
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
    <section className="product-details" id="more-products" >

            <div className="detail-block">
        <h3>Features</h3>
        <ul>
          <li>Compact Design with Low Back
Depth 45mm</li>
          <li>True RMS Measurement</li>
          <li>User Friendly & Easy to Program</li>
          <li>3 Line Ultra Bright Display with RED
and WHITE color option</li>
        </ul>
      </div>


      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li>Accuracy Class: 1.0</li>
          <li>Input Voltage Rated: 30–300V AC (L-N), 50–520V AC (L-L)</li>
          <li>Auxiliary Supply: 100–270V AC, 50/60Hz</li>
          <li>Humidity(non-condensing)
Up to 85% RH</li>
          <li>Mounting Panel Mount</li>
          <li>CT Primary: 5A to 6000A
(Programmable for any value)</li>
          <li>PT Primary: 415, 440, 2.2KV, 3.3KV,
6.6KV, 11KV, 22KV, 33KV, 66KV.</li>
          <li>PT Secondary: 110V/415V AC
</li>
          <li>Power Consumption: less than 4VA AC</li>
          <li>Resolution Power & Energy resolution
depends on CT & PT</li>
          <li>RPM: 1350-1950 (Pole: 4 (Range: 4-32
selectable) Frequency: 45-65Hz)</li>
          <li>Run Hour: 0 - 999999 H
</li>
          <li>Burden: less than 4 VC</li>
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
                <th>Packed (HxWxL) CM</th>
                <th>UnPacked
(HxWxL)</th>
                <th>Phase</th>
                <th>Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VAF 9601</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 4.5 × 10</td>
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
          <li>7 Segment LED Display, 3 row of 3 digit</li>
          <li>Display Color: Red</li>
          <li>Digit Height: 0.56 inch</li>
          <li>Display Scrolling: Automatic / Manual</li>
          <li>Update Time: 1 second</li>
          <li>Packed Weight: 250 g</li>
          <li>Unpacked Weight: 200 g</li>
        </ul>
      </div>

            <div className="detail-block">
        <h3>Environmental Conditions</h3>
        <ul>
          <li>Indooor Use</li>
          <li>Altitude of upto 2000
meters</li>
          <li>Protection Class:2</li>
        </ul>
      </div>

            <div className="detail-block">
        <h3>Environmental Conditions</h3>
        <ul>
          <li>Indooor Use</li>
          <li>Altitude of upto 2000
meters</li>
<li>Pollution degree: 2</li>
          <li>Protection Class:2</li>
        </ul>
      </div>
    </section>
    </>
  );
}
