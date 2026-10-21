import { aziasFC, calendar } from "@/src/constants/constants";
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
  const nextMatch = matches.find((match) => {
    const parsedDate = parseDate(match.date);
    if (!parsedDate) return false;

    const today = new Date();
    const normalizedToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    return parsedDate.getTime() >= normalizedToday.getTime();
  });
  const latestResult = [...matches].reverse().find((match) => match.isPlayed);
  const seasonOverview = [
    { label: "Jogos da época", value: matches.length },
    { label: "Encontros em casa", value: homeMatches },
    { label: "Encontros fora", value: awayMatches },
    { label: "Jogos disputados", value: playedMatches },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Leitura da época
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Uma visão clara da temporada, jornada após jornada.
          </h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            O calendário passa a funcionar como uma lista editorial, mais
            legível e mais próxima da identidade de um site de clube real.
          </p>
        </div>

        <div className="space-y-5 border-t border-primary/10 pt-6">
          {seasonOverview.map((item) => (
            <div
              key={item.label}
              className="flex items-end justify-between border-b border-primary/8 pb-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </p>
              <p className="text-3xl font-bold tracking-tight text-primary">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-5 border-t border-primary/10 pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
              Próximo desafio
            </p>
            <p className="mt-2 text-lg font-bold text-primary">
              {nextMatch
                ? `${nextMatch.homeTeam} vs ${nextMatch.awayTeam}`
                : "Ainda por definir"}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {nextMatch
                ? `${formatDate(nextMatch.date)}${nextMatch.hour ? ` às ${nextMatch.hour}` : ""}`
                : "Sem data confirmada neste momento."}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
              Último resultado
            </p>
            <p className="mt-2 text-lg font-bold text-primary">
              {latestResult
                ? `${latestResult.homeTeam} ${getScoreLabel(latestResult)} ${latestResult.awayTeam}`
                : "Ainda sem resultados registados"}
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {latestResult
                ? `${formatDate(latestResult.date)} · ${latestResult.championship}`
                : "Os resultados irão aparecer assim que os jogos forem disputados."}
            </p>
          </div>
        </div>
      </aside>

      <div className="border-t border-primary/10 lg:border-l lg:border-t-0 lg:pl-10">
        {matches.map((match, index) => (
          <article
            key={match.id}
            className={`grid gap-5 border-b border-primary/10 py-7 md:grid-cols-[9.5rem_1fr] md:gap-8 ${
              index === 0 ? "pt-0" : ""
            }`}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                Jornada {match.jornada}
              </p>
              <p className="text-2xl font-bold leading-tight tracking-tight text-primary">
                {formatDate(match.date)}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {match.hour ? `${match.hour}H` : "Hora por definir"}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <BiTrophy />
                  {match.championship}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {getVenueLabel(match.isHome)}
                </span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <p className="text-xl font-bold tracking-tight text-primary lg:text-2xl">
                  {match.homeTeam}
                </p>

                <div className="flex items-center justify-start lg:justify-center">
                  <span className="border-b border-primary/25 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-primary">
                    {getScoreLabel(match)}
                  </span>
                </div>

                <p className="text-xl font-bold tracking-tight text-primary lg:text-2xl lg:text-right">
                  {match.awayTeam}
                </p>
              </div>

              <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-[1fr_auto] md:items-start">
                <p className="flex items-start">
                  <BiMapPin className="mr-2 mt-0.5 shrink-0 text-primary" />
                  <span>{match.address || "Local por definir"}</span>
                </p>
                <p className="flex items-center text-primary/75">
                  <BiCalendar className="mr-2" />
                  {match.isPlayed ? "Resultado registado" : "Jogo agendado"}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
