import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/Mpr.png",
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
          <h1>MOTOR PROTECTION
RELAY (MPR)</h1>
          <p>
          Why Motor Protection is Important?
            <ul>
          <li>Overload Protection & Single Phasing Protection.</li>
          <li>Phase Failure Detection & Phase Reversal Protection.</li>
          <li>Over Voltage & Under Voltage Protection.</li>
          <li>Current Imbalance Protection & Dry Run Protection (for pumps).</li>
        </ul>
</p><p> <ul>
          <li>Adjustable Trip Settings.</li>
          <li>Time Delay Protection.</li>

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
          <li><h4>Display Specification
</h4></li>
          <li>Display Three row, 3 digits Seven segment
</li>
          <li>Display Color Red & White
</li>
          <li>Digit Height 0.56 Inch (14.22 mm)</li>
          <li>LED Indication Input1 & Output2
Keys Set & Reset Up / Scroll, Down/
Scroll & Hold
</li>
          <li>Packed weight: 250gms</li>
          <li>Unpacked weight: 200gms</li>

                    <li><h4>Input Specifications
</h4></li>
          <li>Electrical Connection
1Ø-2W,3Ø-3W, 30-4W AC
</li>
          <li>Input Voltage
30V to 500V AC (L-N)
50V to 520V AC (L-L)

</li>
          <li>Input Current Rated
</li>
          <li>Nominal 5A (Min-50mA, Max-5.5A)
Continuous Max. Input Rating 5.5A
</li>
          <li>Resolution 0.01, 0.1, 1A
(Depending upon CT primary)</li>
          <li>Frequency 45.0 to 65.0 Hz</li>
          <li>Accuracy Class 1.0</li>

           <li><h4>Settable Parameters
</h4></li>
          <li>CT Primary setting: 5A to 6000A
Value Increment in steps of 5А
</li>
          <li>CT Secondary setting: 5A Fixed
</li>

           <li><h4>Supply Specifications

</h4></li>
          <li>Auxiliary Supply 100 to 270V AC,
±10% (50/60 Hz)
</li>
          <li>Power Consumption less than 4VA max
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
                <th>Packed Size (cm)</th>
                <th>Unpacked Size (cm)</th>
                <th>Phase</th>
                <th>Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MPR 9600</td>
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
        <h3>Environmental Conditions</h3>
        <ul>
          <li>Temperature
Operating: 0°C to +55°C
Storage: 0°C to +55°C
</li>
          <li>Humidity(non-condensing)</li>
          <li>Up to 85% RH
</li>
        </ul>
      </div>

    </section>
    </>
  );
}
