import ProductPageCart from "./ProductPageCart";

export default function HeroProductCart({ productId }) {
  return (
    <div className="hero-product-cart">
      <ProductPageCart productId={productId} />
    </div>
  );
}
