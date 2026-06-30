import "./SPDSection.css";
import { Link } from "react-router-dom";
import VariantCartButton from "../components/VariantCartButton";

const SPD_MODELS = [
  {
    id: "spd-2p",
    image: "/image/spd.jpg",
    title: "Surge Protection Device — 2 Pole",
    desc: "Designed for installation at the main distribution board. Protects electrical systems from direct lightning strikes and high surge currents.",
    specs: [
      "Uc: DC600V & AC385V",
      "Imax (8/20µs): 40kA / 60kA",
      "In (8/20µs): 20kA / 30kA",
      "Up: ≤ 2.8kV / ≤ 2.0kV",
    ],
    reverse: false,
  },
  {
    id: "spd-3p",
    image: "/image/spd1.jpg",
    title: "Surge Protection Device — 3 Pole",
    desc: "Installed in sub-distribution panels to protect equipment from switching surges and indirect lightning effects.",
    specs: [
      "Uc: DC1000V & AC385V",
      "Imax (8/20µs): 40kA / 60kA",
      "In (8/20µs): 20kA / 30kA",
      "Up: ≤ 3.6kV / ≤ 2.0kV",
    ],
    reverse: true,
  },
  {
    id: "spd-4p",
    image: "/image/spd4.jpg",
    title: "Surge Protection Device — 4 Pole",
    desc: "Final protection stage placed close to sensitive equipment such as computers, automation systems and electronics.",
    specs: [
      "Uc: DC1400V & AC385V",
      "Imax (8/20µs): 40kA / 60kA",
      "In (8/20µs): 20kA / 30kA",
      "Up: ≤ 3.6kV / ≤ 2.0kV",
    ],
    reverse: false,
  },
];

export default function SPD() {
  return (
    <div className="spd-page-wrap">
      <section className="spd-hero-banner">
        <span className="product-tag">Powells Protection</span>
        <h1>Surge Protection Devices (SPD)</h1>
        <p>
          Industrial-grade surge protection engineered to safeguard panels,
          machinery and critical electrical infrastructure across residential,
          commercial and industrial applications.
        </p>
        <div className="hero-buttons" style={{ justifyContent: "center" }}>
          <a href="/image/spd4.jpg" download className="primary-btn spd-cta-btn primary">
            Download Catalogue
          </a>
          <Link to="/pages/Contact" className="secondary-btn spd-cta-btn secondary">
            Get Quotation
          </Link>
        </div>
      </section>

      <section className="spd-section">
        {SPD_MODELS.map((model) => (
          <div
            key={model.id}
            className={`spd-container${model.reverse ? " reverse" : ""}`}
          >
            <div className="spd-image">
              <img src={model.image} alt={model.title} />
            </div>
            <div className="spd-text">
              <h2>{model.title}</h2>
              <p>{model.desc}</p>
              <div className="spd-details">
                {model.specs.map((spec) => (
                  <span key={spec}>{spec}</span>
                ))}
              </div>
              <VariantCartButton id={model.id} name={model.title} image={model.image} path="/pages/SPD" />
            </div>
          </div>
        ))}
      </section>

      <section className="spd-cta">
        <a href="/image/spd4.jpg" download className="primary-btn spd-cta-btn primary">
          Download Catalogue
        </a>
        <Link to="/pages/Contact" className="secondary-btn spd-cta-btn secondary">
          Get Quotation
        </Link>
      </section>
    </div>
  );
}
