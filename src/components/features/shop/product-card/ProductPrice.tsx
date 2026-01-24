// ---------- React/Next ----------
import { JSX } from "react";
// ---------- Types ----------
import { ProductProps } from "@/src/types/shop-props";

/**
 * A component to display the price of a product.
 * It displays the price and an optional original price with a line-through.
 * @param {ProductProps} props - the product information
 * @returns {JSX.Element} - the product price component
 */
export default function ProductPrice({
  price = 0,
  originalPrice,
}: ProductProps): JSX.Element {
  return (
    <>
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {price.toFixed(2)}€
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice.toFixed(2)}€
            </span>
          )}
        </div>
      </div>
    </>
  );
}
