// ---------- React/Next ----------
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
import { Card, CardContent } from "../../ui/card";
import CaptainBadge from "./CaptainBadge";

// ---------- Types ----------
import { PlayerProps } from "@/src/types/team-props";

// ---------- Utils ----------
import { cn } from "@/lib/utils";

/**
 * A card component for a player.
 * @param {string} imageUrl - image URL of the player
 * @param {string} props.name - name of the player
 * @param {number} props.age - age of the player
 * @param {boolean} props.isCaptain - whether the player is the captain or not
 * @param {object} props.stats - additional stats of the player
 * @param {string} props.className - additional CSS classes for the component
 * @returns {JSX.Element} - the player card component
 */
export default function PlayerCard({
  imageUrl,
  name,
  number,
  age,
  isCaptain,
  stats,
  className,
}: PlayerProps): JSX.Element {
  const hasNumber = typeof number === "number" && number > 0;
  const statItems = [
    { label: "Jogos", value: stats?.matches },
    { label: "Golos", value: stats?.goals },
    { label: "Assist.", value: stats?.assists },
  ].filter((item) => item.value !== undefined);

  return (
    <Card
      className={cn(
        "group relative isolate overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-b from-primary to-primary/90 py-0 text-primary-foreground shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-2xl hover:shadow-primary/15",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.12),_transparent_24%)]"
      />

      {/* ----- Captain badge ----- */}
      {isCaptain && <CaptainBadge />}

      {hasNumber ? (
        <div className="absolute left-3 top-3 z-20">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-primary/80 text-lg font-bold text-white shadow-lg shadow-primary/20 backdrop-blur-sm">
            {number}
          </div>
        </div>
      ) : null}

      {/* ----- Container image ----- */}
      <div className="relative min-h-64 w-full overflow-hidden">
        {/* ----- Gradient overlay ----- */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        {/* ----- Player image ----- */}
        <Image
          src={imageUrl}
          alt={name}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={480}
          height={640}
        />
      </div>

      {/* ----- Content ----- */}
      <CardContent className="relative z-10 px-4 pb-4 pt-4">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
              Plantel
            </p>
            <h3 className="mt-1 truncate text-base font-bold tracking-tight md:text-lg">
              {name}
            </h3>
          </div>

          {age ? (
            <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-primary-foreground/85">
              {age} anos
            </span>
          ) : null}
        </div>

        {statItems.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/8 px-2 py-3 text-center backdrop-blur-sm"
              >
                <div className="text-xl font-bold text-white md:text-2xl">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
