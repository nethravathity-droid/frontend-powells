import "./HowCanWeHelp.css";
import { useState } from "react";
import { postJson } from "../config/api";
import { validateEmail, validatePhone } from "../utils/formValidation";
import {
  Zap,
  Headphones,
  FileText,
  Package,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const HELP_ITEMS = [
  {
    icon: FileText,
    title: "Request a Quotation",
    text: "Get pricing for meters, ATS, SPD and switchgear products.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    text: "Installation guidance, datasheets and product selection help.",
  },
  {
    icon: Package,
    title: "Bulk & Custom Orders",
    text: "Industrial projects, panel builders and OEM requirements.",
  },
  {
    icon: Zap,
    title: "Product Consultation",
    text: "Find the right Powells solution for your application.",
  },
];

export default function HowCanWeHelp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!form.name.trim() || !form.email || !form.phone || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({ type: "error", text: "Enter a valid email address." });
      return;
    }

    if (!validatePhone(form.phone)) {
      setStatus({ type: "error", text: "Phone number must be 10 digits." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const { response, data } = await postJson("/api/inquiry", form);

      if (response.ok && data.success) {
        setStatus({ type: "success", text: "Message sent! Our team will contact you soon." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.message || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="help-section">
      <div className="help-circuit-bg" aria-hidden="true">
        <svg className="help-circuit-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <path d="M0 120 H200 V80 H400 V160 H600 V100 H800" />
          <path d="M100 0 V200 M300 40 V280 M500 0 V240 M700 60 V300" />
          <circle cx="200" cy="120" r="6" />
          <circle cx="400" cy="160" r="6" />
          <circle cx="600" cy="100" r="6" />
          <rect x="180" y="260" width="40" height="40" rx="4" />
          <rect x="420" y="320" width="36" height="36" rx="4" />
          <circle cx="320" cy="400" r="28" fill="none" strokeWidth="2" />
          <circle cx="520" cy="440" r="18" fill="none" strokeWidth="2" />
        </svg>
      </div>

      <div className="help-inner">
        <div className="help-left">
          <span className="help-eyebrow">Connect With Powells</span>
          <h2>How Can We Help You?</h2>
          <p>
            From product selection to project support — our electrical experts
            are ready to assist industries, contractors and channel partners
            across India.
          </p>

          <ul className="help-list">
            {HELP_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <span className="help-list-icon">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="help-contact-strip">
            <a href="tel:+919148243088">
              <Phone size={16} aria-hidden="true" />
              +91 9148243088
            </a>
            <a href="mailto:sales@powellsindiacorporation.com">
              <Mail size={16} aria-hidden="true" />
              sales@powellsindiacorporation.com
            </a>
            <span>
              <MapPin size={16} aria-hidden="true" />
              Bengaluru, Karnataka
            </span>
          </div>
        </div>

        <div className="help-form-wrap">
          <div className="help-form-square" aria-hidden="true" />
          <form className="help-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <p>Tell us what you need — we typically respond within 24 hours.</p>

            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <div className="help-form-row">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Product, quantity, application or support needed..."
                rows={4}
              />
            </label>

            {status && (
              <p className={`help-form-status help-form-status--${status.type}`}>
                {status.text}
              </p>
            )}

            <button type="submit" disabled={loading}>
              <Send size={18} aria-hidden="true" />
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
