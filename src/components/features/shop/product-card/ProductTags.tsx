const ProductTags = ({ tags }: any) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
      {tags.map((tag: any, index: any) => (
        <span
          key={index}
          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProductTags;
