import { useEffect, useState } from "react";
import "./HeroSlider.css";

/*const slides = [
  {
    image: "/slides/ats.jpg",
    title: "Automatic Transfer Switches",
    subtitle: "Reliable power switching for critical operations"
  },
  {
    image: "/slides/energy-meter.jpg",
    title: "Energy Monitoring Solutions",
    subtitle: "Accurate power analysis & real-time monitoring"
  },
  {
    image: "/slides/electrical-panel.jpg",
    title: "Electrical Manufacturing",
    subtitle: "Engineered panels for industrial excellence"
  }
];*/
const slides = [
  {
    image:
      "/image/lab6.png",
    //title: "Automatic Transfer Switches",
    subtitle: "Reliable power switching for critical operations"
  },
  {
    image:
       "/image/lab3.png",
    //title: "Energy Monitoring Systems",
    subtitle: "Accurate electrical measurement and analytics"
  },
  {
    image:
       "/image/lab5.png",
    //title: "Electrical Manufacturing",
    subtitle: "Engineered panels and industrial solutions"
  },
    {
    image:
       "/image/lab7.png",
    //title: "Electrical Manufacturing",
    subtitle: "Engineered panels and industrial solutions"
  }
];


export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
