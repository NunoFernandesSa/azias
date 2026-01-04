export default function CategoryFilters({
  categories,
  activeCategory,
  onCategorySelect,
}: {
  categories: string[];
  activeCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}) {
  const allCategories = ["Tous les produits", ...categories];

  return (
    <div className="mt-12 flex flex-wrap gap-4 justify-center">
      {allCategories.map((category, index) => (
        <button
          key={index}
          onClick={() =>
            onCategorySelect(category === "Tous les produits" ? null : category)
          }
          className={`px-5 py-2 rounded-full font-medium transition-colors ${
            activeCategory === category ||
            (!activeCategory && category === "Tous les produits")
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
