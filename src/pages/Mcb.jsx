import "./mcb.css";
import { Link } from "react-router-dom";

function MCBPage() {
  return (
    <div className="mcb-page">

      {/* Hero */}
      <section className="mcb-hero">
        <div className="container">
          <div className="mcb-hero-content">
            <span className="category">
              Miniature Circuit Breakers
            </span>

            <h1>System Pro M Compact MCB</h1>

            <p>
              Reliable protection for residential,
              commercial and industrial electrical systems.
              Designed for overload and short-circuit protection.
            </p>

            <div className="hero-buttons">
              <button type="button" className="primary-btn">Download Datasheet</button>
              <Link to="/pages/Contact" className="secondary-btn outline">Get Quotation</Link>
            </div>
          </div>

          <div className="mcb-hero-image">
            <img
              src="/images/mcb-main.png"
              alt="MCB"
            />
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="gallery">
        <div className="container">
          <img src="/images/mcb1.png" alt="" />
          <img src="/images/mcb2.png" alt="" />
          <img src="/images/mcb3.png" alt="" />
          <img src="/images/mcb4.png" alt="" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>10kA Breaking Capacity</h3>
              <p>
                High performance protection against
                overloads and short circuits.
              </p>
            </div>

            <div className="feature-card">
              <h3>Compact Design</h3>
              <p>
                Saves panel space while ensuring
                superior reliability.
              </p>
            </div>

            <div className="feature-card">
              <h3>DIN Rail Mounting</h3>
              <p>
                Easy installation and maintenance.
              </p>
            </div>

            <div className="feature-card">
              <h3>Global Standards</h3>
              <p>
                IEC compliant for industrial and
                commercial applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="specifications">
        <div className="container">
          <h2>Technical Specifications</h2>

          <table>
            <tbody>
              <tr>
                <td>Rated Current</td>
                <td>0.5A – 63A</td>
              </tr>

              <tr>
                <td>Poles</td>
                <td>1P, 2P, 3P, 4P</td>
              </tr>

              <tr>
                <td>Voltage</td>
                <td>230V / 400V</td>
              </tr>

              <tr>
                <td>Breaking Capacity</td>
                <td>10kA</td>
              </tr>

              <tr>
                <td>Mounting</td>
                <td>DIN Rail</td>
              </tr>

              <tr>
                <td>Operating Temp</td>
                <td>-25°C to +55°C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Applications */}
      <section className="applications">
        <div className="container">
          <h2>Applications</h2>

          <div className="app-grid">
            <div>Residential Buildings</div>
            <div>Commercial Complexes</div>
            <div>Industrial Automation</div>
            <div>Solar Installations</div>
            <div>OEM Panels</div>
            <div>Power Distribution</div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="downloads">
        <div className="container">
          <h2>Downloads</h2>

          <div className="download-grid">
            <a href="#">Datasheet PDF</a>
            <a href="#">Technical Brochure</a>
            <a href="#">Installation Manual</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related">
        <div className="container">
          <h2>Related Products</h2>

          <div className="related-grid">

            <div className="product-card">
              <img src="/images/rccb.png" alt="" />
              <h3>RCCB</h3>
            </div>

            <div className="product-card">
              <img src="/images/rcbo.png" alt="" />
              <h3>RCBO</h3>
            </div>

            <div className="product-card">
              <img src="/images/isolator.png" alt="" />
              <h3>Isolator</h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Need Technical Assistance?</h2>
          <p>
            Contact our experts for product selection,
            installation guidance and support.
          </p>

          <button>Contact Us</button>
        </div>
      </section>

    </div>
  );
}

export default MCBPage;