import React from "react";
import "./SocialSidebar.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a
        href="https://www.instagram.com/powellsindia?utm_source=qr&igsh=NXBpaDBwcDhkaTM1"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61571928883400"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="http://www.linkedin.com/in/powells-india-corporation-ba6b603b1"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialSidebar;