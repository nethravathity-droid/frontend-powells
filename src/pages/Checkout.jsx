import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, User, Mail } from "lucide-react";
import PageShell from "../components/PageShell";
import { useCart } from "../context/CartContext";
import { postJson } from "../config/api";
import "./Shop.css";

const WHATSAPP_NUMBER = "919148243088";

function buildWhatsAppOrderText(orderId, customer, items) {
  const lines = items.map((i) => `• ${i.name} × ${i.quantity}`).join("\n");
  return encodeURIComponent(
    `New Powells Order ${orderId}\n\nCustomer: ${customer.name}\nPhone: ${customer.phone}\nEmail: ${customer.email}\n\nProducts:\n${lines}\n\nAddress: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`
  );
}

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  if (cartItems.length === 0) {
    return (
      <PageShell variant="light" className="shop-page-wrap">
        <div className="shop-empty">
          <h1>Nothing to order</h1>
          <Link to="/products" className="shop-btn shop-btn-primary">
            Browse Products
          </Link>
        </div>
      </PageShell>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const required = ["name", "email", "phone", "address", "city", "state", "pincode"];
    for (const field of required) {
      if (!form[field]?.trim()) {
        setError("Please fill in all required details.");
        return;
      }
    }

    setLoading(true);
    setError("");

    try {
      const orderPayload = {
        customer: form,
        items: cartItems.map(({ id, name, quantity, image, path }) => ({
          id,
          name,
          quantity,
          image,
          path,
        })),
      };

      const { response, data } = await postJson("/api/orders", orderPayload);

      if (!response.ok) {
        setError(data.message || "Could not place order. Please try again.");
        return;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppOrderText(data.orderId, form, cartItems)}`;

      clearCart();
      navigate("/order-success", {
        state: { orderId: data.orderId, whatsappUrl },
      });
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell variant="light" className="shop-page-wrap">
      <div className="shop-checkout">
        <div className="shop-checkout-main">
          <h1>Place Order</h1>
          <p className="shop-checkout-sub">
            Submit your order — our team will contact you with pricing and delivery details.
          </p>

          <form className="shop-form" onSubmit={handleSubmit}>
            <section className="shop-form-section">
              <h2>
                <User size={18} aria-hidden="true" />
                Contact Information
              </h2>
              <div className="shop-form-grid">
                <label>
                  Full Name *
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                </label>
                <label>
                  Email *
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                </label>
                <label>
                  Phone *
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" />
                </label>
              </div>
            </section>

            <section className="shop-form-section">
              <h2>
                <MapPin size={18} aria-hidden="true" />
                Delivery Address
              </h2>
              <div className="shop-form-grid">
                <label className="shop-form-full">
                  Street Address *
                  <textarea name="address" rows={3} value={form.address} onChange={handleChange} placeholder="House no, street, area" />
                </label>
                <label>
                  City *
                  <input name="city" value={form.city} onChange={handleChange} placeholder="City" />
                </label>
                <label>
                  State *
                  <input name="state" value={form.state} onChange={handleChange} placeholder="State" />
                </label>
                <label>
                  PIN Code *
                  <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="560001" />
                </label>
                <label className="shop-form-full">
                  Order Notes (optional)
                  <textarea name="notes" rows={2} value={form.notes} onChange={handleChange} placeholder="Product specs, delivery instructions, etc." />
                </label>
              </div>
            </section>

            {error && <p className="shop-error">{error}</p>}

            <button type="submit" className="shop-btn shop-btn-primary shop-btn-block" disabled={loading}>
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        <aside className="shop-summary">
          <h2>Your Order</h2>
          <ul className="shop-checkout-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <span>{item.name}</span>
                  <small>Qty: {item.quantity}</small>
                </div>
              </li>
            ))}
          </ul>
          <p className="shop-quote-note">
            No payment now. Powells will email and contact you with a quotation.
          </p>
          <div className="shop-trust-badges">
            <span><Phone size={14} /> Support: 080 28016867</span>
            <span><Mail size={14} /> sales@powellsindiacorporation.com</span>
          </div>
          <Link to="/cart" className="shop-link-muted">← Back to cart</Link>
        </aside>
      </div>
    </PageShell>
  );
}
