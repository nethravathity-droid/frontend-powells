import React, { useState } from "react";
import "./Contact.css";
import ContactSupport from "./ContactSupport";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

    const [loading, setLoading] = useState(false); // ✅ new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        if (loading) return; // ✅ prevent multiple clicks
    setLoading(true);

    // ✅ Validation
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.firstName)) {
      alert("First name should contain only letters");
            setLoading(false);
      return;
    }

    if (!nameRegex.test(formData.lastName)) {
      alert("Last name should contain only letters");
            setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Enter valid email address");
            setLoading(false);
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits");
            setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://powells-backend-1.onrender.com/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Request sent successfully! ✅");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send request ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
        setLoading(false); // ✅ re-enable button
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span>CONTACT US</span>
          <h1>
            Let’s Build <span>Reliable</span> <br />
            Power Solutions Together
          </h1>

          <p>
            Whether you need energy meters, ATS panels, AMF controllers, or
            custom electrical solutions — our experts are ready to assist.
          </p>

          <div className="contact-info">
            <div className="info-row">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <p>Call us directly</p>
                <h4>+91 9148243088</h4>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <p>Email support</p>
                <h4>support@powellsindiacorporation.com</h4>
                <h4>sales@powellsindiacorporation.com</h4>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          <h3>Request a Quotation</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              required
            />

            <textarea
              name="message"
              className="full"
              placeholder="Tell us about your requirement"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Request"}</button>
          </form>
        </div>
      </div>
      {/* SUPPORT SECTION */}
      <section className="contact-support">
        <div className="contact-support-left">
          <h2>Need Immediate Assistance?</h2>
          <p>
            Our technical and sales teams are available to guide you with the
            right electrical solutions for your industry.
          </p>
          <div className="contact-buttons">
            <a href="tel:+919148243088" className="btn primary">
              📞 Talk to an Expert
            </a>
            <a
              href="mailto:support@powellsindiacorporation.com"
              className="btn secondary"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
        <div className="contact-support-right">
          <img
            src="/image/cs.png"
            alt="Customer Support"
          />
        </div>
      </section>

      {/* MAP SECTION */}
      <div className="map-section">
  <div className="map-wrapper">
<div className="map-section">
  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.517008063607!2d77.46536787485493!3d13.002714587315548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ba19f6f5599%3A0x2f760fea79326146!2sPowells%20India%20Corporation!5e0!3m2!1sen!2sus!4v1772214390551!5m2!1sen!2sus"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Powells India Corporation Location"
    ></iframe>
  </div>
</div>
  </div>
</div>
    </div>
  );
};

export default Contact;