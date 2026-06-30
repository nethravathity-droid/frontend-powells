import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle, Package, MessageCircle, Mail } from "lucide-react";
import PageShell from "../components/PageShell";
import "./Shop.css";

export default function OrderSuccess() {
  const { state } = useLocation();

  if (!state?.orderId) {
    return <Navigate to="/products" replace />;
  }

  return (
    <PageShell variant="light" className="shop-page-wrap">
      <div className="shop-success">
        <div className="shop-success-icon">
          <CheckCircle size={56} aria-hidden="true" />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p className="shop-success-id">
          Order ID: <strong>{state.orderId}</strong>
        </p>
        <p>
          Thank you for your order. Our sales team has been notified by email
          and will contact you shortly with pricing and delivery details.
        </p>

        <div className="shop-success-cards">
          <div className="shop-success-card">
            <Mail size={22} aria-hidden="true" />
            <div>
              <strong>Email notification sent</strong>
              <span>Powells team received your order details</span>
            </div>
          </div>
          <div className="shop-success-card">
            <Package size={22} aria-hidden="true" />
            <div>
              <strong>We will confirm your order</strong>
              <span>Expect a call or email within 1–2 business days</span>
            </div>
          </div>
        </div>

        {state.whatsappUrl && (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-btn shop-btn-whatsapp shop-btn-block"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Also notify us on WhatsApp
          </a>
        )}

        <div className="shop-success-actions">
          <Link to="/products" className="shop-btn shop-btn-primary">
            Continue Shopping
          </Link>
          <Link to="/" className="shop-btn shop-btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
