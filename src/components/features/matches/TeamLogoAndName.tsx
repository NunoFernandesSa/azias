import { TeamLogoAndNameProps } from "@/src/types/team-props";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-md md:text-xl font-bold">{teamName}</p>
      <img
        src={teamLogo}
        alt="logo da equipa"
        className="w-24 h-24 lg:w-42 lg:h-42 rounded-full shadow-lg shadow-white/20"
      />
    </div>
  );
}
