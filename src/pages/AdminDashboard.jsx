import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authFetch } from "../config/api";
import "./Admin.css";

const COMPANY_TABS = [
  { id: "all", label: "All Submissions" },
  { id: "contact", label: "Contact Page" },
  { id: "inquiry", label: "Home — Send Us a Message" },
  { id: "subscribe", label: "Newsletter Subscribe" },
  { id: "orders", label: "Product Orders" },
  { id: "channel-partner", label: "Channel Partner" },
];

const TYPE_LABELS = {
  contact: "Contact Page",
  inquiry: "Home Message",
  subscribe: "Newsletter",
  "channel-partner": "Channel Partner",
  order: "Product Order",
};

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function DetailRow({ label, value }) {
  if (!value || value === "—") return null;
  return (
    <div className="admin-detail-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SubmissionDetail({ item }) {
  const d = item.data || {};

  if (item.type === "contact") {
    return (
      <>
        <DetailRow label="Request Type" value={d.requestType || d.inquiryType} />
        <DetailRow label="First Name" value={d.firstName} />
        <DetailRow label="Last Name" value={d.lastName} />
        <DetailRow label="Email" value={d.email} />
        <DetailRow label="Mobile" value={d.phone} />
        <DetailRow label="Message" value={d.message} />
      </>
    );
  }

  if (item.type === "inquiry") {
    return (
      <>
        <DetailRow label="Name" value={d.name} />
        <DetailRow label="Email" value={d.email} />
        <DetailRow label="Mobile" value={d.phone} />
        <DetailRow label="Message" value={d.message} />
      </>
    );
  }

  if (item.type === "subscribe") {
    return <DetailRow label="Email" value={d.email} />;
  }

  if (item.type === "channel-partner") {
    return (
      <>
        <DetailRow label="Contact Name" value={d.contactName} />
        <DetailRow label="Company" value={d.companyName} />
        <DetailRow label="Partner Type" value={d.partnerTypeLabel || d.partnerType} />
        <DetailRow label="Email" value={d.email} />
        <DetailRow label="Mobile" value={d.phone} />
        <DetailRow label="City" value={d.city} />
        <DetailRow label="State" value={d.state} />
        <DetailRow label="GST Number" value={d.gstNumber} />
        <DetailRow label="Message" value={d.message} />
      </>
    );
  }

  return null;
}

function OrderDetail({ order }) {
  const c = order.customer || {};
  const address = [c.address, c.city, c.state, c.pincode].filter(Boolean).join(", ");

  return (
    <>
      <DetailRow label="Order ID" value={order.orderId} />
      <DetailRow label="Status" value={order.status || "pending"} />
      <DetailRow label="Customer Name" value={c.name} />
      <DetailRow label="Email" value={c.email} />
      <DetailRow label="Mobile" value={c.phone} />
      <DetailRow label="Delivery Address" value={address} />
      <DetailRow label="Order Notes" value={c.notes} />
      <div className="admin-detail-row admin-detail-row--block">
        <span>Products</span>
        <ul className="admin-order-items">
          {(order.items || []).map((item) => (
            <li key={`${item.id}-${item.name}`}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function getSubmissionSummary(item) {
  const d = item.data || {};
  if (item.type === "contact") {
    return {
      name: `${d.firstName || ""} ${d.lastName || ""}`.trim(),
      email: d.email,
      phone: d.phone,
      detail: d.requestType || d.inquiryType || "Contact",
    };
  }
  if (item.type === "inquiry") {
    return { name: d.name, email: d.email, phone: d.phone, detail: d.message };
  }
  if (item.type === "subscribe") {
    return { name: "—", email: d.email, phone: "—", detail: "Newsletter signup" };
  }
  if (item.type === "channel-partner") {
    return {
      name: d.companyName,
      email: d.email,
      phone: d.phone,
      detail: `${d.contactName || ""}${d.partnerTypeLabel ? ` · ${d.partnerTypeLabel}` : ""}`.trim(),
    };
  }
  return { name: "—", email: "—", phone: "—", detail: "—" };
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const basePath = location.pathname.startsWith("/panel") ? "/panel" : "/admin";

  const [tab, setTab] = useState("all");
  const [stats, setStats] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "null");

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate(`${basePath}/login`);
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

    if (tab === "orders") {
      const res = await authFetch("/api/admin/orders?limit=100");
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load orders");
    } else {
      const typeParam = tab === "all" ? "" : `&type=${tab}`;
      const res = await authFetch(`/api/admin/submissions?limit=100${typeParam}`);
      if (res.response.ok) setItems(res.data.items || []);
      else setError(res.data.message || "Failed to load submissions");
    }

    setLoading(false);
  }, [tab]);

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate(`${basePath}/login`);
      return;
    }
    loadData();
  }, [loadData, navigate, basePath]);

  const isOrderTab = tab === "orders";

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-left">
          <img src="/image/logo2.png" alt="Powells" className="admin-logo" />
          <div>
            <h1>Powells Submissions Panel</h1>
            <p>
              {adminUser?.email || "Company login"} · Contact, inquiries, subscribe &amp; orders
            </p>
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
            <span>Contact Page</span>
            <strong>{stats.contact}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Home Messages</span>
            <strong>{stats.inquiry}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Subscribers</span>
            <strong>{stats.subscribe}</strong>
          </div>
          <div className="admin-stat-card">
            <span>Orders</span>
            <strong>{stats.orders ?? 0}</strong>
          </div>
        </div>
      )}

      <nav className="admin-tabs">
        {COMPANY_TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={tab === t.id ? "active" : ""}
            onClick={() => {
              setTab(t.id);
              setSelected(null);
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="admin-panel">
        {loading && <p className="admin-loading">Loading submissions…</p>}
        {error && <p className="admin-msg admin-msg-error">{error}</p>}

        {!loading && isOrderTab && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Items</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={8} className="admin-empty">
                    No orders submitted yet
                  </td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr key={row._id}>
                    <td>{formatDate(row.createdAt)}</td>
                    <td>{row.orderId}</td>
                    <td>{row.customer?.name}</td>
                    <td>{row.customer?.email}</td>
                    <td>{row.customer?.phone}</td>
                    <td className="admin-cell-message">
                      {(row.items || []).map((i) => `${i.name} ×${i.quantity}`).join(", ")}
                    </td>
                    <td>
                      <span className="admin-badge ok">{row.status || "pending"}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="admin-view-btn"
                        onClick={() => setSelected({ kind: "order", data: row })}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}

        {!loading && !isOrderTab && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Source</th>
                <th>Name / Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Summary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={7} className="admin-empty">
                    No submissions yet for this section
                  </td>
                </tr>
              ) : (
                items.map((row) => {
                  const summary = getSubmissionSummary(row);
                  return (
                    <tr key={row._id}>
                      <td>{formatDate(row.createdAt)}</td>
                      <td>
                        <span className="admin-badge type">
                          {TYPE_LABELS[row.type] || row.type}
                        </span>
                      </td>
                      <td>{summary.name}</td>
                      <td>{summary.email}</td>
                      <td>{summary.phone}</td>
                      <td className="admin-cell-message">{summary.detail}</td>
                      <td>
                        <button
                          type="button"
                          className="admin-view-btn"
                          onClick={() => setSelected({ kind: "submission", data: row })}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <div
          className="admin-modal-backdrop"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="admin-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-detail-title"
          >
            <div className="admin-modal-header">
              <h2 id="admin-detail-title">
                {selected.kind === "order"
                  ? "Order Details"
                  : TYPE_LABELS[selected.data.type] || "Submission Details"}
              </h2>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="admin-modal-date">
              Submitted {formatDate(selected.data.createdAt)}
            </p>
            <div className="admin-modal-body">
              {selected.kind === "order" ? (
                <OrderDetail order={selected.data} />
              ) : (
                <SubmissionDetail item={selected.data} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
