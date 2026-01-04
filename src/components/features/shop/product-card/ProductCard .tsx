"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product }: any) {
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
        productName={product.name}
      />

      <div className="p-5">
        <ProductInfo
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          shippingPrice={product.shippingPrice}
        />
      </div>
    </div>
  );
}
