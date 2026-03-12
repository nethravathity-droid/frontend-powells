import React from "react";
import "./ContactSupport.css";

const ContactSupport = () => {
  return (
    <section className="contact-support">
      {/* LEFT CONTENT */}
      <div className="contact-support-left">
        <h2>Need Immediate Assistance?</h2>

        <p>
          Our technical and sales teams are available to guide you with the
          right electrical solutions for your industry. Reach out to us
          instantly and get expert support.
        </p>

        <div className="contact-buttons">
          {/* PHONE BUTTON */}
          <a href="tel:+9108028362424" className="btn primary">
            📞 Talk to an Expert
          </a>

          {/* EMAIL BUTTON */}
          <a
            href="mailto:support@powellsindia.com"
            className="btn secondary"
          >
            ✉️ Email Us
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="contact-support-right">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="Customer Support"
        />
      </div>
    </section>
  );
};

export default ContactSupport;
