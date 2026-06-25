import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postJson } from "../config/api";
import "./Admin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
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
      navigate("/admin");
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
          <h1>Admin Portal</h1>
          <p>Sign in to view form submissions and login activity</p>
        </div>

        <form onSubmit={submit} className="admin-login-form">
          {msg && <p className="admin-msg admin-msg-error">{msg}</p>}

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="admin@company.com"
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
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
