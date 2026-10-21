export default function CaptainBadge() {
  return (
    <div className="absolute right-3 top-3 z-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-xl backdrop-blur-md">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
          C
        </span>
        <span>Capitão</span>
      </div>
    </div>
  );
}
