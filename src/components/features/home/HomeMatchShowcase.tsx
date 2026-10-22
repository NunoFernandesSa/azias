import Link from "next/link";
import { JSX } from "react";
import { BiCalendar, BiMapPin, BiTimer } from "react-icons/bi";

import { Button } from "@/src/components/ui/button";
import { calendar } from "@/src/constants/constants";
import { TeamLogoAndName } from "../matches/TeamLogoAndName";
import {
  daysUntil,
  normalizeMatch,
  parseDateDDMMYYYY,
} from "../matches/match-utils";

export default function HomeMatchShowcase(): JSX.Element {
  const normalized = calendar.map(normalizeMatch);
  const nextMatch = normalized[0] ?? null;
  const parsedDate = nextMatch?.date ? parseDateDDMMYYYY(nextMatch.date) : null;
  const remainingDays = parsedDate ? daysUntil(parsedDate) : null;
  const countdownText =
    remainingDays === null || remainingDays < 0
      ? "Data a confirmar"
      : remainingDays === 0
        ? "Joga-se hoje"
        : remainingDays === 1
          ? "Falta 1 dia"
          : `Faltam ${remainingDays} dias`;
  const mapsHref = nextMatch?.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nextMatch.address)}`
    : null;

  return (
    <section
      aria-labelledby="home-next-match-title"
      className="border-y border-primary/10 bg-background"
    >
      <div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Próximo jogo
            </p>
            <h2
              id="home-next-match-title"
              className="text-3xl font-bold tracking-tight text-primary md:text-5xl"
            >
              O próximo encontro da A.D. Azias
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            Acompanhe o próximo encontro da equipa com uma leitura clara e
            direta, pensada para dar destaque ao jogo, ao adversário e ao
            ambiente competitivo da temporada.
          </p>

          <div className="space-y-4 border-l border-primary/12 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {countdownText}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              Consulte o calendário completo, os horários e a classificação
              oficial para acompanhar a temporada jornada após jornada.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-sm px-7">
              <Link href="/calendario">Ver calendário</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="justify-start rounded-sm px-0 text-primary hover:bg-transparent hover:text-primary/80"
            >
              <Link
                href="https://desporto.inatel.pt/pt/tournament/1340858/ranking"
                target="_blank"
                rel="noreferrer"
              >
                Ver classificação
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8 border-t border-primary/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {nextMatch ? (
            <>
              <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                <TeamLogoAndName
                  teamLogo={nextMatch.home.logo}
                  teamName={nextMatch.home.name}
                />
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-black tracking-[0.3em] text-primary/25 md:text-6xl">
                    VS
                  </span>
                </div>
                <TeamLogoAndName
                  teamLogo={nextMatch.away.logo}
                  teamName={nextMatch.away.name}
                />
              </div>

              <div className="grid gap-4 border-t border-primary/10 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                    Data
                  </p>
                  <p className="mt-3 flex items-center text-base font-semibold text-primary">
                    <BiCalendar className="mr-2" />
                    {nextMatch.date || "Por confirmar"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                    Hora
                  </p>
                  <p className="mt-3 flex items-center text-base font-semibold text-primary">
                    <BiTimer className="mr-2" />
                    {nextMatch.hour ? `${nextMatch.hour}H` : "Por confirmar"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                    Local
                  </p>
                  <p className="mt-3 flex items-start text-base font-semibold text-primary">
                    <BiMapPin className="mr-2 mt-0.5 shrink-0" />
                    {mapsHref ? (
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {nextMatch.address || "Por confirmar"}
                      </a>
                    ) : (
                      nextMatch.address || "Por confirmar"
                    )}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-base leading-7 text-muted-foreground">
              Ainda não existe nenhum jogo planeado no calendário.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
