import { Competition, Match, Team, Venue } from "./types";

export const TEAMS = {
  azias: {
    documentId: "t-azias",
    name: "A.D. Azias",
    slug: "azias",
    shortName: "Azias",
    logo: { url: "/images/logo-ada.jpg", alternativeText: "Logo A.D. Azias" },
  },
  rebordoes: {
    documentId: "t-rebordoes",
    name: "A.D.C. Rebordões",
    slug: "rebordoes",
    shortName: "Rebordões",
    logo: {
      url: "/images/teams/rebordoes.jpg",
      alternativeText: "Logo A.D.C. Rebordões",
    },
  },
  marrancos: {
    documentId: "t-marrancos",
    name: "Marrancos",
    slug: "marrancos",
  },

  // TODO: remplacer ces deux équipes factices par les vrais adversaires
  openingOpponent: {
    documentId: "t-opposing",
    name: "Opposing Team FC",
    slug: "opposing-team-fc",
  },
  fcAzias: { documentId: "t-fc-azias", name: "FC Azias", slug: "fc-azias" },
} satisfies Record<string, Team>;

export const VENUES = {
  manguela: {
    documentId: "v-manguela",
    name: "Campo da Manguela",
    city: "Azias, Ponte da Barca",
    mapsQuery: "Campo de Futebol da Manguela, Azias - Ponte da Barca",
  },
  // TODO: ajouter le stade de Marrancos (et les autres) quand tu les connais
} satisfies Record<string, Venue>;

export const COMPETITIONS = {
  ligaInatel: {
    documentId: "c-liga-inatel",
    name: "Liga INATEL",
    slug: "liga-inatel",
  },
  taca: { documentId: "c-taca", name: "Taça", slug: "taca" },
} satisfies Record<string, Competition>;

export const MATCHES: Match[] = [
  {
    documentId: "m-li-01",
    round: "Jornada 1",
    roundNumber: 1,
    date: "2025-10-25",
    time: "19:00:00.000",
    status: "played",
    homeScore: 1,
    awayScore: 1,
    homeTeam: TEAMS.azias,
    awayTeam: TEAMS.openingOpponent,
    venue: VENUES.manguela,
    competition: COMPETITIONS.ligaInatel,
  },
  {
    documentId: "m-li-02",
    round: "Jornada 2",
    roundNumber: 2,
    date: null, // à définir
    time: null,
    status: "scheduled",
    homeTeam: TEAMS.azias,
    awayTeam: TEAMS.fcAzias, // TODO: vrai adversaire
    venue: null,
    competition: COMPETITIONS.ligaInatel,
  },
  {
    documentId: "m-li-03",
    round: "Jornada 3",
    roundNumber: 3,
    date: null,
    time: null,
    // TODO: date passée sans score -> ajouter homeScore/awayScore + status "played",
    // ou status "postponed" si le match a été reporté
    status: "postponed",
    homeTeam: TEAMS.azias,
    awayTeam: TEAMS.rebordoes,
    venue: VENUES.manguela,
    competition: COMPETITIONS.ligaInatel,
  },
];
