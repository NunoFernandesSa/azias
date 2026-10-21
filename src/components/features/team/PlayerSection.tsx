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
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-primary/10 bg-card/90 p-5 shadow-xl shadow-primary/5 backdrop-blur-sm sm:p-6 lg:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(8,13,77,0.06),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.10),_transparent_22%)]"
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrowLabel}
            </span>

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
            <div className="inline-flex w-fit flex-col rounded-2xl border border-primary/10 bg-background/80 px-5 py-3 text-left shadow-sm">
              <span className="text-2xl font-bold text-primary">{count}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {count === 1 ? "Elemento" : "Elementos"}
              </span>
            </div>
          ) : null}
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/15 via-primary/8 to-transparent" />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
