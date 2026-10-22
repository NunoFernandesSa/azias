// ---------- React/Next ----------
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
// ---------- components ----------
import { TeamLogoAndName } from "./TeamLogoAndName";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
// ---------- icons ----------
import { BiMapPin, BiTimer } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
// ---------- constants ----------
import { MATCHES } from "@/src/constants/data/teams.constants";
import { daysUntil, normalizeMatch, parseDateDDMMYYYY } from "./match-utils";

export default function NextMatchCard(): JSX.Element {
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

  const isoDate = parsedDate
    ? `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, "0")}-${String(parsedDate.getDate()).padStart(2, "0")}`
    : null;

  const hasInfo = Boolean(
    nextMatch?.date || nextMatch?.hour || nextMatch?.address,
  );
  const mapsHref = nextMatch?.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nextMatch.address)}`
    : null;

  return (
    <Card
      aria-labelledby="next-match-title"
      className="relative isolate overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary via-primary to-primary/80 py-0 text-primary-foreground shadow-xl shadow-primary/10"
    >
      <Image
        src="/images/background-images/bg-match-card.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fill
        sizes="(max-width: 1280px) 100vw, 50vw"
        priority
      />
      <div aria-hidden="true" className="absolute inset-0 bg-primary/80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_24%)]"
      />

      <CardHeader className="relative z-10 gap-4">
        <CardTitle className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
            Próximo jogo
          </span>
          <h2 id="next-match-title" className="text-3xl font-bold md:text-4xl">
            Próximo Jogo
          </h2>
          {countdownText ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              {countdownText}
            </p>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 space-y-8">
        {nextMatch ? (
          <>
            <div className="grid items-center gap-4 rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm md:grid-cols-[1fr_auto_1fr]">
              <TeamLogoAndName
                teamLogo={nextMatch.home.logo}
                teamName={nextMatch.home.name}
              />
              <span
                className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl font-bold text-secondary lg:text-2xl"
                aria-hidden="true"
              >
                X
              </span>
              <span className="sr-only">vs</span>
              <TeamLogoAndName
                teamLogo={nextMatch.away.logo}
                teamName={nextMatch.away.name}
              />
            </div>

            {hasInfo ? (
              <div className="grid gap-3 md:grid-cols-3">
                {nextMatch.date ? (
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      Data
                    </p>
                    <p className="mt-3 flex items-center text-base font-semibold text-white">
                      <FaRegCalendarAlt className="mr-2" />
                      {isoDate ? (
                        <time dateTime={isoDate}>{nextMatch.date}</time>
                      ) : (
                        nextMatch.date
                      )}
                    </p>
                  </div>
                ) : null}

                {nextMatch.hour ? (
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      Hora
                    </p>
                    <p className="mt-3 flex items-center text-base font-semibold text-white">
                      <BiTimer className="mr-2" />
                      {nextMatch.hour}H
                    </p>
                  </div>
                ) : null}

                {nextMatch.address ? (
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur-sm md:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      Local
                    </p>
                    <p className="mt-3 flex items-start text-base font-semibold text-white">
                      <BiMapPin className="mr-2 mt-0.5 shrink-0" />
                      {mapsHref ? (
                        <a
                          href={mapsHref}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {nextMatch.address}
                        </a>
                      ) : (
                        nextMatch.address
                      )}
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </>
        ) : (
          <p className="text-center text-primary-foreground/90">
            Nenhum jogo planeado no calendário.
          </p>
        )}
      </CardContent>
      <CardFooter className="relative z-10">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <Button
            asChild
            variant={"secondary"}
            size="lg"
            className="w-full rounded-full md:w-1/2"
          >
            <Link href="/calendario">Consultar calendário</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            size="lg"
            className="w-full rounded-full border-white/20 bg-white/8 text-primary-foreground hover:bg-white hover:text-primary md:w-1/2"
          >
            <Link
              href="https://desporto.inatel.pt/pt/tournament/1322383/ranking"
              target="_blank"
              rel="noreferrer"
            >
              Consultar classificação
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
