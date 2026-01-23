import { PlayerSectionProps } from "@/src/types/team-props";
import { JSX } from "react";

/**
 * A section of players in a team.
 *
 * @param {PlayerSectionProps} props - section props
 * @param {string} props.sectionName - name of the section (e.g. "Guarda-redes", "Defesas", ...)
 * @param {React.ReactNode} props.children - list of children which will be rendered in the section
 * @returns {JSX.Element} - the section component with the children rendered
 */
export function PlayersSection({
  sectionName,
  children,
}: PlayerSectionProps): JSX.Element {
  return (
    <>
      <p className="text-primary font-bold text-xl">{sectionName}</p>
      <hr />
      <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 ">
        {children}
      </div>
    </>
  );
}
