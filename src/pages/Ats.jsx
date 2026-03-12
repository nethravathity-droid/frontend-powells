import { useState, useEffect } from "react";
import "./ProductHero.css";
import { Link, useLocation } from "react-router-dom";
import "./InfoTabs.css";

const images = [
  "/image/ats.mp4",
  "/image/ats2.mp4",
];

export default function ProductHero() {
  const variants = [
  {
            price: "PWCS",
    amps: "ATS 63A",
image: "/image/ats2.png",
  },
  {
            price: "PWCS",
    amps: "ATS 100A",
image: "/image/ats2.png",
  },
  {
        price: "PWCS",
    amps: "ATS 125A",
image: "/image/ats2.png",
  },
    {
    price: "PWCS",
    amps: "ATS 160A",
image: "/image/ats2.png",
  },
    {
            price: "PWCS",
amps: "ATS 200A",
image: "/image/ats2.png",
  },
    {
            price: "PWCS",
amps: "ATS 250A",
image: "/image/ats2.png",
  },
    {
            price: "PWCS",
amps: "ATS 400A",
image: "/image/ats2.png",
  },
    {
            price: "PWCS",
amps: "ATS 630A",
image: "/image/ats2.png",
  },
    {
            price: "PWCS",
amps: "ATS 1250A",
image: "/image/ats2.png",
  },
      {
            price: "PWCS",
amps: "ATS 1600A",
image: "/image/ats2.png",
  },
        {
            price: "PWCMP",
amps: "ATS 63A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 100A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 125A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 160A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 200A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 250A",
image: "/image/ats8.png",
  },
          {
            price: "PWCMP",
amps: "ATS 630A",
image: "/image/ats8.png",
  },
];
const [selectedVariant, setSelectedVariant] = useState(null);
  const [index, setIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("Varients");

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
  <div className="hero-left">
    <video
      key={index}
      src={images[index]}
      className="slide-video"
      autoPlay
      muted
      loop
      playsInline
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

  <div className="hero-right">
    <span className="product-tag">Power Control Device</span>
    <h1>
      Automatic Transfer <br />
      <span>Switch</span>
    </h1>

    <p>How an Automatic Transfer Switch Works.</p>

    <ul className="features">
      <li>Monitors main power supply continuously.</li>
      <li>Detects power failure or voltage drop.</li>
      <li>Automatically switches load to generator/inverter.</li>
      <li>When main power restores, transfers load back safely.</li>
    </ul>

    <div className="hero-buttons">
      <a href="/image/Powells.pdf" download>
        <button className="primary-btn">Download Catalogue</button>
      </a>

      <a className="secondary-btn" href="/contact">
        Get a Quote
      </a>
    </div>
  </div>
</section>
      {/* NEXT SECTIONS */}

      <div className="info-section">
      <h2 className="section-title">Product Information</h2>

      {/* BUTTONS */}
      <div className="tab-buttons">
    
         <button
          className={activeTab === "Varients" ? "active" : ""}
          onClick={() => setActiveTab("Varients")}
        >
          Varients
        </button>

        <button
          className={activeTab === "features" ? "active" : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

       
        <button
          className={activeTab === "specs" ? "active" : ""}
          onClick={() => setActiveTab("specs")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "Description" ? "active" : ""}
          onClick={() => setActiveTab("Description")}
        >
Description        </button>

     <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
      </div>

                {activeTab === "Varients" && (
  <div style={{ textAlign: "left" }}>

          </div>
        )}

                {activeTab === "Varients" && (
  <div style={{ textAlign: "left" }}>

        <section className="ats-section">
      <div className="ats-container">

        {/* LEFT IMAGE */}
<section className="ats-section">
  <div className="ats-wrapper">

    <div className="ats-card ats-1">
      <img src="/image/ats2.png" alt="ATS 1" />
    </div>

    <div className="ats-card ats-2">
      <img src="/image/ats2.png" alt="ATS 2" />
    </div>

    <div className="ats-card ats-3">
      <img src="/image/ats2.png" alt="ATS 3" />
    </div>

    <div className="ats-card ats-4">
      <img src="/image/ats.png" alt="ATS 4" />
    </div>

  </div>
</section>
        {/* RIGHT CONTENT */}
        <div className="ats-content1">
          <h2 className="ats-title1">
            Automatic Transfer Switch
          </h2>

          <h3 className="ats-range1">
            ATS 63A – ATS 1200A
          </h3>
       </div>
      </div>
    </section>

    <section className="ats-section1">
      <div className="ats-container1">

        {/* LEFT IMAGE */}
<section className="ats-section1">
  <div className="ats-wrapper1">

    <div className="ats-card ats-11">
      <img src="/image/ats8.png" alt="ATS 1" />
    </div>

    <div className="ats-card ats-21">
      <img src="/image/ats8.png" alt="ATS 2" />
    </div>

    <div className="ats-card ats-31">
      <img src="/image/ats8.png" alt="ATS 3" />
    </div>

    <div className="ats-card ats-41">
      <img src="/image/ats8.png" alt="ATS 4" />
    </div>

  </div>
</section>
        {/* RIGHT CONTENT */}
        <div className="ats-content1">
          <h2 className="ats-title1">
            Automatic Transfer Switch
          </h2>

          <h3 className="ats-range1">
            ATS 63A – ATS 630A
          </h3>
       </div>

      </div>
    </section>

          </div>
        )}



      {/* CONTENT AREA */}
      <div>
        {activeTab === "overview" && (
  <div style={{ textAlign: "left" }}>
            <section >

        <div className="hero-right">
      <span className="product-tag">Overiew</span>
      <h1>
        Automatic Transfer Switch<br />
        
      </h1>  
      </div>
      <p>Automatic Transfer Switch 

We are a leading manufacturer and supplier of 63A Automatic Transfer Switch (ATS) designed for safe and reliable power transfer between main supply and generator/inverter systems.

Our ATS ensures uninterrupted power supply for residential, commercial and industrial applications.
</p>
Available Models:
<ul>
<li>Automatic Transfer Switch with Digital Display</li>

<li>Automatic Transfer Switch without Display</li></ul>
<section className="about-section">
      
      {/* Section 1 */}
      <div className="about-row">
        <div className="about-image">
          <img src="/image/atss.png" alt="Factory" />
        </div>
        <div className="about-text">
          <h2>ATS with Digital Display</h2>
          <p>
        ATS with display is designed for real-time monitoring and automatic power switching. The built-in LED/LCD display shows voltage and source status, making it ideal for modern electrical panels.
        </p>
<h3>Key Features</h3>
        <ul>
          <li> Digital Voltage Display</li>
          <li> Main & Generator Status Indication</li>
          <li> Auto / Manual Mode</li>
                    <li> Fast Switching Time</li>
          <li> Compact Panel Mount Design</li>
          <li> High Mechanical & Electrical Life</li>
        </ul>
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-row reverse">
        
        <div className="about-image">
          
          <img src="/image/ates.png" alt="Mission" />
        </div>
        <div className="about-text">
      <h2>ATS without Digital Display</h2>

        <p>
ATS without display is a cost-effective and reliable automatic changeover switch for standard power backup applications.        </p>
<h3>Key Features</h3>
        <ul>
          <li> Automatic Power Changeover</li>
          <li> High Current Capacity</li>
          <li> Durable & Compact Design</li>
                    <li> Manual Override Option</li>
          <li> Panel Mount</li>
          <li> Low Maintenance</li>
        </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-row">
        <div className="about-text">
                      <ul>
               <h2>Why Choose Us?</h2>
          <li> High Quality Industrial Grade Components</li>
          <li> Strict Quality Testing</li>
                    <li> Competitive Pricing</li>
          <li> Custom Design Options Available</li>
          <li> Reliable After-Sales Support</li>
        </ul>
        </div>
        <div className="about-text">
      <div className="about-text">
           
               
<h2>Key Features</h2>
        <ul>
          <li> Digital Voltage Display</li>
          <li> Main & Generator Status Indication</li>
          <li> Auto / Manual Mode</li>
                    <li> Fast Switching Time</li>
          <li> Compact Panel Mount Design</li>
          <li> High Mechanical & Electrical Life</li>
        </ul>

        </div>
        </div>
        
      </div>

    </section>
        </section>
          </div>
        )}

       
        {activeTab === "features" && (
  <div style={{ textAlign: "left" }}>
          <section className="spec-table-section fade-up">
          <div className="detail-block">
            <h3>Working Conditions</h3>
            <ul>
              <li>Ambient temperature: -5°C to +40°C</li>
              <li>Humidity: Max 50% at +40°C</li>
              <li>Altitude: Not more than 2000m</li>
              <li>Pollution Class: 3</li>
              <li>Use category: AC-331B</li>
            </ul>

            <h3>Transportation and Storage</h3>
            <ul>
              <li>Protect from rain and snow</li>
              <li>Storage temperature: -25°C to +55°C</li>
              <li>Humidity: Max 95% at 25°C</li>
            </ul>

            <h3>Device Specifications</h3>
            <ul>
              <li>CAT: ATS</li>
              <li>Voltage: 380V AC</li>
              <li>Current: 100A</li>
              <li>Standard: GB/T14048.11</li>
              <li>Model: PC6-63/4P-1</li>
            </ul>
          </div>
        </section>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h3>Specifications</h3>
             <section className="spec-table-section fade-up">
        
  <div className="spec-table-wrapper">
    <table className="spec-table">
      <thead>
        <tr>
           <th>Frame Current (A)</th>
            <th>100</th>
            <th>160</th>
            <th>250</th>
            <th>630</th>
            <th>1250</th>
            <th>1600</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Rated Insulation Voltage</td>
           <td colSpan="6">690KV</td>
        </tr>

        <tr>
          <td>Rated Impulse Withstand Voltage</td>
            <td colSpan="6">8KV</td>
        </tr>

        <tr>
          <td>Rated Working Current (A)</td>
            <td>63A, 100A, 125A</td>
            <td>160A</td>
            <td>160A</td>
             <td>315A, 400A, 630A</td>
            <td>800A, 1000A, 1250A</td>
            <td>1600A</td>
        </tr>

        <tr>
          <td>Rated Short Circuit Making Capacity</td>
            <td>8KA</td>
            <td>17KA</td>
            <td>17KA</td>
            <td>26KS</td>
            <td>55KA</td>
            <td></td>
        </tr>

        <tr>
         <td>Rated Limit Short Circuit Current</td>
            <td colSpan="6">120KA</td>
          </tr>
          <tr>
            <td>Control Power Voltage</td>
            <td colSpan="6">AC230V</td>
          </tr>
          <tr>
            <td>Power Outage Time(s)</td>
            <td>0.7</td>
            <td>1</td>
            <td>1.2</td>
            <td>0.8</td>
            <td>1</td>
            <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

          </div>
        )}

        {activeTab === "Description" && (
          <div>
<section className="spec-table-section fade-up">
  <div className="spec-table-wrapper">
    <table className="spec-table">
      <thead>
        <tr>
           <th>Description</th>
            <th>PWCMP</th>
            <th>PWCS</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Rated Voltage</td>
            <td>AC230V 50/60Hz</td>
            <td>AC230V 50/60Hz</td>
        </tr>

        <tr>
               <td>Aux. Power</td>
            <td>DC24V</td>
            <td>DC24V</td>
        </tr>

        <tr>
            <td>Voltage Measuring Range</td>
            <td>40~300V</td>
            <td>40~300V</td>
        </tr>

        <tr>
           <td>Power Loss</td>
            <td>&lt;=10W</td>
            <td>&lt;=10W</td>
        </tr>

        <tr>
                  <td>Working Position</td>
            <td>(Normal Power ON, Reserve power ON, OFF)</td>
            <td>(Normal Power ON, Reserve power ON, OFF)</td>
          </tr>
          <tr>
             <td>Operation Mode</td>
            <td>Auto, Manual</td>
            <td>Auto, Manual, Remote</td>
          </tr>
          <tr>
             <td>Display Mode</td>
            <td>LED indicator</td>
            <td>LCD Display</td>
        </tr>
         <tr>
            <td>Transfer Mode</td>
            <td>Auto Transfer auto recovery</td>
            <td>Auto Transfer auto recovery / Auto Transfer no recovery</td>
          </tr>
          <tr>
            <td>Under Voltage Transfer Value</td>
            <td>NO</td>
            <td>160-200V Adjustable</td>
          </tr>
          <tr>
            <td>Over Voltage Transfer Value</td>
            <td>NO</td>
            <td>240-290V Adjustable</td>
          </tr>
          <tr>
            <td>Transfer Delay Function</td>
            <td>NO</td>
            <td>0-180s Adjustable</td>
          </tr>
          <tr>
            <td>Recovery Delay Function</td>
            <td>NO</td>
            <td>0-180s Adjustable</td>
          </tr>
          <tr>
            <td>Phase Missing Detect</td>
            <td>Single phase</td>
            <td>Three phase</td>
          </tr>
           <tr>
            <td>Generator Control</td>
            <td>NO</td>
            <td>Yes (one set relay contact)</td>
          </tr>
          <tr>
            <td>Fire-linkage Control</td>
            <td>NO</td>
            <td>Yes (passive contact input, with one set NO passive feedback signal)</td>
          </tr>
          <tr>
            <td>Isolation Lock</td>
            <td>Disconnect position has isolation function, padlockable</td>
            <td>Disconnect position has isolation function, padlockable</td>
          </tr>
          <tr>
            <td>RS485 Function</td>
            <td>YES</td>
            <td>YES</td>
          </tr>
             <tr>
            <td>Installation Mode</td>
            <td>Integrated (No Display)</td>
            <td>Integrated or Split (Integrated type without display)</td>
          </tr>
      </tbody>
    </table>
  </div>
</section>


          </div>
        )}
      </div>
    </div>
     
      {/* NEXT SECTION */}
      <section id="more-products" className="product-details">

      
   

    </section>
    </>
  );
}
