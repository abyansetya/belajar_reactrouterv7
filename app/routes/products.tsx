import type { Route } from "../+types/root";
import { z } from "zod";
import { useLoaderData } from "react-router";

const productSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    pid: z.string(),
  })
);

export async function loader() {
  const res = await fetch("http://localhost:3000/products");
  const result = await res.json();

  const products = productSchema.safeParse(result);

  if (!products.success) {
    console.error(products.error);
    return { products: [] };
  }

  return { products: products.data };
}

const ProductsPage = () => {
  const { products } = useLoaderData<typeof loader>();

  return (
    <section>
      <h1>Products Page</h1>
      <p>Our Latest products:</p>

      {products.length === 0 ? (
        <p>No Products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - RP{product.price}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductsPage;
