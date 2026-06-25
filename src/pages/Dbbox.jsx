import "./DbBox.css";
import { Link } from "react-router-dom";

const MODELS = [
  {
    name: "Single Door DB",
    desc: "Compact distribution board for residential and small commercial panels.",
    img: "/image/digital_timers.png",
  },
  {
    name: "Double Door DB",
    desc: "Expanded wiring space for multi-circuit MCB and RCCB arrangements.",
    img: "/image/4pole_mcb.png",
  },
  {
    name: "Modular DB Enclosure",
    desc: "Flexible way configuration for industrial and building distribution.",
    img: "/image/rccb_4pole.png",
  },
];

const SPECS = [
  ["Enclosure Type", "Metal / ABS (as per model)"],
  ["Rated Voltage", "240V / 415V AC"],
  ["Ways Available", "4 Way – 24 Way (modular)"],
  ["Mounting", "Surface / Flush"],
  ["Protection Class", "IP40 / IP54 (model dependent)"],
  ["Standards", "IEC 61439 / IS compliant design"],
  ["Compatible Devices", "MCB, RCCB, Isolators, SPD"],
  ["Application", "LT distribution & panel building"],
];

const APPLICATIONS = [
  "Residential Buildings",
  "Commercial Complexes",
  "Industrial Control Panels",
  "Solar & Power Backup Systems",
  "Office & Retail Spaces",
  "OEM Panel Builders",
];

export default function DbBox() {
  return (
    <div className="dbbox-page">
      <section className="dbbox-hero">
        <div className="container">
          <div className="dbbox-content">
            <span className="product-tag">Distribution Board</span>
            <h1>Powells DB Box Solutions</h1>
            <p>
              Robust distribution board enclosures designed for safe, organised
              and professional mounting of MCB, RCCB, isolators and protection
              devices. Built for panel builders, contractors and industrial
              installations across India.
            </p>
            <div className="hero-buttons">
              <button type="button" className="primary-btn">
                Download Catalogue
              </button>
              <Link to="/pages/Contact" className="secondary-btn">
                Get Quotation
              </Link>
            </div>
          </div>
          <div className="dbbox-image">
            <img src="/image/digital_timers.png" alt="Powells DB Box" />
          </div>
        </div>
      </section>

      <section className="dbbox-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Modular Design</h3>
              <p>
                Flexible way configuration to accommodate various circuit
                layouts and future expansion.
              </p>
            </div>
            <div className="feature-card">
              <h3>Safe Wiring Layout</h3>
              <p>
                Ample busbar and cable routing space for neat, maintainable
                panel assembly.
              </p>
            </div>
            <div className="feature-card">
              <h3>Durable Enclosure</h3>
              <p>
                Sturdy construction for long service life in indoor distribution
                applications.
              </p>
            </div>
            <div className="feature-card">
              <h3>Switchgear Ready</h3>
              <p>
                Designed to integrate Powells MCB, RCCB, isolators and SPD
                products seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dbbox-models">
        <div className="container">
          <h2>Available Configurations</h2>
          <div className="dbbox-model-grid">
            {MODELS.map((model) => (
              <div key={model.name} className="dbbox-model-card">
                <img src={model.img} alt={model.name} />
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dbbox-specs">
        <div className="container">
          <h2>Technical Specifications</h2>
          <table>
            <tbody>
              {SPECS.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="dbbox-applications">
        <div className="container">
          <h2>Applications</h2>
          <div className="application-grid">
            {APPLICATIONS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="dbbox-benefits">
        <div className="container">
          <h2>Why Choose Powells DB Box?</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>Panel Builder Friendly</h3>
              <p>
                Easy assembly and standard dimensions for faster production and
                installation.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Complete Ecosystem</h3>
              <p>
                Pair with Powells switchgear and protection devices for a unified
                solution.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Trusted Support</h3>
              <p>
                Technical guidance for selection, layout and quotation from our
                sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dbbox-cta">
        <div className="container">
          <h2>Need a Custom DB Layout?</h2>
          <p>
            Share your way count, mounting type and application — our team will
            recommend the right Powells DB Box configuration.
          </p>
          <Link to="/pages/Contact" className="primary-btn">
            Get Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
