import "./mcb.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import ProductPageCart from "../components/ProductPageCart";

const MODELS = [
  {
    id: "mcb-1p",
    name: "1 Pole MCB",
    desc: "Single-phase overload and short-circuit protection for branch circuits.",
    img: "/image/1p_mcb.png",
  },
  {
    id: "mcb-2p",
    name: "2 Pole MCB",
    desc: "Double-pole protection for residential and commercial distribution.",
    img: "/image/2pole_mcb.png",
  },
  {
    id: "mcb-3p",
    name: "3 Pole MCB",
    desc: "Three-phase protection for industrial and commercial panel boards.",
    img: "/image/3pole_mcb.png",
  },
  {
    id: "mcb-4p",
    name: "4 Pole MCB",
    desc: "Full three-phase plus neutral protection for complete circuit safety.",
    img: "/image/4pole_mcb.png",
  },
];

const SPECS = [
  ["Rated Current", "0.5A – 63A"],
  ["Poles", "1P, 2P, 3P, 4P"],
  ["Rated Voltage", "230V / 400V AC"],
  ["Breaking Capacity", "10kA"],
  ["Mounting", "DIN Rail"],
  ["Operating Temperature", "-25°C to +55°C"],
  ["Standards", "IEC compliant design"],
  ["Application", "Overload & short-circuit protection"],
];

const APPLICATIONS = [
  "Residential Buildings",
  "Commercial Complexes",
  "Industrial Automation",
  "Solar Installations",
  "OEM Panels",
  "Power Distribution",
];

export default function MCBPage() {
  return (
    <div className="mcb-page">
      <section className="mcb-hero">
        <div className="container">
          <div className="mcb-hero-content">
            <span className="product-tag">Miniature Circuit Breaker</span>
            <h1>Powells System Pro MCB</h1>
            <p>
              Reliable protection for residential, commercial and industrial
              electrical systems. Designed for overload and short-circuit
              protection with compact DIN rail mounting.
            </p>
            <div className="hero-buttons">
              <button type="button" className="primary-btn">
                Download Catalogue
              </button>
              <Link to="/pages/Contact" className="secondary-btn">
                Get Quotation
              </Link>
              <ProductPageCart />
            </div>
          </div>
          <div className="mcb-hero-image">
            <img src="/image/4pole_mcb.png" alt="Powells MCB" />
          </div>
        </div>
      </section>

      <section className="mcb-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>10kA Breaking Capacity</h3>
              <p>
                High performance protection against overloads and short
                circuits.
              </p>
            </div>
            <div className="feature-card">
              <h3>Compact Design</h3>
              <p>
                Saves panel space while ensuring superior reliability in DB
                boxes.
              </p>
            </div>
            <div className="feature-card">
              <h3>DIN Rail Mounting</h3>
              <p>
                Easy installation and maintenance in standard distribution
                boards.
              </p>
            </div>
            <div className="feature-card">
              <h3>Global Standards</h3>
              <p>
                IEC compliant for industrial and commercial applications
                nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mcb-models">
        <div className="container">
          <h2>Available Configurations</h2>
          <div className="mcb-model-grid">
            {MODELS.map((model) => (
              <div key={model.id} className="mcb-model-card">
                <img src={model.img} alt={model.name} />
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
                <AddToCartButton productId={model.id} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mcb-specs">
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

      <section className="mcb-applications">
        <div className="container">
          <h2>Applications</h2>
          <div className="application-grid">
            {APPLICATIONS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mcb-benefits">
        <div className="container">
          <h2>Why Choose Powells MCB?</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>Proven Performance</h3>
              <p>
                Trusted circuit protection for panel builders and electrical
                contractors.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Complete Range</h3>
              <p>
                1P to 4P configurations to cover every distribution board
                requirement.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Technical Support</h3>
              <p>
                Expert guidance on rating selection, coordination and panel
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mcb-cta">
        <div className="container">
          <h2>Need Technical Assistance?</h2>
          <p>
            Contact our experts for product selection, installation guidance
            and support for your MCB requirements.
          </p>
          <Link to="/pages/Contact" className="primary-btn">
            Get Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
