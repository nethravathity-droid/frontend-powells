import { useState, useEffect } from "react";
import "./ProductHero.css";

const images = [
  "/image/amf1.png",
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
          <h1>AUTO MAINS
FAILURE (AMF)
CONTROLLER</h1>
          <p>
         Why Use an AMF Controller?
            <ul>
          <li>Automatic Mains Monitoring & Auto Generator Start / Stop.</li>
          <li>Under Voltage / Over Voltage Protection.</li>
          <li>Under Frequency / Over Frequency Protection.</li>
          <li>Engine Monitoring (Oil Pressure, Temperature).</li>
        </ul>
</p><p> <ul>
          <li>Battery Charging Monitoring.</li>
          <li>Fault Indication & Alarm.</li>

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

    <section className="product-details" id="more-products">

      {/* 1️⃣ TECHNICAL SPECIFICATION */}
      <div className="detail-block">
        <h3>Technical Specifications</h3>
        <ul>
          <li><h4>DIMENSIONS</h4></li>
          <li>Overall Dimensions: 180 x 126 x 45 mm
</li>
          <li>Panel Cutout: 157 x 118 mm
</li>
          <li>Mounting Facility: Two Clamps</li>
          <li>
IP Rating: IP 56 Front Side</li>
          <li><h4>DC SUPPLY
</h4></li>
          <li>Supply Voltage: 8 VDC to 32 VDC Nominal
Automotive</li>
          <li>Supply Current: Standby $ 35 mA (When
GLCD's Back Light is OFF).</li>
          <li>Standby 60 mA at 12V (When GLCD's Back
Light is "ON").</li>
<li>Reverse Polarity Protection:-36 VDC</li>
<li>Operating Temperature: -20°C to +70°C</li>
<li>Storage Temperature: -30°C to +70°C</li>
<li>Relative Humidity: 90% Non-Condensing</li>
<li><h4>MAINS AND GENSET</h4></li>
<li>AC Voltage Range: L-N40-577 VRMS</li>
<li>L-L-69-999 VRMS
</li>
<li>Ac Frequency Range: 30Hz-80Hz</li>
<li>CT Current Range: 0-5А
</li>
<li><h4>INPUTS
</h4></li>
<li>Digital Input: 9-Digital Input</li>
<li>Digital Input Ratings: Whetting current 6 mA
at 12 VDC.</li>
<li> DC input protection for +30 VDС.</li>
<li>Input Reference: -0 VDC (i.e. Battery's
Negative Terminal)</li>
        </ul>
      </div>
      <div className="detail-block">


        <h3>Additional Feature</h3>
        <ul>
          <li><h4>OUTPUTS</h4></li>
          <li>Digital Output: 8-Digital Output
</li>
          <li>Ratings Of Outputs For Relay Coil
Control Relay Coil Control.
</li>
          <li>A over load
protected, Low - Side Driver
</li>
          <li><h4>SENSORS SPECIFICATIONS
</h4></li>
          <li>SOIL PRESSURE SENSOR TYPE
</li>
          <li><h4>OR
</h4></li>
          <li>Current: 4mA-20mA
</li>
<li>Range: 0 to 10 Bar. User curve.</li>
<li>ENGINE TEMPERATURE SENSOR TYPE
Switch: Close On Fault (C. O. F.),
Resistive (NTC): 19 to 503 ohms</li>
<li>Range: -40°C to 150°C. User curve.</li>

<li><h4>FUEL LEVEL SENSOR TYPЕ</h4></li>
<li>Switch: Close On Fault (C. O. F.)</li>
<li>Resistive: 10 to 180 Ohms
</li>
<li>Range: 0% to 100%. User curve.</li>

<li><h4>SPARE ANALOG INPUT
</h4></li>
<li>Resistive (NTC): 19 to 503 Ohms</li>
<li>Range: -40°C to 150°C. User curve</li>

<li><h4>MPU Input</h4></li>
<li> Frequency 100 Hz to 8 Khz</li>
<li>Communication: RS-485 (MODBUS)</li>
<li>Event Log: Yes</li>
        </ul>
      </div>

    </section>
    </>
  );
}
