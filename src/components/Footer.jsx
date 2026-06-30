import "./Footer.css";
import { useNavigate, Link } from "react-router-dom";
import { SHOW_CHANNEL_PARTNER } from "../config/site";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo1" onClick={() => navigate("/")}>
            <img src="/image/logo2.png" alt="Powells India Logo" />
          </div>
          <h4>POWELLS INDIA CORPORATION</h4>
          <p className="footer-description">
            Delivering intelligent electrical, energy monitoring and automation
            solutions engineered for reliability and performance.
          </p>
          <p className="footer-address">
            No 54, 1st floor, Kachohalli, Bangalore North, Dasanapura Hobli,
            Bengaluru Urban, Karnataka – 560091
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link to="/pages/About">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/pages/Contact">Contact</Link>
          {SHOW_CHANNEL_PARTNER && (
            <Link to="/pages/ChannelPartner">Channel Partner</Link>
          )}
        </div>

        <div className="footer-links">
          <h4>Contact Numbers</h4>
          <p>080 28016867</p>
          <p>+91 8431183166 / 7892540406</p>
          <p>+91 9148243088 / 7892712336</p>
          <p>+91 8431163665 / 8050264257</p>
        </div>

        <div className="footer-links">
          <h4>Email</h4>
          <p>sales@powellsindiacorporation.com</p>
          <p>support@powellsindiacorporation.com</p>
          <p>purchase@powellsindiacorporation.com</p>
          <p>accounts@powellsindiacorporation.com</p>

          <div className="social-links">
            <Link
              to="https://www.facebook.com/profile.php?id=61571928883400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://www.instagram.com/powellsindia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="http://www.linkedin.com/in/powells-india-corporation-ba6b603b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Powells India Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}
