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
    <section className="space-y-10">
      <div className="grid gap-4 border-t border-primary/10 pt-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Coleção disponível
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Produtos oficiais da A.D. Azias
          </h2>
        </div>

        <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          Escolhe os produtos oficiais do clube e leva contigo as cores da A.D.
          Azias, dentro e fora dos dias de jogo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(
          (product: ProductProps): JSX.Element => (
            <ProductCard key={product.id} {...product} />
          ),
        )}
      </div>
    </section>
  );
}
