export interface StrapiMedia {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
}

export interface Team {
  documentId: string;
  name: string;
  slug: string; // "azias", "rebordoes"
  shortName?: string | null;
  logo?: StrapiMedia | null;
}

export interface Venue {
  documentId: string;
  name: string;
  city: string;
  mapsQuery?: string | null;
}

export interface Competition {
  documentId: string;
  name: string; // "Liga INATEL", "Taça"
  slug: string; // "liga-inatel", "taca"
}

export type MatchStatus = "scheduled" | "played" | "postponed";

export interface Match {
  documentId: string;
  round: string; // "Jornada 3", "Oitavos de final"
  roundNumber?: number | null; // seulement pour la ligue
  date?: string | null; // "2025-11-09"
  time?: string | null; // Strapi renvoie "15:00:00.000"
  status: MatchStatus;
  homeScore?: number | null;
  awayScore?: number | null;
  homeTeam: Team; // relation
  awayTeam: Team; // relation
  venue?: Venue | null; // relation
  competition: Competition; // relation
}
