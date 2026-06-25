import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import "./CartToast.css";

export default function CartToast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div className="cart-toast" role="status">
      <CheckCircle size={18} aria-hidden="true" />
      <span>{toast}</span>
      <Link to="/cart">View Cart</Link>
    </div>
  );
}
