import VariantCartButton from "./VariantCartButton";
import "./ProductVariantGrid.css";

export default function ProductVariantGrid({ title, subtitle, items, path }) {
  if (!items?.length) return null;

  return (
    <section className="product-variant-grid">
      {title && <h2 className="product-variant-grid__title">{title}</h2>}
      {subtitle && <p className="product-variant-grid__subtitle">{subtitle}</p>}
      <div className="product-variant-grid__cards">
        {items.map((item) => (
          <div key={item.id} className="product-variant-grid__card">
            {item.image && (
              <img src={item.image} alt={item.name} loading="lazy" />
            )}
            <h4>{item.name}</h4>
            {item.desc && <p>{item.desc}</p>}
            <VariantCartButton
              id={item.id}
              name={item.name}
              image={item.image}
              path={path}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
