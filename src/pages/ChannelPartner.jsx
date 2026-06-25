import "./ChannelPartner.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { postJson } from "../config/api";
import { validateEmail, validatePhone } from "../utils/formValidation";
import PageShell from "../components/PageShell";
import { Handshake, Building2, Mail, Phone, Send } from "lucide-react";

export default function ChannelPartner() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    companyName: "",
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

    if (!form.email.trim() || !form.phone.trim() || !form.companyName.trim()) {
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
      const { response, data } = await postJson("/api/channel-partner", form);

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          text: "Application submitted! Our partnerships team will reach out soon.",
        });
        setForm({ email: "", phone: "", companyName: "" });
      } else {
        setStatus({ type: "error", text: data.message || "Submission failed." });
      }
    } catch {
      setStatus({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Channel Partner | Powells India Corporation</title>
        <meta
          name="description"
          content="Join Powells India as a channel partner. Apply for dealer and distributor opportunities across India."
        />
      </Helmet>

      <PageShell variant="dark" className="cp-page">
        <div className="cp-container">
          <header className="cp-header">
            <div className="cp-symbol">
              <span className="cp-symbol-ring" aria-hidden="true" />
              <Handshake size={36} strokeWidth={2} aria-hidden="true" />
            </div>
            <span className="cp-eyebrow elec-eyebrow">Partnership Program</span>
            <h1>Become a Channel Partner</h1>
            <p>
              Join Powells India's growing dealer and distributor network.
              Partner with a trusted electrical brand and grow your business
              with meters, ATS, SPD and switchgear solutions.
            </p>
          </header>

          <div className="cp-body">
            <div className="cp-benefits">
              <h2>Why Partner With Powells?</h2>
              <ul>
                <li>
                  <Building2 size={20} aria-hidden="true" />
                  <div>
                    <strong>Pan-India Brand Presence</strong>
                    <span>Trusted products for industrial and commercial markets.</span>
                  </div>
                </li>
                <li>
                  <Handshake size={20} aria-hidden="true" />
                  <div>
                    <strong>Dedicated Support</strong>
                    <span>Sales, technical and marketing assistance for partners.</span>
                  </div>
                </li>
                <li>
                  <Mail size={20} aria-hidden="true" />
                  <div>
                    <strong>Fast Onboarding</strong>
                    <span>Simple application — our team responds within 48 hours.</span>
                  </div>
                </li>
              </ul>
            </div>

            <form className="cp-form" onSubmit={handleSubmit}>
              <h3>Partner Application</h3>
              <p>Fill in your details and our team will connect with you.</p>

              <label>
                <Building2 size={16} aria-hidden="true" />
                Company Name
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Your company / firm name"
                />
              </label>

              <label>
                <Mail size={16} aria-hidden="true" />
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="business@company.com"
                  autoComplete="email"
                />
              </label>

              <label>
                <Phone size={16} aria-hidden="true" />
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                />
              </label>

              {status && (
                <p className={`cp-status cp-status--${status.type}`}>{status.text}</p>
              )}

              <button type="submit" disabled={loading}>
                <Send size={18} aria-hidden="true" />
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </PageShell>
    </>
  );
}
