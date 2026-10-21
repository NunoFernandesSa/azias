import Image from "next/image";
import { JSX } from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "../../ui/card";
import { CoachProps } from "@/src/types/team-props";

export default function CoachCard({
  imageUrl,
  name,
  age,
  className,
}: CoachProps): JSX.Element {
  return (
    <Card
      className={cn(
        "group relative isolate overflow-hidden rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-primary via-primary to-primary/88 py-0 text-primary-foreground shadow-xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/35 hover:shadow-2xl hover:shadow-primary/15",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.10),_transparent_24%)]"
      />

      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

        <Image
          src={imageUrl}
          alt={name}
          width={480}
          height={640}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardContent className="relative z-10 space-y-4 border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary sm:text-[11px]">
              Staff técnico
            </p>
            <h3 className="mt-2 text-lg font-bold leading-tight tracking-tight break-words md:text-xl">
              {name}
            </h3>
          </div>

          {age ? (
            <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-primary-foreground/85 sm:text-xs">
              {age} anos
            </span>
          ) : null}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
            Treinador
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
