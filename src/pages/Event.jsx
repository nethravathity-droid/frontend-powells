import { useNavigate } from "react-router-dom";
import "./event.css";

export default function Event() {
  const navigate = useNavigate();

  return (
    <section className="updates-section">

      {/* LEFT SIDE */}
      <div className="updates-left">

        {/* LATEST NEWS */}
        <div
          className="updates-news-box"
          onClick={() => navigate("/pages/Blog")}
        >
          <div className="updates-box-header">
            <span>Latest News</span>
          </div>

          <div className="updates-news-content">
            <p className="updates-news-text">
              Powells introduces next-generation Smart Energy Monitoring Systems
              for industrial applications.
            </p>
          </div>
        </div>

        {/* EVENTS */}
        <div
          className="updates-event-box"
          onClick={() => navigate("/pages/Blog")}
        >
          <div className="updates-box-header">
            <span>Upcoming Events</span>
          </div>

          <h3>
            Powells Industrial Electrical Exhibition 2026
          </h3>

          <div className="updates-event-gallery">
            <img src="/image/P1.jpeg" alt="Event" />
            <img src="/image/P2.jpeg" alt="Event" />
            <img src="/image/P3.jpeg" alt="Event" />
            <img src="/image/p4.jpeg" alt="Event" />
          </div>
        </div>

      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="updates-right">

        <span className="updates-section-tag">
          INNOVATION & TECHNOLOGY
        </span>

        <h2>
          Driving The Future Of Smart
          Electrical Engineering
        </h2>

        <p>
          Powells India Corporation continuously invests in advanced electrical
          technologies, intelligent automation systems, and modern power
          management solutions designed to meet the evolving demands of industries
          worldwide.
        </p>

        <p>
          Through continuous research, engineering excellence, and customer-driven
          innovation, Powells develops products that improve efficiency,
          reliability, safety, and energy performance across industrial and
          commercial applications.
        </p>

        <div className="updates-innovation-grid">

          <div className="updates-innovation-card">
            <h4>Smart Technology</h4>
            <p>
              Advanced monitoring and intelligent control systems.
            </p>
          </div>

          <div className="updates-innovation-card">
            <h4>Customer Focus</h4>
            <p>
              Solutions engineered for practical industrial requirements.
            </p>
          </div>

          <div className="updates-innovation-card">
            <h4>Quality Assurance</h4>
            <p>
              Reliable products tested to international standards.
            </p>
          </div>

          <div className="updates-innovation-card">
            <h4>Future Ready</h4>
            <p>
              Designed for modern automation and smart infrastructure.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
