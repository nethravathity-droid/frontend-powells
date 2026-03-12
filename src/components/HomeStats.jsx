import "./HomeStats.css";
import { FaBuilding, FaGlobeAsia, FaUsers, FaBolt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function HomeStats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        
        {/* LEFT CONTENT */}
        <div className={`stats-left ${visible ? "show" : ""}`}>
          <h2>
            Engineered for <br />
            <span>Reliability</span><br />
            Built on <span>Trust</span>
          </h2>

          <p>
            Powells India delivers advanced electrical solutions with
            uncompromising quality, precision manufacturing and long-term
            performance trusted across industries worldwide.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="stats-right">
          
          <div className={`stat-card ${visible ? "show" : ""}`}>
            <div className="icon blue">
              <FaBuilding />
            </div>
            <div>
              <h3>
                {visible && <CountUp end={40} duration={2} />}+
              </h3>
              <p>Electrical Materials</p>
            </div>
          </div>

          <div className={`stat-card ${visible ? "show" : ""}`}>
            <div className="icon green">
              <FaGlobeAsia />
            </div>
            <div>
              <h3>
                {visible && <CountUp end={10} duration={2} />}+
              </h3>
              <p>Channel Partners</p>
            </div>
          </div>

          <div className={`stat-card ${visible ? "show" : ""}`}>
            <div className="icon teal">
              <FaUsers />
            </div>
            <div>
              <h3>
                {visible && <CountUp end={5000} duration={2} separator="," />}+
              </h3>
              <p>Regular Users</p>
            </div>
          </div>

          <div className={`stat-card ${visible ? "show" : ""}`}>
            <div className="icon orange">
              <FaBolt />
            </div>
            <div>
              <h3>
                {visible && <CountUp end={10000} duration={2} separator="," />}+
              </h3>
              <p>Devices Installed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}