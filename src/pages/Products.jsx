import "./Products.css";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import { PRODUCTS } from "../data/products";

const catalogProducts = PRODUCTS.filter((p) => !p.parentId);

export default function Products() {
  const navigate = useNavigate();

  return (
    <PageShell variant="light" className="products-page-wrap">
      <section className="products-section">
        <h1 className="products-title">PRODUCTS</h1>
        <p className="products-subtitle">
          Explore our electrical meters, switchgear, automation and protection
          solutions. Select a product to view models and add to cart.
        </p>

        <div className="products-grid">
          {catalogProducts.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => navigate(item.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(item.path)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
