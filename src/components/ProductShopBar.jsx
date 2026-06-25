import { useLocation, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import { getProductByPath, formatPrice } from "../data/products";
import "./ProductShopBar.css";

const NON_PRODUCT_PAGES = new Set([
  "/pages/About",
  "/pages/Contact",
  "/pages/Blog",
  "/pages/ChannelPartner",
  "/pages/HomeExhibition",
]);

export default function ProductShopBar() {
  const { pathname } = useLocation();

  if (!pathname.startsWith("/pages/") || NON_PRODUCT_PAGES.has(pathname)) {
    return null;
  }

  const product = getProductByPath(pathname);
  if (!product) return null;

  return (
    <div className="product-shop-bar">
      <div className="product-shop-bar-inner">
        <div className="product-shop-bar-info">
          <img src={product.image} alt="" />
          <div>
            <strong>{product.name}</strong>
            <span>{formatPrice(product.price)}</span>
          </div>
        </div>
        <AddToCartButton
          product={product}
          variant="primary"
          label="Add to Cart"
          className="product-shop-bar-btn"
        />
        <Link to="/cart" className="product-shop-bar-cart" aria-label="View cart">
          <ShoppingCart size={20} />
        </Link>
      </div>
    </div>
  );
}
