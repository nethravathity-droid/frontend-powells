import "./HowCanWeHelp.css";
import { useState } from "react";
import { postJson } from "../config/api";
import { validateEmail, validatePhone, normalizePhone } from "../utils/formValidation";
import ElectricalBackdrop from "./ElectricalBackdrop";
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
      const { response, data } = await postJson("/api/inquiry", {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: normalizePhone(form.phone),
        message: form.message.trim(),
      });

      if (response.ok && data.success) {
        const note =
          data.emailSent === false
            ? " (Saved — email notification is delayed; our team will still follow up.)"
            : "";
        setStatus({
          type: data.emailSent === false ? "warning" : "success",
          text: "Message sent! Our team will contact you within 24 hours." + note,
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else if (response.status === 409 || data.duplicate) {
        setStatus({
          type: "error",
          text:
            data.message ||
            "You have already sent a message with this email and mobile number.",
        });
      } else {
        setStatus({ type: "error", text: data.message || "Failed to send message." });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Unable to reach the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="help-section elec-section-dark elec-accent-strip">
      <ElectricalBackdrop variant="dark" />

      <div className="help-inner">
        <div className="help-left">
          <span className="help-eyebrow elec-eyebrow">Connect With Powells</span>
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
            <a href="tel:+918904278956">
              <Phone size={16} aria-hidden="true" />
              +91 8904278956
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
