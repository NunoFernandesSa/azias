import ProductPrice from "./ProductPrice";

export default function ProductInfo({
  name,
  price,
  originalPrice,
  shippingPrice,
}: any) {
  return (
    <>
      {/* Nom du produit */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Prix et CTA */}
      <div className="flex items-center justify-between mt-6">
        <ProductPrice
          price={price}
          originalPrice={originalPrice}
          shippingPrice={shippingPrice}
        />
      </div>
    </>
  );
}
