import "./SubscribeSection.css";
import { useState } from "react";
import { postJson } from "../config/api";
import { validateEmail } from "../utils/formValidation";
import { Mail, Bell } from "lucide-react";
import ElectricalBackdrop from "./ElectricalBackdrop";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!email.trim()) {
      setStatus({ type: "error", text: "Please enter your email." });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: "error", text: "Enter a valid email address." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const { response, data } = await postJson("/api/subscribe", { email: email.trim() });

      if (response.ok && data.success) {
        setStatus({ type: "success", text: "You're subscribed! Watch your inbox for updates." });
        setEmail("");
      } else {
        setStatus({ type: "error", text: data.message || "Subscription failed." });
      }
    } catch {
      setStatus({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="subscribe-section elec-section-light">
      <ElectricalBackdrop variant="light" />

      <div className="subscribe-inner">
        <div className="subscribe-icon-wrap">
          <span className="subscribe-icon-ring" aria-hidden="true" />
          <Bell size={28} strokeWidth={2} aria-hidden="true" />
        </div>

        <div className="subscribe-content">
          <h2>Stay Updated With Powells</h2>
          <p>
            Subscribe for product launches, technical updates and industry
            insights from Powells India Corporation.
          </p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="subscribe-input-wrap">
            <Mail size={18} aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(null);
              }}
              placeholder="Enter your email address"
              aria-label="Email for newsletter"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status && (
          <p className={`subscribe-status subscribe-status--${status.type}`}>
            {status.text}
          </p>
        )}
      </div>
    </section>
  );
}
