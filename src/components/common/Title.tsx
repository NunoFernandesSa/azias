import { TitleProps } from "@/src/types";

export default function Title({ children, className }: TitleProps) {
  return (
    <div className={`text-2xl md:text-4xl xl:text-6xl font-bold ${className}`}>
      {children}
    </div>
  );
}
