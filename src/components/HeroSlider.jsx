import { useEffect, useState } from "react";
import "./HeroSlider.css";

const meterSlides = [
  { src: "/image/am9601.png", label: "Digital Ammeter" },
  { src: "/image/vm9601.png", label: "Digital Voltmeter" },
  { src: "/image/avm9600.png", label: "AVM Meter" },
  { src: "/image/kwh93.png", label: "KWH Energy Meter" },
  { src: "/image/vaf9603.png", label: "VAF Meter" },
  { src: "/image/vm96dc.png", label: "Voltmeter Panel" },
  { src: "/image/mfm.png", label: "MFM Meter" },
  { src: "/image/am9603.png", label: "Ammeter Series" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % meterSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => setIndex(i);

  return (
    <section className="hero-slider" aria-label="Hero meter showcase">
      <div className="hero-slider-bg" />
      <div className="hero-slider-grid" aria-hidden="true" />

      <div className="hero-meter-stage">
        <p className="hero-meter-tag">Precision Meters</p>

        <div className="hero-meter-viewport">
          <div
            className="hero-meter-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {meterSlides.map((meter, i) => (
              <div key={meter.src} className="hero-meter-slide">
                <div className="hero-meter-card">
                  <img src={meter.src} alt={meter.label} loading={i <= 1 ? "eager" : "lazy"} />
                </div>
                <span className="hero-meter-label">{meter.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-meter-dots">
          {meterSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Show ${meterSlides[i].label}`}
            />
          ))}
        </div>
      </div>

      {/* ambient floating meters */}
      <div className="hero-meter-float hero-meter-float-a">
        <img src="/image/hz.png" alt="" aria-hidden="true" />
      </div>
      <div className="hero-meter-float hero-meter-float-b">
        <img src="/image/kwh.png" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}
