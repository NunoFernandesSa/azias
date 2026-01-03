export default function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return <div className={`${className}`}>{children}</div>;
}
