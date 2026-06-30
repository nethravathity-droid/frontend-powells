import { useLocation } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { getProductByPath } from "../data/products";

export default function ProductPageCart({ productId, className = "" }) {
  const { pathname } = useLocation();
  const id = productId || getProductByPath(pathname)?.id;

  if (!id) return null;

  return (
    <AddToCartButton
      productId={id}
      variant="primary"
      className={className}
    />
  );
}
