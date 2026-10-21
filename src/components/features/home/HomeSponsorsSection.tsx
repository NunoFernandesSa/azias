import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { Button } from "@/src/components/ui/button";
import { sponsors } from "@/src/constants/constants";

const visibleSponsors = sponsors.filter(
  (sponsor) => sponsor.name.trim().length > 0 || sponsor.logo !== ".",
);

export default function HomeSponsorsSection(): JSX.Element {
  return (
    <section
      aria-labelledby="home-sponsors-title"
      className="space-y-10 border-y border-primary/10 py-14 md:py-18"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Parceiros
          </p>
          <h2
            id="home-sponsors-title"
            className="text-3xl font-bold tracking-tight text-primary md:text-5xl"
          >
            As empresas e parceiros que acompanham a A.D. Azias.
          </h2>
        </div>

        <div className="space-y-5">
          <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Cada parceiro ajuda a dar mais força ao clube, à sua presença local
            e à ambição de continuar a fazer crescer o futebol amador em Azias.
          </p>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-sm px-0 text-primary hover:bg-transparent hover:text-primary/80"
          >
            <Link href="/contacto">Tornar-se patrocinador</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-8 border-t border-primary/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {visibleSponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex min-h-32 flex-col justify-between border-b border-primary/8 pb-5"
          >
            <div className="flex h-16 items-center">
              {sponsor.logo !== "." ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name || "Sponsor da A.D. Azias"}
                  width={160}
                  height={72}
                  sizes="160px"
                  className="h-auto max-h-14 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                />
              ) : (
                <span className="text-lg font-semibold text-primary">
                  {sponsor.name}
                </span>
              )}
            </div>

            <div className="pt-4">
              <p className="text-sm font-semibold text-primary">
                {sponsor.name || "Parceiro local"}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Presença local, apoio ao clube e valorização do futebol amador.
              </p>

              {sponsor.website ? (
                <Link
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
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
