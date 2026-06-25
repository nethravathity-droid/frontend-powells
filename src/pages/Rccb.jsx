import "./RCCBPage.css";

function RCCBPage() {
  return (
    <div className="rccb-page">

      <section className="rccb-hero">
        <div className="container">

          <div className="rccb-content">
            <span className="rccb-tag">
              Residual Current Circuit Breaker
            </span>

            <h1>RCCB Protection Solutions</h1>

            <p>
              Protect people and installations against
              earth leakage currents. RCCBs provide fast
              disconnection to prevent electric shock
              and fire hazards.
            </p>

            <div className="hero-buttons">
              <button type="button" className="primary-btn">Download Datasheet</button>
              <a href="/pages/Contact" className="secondary-btn">Get Quotation</a>
            </div>
          </div>

          <div className="rccb-image">
            <img
              src="/images/rccb-main.png"
              alt="RCCB"
            />
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="rccb-features">
        <div className="container">

          <h2>Key Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>Earth Leakage Protection</h3>
              <p>
                Detects leakage currents and disconnects
                power instantly.
              </p>
            </div>

            <div className="feature-card">
              <h3>High Reliability</h3>
              <p>
                Consistent protection for homes,
                commercial and industrial systems.
              </p>
            </div>

            <div className="feature-card">
              <h3>Quick Tripping</h3>
              <p>
                Rapid response to fault conditions
                improving safety.
              </p>
            </div>

            <div className="feature-card">
              <h3>DIN Rail Mounting</h3>
              <p>
                Easy installation inside distribution boards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Technical Specifications */}

      <section className="rccb-specs">
        <div className="container">

          <h2>Technical Specifications</h2>

          <table>
            <tbody>

              <tr>
                <td>Rated Current</td>
                <td>25A - 100A</td>
              </tr>

              <tr>
                <td>Sensitivity</td>
                <td>30mA, 100mA, 300mA</td>
              </tr>

              <tr>
                <td>Poles</td>
                <td>2 Pole, 4 Pole</td>
              </tr>

              <tr>
                <td>Voltage</td>
                <td>230V / 415V</td>
              </tr>

              <tr>
                <td>Frequency</td>
                <td>50/60Hz</td>
              </tr>

              <tr>
                <td>Standard</td>
                <td>IEC 61008</td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {/* Applications */}

      <section className="rccb-applications">
        <div className="container">

          <h2>Applications</h2>

          <div className="application-grid">

            <div>Residential Buildings</div>

            <div>Commercial Complexes</div>

            <div>Industrial Plants</div>

            <div>Hospitals</div>

            <div>Data Centers</div>

            <div>Educational Institutions</div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="rccb-cta">
        <div className="container">

          <h2>Need Help Selecting an RCCB?</h2>

          <p>
            Our technical experts can help you choose
            the right RCCB for your installation.
          </p>

          <button>
            Contact Our Experts
          </button>

        </div>
      </section>

    </div>
  );
}

export default RCCBPage;