import { aziasFC, calendar } from "@/src/constants/constants";

export type NormalizedMatch = {
  date?: string;
  hour?: string;
  address?: string;
  home: { name: string; logo: string };
  away: { name: string; logo: string };
};

export function parseDateDDMMYYYY(value: string): Date | null {
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

export function daysUntil(target: Date, now = new Date()): number {
  const diffMs = startOfDay(target).getTime() - startOfDay(now).getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function normalizeMatch(
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
