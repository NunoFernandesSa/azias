import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { Button } from "@/src/components/ui/button";
import { sponsors } from "@/src/constants/data/sponsors.constants";

const visibleSponsors = sponsors.filter(
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
            className="flex min-h-52 flex-col justify-between border border-primary/8 bg-card px-6 py-7 sm:min-h-56 lg:min-h-64 lg:px-7 lg:py-8"
          >
            <div className="flex min-h-24 w-full items-center lg:min-h-28">
              {sponsor.logo !== "." ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name || "Sponsor da A.D. Azias"}
                  width={320}
                  height={120}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
                  className="h-auto max-h-20 w-full object-contain object-left grayscale transition duration-300 hover:grayscale-0 lg:max-h-24"
                />
              ) : (
                <span className="text-xl font-semibold text-primary">
                  {sponsor.name}
                </span>
              )}
            </div>

            <div className="space-y-3 pt-6">
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
