import "./Products.css";
import "./Shop.css";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import AddToCartButton from "../components/AddToCartButton";
import { PRODUCTS, formatPrice } from "../data/products";

const catalogProducts = PRODUCTS.filter((p) => !p.parentId);

export default function Products() {
  const navigate = useNavigate();

  return (
    <PageShell variant="light" className="products-page-wrap">
      <section className="products-section">
        <h1 className="products-title">PRODUCTS</h1>
        <p className="products-shop-note">
          Add items to cart and pay cash on delivery — no online payment needed.
        </p>

        <div className="products-grid">
          {catalogProducts.map((item) => (
            <div key={item.id} className="product-card shop-product-card">
              <div
                className="shop-product-click"
                onClick={() => navigate(item.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(item.path)}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <span className="shop-product-price">{formatPrice(item.price)}</span>
              </div>
              <div className="shop-product-actions">
                <AddToCartButton
                  productId={item.id}
                  variant="primary"
                  className="add-to-cart-btn--block"
                  stopPropagation
                />
                <button
                  type="button"
                  className="shop-view-btn"
                  onClick={() => navigate(item.path)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
