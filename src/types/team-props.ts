export type TeamLogoAndNameProps = {
  teamLogo: string;
  teamName: string;
};

export type PlayerCardProps = {
  imageUrl: string;
  name: string;
  number: number | null;
  age?: number | null;
  isCaptain?: boolean;
  stats?: {
    matches?: number;
    goals?: number;
    assists?: number;
  };
  className?: string;
};

export type PlayerSectionProps = {
  sectionName: string;
  children: React.ReactNode;
};
