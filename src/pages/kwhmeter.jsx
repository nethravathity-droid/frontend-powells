import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/kwh.png",
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
          <h1>KILOWATT
HOURS (KWH)</h1>
          <p>
          How an Ammeter Works.
            <ul>
          <li>Track total energy consumption.</li>
          <li>Reduce electricity costs.</li>
          <li>Improve energy efficiency.</li>
          <li>Monitor machine performance.</li>
        </ul>
</p><p> <ul>
          <li>Perform energy audits.</li>
          <li>Measures total energy consumption.</li>

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
          <li>Input Voltage Rated: 30–300V AC (L-N), 50–520V AC (L-L)</li>
          <li>Auxiliary Supply: 100–270V AC, 50/60Hz</li>
          <li>Temperature
Operating: 0°C to +55°C
Storage: 0°C to +75°C</li>
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
         </ul>
      </div>

            <div className="detail-block">
        <h3>Serial Communication</h3>
        <ul>
          <li>Interaface Standsrd & Protocal : RS 485</li>
          <li>Communication Address: 1 to 128</li>
          <li>Baudrate: 4800, 19200, 38400</li>
          <li>Parity: None, Even, Odd</li>
          <li>Datatype: Float & Integer</li>
          <li>Stop Bit: 1</li>
          <li>Transmission Mode: Half Duplex</li>
           <li>Number Of Device in Network: 32 Max</li>
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
                <td>KWH 93</td>
                <td>10.5 × 5 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 96</td>
              </tr>
                            <tr>
                <td>DKWH 93DS</td>
                <td>10.5 × 5.7 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 96</td>
              </tr>
                            <tr>
                <td>DKWH 93DS</td>
                <td>10.5 × 5.7 × 10.5</td>
                <td>10 × 5.5 × 10</td>
                <td>3Ø</td>
                <td>96 × 48</td>
              </tr>
                            <tr>
                <td>DKWH 93E</td>
                <td>10.5 × 5 × 10.5</td>
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
          <li>7 Segment LED Display, 3 row of 3 digit</li>
          <li>Display Color: Red</li>
          <li>Digit Height: 0.56 inch</li>
          <li>Display Scrolling: Automatic / Manual</li>
          <li>Update Time: 1 second</li>
          <li>Packed Weight: 350 g</li>
          <li>Unpacked Weight: 300 g</li>
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
