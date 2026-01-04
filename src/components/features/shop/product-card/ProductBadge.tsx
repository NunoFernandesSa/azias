const ProductBadge = ({ discount, type = "discount" }: any) => {
  const getBadgeConfig = () => {
    switch (type) {
      case "new":
        return { text: "Nouveau", bgColor: "bg-green-500" };
      case "limited":
        return { text: "Édition limitée", bgColor: "bg-purple-500" };
      case "discount":
      default:
        return { text: `-${discount}%`, bgColor: "bg-red-500" };
    }
  };

  const config = getBadgeConfig();

  return (
    <div className="absolute top-3 left-3 z-10">
      <div
        className={`${config.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
      >
        {config.text}
      </div>
    </div>
  );
};

export default ProductBadge;
