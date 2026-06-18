import "./IsolatorPage.css";

function IsolatorPage() {
  return (
    <div className="isolator-page">

      {/* Hero Section */}
      <section className="isolator-hero">
        <div className="container">

          <div className="isolator-content">
            <span className="product-tag">
              Electrical Isolator Switch
            </span>

            <h1>Safe Isolation for Electrical Systems</h1>

            <p>
              High-performance isolators designed for safe
              disconnection of electrical circuits during
              maintenance and servicing operations.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Download Catalog
              </button>

              <button className="secondary-btn">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="isolator-image">
            <img
              src="/images/isolator-main.png"
              alt="Electrical Isolator"
            />
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="isolator-features">
        <div className="container">

          <h2>Key Features</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>Reliable Isolation</h3>
              <p>
                Provides complete disconnection from
                electrical supply during maintenance.
              </p>
            </div>

            <div className="feature-card">
              <h3>Compact Design</h3>
              <p>
                Space-saving construction suitable for
                modern distribution boards.
              </p>
            </div>

            <div className="feature-card">
              <h3>Easy Installation</h3>
              <p>
                Quick DIN rail mounting for fast setup.
              </p>
            </div>

            <div className="feature-card">
              <h3>Long Service Life</h3>
              <p>
                Durable components ensure reliable
                performance over time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Specifications */}

      <section className="isolator-specs">
        <div className="container">

          <h2>Technical Specifications</h2>

          <table>
            <tbody>

              <tr>
                <td>Rated Current</td>
                <td>16A – 125A</td>
              </tr>

              <tr>
                <td>Rated Voltage</td>
                <td>240V / 415V AC</td>
              </tr>

              <tr>
                <td>Poles</td>
                <td>1P, 2P, 3P, 4P</td>
              </tr>

              <tr>
                <td>Frequency</td>
                <td>50/60Hz</td>
              </tr>

              <tr>
                <td>Mounting</td>
                <td>DIN Rail</td>
              </tr>

              <tr>
                <td>Compliance</td>
                <td>IEC Standards</td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      {/* Applications */}

      <section className="isolator-applications">
        <div className="container">

          <h2>Applications</h2>

          <div className="application-grid">

            <div>Residential Buildings</div>
            <div>Commercial Complexes</div>
            <div>Industrial Plants</div>
            <div>Solar Installations</div>
            <div>Control Panels</div>
            <div>Power Distribution Boards</div>

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="isolator-benefits">
        <div className="container">

          <h2>Why Choose Our Isolators?</h2>

          <div className="benefit-grid">

            <div className="benefit-card">
              <h3>Enhanced Safety</h3>
              <p>
                Ensures safe maintenance and servicing.
              </p>
            </div>

            <div className="benefit-card">
              <h3>High Reliability</h3>
              <p>
                Consistent performance in demanding
                electrical environments.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Cost Effective</h3>
              <p>
                Low maintenance and long operational life.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="isolator-cta">
        <div className="container">

          <h2>Need Technical Assistance?</h2>

          <p>
            Contact our experts for product selection,
            installation guidance and technical support.
          </p>

          <button>
            Contact Us
          </button>

        </div>
      </section>

    </div>
  );
}

export default IsolatorPage;