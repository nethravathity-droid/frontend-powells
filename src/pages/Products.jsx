import "./Products.css";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";

const products = [
  { name: "Ammeters", img: "/image/mt3.png", path: "/pages/Ammeter" },
  { name: "Voltmeters", img: "/image/vm9601.png", path: "/pages/Voltmeter" },
  { name: "AVM Meter", img: "/image/avm.png", path: "/pages/AVM" },
  { name: "VAF Meter", img: "/image/mt5.png", path: "/pages/vafmeter" },
  { name: "HZ Meter", img: "/image/hz.png", path: "/pages/hzmeter" },
  { name: "KWH Meter", img: "/image/kwh.png", path: "/pages/kwhmeter" },
  { name: "MFM Meter", img: "/image/mfm.png", path: "/pages/mfmmeter" },
  { name: "ELR & CBCT", img: "/image/elr.png", path: "/pages/Elr" },

  { name: "MPR Meter", img: "/image/Mpr.png", path: "/pages/Mpr" },
  { name: "SPD", img: "/image/spd4.jpg", path: "/pages/SPD" },
  { name: "AMF Controller", img: "/image/amf.png", path: "/pages/Amf" },
  { name: "ATS 2Pole", img: "/image/ats4pole.png", path: "/pages/Ats2p" },
  { name: "ATS 4Pole", img: "/image/ats2pole.png", path: "/pages/Ats2p" },
  { name: "ATS without Display", img: "/image/ats250.png", path: "/pages/Ats" },
  { name: "ATS with Display", img: "/image/atswd.png", path: "/pages/Ats" },
    { name: "MCB", img: "/image/4pole_mcb.png", path: "/pages/Mcb" },
  { name: "RCCB", img: "/image/rccb_4pole.png", path: "/pages/Rccb" },
  { name: "Isolators", img: "/image/isolators.png", path: "/pages/Isolator" },
  { name: "DB Box", img: "/image/digital_timers.png", path: "/pages/DbBox" },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <PageShell variant="light" className="products-page-wrap">
    <section className="products-section">
      <h1 className="products-title">PRODUCTS</h1>

      <div className="products-grid">
        
        {products.map((item, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => navigate(item.path)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
                      <button
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
        ))}
      </div>
    </section>
    </PageShell>
  );
}



/*import "./Products.css";

const categories = [
  {
    title: "Energy Monitoring",
    description:
      "Smart meters and energy analyzers for accurate power monitoring.",
  },
  {
    title: "Automation Systems",
    description:
      "Automatic transfer switches and intelligent control solutions.",
  },
  {
    title: "Protection Devices",
    description:
      "Advanced protection for electrical and industrial systems.",
  },
  {
    title: "Low Voltage Solutions",
    description:
      "Reliable low voltage components for safe power distribution.",
  },
  {
    title: "IoT & Smart Devices",
    description:
      "Connected devices for real-time monitoring and analytics.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored electrical solutions designed for your industry.",
  },
];

export default function Products() {
  return (
    <section className="products-page">
      <h1>Product Categories</h1>
      <p className="subtitle">
        Explore our wide range of electrical and energy solutions
      </p>

      <div className="product-grid">
        {categories.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="icon">⚡</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>View Products</button>
          </div>
        ))}
      </div>
    </section>
  );
}
*/