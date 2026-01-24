// ---------- React/Next ----------
import { JSX } from "react";
// ---------- Types ----------
import { ProductImageProps } from "@/src/types/shop-props";

/**
 * A component to display a product image.
 * It displays the image and an optional hover effect with a gradient overlay.
 * @param {string} props.image - image URL of the product
 * @param {string} props.alt - alt text of the image
 * @param {boolean} props.isHovered - whether the image is hovered or not
 * @returns {JSX.Element} - the product image component
 */
export default function ProductImage({
  image,
  alt,
  isHovered,
}: ProductImageProps): JSX.Element {
  return (
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
