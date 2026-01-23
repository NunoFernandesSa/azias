export default function CaptainBadge() {
  return (
    <div className="absolute top-3 right-3 z-20">
      <div className="bg-secondary/80 backdrop-blur-md text-primary text-sm font-semibold px-2 py-1 rounded-full border border-secondary/30 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Capitão</span>
        </div>
      </div>
    </div>
  );
}
