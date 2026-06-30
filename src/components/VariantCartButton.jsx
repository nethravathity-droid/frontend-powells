import AddToCartButton from "./AddToCartButton";

export default function VariantCartButton({ id, name, image, path }) {
  const img = image?.startsWith("/") ? image : `/image/${image}`;

  return (
    <AddToCartButton
      product={{ id, name, image: img, path }}
      variant="compact"
    />
  );
}
