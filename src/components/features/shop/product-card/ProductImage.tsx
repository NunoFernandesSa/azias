export default function ProductImage({ image, alt, isHovered }: any) {
  return (
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
