import { TeamLogoAndNameProps } from "@/src/types/team-props";
import Image from "next/image";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  const logoSrc =
    !teamLogo ||
    teamLogo.includes("azias-fc-logo") ||
    teamLogo === "/azias-fc-logo.png"
      ? "/images/logo-ada.jpg"
      : teamLogo;

  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden border border-white/15 bg-white/10 p-1.5 shadow-lg shadow-primary/10 md:h-28 md:w-28">
        <Image
          src={logoSrc}
          alt={`Logo ${teamName}`}
          fill
          sizes="(max-width: 1024px) 96px, 112px"
          className="object-cover"
        />
      </div>

      <p className="text-sm font-bold md:text-lg">{teamName}</p>
    </div>
  );
}
