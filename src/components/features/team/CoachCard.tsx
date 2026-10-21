import Image from "next/image";
import { JSX } from "react";

import { cn } from "@/lib/utils";
import { CoachProps } from "@/src/types/team-props";

export default function CoachCard({
  imageUrl,
  name,
  age,
  className,
}: CoachProps): JSX.Element {
  return (
    <article
      className={cn(
        "group relative isolate border-b border-primary/10 pb-5 text-primary transition-all duration-300",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-primary/10 bg-muted/30">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/82 via-primary/18 to-transparent" />

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

      <div className="relative z-10 space-y-4 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/65 sm:text-[11px]">
              Staff técnico
            </p>
            <h3 className="mt-2 break-words text-lg font-bold leading-tight tracking-tight text-primary md:text-xl">
              {name}
            </h3>
          </div>

          {age ? (
            <span className="shrink-0 border border-primary/10 px-3 py-1 text-[11px] font-semibold text-primary/75 sm:text-xs">
              {age} anos
            </span>
          ) : null}
        </div>

        <div className="border-t border-primary/10 pt-4">
          <span className="inline-flex items-center border border-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/75">
            Treinador
          </span>
        </div>
      </div>
    </article>
  );
}
