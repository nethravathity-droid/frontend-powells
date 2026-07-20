import "./Timer.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

const TIMER_PRODUCT = {
  id: "timer",
  name: "Timers",
  image: "/image/digital_timers.png",
  path: "/pages/Timer",
};

const DIGITAL_SPECS = [
  ["Timer Type", "Digital programmable"],
  ["Functions", "ON delay, OFF delay, cyclic, interval"],
  ["Display", "LED / LCD digital readout"],
  ["Supply Voltage", "230V AC / 415V AC"],
  ["Time Range", "0.1 sec – 999 hrs (model dependent)"],
  ["Mounting", "DIN rail / panel mount"],
  ["Output", "Relay contact output"],
  ["Standards", "IEC / IS compliant design"],
];

const ANALOG_SPECS = [
  ["Timer Type", "Analog adjustable"],
  ["Adjustment", "Knob-based time setting"],
  ["Supply Voltage", "230V AC"],
  ["Time Range", "0 – 60 min / multi-range (model dependent)"],
  ["Mounting", "DIN rail / panel mount"],
  ["Output", "Relay contact output"],
  ["Application", "Simple timing & control circuits"],
];

const APPLICATIONS = [
  "Motor Control Panels",
  "Lighting & HVAC Systems",
  "Pump & Compressor Sequencing",
  "Industrial Automation",
  "Star-Delta Starter Circuits",
  "Process & Manufacturing Lines",
];

export default function Timer() {
  return (
    <div className="timer-page">
      <section className="timer-hero">
        <div className="container">
          <div className="timer-content">
            <span className="product-tag">Time Control</span>
            <h1>Powells Digital &amp; Analog Timers</h1>
            <p>
              Reliable timing solutions for industrial control, motor starting,
              lighting and automation panels. Choose digital programmable timers
              for precision or analog timers for simple, dependable operation.
            </p>
            <div className="hero-buttons">
              <button type="button" className="primary-btn">
                Download Catalogue
              </button>
              <Link to="/pages/Contact" className="secondary-btn">
                Get Quotation
              </Link>
              <AddToCartButton product={TIMER_PRODUCT} variant="primary" />
            </div>
          </div>
          <div className="timer-images">
            <figure className="timer-image-card">
              <img src="/image/digital_timers.png" alt="Powells digital timer" />
              <figcaption>Digital Timer</figcaption>
            </figure>
            <figure className="timer-image-card">
              <img
                src="/image/analog_timers-removebg-preview.png"
                alt="Powells analog timer"
              />
              <figcaption>Analog Timer</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="timer-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Precision Timing</h3>
              <p>
                Accurate ON/OFF delay and cyclic functions for dependable
                control panel operation.
              </p>
            </div>
            <div className="feature-card">
              <h3>Panel Mount Ready</h3>
              <p>
                DIN rail and panel-mount options for easy integration in LT
                control and distribution boards.
              </p>
            </div>
            <div className="feature-card">
              <h3>Digital &amp; Analog Range</h3>
              <p>
                From simple knob-set analog timers to multi-function digital
                models with clear displays.
              </p>
            </div>
            <div className="feature-card">
              <h3>Industrial Grade</h3>
              <p>
                Built for continuous duty in motor, lighting and process
                control applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timer-specs">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="timer-specs-grid">
            <div className="timer-spec-block">
              <h3>Digital Timers</h3>
              <table>
                <tbody>
                  {DIGITAL_SPECS.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="timer-spec-block">
              <h3>Analog Timers</h3>
              <table>
                <tbody>
                  {ANALOG_SPECS.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="timer-applications">
        <div className="container">
          <h2>Applications</h2>
          <div className="application-grid">
            {APPLICATIONS.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="timer-benefits">
        <div className="container">
          <h2>Why Choose Powells Timers?</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>Wide Model Range</h3>
              <p>
                Digital and analog options to match simple or advanced timing
                requirements.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Easy Installation</h3>
              <p>
                Compact design with standard panel mounting for faster assembly.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Expert Support</h3>
              <p>
                Our team helps you select the right timer for your application
                and quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timer-cta">
        <div className="container">
          <h2>Need Help Selecting a Timer?</h2>
          <p>
            Share your voltage, time range and application — we will recommend
            the right Powells digital or analog timer model.
          </p>
          <Link to="/pages/Contact" className="primary-btn">
            Get Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
