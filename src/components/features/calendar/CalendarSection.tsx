import { aziasFC, calendar } from "@/src/constants/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { BiCalendar, BiMapPin, BiTrophy } from "react-icons/bi";
import { JSX } from "react";

type CalendarMatch = {
  id: number;
  championship: string;
  jornada: number;
  date: string;
  hour: string;
  address: string;
  homeTeam: string;
  awayTeam: string;
  isHome: boolean | null;
  homeScore: number | null;
  awayScore: number | null;
  isPlayed: boolean;
};

function parseDate(value: string): Date | null {
  if (!value) return null;

  const strictMatch = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (strictMatch) {
    const [, day, month, year] = strictMatch;
    const parsed = new Date(Number(year), Number(month) - 1, Number(day));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value: string): string {
  const parsed = parseDate(value);
  if (!parsed) return value || "Data por definir";

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function normalizeCalendarItem(item: (typeof calendar)[number]): CalendarMatch {
  if ("opposingTeam" in item) {
    return {
      id: item.id,
      championship: item.championship || "",
      jornada: item.jornada ?? 0,
      date: item.date || "",
      hour: item.hour || "",
      address: item.address || "",
      homeTeam: item.playAtHome ? aziasFC.name : item.opposingTeam || "",
      awayTeam: item.playAtHome ? item.opposingTeam || "" : aziasFC.name,
      isHome: item.playAtHome === null ? null : Boolean(item.playAtHome),
      homeScore: item.playAtHome
        ? (item.scores.aziasFCScore ?? null)
        : (item.scores?.opposingTeamScore ?? null),
      awayScore: item.playAtHome
        ? (item.scores?.opposingTeamScore ?? null)
        : (item.scores?.aziasFCScore ?? null),
      isPlayed:
        item.scores?.aziasFCScore !== null &&
        item.scores?.opposingTeamScore !== null,
    };
  }

  return {
    id: item.id,
    championship: item.match.championship,
    jornada: item.match.jornada,
    date: item.match.date,
    hour: item.match.hour,
    address: item.match.address,
    homeTeam: item.team.teamPlayingAtHome,
    awayTeam: item.team.teamPlayingAway,
    isHome:
      item.match.playAtHome === null ? null : Boolean(item.match.playAtHome),
    homeScore: item.results.teamPlayingAtHomeScore,
    awayScore: item.results.teamPlayingAwayScore,
    isPlayed:
      item.results.teamPlayingAtHomeScore !== null &&
      item.results.teamPlayingAwayScore !== null,
  };
}

function getVenueLabel(isHome: boolean | null): string {
  if (isHome === null) return "Local por definir";
  return isHome ? "Em casa" : "Fora";
}

function getScoreLabel(match: CalendarMatch): string {
  if (!match.isPlayed) return "Por disputar";
  return `${match.homeScore ?? "-"} - ${match.awayScore ?? "-"}`;
}

export default function CalendarSection(): JSX.Element {
  const matches = calendar.map(normalizeCalendarItem).sort((a, b) => {
    const dateA = parseDate(a.date)?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const dateB = parseDate(b.date)?.getTime() ?? Number.MAX_SAFE_INTEGER;
    return dateA - dateB;
  });

  const homeMatches = matches.filter((match) => match.isHome === true).length;
  const awayMatches = matches.filter((match) => match.isHome === false).length;
  const playedMatches = matches.filter((match) => match.isPlayed).length;

  return (
    <div className="space-y-8">
      <Card className="relative isolate overflow-hidden rounded-2xl border-primary/15 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_24%)]"
        />
        <CardHeader className="relative z-10 gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
            Calendário oficial
          </span>
          <CardTitle className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Acompanhe a temporada jogo a jogo
            </h2>
            <p className="max-w-3xl text-base md:text-lg leading-relaxed text-primary-foreground/85">
              Consulte os encontros da A.D. Azias, acompanhe os resultados e
              fique a par das jornadas da epoca com uma leitura mais clara e
              moderna.
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Jornadas
            </p>
            <p className="mt-3 text-3xl font-bold text-white">
              {matches.length}
            </p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Em casa
            </p>
            <p className="mt-3 text-3xl font-bold text-white">{homeMatches}</p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Fora
            </p>
            <p className="mt-3 text-3xl font-bold text-white">{awayMatches}</p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Já disputados
            </p>
            <p className="mt-3 text-3xl font-bold text-white">
              {playedMatches}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-primary/10 shadow-xl shadow-primary/5">
        <CardHeader className="gap-4">
          <CardTitle className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Calendário completo
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Uma visão mais legível e estruturada de todos os encontros da
              temporada.
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="rounded-2xl border border-primary/10 bg-gradient-to-r from-background to-muted/30 p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Jornada {match.jornada}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-primary">
                      <BiTrophy className="mr-2" />
                      {match.championship}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-primary/10 px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {getVenueLabel(match.isHome)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row md:items-center">
                    <p className="text-lg md:text-xl font-bold text-primary">
                      {match.homeTeam}
                    </p>
                    <div className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                      {getScoreLabel(match)}
                    </div>
                    <p className="text-lg md:text-xl font-bold text-primary">
                      {match.awayTeam}
                    </p>
                  </div>
                </div>

                <div className="grid gap-2 text-sm text-muted-foreground md:min-w-72">
                  <p className="flex items-center">
                    <BiCalendar className="mr-2 text-primary" />
                    {formatDate(match.date)}
                    {match.hour ? ` às ${match.hour}` : ""}
                  </p>
                  <p className="flex items-start">
                    <BiMapPin className="mr-2 mt-0.5 shrink-0 text-primary" />
                    <span>{match.address || "Local por definir"}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
