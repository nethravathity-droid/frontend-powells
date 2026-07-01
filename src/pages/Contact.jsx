import { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { postJson } from "../config/api";
import {
  validateEmail,
  validatePhone,
  normalizePhone,
} from "../utils/formValidation";
import PageShell from "../components/PageShell";

const REQUEST_TYPES = [
  { id: "demo", label: "Requesting for Demo", colorClass: "inquiry-btn--demo" },
  { id: "general", label: "General Inquiry", colorClass: "inquiry-btn--general" },
  { id: "support", label: "Technical Support", colorClass: "inquiry-btn--support" },
  {
    id: "quotation",
    label: "Requesting for a Quotation",
    colorClass: "inquiry-btn--quotation",
  },
];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const nameRegex = /^[A-Za-z\s.'-]+$/;

function validateForm(formData) {
  const firstName = formData.firstName.trim();
  const lastName = formData.lastName.trim();

  if (!firstName || !lastName) {
    return "First name and last name are required.";
  }

  if (!nameRegex.test(firstName)) {
    return "First name should contain only letters.";
  }

  if (!nameRegex.test(lastName)) {
    return "Last name should contain only letters.";
  }

  if (!validateEmail(formData.email)) {
    return "Enter a valid email address.";
  }

  if (!validatePhone(formData.phone)) {
    return "Enter a valid 10-digit mobile number.";
  }

  return null;
}

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [activeType, setActiveType] = useState("");
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const handleRequestSubmit = async (inquiryType) => {
    if (loading) return;

    const validationError = validateForm(formData);
    if (validationError) {
      setStatus({ type: "error", text: validationError });
      return;
    }

    setActiveType(inquiryType);
    setLoading(true);
    setStatus(null);

    const typeLabel =
      REQUEST_TYPES.find((t) => t.id === inquiryType)?.label || "Request";

    try {
      const { response, data } = await postJson("/api/callback", {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: normalizePhone(formData.phone),
        message: formData.message.trim(),
        inquiryType,
      });

      if (response.ok && data.success) {
        const emailNote =
          data.emailSent === false
            ? " (Saved — email notification is delayed; our team will still follow up.)"
            : "";
        setStatus({
          type: data.emailSent === false ? "warning" : "success",
          text: (data.message || `${typeLabel} sent successfully!`) + emailNote,
        });
        setFormData(INITIAL_FORM);
      } else if (response.status === 409 || data.duplicate) {
        setStatus({
          type: "error",
          text:
            data.message ||
            "You have already submitted a request with this email and mobile number.",
        });
      } else {
        setStatus({
          type: "error",
          text: data.message || "Failed to send request. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Unable to reach the server. Please try again later.",
      });
    } finally {
      setLoading(false);
      setActiveType("");
    }
  };

  return (
    <PageShell variant="light" className="contact-page-wrap">
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-left">
            <span>CONTACT US</span>
            <h1>
              Let&apos;s Build <span>Reliable</span> <br />
              Power Solutions Together
            </h1>

            <p>
              Whether you need energy meters, ATS panels, AMF controllers or
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

          <div className="contact-form-card">
            <h3>Contact Us</h3>
            <p className="contact-form-sub">
              Fill in your details, then choose the type of request you need.
              All submissions are emailed to{" "}
              <strong>sales@powellsindiacorporation.com</strong>.
            </p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID *"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="full"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="full"
              />

              <textarea
                name="message"
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={handleChange}
                className="full"
              />

              {status && (
                <p
                  className={`contact-status contact-status--${status.type} full`}
                  role="alert"
                >
                  {status.text}
                </p>
              )}

              <div className="contact-request-actions full">
                <p className="contact-request-label">Select your request type:</p>
                <div className="contact-inquiry-types">
                  {REQUEST_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      className={`inquiry-type-btn inquiry-type-submit ${type.colorClass}`}
                      disabled={loading}
                      onClick={() => handleRequestSubmit(type.id)}
                    >
                      {loading && activeType === type.id
                        ? "Sending..."
                        : type.label}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        <section className="contact-support">
          <div className="contact-support-left">
            <h2>Need Immediate Assistance?</h2>
            <p>
              Our technical and sales teams are available to guide you with the
              right electrical solutions for your industry.
            </p>
            <div className="contact-buttons">
              <Link to="tel:+919148243088" className="btn primary">
                📞 Talk to an Expert
              </Link>
              <Link
                to="mailto:support@powellsindiacorporation.com"
                className="btn secondary"
              >
                ✉️ Email Us
              </Link>
            </div>
          </div>
          <div className="contact-support-right">
            <img src="/image/cs.png" alt="Customer Support" />
          </div>
        </section>

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
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
