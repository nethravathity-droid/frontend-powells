import "./ChannelPartner.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { postJson } from "../config/api";
import {
  validateEmail,
  validatePhone,
  normalizePhone,
} from "../utils/formValidation";
import PageShell from "../components/PageShell";
import { SHOW_CHANNEL_PARTNER } from "../config/site";
import {
  Handshake,
  Building2,
  Mail,
  Phone,
  Send,
  User,
  MapPin,
  FileText,
  CheckCircle2,
} from "lucide-react";

const PARTNER_TYPES = [
  { id: "dealer", label: "Dealer" },
  { id: "distributor", label: "Distributor" },
  { id: "contractor", label: "Contractor" },
  { id: "integrator", label: "System Integrator" },
  { id: "other", label: "Other" },
];

const STEPS = [
  "Submit your application with company details",
  "Our partnerships team reviews within 48 hours",
  "Onboarding call and product / pricing briefing",
  "Start selling Powells meters, ATS & switchgear",
];

const INITIAL_FORM = {
  contactName: "",
  email: "",
  phone: "",
  companyName: "",
  city: "",
  state: "",
  partnerType: "",
  gstNumber: "",
  message: "",
};

export default function ChannelPartner() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const required = [
      "contactName",
      "email",
      "phone",
      "companyName",
      "city",
      "state",
      "partnerType",
    ];

    for (const field of required) {
      if (!form[field]?.trim()) {
        setStatus({ type: "error", text: "Please fill in all required fields." });
        return;
      }
    }

    if (!validateEmail(form.email)) {
      setStatus({ type: "error", text: "Enter a valid email address." });
      return;
    }

    if (!validatePhone(form.phone)) {
      setStatus({
        type: "error",
        text: "Enter a valid 10-digit mobile number.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const { response, data } = await postJson("/api/channel-partner", {
        ...form,
        phone: normalizePhone(form.phone),
      });

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          text:
            data.message ||
            "Application submitted! Our partnerships team will reach out within 48 hours.",
        });
        setForm(INITIAL_FORM);
      } else {
        setStatus({
          type: "error",
          text: data.message || "Submission failed. Please try again.",
        });
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
    <>
      <Helmet>
        <title>Channel Partner | Powells India Corporation</title>
        <meta
          name="description"
          content="Join Powells India as a channel partner. Apply for dealer and distributor opportunities across India."
        />
        {!SHOW_CHANNEL_PARTNER && (
          <meta name="robots" content="noindex, nofollow" />
        )}
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
              Join Powells India&apos;s growing dealer and distributor network.
              Partner with a trusted electrical brand and grow your business with
              meters, ATS, SPD and switchgear solutions.
            </p>
          </header>

          <div className="cp-steps">
            {STEPS.map((step, index) => (
              <div key={step} className="cp-step">
                <span className="cp-step-num">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>

          <div className="cp-body">
            <div className="cp-benefits">
              <h2>Why Partner With Powells?</h2>
              <ul>
                <li>
                  <Building2 size={20} aria-hidden="true" />
                  <div>
                    <strong>Pan-India Brand Presence</strong>
                    <span>
                      Trusted products for industrial and commercial markets.
                    </span>
                  </div>
                </li>
                <li>
                  <Handshake size={20} aria-hidden="true" />
                  <div>
                    <strong>Dedicated Support</strong>
                    <span>
                      Sales, technical and marketing assistance for partners.
                    </span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <strong>Complete Product Range</strong>
                    <span>
                      Meters, ATS, SPD, MCCB, RCCB, isolators and DB boxes.
                    </span>
                  </div>
                </li>
                <li>
                  <Mail size={20} aria-hidden="true" />
                  <div>
                    <strong>Fast Onboarding</strong>
                    <span>
                      Simple application — our team responds within 48 hours.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              <h3>Partner Application</h3>
              <p>Fill in your details and our team will connect with you.</p>

              <div className="cp-form-grid">
                <label>
                  <User size={16} aria-hidden="true" />
                  Contact Person *
                  <input
                    type="text"
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="Full name"
                    autoComplete="name"
                  />
                </label>

                <label>
                  <Building2 size={16} aria-hidden="true" />
                  Company Name *
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Your company / firm name"
                    autoComplete="organization"
                  />
                </label>

                <label>
                  <Mail size={16} aria-hidden="true" />
                  Email Address *
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
                  Phone Number *
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  <MapPin size={16} aria-hidden="true" />
                  City *
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    autoComplete="address-level2"
                  />
                </label>

                <label>
                  <MapPin size={16} aria-hidden="true" />
                  State *
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="State"
                    autoComplete="address-level1"
                  />
                </label>
              </div>

              <label>
                Partner Type *
                <select
                  name="partnerType"
                  value={form.partnerType}
                  onChange={handleChange}
                >
                  <option value="">Select partner type</option>
                  {PARTNER_TYPES.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                GST Number (optional)
                <input
                  type="text"
                  name="gstNumber"
                  value={form.gstNumber}
                  onChange={handleChange}
                  placeholder="15-digit GSTIN (if available)"
                />
              </label>

              <label>
                <FileText size={16} aria-hidden="true" />
                About Your Business (optional)
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your business, territory, and products you sell..."
                />
              </label>

              {status && (
                <p className={`cp-status cp-status--${status.type}`} role="alert">
                  {status.text}
                </p>
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
