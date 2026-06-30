import "./RCCBPage.css";
import { Link } from "react-router-dom";
import VariantCartButton from "../components/VariantCartButton";

const MODELS = [
  {
    id: "rccb-2p",
    name: "2 Pole RCCB",
    desc: "Single-phase earth leakage protection for homes and small commercial loads.",
    img: "/image/rccb_4pole.png",
  },
  {
    id: "rccb-4p",
    name: "4 Pole RCCB",
    desc: "Three-phase protection for industrial panels and distribution boards.",
    img: "/image/rccb_4pole.png",
  },
  {
    id: "rccb-hs",
    name: "High Sensitivity RCCB",
    desc: "30mA sensitivity for enhanced personal protection in wet areas.",
    img: "/image/rccb_4pole.png",
  },
];

const SPECS = [
  ["Rated Current", "25A – 100A"],
  ["Sensitivity", "30mA, 100mA, 300mA"],
  ["Poles", "2 Pole, 4 Pole"],
  ["Rated Voltage", "230V / 415V AC"],
  ["Frequency", "50/60Hz"],
  ["Standard", "IEC 61008"],
  ["Mounting", "DIN Rail"],
  ["Application", "Earth leakage & shock protection"],
];

const APPLICATIONS = [
  "Residential Buildings",
  "Commercial Complexes",
  "Industrial Plants",
  "Hospitals",
  "Data Centers",
  "Educational Institutions",
];

export default function RCCBPage() {
  return (
    <div className="rccb-page">
      <section className="rccb-hero">
        <div className="container">
          <div className="rccb-content">
            <span className="product-tag">Residual Current Circuit Breaker</span>
            <h1>RCCB Protection Solutions</h1>
            <p>
              Protect people and installations against earth leakage currents.
              Powells RCCBs provide fast disconnection to prevent electric shock
              and fire hazards in residential, commercial and industrial
              systems.
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
          <div className="rccb-image">
            <img src="/image/rccb_4pole.png" alt="Powells RCCB" />
          </div>
        </div>
      </section>

      <section className="rccb-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Earth Leakage Protection</h3>
              <p>
                Detects leakage currents and disconnects power instantly to
                protect life and property.
              </p>
            </div>
            <div className="feature-card">
              <h3>High Reliability</h3>
              <p>
                Consistent protection for homes, commercial and industrial
                electrical systems.
              </p>
            </div>
            <div className="feature-card">
              <h3>Quick Tripping</h3>
              <p>
                Rapid response to fault conditions improving overall electrical
                safety.
              </p>
            </div>
            <div className="feature-card">
              <h3>DIN Rail Mounting</h3>
              <p>
                Easy installation inside Powells DB boxes and standard
                distribution boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rccb-models">
        <div className="container">
          <h2>Available Configurations</h2>
          <div className="rccb-model-grid">
            {MODELS.map((model) => (
              <div key={model.id} className="rccb-model-card">
                <img src={model.img} alt={model.name} />
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
                <VariantCartButton id={model.id} name={model.name} image={model.img} path="/pages/Rccb" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rccb-specs">
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

      <section className="rccb-applications">
        <div className="container">
          <h2>Applications</h2>
          <div className="application-grid">
            {APPLICATIONS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="rccb-benefits">
        <div className="container">
          <h2>Why Choose Powells RCCB?</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>Personal Protection</h3>
              <p>
                Reduces risk of electric shock in homes, offices and industrial
                facilities.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Panel Integration</h3>
              <p>
                Works seamlessly with Powells MCB, isolators and DB box
                solutions.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Expert Support</h3>
              <p>
                Our team helps you select the right sensitivity and rating for
                your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rccb-cta">
        <div className="container">
          <h2>Need Help Selecting an RCCB?</h2>
          <p>
            Share your load details and panel layout — our technical experts
            will recommend the right Powells RCCB configuration.
          </p>
          <Link to="/pages/Contact" className="primary-btn">
            Get Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
