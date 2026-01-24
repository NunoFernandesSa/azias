export type ProductProps = {
  id?: string | number;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
};

export type ProductImageProps = {
  image?: string;
  alt?: string;
  isHovered?: boolean;
};
