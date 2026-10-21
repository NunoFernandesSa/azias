// ---------- React/Next ----------
import { JSX } from "react";
// ---------- Components ----------
import ProductPrice from "./ProductPrice";
// ---------- Types ----------
import { ProductProps } from "@/src/types/shop-props";

/**
 * Displays the product information (name, price, and original price).
 *
 * @param {{ name: string, price: number, originalPrice?: number }} props - product information
 * @returns {JSX.Element} - the product information component
 */
export default function ProductInfo({
  name,
  price,
  originalPrice,
}: ProductProps): JSX.Element {
  return (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/65">
        Loja oficial
      </p>
      <h3 className="mb-2 mt-3 line-clamp-2 text-lg font-bold text-primary transition-colors group-hover:text-primary/80">
        {name}
      </h3>

      <div className="mt-6 flex items-center justify-between">
        <ProductPrice price={price} originalPrice={originalPrice} />
      </div>
    </>
  );
}
