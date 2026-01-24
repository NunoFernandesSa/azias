// ---------- React/Next ----------
import { JSX } from "react";
// ---------- Components ----------
import ProductCard from "./product-card/ProductCard ";
// ---------- Types ----------
import { ProductProps } from "@/src/types/shop-props";

/**
 * A component to render a grid of products.
 * It takes an object with a single property `products` which is an array of `ProductProps`.
 * It renders a grid of `ProductCard` components with the given products.
 * The grid is responsive and has a gap of 8px between products.
 * The container has a horizontal padding of 4px and a vertical padding of 8px.
 * The grid has a single column on small screens, two columns on medium screens, three columns on large screens, and four columns on extra large screens.
 *
 * @param {Object} props - The props object.
 * @param {ProductProps[]} props.products - An array of products to display in the grid.
 * @returns {JSX.Element} - A JSX element representing the product grid.
 */
export default function ShopGrid({
  products,
}: {
  products: ProductProps[];
}): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(
          (product: ProductProps): JSX.Element => (
            <ProductCard key={product.id} {...product} />
          ),
        )}
      </div>
    </div>
  );
}
