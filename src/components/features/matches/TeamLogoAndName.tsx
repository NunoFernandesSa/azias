import { TeamLogoAndNameProps } from "@/src/types/team-props";
import Image from "next/image";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-md md:text-xl font-bold">{teamName}</p>
      <Image
        src={teamLogo ?? ""}
        alt={`Logo ${teamName}`}
        width={160}
        height={160}
        sizes="(max-width: 1024px) 96px, 160px"
        className="w-24 h-24 lg:w-40 lg:h-40 rounded-full shadow-lg shadow-white/20 object-cover"
      />
    </div>
  );
}
