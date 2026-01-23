// ---------- Team props ----------

export type TeamLogoAndNameProps = {
  teamLogo: string | undefined;
  teamName: string | undefined;
};

// ---------- Player props ----------
export type PlayerSectionProps = {
  sectionName: string;
  children: React.ReactNode;
};

type PlayerPosition = ["Guarda-redes", "Defesas", "Médios", "Avançados"];

export type PlayerProps = {
  id: string | number;
  name: string;
  number?: number;
  age: number | null;
  imageUrl: string;
  position?: PlayerPosition;
  stats?: {
    matches: number;
    goals: number;
    assists: number;
  };
  cards?: {
    redCards: number;
    yellowCards: number;
  };
  isCaptain: boolean;
  className?: string;
};

// ---------- Coach props ----------
export type CoachProps = {
  name: string;
  age?: number | null;
  imageUrl: string;
  className?: string;
};
