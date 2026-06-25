import { Sponsor } from "@/src/types/sponsors-props";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function SponsorLogoCard({
  id,
  name,
  logo,
  website,
}: Sponsor): JSX.Element {
  const hasLogo = Boolean(logo && logo !== ".");
  const hasWebsite = Boolean(website && website.startsWith("http"));
  const initials = getInitials(name);

  const cardContent = (
    <div className="group relative flex h-26 w-26 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/95 p-3 shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/20 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
      {hasLogo ? (
        <Image
          src={logo}
          alt={name}
          fill
          sizes="(max-width: 640px) 104px, (max-width: 1024px) 144px, 160px"
          className="object-contain p-4"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 px-3 text-center text-primary-foreground">
          <span className="text-2xl font-bold tracking-wide">{initials}</span>
          <span className="mt-2 text-xs font-semibold leading-4 text-primary-foreground/80">
            {name}
          </span>
        </div>
      )}
    </div>
  );

  return hasWebsite ? (
    <Link
      key={id}
      href={website}
      target="_blank"
      rel="noreferrer"
      title={`Visiter ${name}`}
      aria-label={`Visiter le site de ${name}`}
      className="rounded-2xl outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
    >
      {cardContent}
    </Link>
  ) : (
    <div key={id} title={name} aria-label={name}>
      {cardContent}
    </div>
  );
}
