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
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
        {name}
      </h3>

      <div className="flex items-center justify-between mt-6">
        <ProductPrice price={price} originalPrice={originalPrice} />
      </div>
    </>
  );
}
