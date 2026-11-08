import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { Button } from "@/src/components/ui/button";
import { SPONSORS } from "@/src/constants/data/sponsors.constants";

const visibleSponsors = SPONSORS.filter(
  (sponsor) => sponsor.name.trim().length > 0 || sponsor.logo !== ".",
);

export default function HomeSponsorsSection(): JSX.Element {
  return (
    <section
      aria-labelledby="home-sponsors-title"
      className="space-y-12 border-y border-primary/10 py-16 md:space-y-14 md:py-20"
    >
      <div className="flex flex-col gap-10 border-b border-primary/8 pb-10 lg:gap-14 lg:pb-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Sponsors
          </p>
          <h2
            id="home-sponsors-title"
            className="max-w-3xl text-3xl font-bold tracking-tight text-primary md:text-5xl"
          >
            Parceiros que ajudam o clube a crescer com mais consistência e mais
            presença.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 border-b border-primary/8 pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Rede de apoio local
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/40">
              {visibleSponsors.length} parceiros
            </p>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Cada parceiro reforça a ligação do clube ao território, ajuda a
            sustentar a época e contribui para uma imagem mais sólida dentro e
            fora de campo.
          </p>

          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-sm px-6 py-4"
          >
            <Link href="/contacto">Tornar-se patrocinador</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-8 border-t border-primary/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pt-12">
        {visibleSponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex min-h-[18rem] flex-col justify-between border border-primary/8 bg-card px-5 py-5 sm:min-h-[19rem] lg:min-h-[20rem] lg:px-6 lg:py-6"
          >
            <div className="flex min-h-[8.5rem] w-full items-center justify-center border-b border-primary/8 pb-6 lg:min-h-[10rem] lg:pb-7">
              {sponsor.logo !== "." ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={420}
                  height={160}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 24vw"
                  className="h-auto max-h-28 w-full object-contain object-center lg:max-h-32"
                />
              ) : (
                <span className="text-center text-xl font-semibold text-primary">
                  {sponsor.name}
                </span>
              )}
            </div>

            <div className="space-y-3 pt-5">
              <p className="text-base font-semibold text-primary">
                {sponsor.name || "Parceiro local"}
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                Presença local, apoio ao clube e valorização do futebol amador.
              </p>

              {sponsor.website ? (
                <Link
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex pt-1 text-sm font-semibold text-[#1375d0] hover:underline"
                >
                  Visitar
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
