export default function LowStockAlert({ stock }: { stock: number }) {
  return (
    <div className="absolute bottom-24 right-3">
      <div className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
        ⚠️ Plus que {stock} en stock
      </div>
    </div>
  );
}
