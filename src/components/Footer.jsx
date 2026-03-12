import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT - COMPANY */}
        <div className="footer-brand">
          <div className="logo1" onClick={() => navigate("/")}>
            <img src="/image/logo2.png" alt="Powells India Logo" />
                    <div className="footer-links">
          <h4>POWELLS INDIA CORPORATION</h4>
          </div>
          </div>
          <p className="footer-description">
            Delivering intelligent electrical, energy monitoring and 
            automation solutions engineered for reliability and performance.
          </p>

          <p className="footer-address">
            📍 No 54, Sowmya A, Kachohalli, Bangalore North,
            Dasanapura Hobli, Bengaluru Urban,
            Karnataka – 560091
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/pages/About">About Us</a>
          <a href="/Products">Products</a>
          <a href="/Contact">Contact</a>
        </div>

        {/* CONTACT NUMBERS */}
        <div className="footer-links">
          <h4>Contact Numbers</h4>
          <p>080 28016867</p>
          <p>+91 9741446867 / 892540406</p>
          <p>+91 9148243088 / 7090821174</p>
          <p>+91 8431163665 / 8050264257</p>
        </div>

        {/* EMAILS */}
        <div className="footer-links">
          <h4>Email</h4>
          <p>sales@powellsindiacorporation.com</p>
          <p>support@powellsindiacorporation.com</p>
          <p>purchase@powellsindiacorporation.com</p>
          <p>accounts@powellsindiacorporation.com</p>

          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61571928883400" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/powellsindia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="http://www.linkedin.com/in/powells-india-corporation-ba6b603b1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Powells India Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}