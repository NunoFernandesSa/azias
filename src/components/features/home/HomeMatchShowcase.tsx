import Link from "next/link";
import { JSX } from "react";
import { BiCalendar, BiMapPin, BiTimer } from "react-icons/bi";

import { Button } from "@/src/components/ui/button";
import { MATCHES } from "@/src/constants/data/calendar.constants";
import { TeamLogoAndName } from "../matches/TeamLogoAndName";
import {
  daysUntil,
  normalizeMatch,
  parseDateDDMMYYYY,
} from "../matches/match-utils";

export default function HomeMatchShowcase(): JSX.Element {
  const normalized = MATCHES.map(normalizeMatch)
    .filter((match): match is NonNullable<ReturnType<typeof normalizeMatch>> =>
      Boolean(match),
    )
    .sort((firstMatch, secondMatch) => {
      const firstDate = firstMatch.date
        ? parseDateDDMMYYYY(firstMatch.date)?.getTime()
        : null;
      const secondDate = secondMatch.date
        ? parseDateDDMMYYYY(secondMatch.date)?.getTime()
        : null;

      return (
        (firstDate ?? Number.MAX_SAFE_INTEGER) -
        (secondDate ?? Number.MAX_SAFE_INTEGER)
      );
    });

  const today = new Date();
  const normalizedToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const nextMatch =
    normalized.find((match) => {
      const parsedDate = match.date ? parseDateDDMMYYYY(match.date) : null;
      return parsedDate
        ? parsedDate.getTime() >= normalizedToday.getTime()
        : false;
    }) ??
    normalized[0] ??
    null;

  const parsedDate = nextMatch?.date ? parseDateDDMMYYYY(nextMatch.date) : null;
  const remainingDays = parsedDate ? daysUntil(parsedDate) : null;
  const countdownText =
    remainingDays === null || remainingDays < 0
      ? null
      : remainingDays === 0
        ? "É hoje"
        : remainingDays === 1
          ? "Falta 1 dia"
          : `Faltam ${remainingDays} dias`;

  const mapsHref = nextMatch?.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nextMatch.address)}`
    : null;

  return (
    <section
      aria-labelledby="home-next-match-title"
      className="border-y border-primary/10 bg-[linear-gradient(180deg,rgba(19,117,208,0.05)_0%,rgba(19,117,208,0.02)_100%)]"
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
            {countdownText ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1375d0]">
                {countdownText}
              </p>
            ) : null}
          </div>

          <p className="max-w-xl text-base leading-8 md:text-lg bg-primary/10 p-4 rounded-md">
            Acompanhe o próximo encontro da equipa com uma leitura clara e
            direta, pensada para dar destaque ao jogo, ao adversário e ao
            ambiente competitivo da temporada.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-sm px-7 w-full md:w-1/2"
            >
              <Link href="/calendario">Ver calendário</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center rounded-sm text-primary hover:bg-transparent hover:text-primary/80 px-7 w-full md:w-1/2"
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

        <div className="space-y-8 rounded-sm border border-[#1375d0]/20 bg-[#1375d0] p-6 text-white shadow-[0_24px_60px_rgba(19,117,208,0.18)] md:p-8">
          {nextMatch ? (
            <>
              <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                <TeamLogoAndName
                  teamLogo={nextMatch.home.logo}
                  teamName={nextMatch.home.name}
                />
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-black tracking-[0.3em] text-white/20 md:text-6xl">
                    VS
                  </span>
                </div>
                <TeamLogoAndName
                  teamLogo={nextMatch.away.logo}
                  teamName={nextMatch.away.name}
                />
              </div>

              <div className="grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-2">
                <div className="rounded-sm border border-white/12 bg-white/8 px-4 py-4 flex flex-col gap-3">
                  <div className="">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                      Data
                    </p>
                    <p className="mt-3 flex items-center text-base font-semibold text-white">
                      <BiCalendar className="mr-2" />
                      {nextMatch.date || "Por confirmar"}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                      Hora
                    </p>
                    <p className="mt-3 flex items-center text-base font-semibold text-white">
                      <BiTimer className="mr-2" />
                      {nextMatch.hour ? `${nextMatch.hour}H` : "Por confirmar"}
                    </p>
                  </div>
                </div>

                <div className="rounded-sm border border-white/12 bg-white/8 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                    Local
                  </p>
                  <p className="mt-3 flex items-start text-base font-semibold text-white">
                    <BiMapPin className="mr-2 mt-0.5 shrink-0" />
                    {mapsHref ? (
                      <a
                        href={mapsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-opacity hover:opacity-80 hover:underline"
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
            <p className="text-base leading-7 text-white/80">
              Ainda não existe nenhum jogo planeado no calendário.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
