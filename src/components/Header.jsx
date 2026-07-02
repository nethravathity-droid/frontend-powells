import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { SHOW_CHANNEL_PARTNER } from "../config/site";
import "./Header.css";

const PRODUCT_MENU = [
  {
    title: "Basic Meters",
    links: [
      { label: "Ammeter", path: "/pages/Ammeter" },
      { label: "Voltmeter", path: "/pages/Voltmeter" },
      { label: "AVM Meter", path: "/pages/AVM" },
      { label: "VAF Meter", path: "/pages/vafmeter" },
      { label: "HZ Meter", path: "/pages/hzmeter" },
    ],
  },
  {
    title: "Energy Meters",
    links: [
      { label: "KWH Meter", path: "/pages/kwhmeter" },
      { label: "MFM Meter", path: "/pages/mfmmeter" },
    ],
  },
  {
    title: "Protection & Control",
    links: [
      { label: "Earth Leakage Relay & CBCT", path: "/pages/Elr" },
      { label: "Motor Protection Relay", path: "/pages/Mpr" },
      { label: "Surge Protection Devices", path: "/pages/SPD" },
    ],
  },
  {
    title: "Automatic Controllers",
    links: [
      { label: "ATS 2 & 4 Pole", path: "/pages/Ats2p" },
      { label: "Automatic Transfer Switch", path: "/pages/Ats" },
    ],
  },
  {
    title: "Low Voltage Switchgear",
    links: [
      { label: "MCB", path: "/pages/Mcb" },
      { label: "RCCB", path: "/pages/Rccb" },
      { label: "Isolators", path: "/pages/Isolator" },
      { label: "DB Box", path: "/pages/DbBox" },
    ],
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  /* MEGA MENU STATE */
  const [showMega, setShowMega] = useState(false);
  const menuRef = useRef(null);

  /* NAVIGATE + CLOSE MEGA MENU */
  const handleNavigate = (path) => {
    navigate(path);
    setShowMega(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
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
      <header className={`header elec-header ${scrolled ? "scrolled" : ""}`}>
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

            <Link to="/products">Product List</Link>
            <Link to="/pages/About">About Us</Link>
            <Link to="/pages/Blog">Blog</Link>
            {SHOW_CHANNEL_PARTNER && (
              <Link to="/pages/ChannelPartner">Channel Partner</Link>
            )}
            <Link to="/pages/Contact">Contact</Link>
            
          </nav>

<div className="header-right">
  <Link to="tel:+919148243088"className="talk-btn">
    Let's Talk <span className="arrow">→</span>
  </Link>

  <Link to="/cart" className="header-cart-btn" aria-label={`Cart, ${cartCount} items`}>
    <ShoppingCart size={22} strokeWidth={2} />
    {cartCount > 0 && <span className="header-cart-badge">{cartCount > 99 ? "99+" : cartCount}</span>}
  </Link>

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
            {PRODUCT_MENU.map((group) => (
              <div key={group.title} className="mega-column">
                <h4>{group.title}</h4>
                {group.links.map((link) => (
                  <span key={link.path} onClick={() => handleNavigate(link.path)}>
                    {link.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMobile}>Home</Link>

        <button
          type="button"
          className={`mobile-products-toggle${mobileProductsOpen ? " open" : ""}`}
          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
        >
          Products
          <ChevronDown size={18} aria-hidden="true" />
        </button>

        {mobileProductsOpen && (
          <div className="mobile-products-panel">
            {PRODUCT_MENU.map((group) => (
              <div key={group.title} className="mobile-products-group">
                <p className="mobile-products-title">{group.title}</p>
                {group.links.map((link) => (
                  <button
                    key={link.path}
                    type="button"
                    className="mobile-products-link"
                    onClick={() => handleNavigate(link.path)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
            <Link to="/products" className="mobile-product-list-link" onClick={closeMobile}>
              View All Products →
            </Link>
          </div>
        )}

        <Link to="/products" onClick={closeMobile}>Product List</Link>
        <Link to="/pages/About" onClick={closeMobile}>About Us</Link>
        <Link to="/pages/Blog" onClick={closeMobile}>Blog</Link>
        {SHOW_CHANNEL_PARTNER && (
          <Link to="/pages/ChannelPartner" onClick={closeMobile}>
            Channel Partner
          </Link>
        )}
        <Link to="/pages/Contact" onClick={closeMobile}>Contact</Link>
        <Link to="/cart" onClick={closeMobile} className="mobile-cart-link">
          <ShoppingCart size={16} aria-hidden="true" />
          Cart {cartCount > 0 ? `(${cartCount})` : ""}
        </Link>
        <Link to="/auth" onClick={closeMobile}>Login</Link>
      </div>

      {mobileOpen && (
        <div className="overlay" onClick={closeMobile} />
      )}
    </>
  );
}
