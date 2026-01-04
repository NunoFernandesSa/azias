"use client";

import { useState } from "react";
import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTags from "./ProductTags";

export default function ProductCard({ product }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.discount && <ProductBadge discount={product.discount} />}

      <ProductImage
        image={product.image}
        alt={product.name}
        isHovered={isHovered}
        productName={product.name}
      />

      {/* {product.stock && product.stock < 10 && (
        <LowStockAlert stock={product.stock} />
      )} */}

      <div className="p-5">
        <ProductInfo
          category={product.category}
          name={product.name}
          description={product.description}
          rating={product.rating}
          reviews={product.reviews}
          price={product.price}
          originalPrice={product.originalPrice}
          shippingPrice={product.shippingPrice}
        />

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <ProductTags tags={product.tags} />
        )}
      </div>
    </div>
  );
}
