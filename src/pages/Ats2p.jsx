import { useState, useEffect } from "react";
import "./ProductHero.css";
import "./InfoTabs.css";
import ProductVariantGrid from "../components/ProductVariantGrid";
import { ATS2P_MINI } from "../utils/atsVariants";

const images = [
  "/image/ats4pole.png",
  "/image/ats2pole.png",
];

export default function ProductHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ats2p-page">
      <section className="product-hero">
        <div className="hero-left">
          <img
            src={images[index]}
            alt="Powells Mini ATS 2 Pole and 4 Pole"
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

        <div className="hero-right">
          <h1>AUTOMATIC TRANSFER SWITCH (ATS) — 2 Pole &amp; 4 Pole</h1>

          <h4>2 Pole ATS</h4>
          <ul>
            <li>Switches Phase &amp; Neutral.</li>
            <li>Used mainly in single phase systems.</li>
            <li>Suitable for homes, small offices, and light commercial use.</li>
          </ul>

          <h4>4 Pole ATS</h4>
          <ul>
            <li>Switches 3 Phases + Neutral.</li>
            <li>Used in three phase systems.</li>
            <li>Suitable for industries, commercial buildings, hospitals, and large loads.</li>
          </ul>

          <div className="hero-buttons">
            <a href="/image/Powells.pdf" download>
              <button type="button" className="primary-btn">
                Download Catalogue
              </button>
            </a>
            <a className="secondary-btn" href="/pages/Contact">
              Get Quotation
            </a>
          </div>

          <button
            type="button"
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
        <ProductVariantGrid
          title="Available Models"
          subtitle="Mini ATS 63A — choose 2 Pole or 4 Pole configuration"
          items={ATS2P_MINI}
          path="/pages/Ats2p"
        />

        <section className="spec-table-section fade-up">
          <div className="spec-table-wrapper">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Rated operating current Ie(A)</th>
                  <th>16A</th>
                  <th>20A</th>
                  <th>25A</th>
                  <th>32A</th>
                  <th>40A</th>
                  <th>50A</th>
                  <th>63A</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Rated insulation voltage Ui</td>
                  <td colSpan="7">690V</td>
                </tr>

                <tr>
                  <td>Rated impulse withstand voltage Uimp</td>
                  <td colSpan="7">8kV</td>
                </tr>

                <tr>
                  <td>Rated working voltage Ue</td>
                  <td colSpan="7">AC220V / AC110V</td>
                </tr>

                <tr>
                  <td>Rated frequency</td>
                  <td colSpan="7">50/60Hz</td>
                </tr>

                <tr>
                  <td>Class</td>
                  <td colSpan="7">
                    PC class: can be switched on and loaded without generating
                    short-circuit current
                  </td>
                </tr>

                <tr>
                  <td>Pole Number</td>
                  <td colSpan="7">2P / 4P</td>
                </tr>

                <tr>
                  <td>Rated short-circuit current Iq</td>
                  <td colSpan="7">5kA</td>
                </tr>

                <tr>
                  <td>Short circuit protection device (fuse)</td>
                  <td colSpan="7">RT16-00-63A</td>
                </tr>

                <tr>
                  <td>Control circuit</td>
                  <td colSpan="7">
                    Rated control voltage Us: AC220V/110V, 50/60Hz
                    Normal working condition: 85%Us–110%Us
                  </td>
                </tr>

                <tr>
                  <td>Auxiliary circuit</td>
                  <td colSpan="7">AC220V/110V, 50/60Hz, Ie=5A</td>
                </tr>

                <tr>
                  <td>Overvoltage/undervoltage protection</td>
                  <td colSpan="7">
                    220V: undervoltage 175V, recovery 195V
                    overvoltage 260V, recovery 240±5V
                    <br />
                    110V: undervoltage 85V, recovery 95V
                    overvoltage 145V, recovery 130±5V
                  </td>
                </tr>

                <tr>
                  <td>Mechanical life</td>
                  <td colSpan="7">&gt;= 8000 times</td>
                </tr>

                <tr>
                  <td>Electrical life</td>
                  <td colSpan="7">&gt;= 1500 times</td>
                </tr>

                <tr>
                  <td>Usage category</td>
                  <td colSpan="7">AC-31B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="detail-block">
          <h3>Additional Features</h3>
          <ul>
            <li>Mini ATS rated working current: 63A</li>
            <li>Available in 2 Pole and 4 Pole configurations</li>
            <li>Rated working voltage: AC220V, AC110V</li>
            <li>Case grade: 63</li>
            <li>Installation method: DIN-rail installation</li>
            <li>Product category: PC class automatic transfer switch (two station)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
