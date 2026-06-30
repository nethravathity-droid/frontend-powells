import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../config/api";
import "./Admin.css";

const TABS = [
  { id: "all", label: "All Submissions" },
  { id: "contact", label: "Contact / Quotation" },
  { id: "channel-partner", label: "Channel Partner" },
  { id: "inquiry", label: "Home Inquiry" },
  { id: "subscribe", label: "Subscribe" },
  { id: "orders", label: "Shop Orders (COD)" },
  { id: "logins", label: "Login History" },
  { id: "users", label: "Registered Users" },
];

const TYPE_LABELS = {
  contact: "Contact",
  inquiry: "Inquiry",
  subscribe: "Subscribe",
  "channel-partner": "Channel Partner",
};

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function renderSubmissionRow(item) {
  const d = item.data || {};
  if (item.type === "contact") {
    return (
      <>
        <td>{`${d.firstName || ""} ${d.lastName || ""}`.trim()}</td>
        <td>{d.email}</td>
        <td>{d.phone}</td>
        <td className="admin-cell-message">
          <strong>{d.requestType || d.inquiryType || "Contact"}</strong>
          {d.message && d.message !== "—" ? ` — ${d.message}` : ""}
        </td>
      </>
    );
  }
  if (item.type === "channel-partner") {
    return (
      <>
        <td>{d.companyName}</td>
        <td>{d.email}</td>
        <td>{d.phone}</td>
        <td className="admin-cell-message">
          <strong>{d.contactName || "—"}</strong>
          {d.partnerTypeLabel ? ` · ${d.partnerTypeLabel}` : ""}
          {d.city || d.state ? ` · ${[d.city, d.state].filter(Boolean).join(", ")}` : ""}
          {d.message ? ` — ${d.message}` : ""}
        </td>
      </>
    );
  }
  if (item.type === "inquiry") {
    return (
      <>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>{d.phone}</td>
        <td className="admin-cell-message">{d.message}</td>
      </>
    );
  }
  if (item.type === "subscribe") {
    return (
      <>
        <td>{d.email}</td>
        <td>—</td>
        <td>—</td>
        <td>Newsletter signup</td>
      </>
    );
  }
  return null;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("all");
  const [stats, setStats] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "null");

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");

    const me = await authFetch("/api/admin/me");
    if (!me.response.ok) {
      logout();
      return;
    }

    const statsRes = await authFetch("/api/admin/stats");
    if (statsRes.response.ok) setStats(statsRes.data.stats);

    if (tab === "logins") {
      const res = await authFetch("/api/admin/logins?limit=50");
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load data");
    } else if (tab === "users") {
      const res = await authFetch("/api/admin/users");
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load data");
    } else if (tab === "orders") {
      const res = await authFetch("/api/admin/orders?limit=50");
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load data");
    } else {
      const typeParam = tab === "all" ? "" : `&type=${tab}`;
      const res = await authFetch(`/api/admin/submissions?limit=50${typeParam}`);
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load data");
    }

    setLoading(false);
  }, [tab]);

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin/login");
      return;
    }
    loadData();
  }, [loadData, navigate]);

  const isSubmissionTab = !["logins", "users", "orders"].includes(tab);

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-left">
          <img src="/image/logo2.png" alt="Powells" className="admin-logo" />
          <div>
            <h1>Powells Admin Dashboard</h1>
            <p>{adminUser?.email || "Admin"}</p>
          </div>
        </div>
        <div className="admin-header-actions">
          <button type="button" className="admin-btn-ghost" onClick={loadData}>
            Refresh
          </button>
          <button type="button" className="admin-btn-logout" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      {stats && (
        <div className="admin-stats">
          <div className="admin-stat-card">
            <span>Contact</span>
            <strong>{stats.contact}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Channel Partner</span>
            <strong>{stats.channelPartner}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Inquiries</span>
            <strong>{stats.inquiry}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Subscribers</span>
            <strong>{stats.subscribe}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Shop Orders</span>
            <strong>{stats.orders ?? 0}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Logins</span>
            <strong>{stats.logins}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Users</span>
            <strong>{stats.users}</strong>
          </div>
        </div>
      )}

      <nav className="admin-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={tab === t.id ? "active" : ""}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="admin-panel">
        {loading && <p className="admin-loading">Loading…</p>}
        {error && <p className="admin-msg admin-msg-error">{error}</p>}

        {!loading && tab === "logins" && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Source</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="admin-empty">No login records yet</td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row._id}>
                    <td>{formatDate(row.createdAt)}</td>
                    <td>{row.email}</td>
                    <td>{row.name || "—"}</td>
                    <td>{row.role}</td>
                    <td>{row.source}</td>
                    <td>
                      <span className={row.success ? "admin-badge ok" : "admin-badge fail"}>
                        {row.success ? "Success" : "Failed"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}

        {!loading && tab === "users" && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Registered</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="admin-empty">No registered users yet</td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row._id}>
                    <td>{formatDate(row.createdAt)}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}

        {!loading && tab === "orders" && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Items</th>
                <th>Total (COD)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={7} className="admin-empty">No orders yet</td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row._id}>
                    <td>{formatDate(row.createdAt)}</td>
                    <td>{row.orderId}</td>
                    <td>{row.customer?.name}</td>
                    <td>{row.customer?.phone}</td>
                    <td className="admin-cell-message">
                      {(row.items || []).map((i) => `${i.name} ×${i.quantity}`).join(", ")}
                    </td>
                    <td>₹{row.total?.toLocaleString("en-IN")}</td>
                    <td>
                      <span className="admin-badge ok">{row.status || "pending"}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}

        {!loading && isSubmissionTab && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Name / Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="admin-empty">No submissions yet</td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row._id}>
                    <td>{formatDate(row.createdAt)}</td>
                    <td>
                      <span className="admin-badge type">{TYPE_LABELS[row.type] || row.type}</span>
                    </td>
                    {renderSubmissionRow(row)}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
