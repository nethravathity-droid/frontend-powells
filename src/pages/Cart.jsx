import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import PageShell from "../components/PageShell";
import { useCart } from "../context/CartContext";
import "./Shop.css";

export default function Cart() {
  const { cartItems, cartCount, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <PageShell variant="light" className="shop-page-wrap">
        <div className="shop-empty">
          <ShoppingBag size={64} strokeWidth={1.2} aria-hidden="true" />
          <h1>Your Powells cart is empty</h1>
          <p>Browse products, add models to your cart, then place an order.</p>
          <Link to="/products" className="shop-btn shop-btn-primary">
            Browse Products
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell variant="light" className="shop-page-wrap">
      <div className="shop-cart">
        <div className="shop-cart-main">
          <h1>Your Cart</h1>
          <p className="shop-cart-count">{cartCount} item(s) selected</p>

          <div className="shop-cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="shop-cart-item">
                <Link to={item.path} className="shop-cart-item-img">
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="shop-cart-item-body">
                  <Link to={item.path} className="shop-cart-item-name">
                    {item.name}
                  </Link>
                  <div className="shop-qty-row">
                    <div className="shop-qty-control">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="shop-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="shop-summary">
          <h2>Order Summary</h2>
          <p className="shop-quote-note">
            Pricing will be shared by our sales team after you place the order.
            No online payment required.
          </p>
          <ul className="shop-summary-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
          <Link to="/checkout" className="shop-btn shop-btn-primary shop-btn-block">
            Proceed to Place Order
          </Link>
          <Link to="/products" className="shop-link-muted">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
