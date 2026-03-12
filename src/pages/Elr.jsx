import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/elr1.png",
    "/image/elr.png",
      "/image/cbct.png",
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
          <h1>Earth Leakage relay(ELR) & CBCT</h1>
          <p>
          Why Use ELR & CBCT Together?
            <ul>
          <li>Fast and reliable earth fault protection</li>
          <li>Adjustable trip sensitivity.</li>
          <li>Prevents fire & shock hazards.</li>
          <li>Suitable for high-load industrial systems.</li>
        </ul>
</p><p> <ul>
          <li>Protects costly electrical equipment.</li>
          <li>CBCT ensures accurate detection of earth fault or leakage current.</li>

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

            <div className="detail-block">
        <h3>Environmental Conditions</h3>
        <ul>
          <li>Indooor Use
</li>
          <li>Altitude of upto 2000 meters</li>
          <li>Pollution degree : 2</li>
          <li>Protection Class : 2</li>
          <li>Temperature 
           Operating: 0℃ to +55℃
           Storage: 0℃ to +75℃ </li>
           <li>Humidity(non-condensing) </li>
           <li>Up to 85% RH</li>
           <li>Mounting Panel Mount</li>
           <li>Packed Weight: 200 gms</li>
           <li>Unpacked Weight: 150 gms</li>
        </ul>
      </div>


      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li><h4>DISPLAY</h4></li>
          <li>7 Segment LED Display, Dual Line, 4 digits each 
Digit Height : Upper 0.8 inch, Lower 0.56 inch
LED Indication for Relay Trip Indication.</li>
          <li><h4>Input Specifications:
</h4></li>
          <li>Rated Input Current
30mA to 3A AC, via external CBCT
Range: 30mA to 3000A AC</li>
          <li><h4>Output Specifications:
</h4></li>
          <li>No. of output: 1 Relay 1 C/O
Relay Rating: 5A, 230 V AC(Resistive Load)</li>
          <li><h4>Auxiliary Supply
</h4></li>
          <li>Supply Voltage: 100V to 270V AC (SMPS), 50/60 Hz
Power Consumption: less than 4VA @270V Max
</li>
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
                <td>ELR 96</td>
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
        <h3>EARTH LEAKAGE RELAY 96</h3>
        <ul>
          <li>Accuracy Class 1
</li>
          <li>Compact Design with Low Depth Back Depth 40mm</li>
          <li>True RMS Measurement</li>
          <li>User Friendly & Easy to Program</li>
          <li>0.8 Inch Bigger & Ultra Bright Display</li>
        </ul>
      </div>
    </section>
    </>
  );
}
