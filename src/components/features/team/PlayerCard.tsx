// ---------- React/Next ----------
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
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
    <article
      className={cn(
        "group relative isolate border-b border-primary/10 pb-5 text-primary transition-all duration-300",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-10 text-8xl font-black text-primary/8 transition-transform duration-500 group-hover:scale-110"
      >
        {hasNumber ? String(number).padStart(2, "0") : "00"}
      </div>

      {/* ----- Captain badge ----- */}
      {isCaptain && <CaptainBadge />}

      {hasNumber ? (
        <div className="absolute left-3 top-3 z-20">
          <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-primary/85 text-lg font-bold text-white shadow-lg shadow-primary/20 backdrop-blur-sm">
            {number}
          </div>
        </div>
      ) : null}

      {/* ----- Container image ----- */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-primary/10 bg-muted/30">
        {/* ----- Gradient overlay ----- */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/82 via-primary/18 to-transparent" />
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
      <div className="relative z-10 space-y-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/65 sm:text-[11px]">
              Plantel principal
            </p>
            <div className="mt-2 flex flex-col items-start gap-2">
              <h3 className="break-words text-lg font-bold leading-tight tracking-tight text-primary md:text-xl">
                {name}
              </h3>
            </div>
          </div>

          {age ? (
            <span className="shrink-0 border border-primary/10 px-3 py-1 text-[11px] font-semibold text-primary/75 sm:text-xs">
              {age} anos
            </span>
          ) : null}
        </div>

        {statItems.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 border-t border-primary/10 pt-4">
            {statItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[72px] flex-col justify-center text-left"
              >
                <div className="text-xl font-bold text-primary md:text-2xl">
                  {item.value}
                </div>
                <div className="mt-1 flex min-h-[24px] w-full items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground leading-tight sm:text-[11px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
