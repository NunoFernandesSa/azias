export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`py-30 lg:py-16 ${className}`}>{children}</div>;
}
