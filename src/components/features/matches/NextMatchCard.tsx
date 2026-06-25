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
import { aziasFC, calendar } from "@/src/constants/constants";

type NormalizedMatch = {
  date?: string;
  hour?: string;
  address?: string;
  home: { name: string; logo: string };
  away: { name: string; logo: string };
};

function parseDateDDMMYYYY(value: string): Date | null {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return null;

  const [dayRaw, monthRaw, yearRaw] = value.split("/");
  const day = Number(dayRaw);
  const month = Number(monthRaw);
  const year = Number(yearRaw);

  if (
    !Number.isFinite(day) ||
    !Number.isFinite(month) ||
    !Number.isFinite(year)
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  if (Number.isNaN(date.getTime())) return null;

  return date;
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysUntil(target: Date, now = new Date()): number {
  const diffMs = startOfDay(target).getTime() - startOfDay(now).getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function normalizeMatch(
  item: (typeof calendar)[number],
): NormalizedMatch | null {
  if (!item) return null;

  if ("opposingTeam" in item) {
    const playAtHome = Boolean(item.playAtHome);
    const opponent = {
      name: item.opposingTeam,
      logo: item.opposingTeamLogo,
    };

    return {
      date: item.date,
      hour: item.hour,
      address: item.address,
      home: playAtHome
        ? { name: aziasFC.name, logo: aziasFC.logo }
        : { name: opponent.name ?? "", logo: opponent.logo ?? "" },
      away: playAtHome
        ? { name: opponent.name ?? "", logo: opponent.logo ?? "" }
        : { name: aziasFC.name, logo: aziasFC.logo },
    };
  }

  if ("team" in item && item.team) {
    return {
      date: item.match?.date,
      hour: item.match?.hour,
      address: item.match?.address,
      home: {
        name: item.team.teamPlayingAtHome,
        logo: item.team.teamPlayingAtHomeLogo,
      },
      away: {
        name: item.team.teamPlayingAway,
        logo: item.team.teamPlayingAwayLogo,
      },
    };
  }

  return null;
}

export default function NextMatchCard(): JSX.Element {
  const normalized = calendar.map(normalizeMatch);
  const nextMatch = normalized[0] ?? null;

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
      className={
        "relative isolate bg-gradient-to-r from-primary to-primary/70 rounded-lg text-primary-foreground"
      }
    >
      <Image
        src="/images/background-images/bg-match-card.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        fill
        sizes="(max-width: 1280px) 100vw, 50vw"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg bg-primary/85"
      />

      <CardHeader className="relative z-10">
        <CardTitle className="flex flex-col gap-2">
          <h2 id="next-match-title" className="text-3xl font-bold">
            Próximo Jogo
          </h2>
          {countdownText ? (
            <p className="text-secondary text-md">🕒 {countdownText}</p>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        {nextMatch ? (
          <>
            <div className="flex items-center justify-center gap-3 lg:gap-6">
              <TeamLogoAndName
                teamLogo={nextMatch.home.logo}
                teamName={nextMatch.home.name}
              />
              <span
                className="text-xl lg:text-4xl font-bold text-secondary"
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
              <div className="flex flex-col mt-12 gap-3">
                {nextMatch.date ? (
                  <p className="flex items-center">
                    <FaRegCalendarAlt className="mr-2" />
                    {isoDate ? (
                      <time dateTime={isoDate}>{nextMatch.date}</time>
                    ) : (
                      nextMatch.date
                    )}
                  </p>
                ) : null}

                {nextMatch.hour ? (
                  <p className="flex items-center">
                    <BiTimer className="mr-2" /> {nextMatch.hour}H
                  </p>
                ) : null}

                {nextMatch.address ? (
                  <p className="flex items-center">
                    <BiMapPin className="mr-2" />
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <Button asChild variant={"secondary"} className="w-full md:w-1/2">
            <Link href="/calendario">Consultar calendário</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="w-full md:w-1/2 bg-transparent hover:bg-white/80 text-primary-foreground hover:text-primary"
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
