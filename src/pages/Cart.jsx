import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import PageShell from "../components/PageShell";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import "./Shop.css";

export default function Cart() {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();
  const deliveryFee = subtotal >= 5000 ? 0 : 99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <PageShell variant="light" className="shop-page-wrap">
        <div className="shop-empty">
          <ShoppingBag size={64} strokeWidth={1.2} aria-hidden="true" />
          <h1>Your Powells cart is empty</h1>
          <p>Add electrical products to your cart and place a cash-on-delivery order.</p>
          <Link to="/products" className="shop-btn shop-btn-primary">
            Continue Shopping
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell variant="light" className="shop-page-wrap">
      <div className="shop-cart">
        <div className="shop-cart-main">
          <h1>Shopping Cart</h1>
          <p className="shop-cart-count">{cartItems.length} item(s)</p>

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
                  <p className="shop-cart-item-price">{formatPrice(item.price)}</p>
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
                <div className="shop-cart-item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="shop-summary">
          <h2>Order Summary</h2>
          <div className="shop-summary-row">
            <span>Items subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="shop-summary-row">
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}</span>
          </div>
          {subtotal < 5000 && (
            <p className="shop-free-delivery-hint">
              Add {formatPrice(5000 - subtotal)} more for free delivery
            </p>
          )}
          <div className="shop-summary-row shop-summary-total">
            <span>Order total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <p className="shop-cod-badge">Cash on Delivery available</p>
          <Link to="/checkout" className="shop-btn shop-btn-primary shop-btn-block">
            Proceed to Checkout
          </Link>
          <Link to="/products" className="shop-link-muted">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
