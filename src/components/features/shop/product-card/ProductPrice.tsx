export default function ProductPrice({ price, originalPrice }: any) {
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
