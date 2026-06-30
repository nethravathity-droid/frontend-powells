export function toCartItem(product, quantity = 1) {
  const image = product.image?.startsWith("/")
    ? product.image
    : `/image/${product.image}`;

  return {
    id: product.id,
    name: product.name,
    image,
    path: product.path,
    quantity,
  };
}
