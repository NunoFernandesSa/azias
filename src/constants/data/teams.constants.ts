import { Competition, Team, Venue } from "./types";

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
  fictiveTeam01: {
    documentId: "t-fictive-01",
    name: "Equipa 01",
    slug: "equipa-01",
    shortName: "Eq. 01",
  },
  fictiveTeam02: {
    documentId: "t-fictive-02",
    name: "Equipa 02",
    slug: "equipa-02",
    shortName: "Eq. 02",
  },
  fictiveTeam03: {
    documentId: "t-fictive-03",
    name: "Equipa 03",
    slug: "equipa-03",
    shortName: "Eq. 03",
  },
  fictiveTeam04: {
    documentId: "t-fictive-04",
    name: "Equipa 04",
    slug: "equipa-04",
    shortName: "Eq. 04",
  },
  fictiveTeam05: {
    documentId: "t-fictive-05",
    name: "Equipa 05",
    slug: "equipa-05",
    shortName: "Eq. 05",
  },
  fictiveTeam06: {
    documentId: "t-fictive-06",
    name: "Equipa 06",
    slug: "equipa-06",
    shortName: "Eq. 06",
  },
  fictiveTeam07: {
    documentId: "t-fictive-07",
    name: "Equipa 07",
    slug: "equipa-07",
    shortName: "Eq. 07",
  },
  fictiveTeam08: {
    documentId: "t-fictive-08",
    name: "Equipa 08",
    slug: "equipa-08",
    shortName: "Eq. 08",
  },
  fictiveTeam09: {
    documentId: "t-fictive-09",
    name: "Equipa 09",
    slug: "equipa-09",
    shortName: "Eq. 09",
  },
  fictiveTeam10: {
    documentId: "t-fictive-10",
    name: "Equipa 10",
    slug: "equipa-10",
    shortName: "Eq. 10",
  },
  fictiveTeam11: {
    documentId: "t-fictive-11",
    name: "Equipa 11",
    slug: "equipa-11",
    shortName: "Eq. 11",
  },
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
