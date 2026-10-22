import { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageIntroStat = {
  label: string;
  value: string | number;
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: PageIntroStat[];
  aside?: ReactNode;
  className?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  stats = [],
  className,
}: PageIntroProps): JSX.Element {
  return (
    <section
      className={cn("border-b border-primary/10 pb-10 md:pb-12", className)}
    >
      <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-14">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
            {eyebrow}
          </p>

          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>

      {stats.length > 0 ? (
        <div className="mt-10 grid gap-5 border-t border-primary/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="grid gap-2">
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
