// ---------- React/Next ----------
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import SponsorLogoCard from "./SponsorLogoCard";

// ---------- constants ----------
import { sponsors } from "@/src/constants/constants";

/**
 * Displays a responsive card with a gradient background color, a title, a content section
 * with a description and a call to action, and a footer section with sponsor logos.
 *
 * The component is responsive and has a rounded corners.
 * The content section has a title, a description and a call to action
 * with a button to become a sponsor.
 * The footer section displays sponsor logos in a responsive grid.
 *
 * @returns {JSX.Element} A JSX element representing the SponsorsComponent.
 */
export default function SponsorsComponent(): JSX.Element {
  const sponsorCount = sponsors.length;
  const linkedSponsorCount = sponsors.filter((sponsor) =>
    sponsor.website.startsWith("http"),
  ).length;

  return (
    <Card
      aria-labelledby="sponsors-title"
      className="relative isolate overflow-hidden rounded-2xl border-primary/15 bg-gradient-to-br from-primary to-primary/75 text-primary-foreground shadow-xl shadow-primary/10"
    >
      <Image
        src="/images/background/bg-match-card.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        sizes="(max-width: 1280px) 100vw, 1200px"
        priority
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/72" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_30%)]"
      />

      <CardHeader className="relative z-10 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
            Parceiros do clube
          </span>
          <span className="inline-flex items-center rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1 text-sm font-semibold text-secondary">
            {sponsorCount} patrocinadores
          </span>
        </div>
        <CardTitle className="space-y-4">
          <h2 id="sponsors-title" className="text-3xl md:text-4xl font-bold">
            Obrigado a quem acredita na A.D. Azias
          </h2>
          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-primary-foreground/85">
            Cada parceiro ajuda o clube a crescer, a representar melhor a nossa
            comunidade e a continuar a investir no futebol local com ambição.
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-base md:text-lg font-medium leading-8 text-primary-foreground/90">
              Os nossos patrocinadores são parceiros essenciais da A.D. Azias.
              Graças ao seu apoio, o clube continua a crescer com estabilidade,
              promovendo valores de paixão, respeito e união.
            </p>
            <p className="text-base md:text-lg font-medium leading-8 text-primary-foreground/90">
              Mais do que visibilidade, esta parceria representa confiança
              mútua, compromisso com o território e vontade de construir algo
              duradouro à volta do futebol local.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Impacto local
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Mais apoio ao clube, à comunidade e ao desenvolvimento do
                futebol local.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Presença digital
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {linkedSponsorCount} parceiros já têm ligação direta disponível
                na secção.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm md:text-base font-medium text-primary-foreground/80">
            Quer dar visibilidade à sua empresa e apoiar o futebol local?
          </p>

          <Button
            asChild
            variant={"secondary"}
            size={"lg"}
            className="w-full sm:w-auto"
          >
            <Link href="/contacto">Torne-se patrocinador</Link>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 mb-2 block">
        <div className="rounded-2xl border border-white/10 bg-white/8 p-4 sm:p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Os nossos parceiros
            </p>
            <p className="text-sm text-primary-foreground/70">
              Clique nos logos com ligação
            </p>
          </div>

          <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <SponsorLogoCard
                key={sponsor.id}
                id={sponsor.id}
                name={sponsor.name}
                logo={sponsor.logo}
                website={sponsor.website}
              />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
