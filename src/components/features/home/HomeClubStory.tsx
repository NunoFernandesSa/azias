import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { Button } from "@/src/components/ui/button";

const pillars = [
  {
    id: "01",
    title: "Raiz local assumida",
    description:
      "Um clube ligado ao território, às pessoas de Azias e à energia que existe à volta de cada jogo.",
  },
  {
    id: "02",
    title: "Competição com ambição",
    description:
      "A vontade de competir bem, crescer época após época e representar o clube com exigência em campo.",
  },
  {
    id: "03",
    title: "Imagem à altura do clube",
    description:
      "Uma presença digital mais clara, mais moderna e mais credível para valorizar equipa, parceiros e adeptos.",
  },
];

export default function HomeClubStory(): JSX.Element {
  return (
    <section
      aria-labelledby="home-club-story-title"
      className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
    >
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Identidade do clube
        </p>

        <h2
          id="home-club-story-title"
          className="max-w-2xl text-3xl font-bold tracking-tight text-primary md:text-5xl"
        >
          Um clube amador com uma presença mais sóbria, mais forte e mais
          credível.
        </h2>

        <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          A A.D. Azias não se resume a um calendário ou a uma lista de
          jogadores. É uma identidade, uma comunidade e uma ambição coletiva que
          merecem estar presentes em cada detalhe do site.
        </p>

        <div className="space-y-5 border-t border-primary/10 pt-6">
          <div className="flex items-center justify-between gap-4 border-b border-primary/8 pb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              O que define o clube
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/40">
              3 pilares
            </p>
          </div>

          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="grid gap-4 border-b border-primary/8 pb-5 md:grid-cols-[72px_1fr]"
            >
              <div className="flex items-start">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1375d0]">
                  {pillar.id}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-primary">
                  {pillar.title}
                </p>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="rounded-sm px-7">
          <Link href="/equipa">Descobrir a equipa</Link>
        </Button>
      </div>

      <div className="relative min-h-[420px] overflow-hidden border border-primary/10">
        <Image
          src="/images/background-images/players_bg.jpeg"
          alt="Jogadores da A.D. Azias em campo"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#102033]/82 via-[#102033]/34 to-transparent"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="max-w-lg border-t border-white/20 pt-5 text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
              A nossa direção
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Construir uma imagem digital à altura do clube.
            </p>
            <p className="mt-3 text-sm leading-7 text-primary-foreground/80 md:text-base">
              Um visual mais editorial, mais respirado e mais afirmado ajuda o
              site a representar melhor a equipa, os parceiros e o território.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
