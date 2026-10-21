"use client";

// ---------- React/Next ----------
import Link from "next/link";
import { useState } from "react";
// ---------- Components ----------
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
// ---------- Types ----------
import { ProductProps } from "@/src/types/shop-props";

export default function ProductCard({ ...product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);
  const contactHref = `mailto:azias-fc@gmail.com?subject=${encodeURIComponent(
    `Encomenda - ${product.name ?? "Produto A.D. Azias"}`,
  )}`;

  return (
    <article
      className="group relative overflow-hidden border-b border-primary/10 pb-5 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProductImage
        image={product.image}
        alt={product.name}
        isHovered={isHovered}
      />

      <div className="pt-5">
        <ProductInfo
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
        />

        <div className="mt-5 border-t border-primary/10 pt-4">
          <Link
            href={contactHref}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:underline"
          >
            Pedir este produto
          </Link>
        </div>
      </div>
    </article>
  );
}
