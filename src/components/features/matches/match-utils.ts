import { TEAMS } from "@/src/constants/data/teams.constants";
import { Match } from "@/src/constants/data/types";

const FALLBACK_LOGO = "/images/logo-ada.jpg";

export type NormalizedMatch = {
  date?: string;
  hour?: string;
  address?: string;
  home: { name: string; logo: string };
  away: { name: string; logo: string };
};

export function parseDateDDMMYYYY(value: string): Date | null {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [yearRaw, monthRaw, dayRaw] = value.split("-");
    const day = Number(dayRaw);
    const month = Number(monthRaw);
    const year = Number(yearRaw);

    const date = new Date(year, month - 1, day);
    return Number.isNaN(date.getTime()) ? null : date;
  }

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

function formatDisplayDate(
  value: string | null | undefined,
): string | undefined {
  if (!value) return undefined;

  const parsed = parseDateDDMMYYYY(value);
  if (!parsed) return value;

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsed);
}

function formatDisplayTime(
  value: string | null | undefined,
): string | undefined {
  if (!value) return undefined;
  return value.slice(0, 5);
}

export function normalizeMatch(item: Match): NormalizedMatch | null {
  if (!item) return null;

  return {
    date: formatDisplayDate(item.date),
    hour: formatDisplayTime(item.time),
    address: item.venue ? `${item.venue.name}, ${item.venue.city}` : undefined,
    home: {
      name: item.homeTeam.name,
      logo: item.homeTeam.logo?.url ?? FALLBACK_LOGO,
    },
    away: {
      name: item.awayTeam.name,
      logo:
        item.awayTeam.logo?.url ??
        (item.awayTeam.documentId === TEAMS.azias.documentId
          ? (TEAMS.azias.logo?.url ?? FALLBACK_LOGO)
          : FALLBACK_LOGO),
    },
  };
}
