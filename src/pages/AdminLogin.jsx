import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { postJson } from "../config/api";
import "./Admin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const basePath = location.pathname.startsWith("/panel") ? "/panel" : "/admin";

  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMsg("");

    const { response, data } = await postJson("/api/admin/login", form);

    if (response.ok && data.token) {
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.user));
      navigate(basePath);
    } else {
      setMsg(data.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-brand">
          <img src="/image/logo2.png" alt="Powells" />
          <h1>Powells Company Panel</h1>
          <p>
            Sign in to view contact forms, home page messages, newsletter
            subscriptions, and product orders.
          </p>
        </div>

        <form onSubmit={submit} className="admin-login-form">
          {msg && <p className="admin-msg admin-msg-error">{msg}</p>}

          <label>
            Company Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="admin@powellsindiacorporation.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              required
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign In to Panel"}
          </button>
        </form>

        <p className="admin-login-footnote">
          Share this page with your team:{" "}
          <strong>{window.location.origin}{basePath}/login</strong>
        </p>
      </div>
    </div>
  );
}
