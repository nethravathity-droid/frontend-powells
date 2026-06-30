import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";
import { toCartItem } from "../utils/cartItem";
import "./AddToCartButton.css";

export default function AddToCartButton({
  productId,
  product: productProp,
  quantity = 1,
  variant = "primary",
  label = "Add to Cart",
  className = "",
  stopPropagation = false,
}) {
  const { addToCart } = useCart();
  const product = productProp || getProductById(productId);

  if (!product) return null;

  const handleClick = (e) => {
    if (stopPropagation) e.stopPropagation();
    addToCart(toCartItem(product, quantity));
  };

  return (
    <button
      type="button"
      className={`add-to-cart-btn add-to-cart-btn--${variant} ${className}`}
      onClick={handleClick}
    >
      <ShoppingCart size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
