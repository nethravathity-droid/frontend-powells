import "./IsolatorPage.css";
import { Link } from "react-router-dom";
import VariantCartButton from "../components/VariantCartButton";

const MODELS = [
  {
    id: "isolator-1p",
    name: "1 Pole Isolator",
    desc: "Single-phase isolation for residential and light commercial circuits.",
    img: "/image/isolators.png",
  },
  {
    id: "isolator-2p",
    name: "2 Pole Isolator",
    desc: "Double-pole switching for enhanced line and neutral disconnection.",
    img: "/image/isolators.png",
  },
  {
    id: "isolator-3-4p",
    name: "3 & 4 Pole Isolator",
    desc: "Three-phase isolation for industrial panels and distribution boards.",
    img: "/image/isolators.png",
  },
];

const SPECS = [
  ["Rated Current", "16A – 125A"],
  ["Rated Voltage", "240V / 415V AC"],
  ["Poles", "1P, 2P, 3P, 4P"],
  ["Frequency", "50/60Hz"],
  ["Mounting", "DIN Rail"],
  ["Standards", "IEC compliant design"],
  ["Application", "Maintenance isolation & load switching"],
];

const APPLICATIONS = [
  "Residential Buildings",
  "Commercial Complexes",
  "Industrial Plants",
  "Solar Installations",
  "Control Panels",
  "Power Distribution Boards",
];

export default function IsolatorPage() {
  return (
    <div className="isolator-page">
      <section className="isolator-hero">
        <div className="container">
          <div className="isolator-content">
            <span className="product-tag">Electrical Isolator Switch</span>
            <h1>Safe Isolation for Electrical Systems</h1>
            <p>
              High-performance isolators designed for safe disconnection of
              electrical circuits during maintenance and servicing operations.
              Built for distribution boards, control panels and industrial
              installations.
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
          <div className="isolator-image">
            <img src="/image/isolators.png" alt="Powells Electrical Isolator" />
          </div>
        </div>
      </section>

      <section className="isolator-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Reliable Isolation</h3>
              <p>
                Provides complete disconnection from electrical supply during
                maintenance and servicing.
              </p>
            </div>
            <div className="feature-card">
              <h3>Compact Design</h3>
              <p>
                Space-saving construction suitable for modern distribution
                boards and panel layouts.
              </p>
            </div>
            <div className="feature-card">
              <h3>Easy Installation</h3>
              <p>
                Quick DIN rail mounting for fast setup in new and retrofit
                panels.
              </p>
            </div>
            <div className="feature-card">
              <h3>Long Service Life</h3>
              <p>
                Durable components ensure reliable performance over extended
                operational use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="isolator-models">
        <div className="container">
          <h2>Available Configurations</h2>
          <div className="isolator-model-grid">
            {MODELS.map((model) => (
              <div key={model.id} className="isolator-model-card">
                <img src={model.img} alt={model.name} />
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
                <VariantCartButton id={model.id} name={model.name} image={model.img} path="/pages/Isolator" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="isolator-specs">
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

      <section className="isolator-applications">
        <div className="container">
          <h2>Applications</h2>
          <div className="application-grid">
            {APPLICATIONS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="isolator-benefits">
        <div className="container">
          <h2>Why Choose Powells Isolators?</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>Enhanced Safety</h3>
              <p>
                Ensures safe maintenance and servicing with visible break
                indication.
              </p>
            </div>
            <div className="benefit-card">
              <h3>High Reliability</h3>
              <p>
                Consistent performance in demanding electrical environments
                and panel builds.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Cost Effective</h3>
              <p>
                Low maintenance requirements and long operational life for
                total value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="isolator-cta">
        <div className="container">
          <h2>Need Technical Assistance?</h2>
          <p>
            Contact our experts for product selection, installation guidance
            and technical support for your panel requirements.
          </p>
          <Link to="/pages/Contact" className="primary-btn">
            Get Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
