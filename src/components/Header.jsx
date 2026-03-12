import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* MEGA MENU STATE */
  const [showMega, setShowMega] = useState(false);
  const menuRef = useRef(null);

  /* NAVIGATE + CLOSE MEGA MENU */
  const handleNavigate = (path) => {
    navigate(path);
    setShowMega(false);
  };

  /* SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* CLOSE MEGA MENU ON OUTSIDE CLICK */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMega(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">

          {/* LOGO */}
<div className="logo" onClick={() => navigate("/")}>
  <img src="/image/logo2.png" alt="Company Logo" className="logo-img" />
</div>


          {/* NAV LINKS */}
          <nav className="nav desktop-nav">
            <Link to="/">Home</Link>

            <button
              className="products-btn"
              onClick={() => setShowMega(!showMega)}
            >
              Products
            </button>

            <Link to="/Products">Product List</Link>
            <Link to="/pages/About">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

<div className="header-right">
  <a href="tel:+919876543210" className="talk-btn">
    Let's Talk <span className="arrow">→</span>
  </a>

  <Link to="/auth" className="login-btn">
    Login
  </Link>
</div>


          {/* MOBILE MENU BUTTON */}
          <div
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* MEGA MENU */}
        {showMega && (
          <div className="mega-menu" ref={menuRef}>
            <div className="mega-column">
              <h4>Basic Meters</h4>
              <span onClick={() => handleNavigate("/pages/Ammeter")}>Ammeter</span>
              <span onClick={() => handleNavigate("/pages/Voltmeter")}>Voltmeter</span>
              <span onClick={() => handleNavigate("/pages/AVM")}>AVM Meter</span>
              <span onClick={() => handleNavigate("/pages/vafmeter")}>VAF Meter</span>
              <span onClick={() => handleNavigate("/pages/hzmeter")}>HZ Meter</span>
            </div>

            <div className="mega-column">
              <h4>Energy Meters</h4>
              <span onClick={() => handleNavigate("/pages/kwhmeter")}>KWH Meter</span>
              <span onClick={() => handleNavigate("/pages/mfmmeter")}>MFM Meter</span>
            </div>

            <div className="mega-column">
              <h4>Protection & Control Devices</h4>
              <span onClick={() => handleNavigate("/pages/Elr")}>
                Earth Leakage Relay & CBCT
              </span>
              <span onClick={() => handleNavigate("/pages/Mpr")}>
                Motor Protection Relay
              </span>
              <span onClick={() => handleNavigate("/pages/SPD")}>
                Surge Protection Devices
              </span>
            </div>

            <div className="mega-column">
              <h4>Automatic Controllers & Switching</h4>
              <span onClick={() => handleNavigate("/pages/Amf")}>
                AMF Controller
              </span>
              <span onClick={() => handleNavigate("/pages/Ats2p")}>
                Automatic Transfer Switch 2&4 Pole
              </span>
              <span onClick={() => handleNavigate("/pages/ats")}>
                Automatic Transfer Switch
              </span>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/Products" onClick={() => setMobileOpen(false)}>Products</Link>
        <Link to="/About" onClick={() => setMobileOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link to="/auth" onClick={() => setMobileOpen(false)}>Login</Link>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
