import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import { Button } from "../../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../../ui/card";

/**
 * A card component for the team.
 *
 * @returns {JSX.Element} - the team card component
 */
export default function TeamCard(): JSX.Element {
  const teamHighlights = [
    "Espírito de equipa",
    "Respeito",
    "Paixão local",
    "Campeonato INATEL",
  ];
  const clubPillars = [
    "Ambição competitiva",
    "Ligação à comunidade",
    "Imagem mais profissional",
  ];

  return (
    <Card
      aria-labelledby="team-card-title"
      className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-primary/10 bg-card py-0 shadow-xl shadow-primary/5"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(8,13,77,0.06),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.10),_transparent_22%)]"
      />

      <CardHeader className="relative z-10 gap-4 border-b border-primary/8 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-1.5 shadow-sm">
            <Image
              src="/images/logo-ada.jpg"
              alt="Logo da A.D. Azias"
              fill
              sizes="64px"
              className="rounded-[1.1rem] object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              ADN do clube
            </p>
            <h2
              id="team-card-title"
              className="mt-2 text-3xl font-bold tracking-tight text-primary"
            >
              A nossa equipa
            </h2>
          </div>
        </div>

        <CardTitle>
          <p className="text-base leading-7 text-muted-foreground">
            Um grupo unido, dedicado e pensado para representar Azias com mais
            consistência, ambição e credibilidade dentro e fora de campo.
          </p>
        </CardTitle>
      </CardHeader>

      <CardFooter className="relative z-10 flex flex-col items-start gap-6">
        <div
          className="grid w-full gap-3 sm:grid-cols-2"
          aria-label="Pontos fortes da equipa"
        >
          {teamHighlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-primary/10 bg-muted/40 px-4 py-3"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full rounded-[1.75rem] border border-primary/10 bg-primary px-5 py-5 text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            O que queremos transmitir
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {clubPillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-sm font-semibold text-white/90"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

        <Button
          asChild
          variant="secondary"
          size="lg"
          className="w-full rounded-full md:w-auto"
        >
          <Link href="/equipa">Ver plantel</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
