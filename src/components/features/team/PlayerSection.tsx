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
  eyebrowLabel = "Plantel",
  description,
  count,
  children,
}: PlayerSectionProps): JSX.Element {
  return (
    <section className="border-t border-primary/10 pt-10 md:pt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrowLabel}
          </p>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
              {sectionName}
            </h2>

            {description ? (
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        {typeof count === "number" ? (
          <div className="grid gap-1">
            <span className="text-3xl font-bold tracking-tight text-primary">
              {count}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {count === 1 ? "Elemento" : "Elementos"}
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
}
