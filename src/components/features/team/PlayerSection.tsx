import { PlayerSectionProps } from "@/src/types/team-props";

export function PlayersSection({ sectionName, children }: PlayerSectionProps) {
  return (
    <>
      <p className="text-primary font-bold text-xl">{sectionName}</p>
      <hr />
      <div className="px-2 xl:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6">
        {children}
      </div>
    </>
  );
}
