"use client";

// ---------- React/Next ----------
import { useState } from "react";
// ---------- Components ----------
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
// ---------- Types ----------
import { ProductProps } from "@/src/types/shop-props";

export default function ProductCard({ ...product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProductImage
        image={product.image}
        alt={product.name}
        isHovered={isHovered}
      />

      <div className="p-5">
        <ProductInfo
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
        />
      </div>
    </div>
  );
}
