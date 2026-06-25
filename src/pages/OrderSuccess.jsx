import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle, Package, Banknote } from "lucide-react";
import PageShell from "../components/PageShell";
import { formatPrice } from "../data/products";
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
        <p className="shop-success-id">Order ID: <strong>{state.orderId}</strong></p>
        <p>
          Thank you for ordering from Powells India Corporation.
          Our team will contact you shortly to confirm delivery.
        </p>

        <div className="shop-success-cards">
          <div className="shop-success-card">
            <Package size={22} aria-hidden="true" />
            <div>
              <strong>Delivery in 5–7 business days</strong>
              <span>Across Bengaluru &amp; major cities in Karnataka</span>
            </div>
          </div>
          <div className="shop-success-card">
            <Banknote size={22} aria-hidden="true" />
            <div>
              <strong>Pay {formatPrice(state.total)} on delivery</strong>
              <span>Cash on Delivery — keep exact change ready if possible</span>
            </div>
          </div>
        </div>

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
