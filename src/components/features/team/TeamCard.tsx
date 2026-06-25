import { Card, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { JSX } from "react";

/**
 * A card component for the team.
 *
 * @returns {JSX.Element} - the team card component
 */
export default function TeamCard(): JSX.Element {
  const bgImage = "/images/hero/hero-img.jpg";
  const teamHighlights = [
    "Espírito de equipa",
    "Respeito",
    "Paixão local",
    "Campeonato INATEL",
  ];

  return (
    <Card
      aria-labelledby="team-card-title"
      className={
        "relative isolate bg-gradient-to-r from-primary to-primary/70 rounded-lg text-primary-foreground flex flex-col h-full justify-between"
      }
    >
      <Image
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        fill
        sizes="(max-width: 1280px) 100vw, 50vw"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg bg-primary/80"
      />

      <CardHeader className="relative z-10">
        <CardTitle className="flex flex-col gap-2">
          <h2 id="team-card-title" className="text-3xl font-bold">
            A nossa equipa
          </h2>
          <p className="text-secondary text-md">
            Um grupo unido, dedicado e apaixonado.
          </p>
        </CardTitle>
      </CardHeader>

      <CardFooter className="relative z-10 flex flex-col items-start gap-5">
        <ul className="w-full space-y-3" aria-label="Pontos fortes da equipa">
          {teamHighlights.map((highlight) => (
            <li
              key={highlight}
              className="text-xl md:text-2xl font-bold flex items-center gap-2"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-2 rounded-full bg-secondary"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Button asChild variant={"secondary"} className="w-full md:w-1/2">
          <Link href="/equipa">Ver plantel</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
