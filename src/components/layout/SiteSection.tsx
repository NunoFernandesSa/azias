import { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SiteContainerSize = "default" | "narrow" | "wide";
type SiteSectionTone = "default" | "muted" | "transparent";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  size?: SiteContainerSize;
};

type SiteSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  size?: SiteContainerSize;
  tone?: SiteSectionTone;
};

const sizeClasses: Record<SiteContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-6xl",
  wide: "max-w-[88rem]",
};

const toneClasses: Record<SiteSectionTone, string> = {
  default: "",
  muted: "bg-muted/45",
  transparent: "",
};

export function SiteContainer({
  children,
  className,
  size = "default",
}: SiteContainerProps): JSX.Element {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SiteSection({
  children,
  className,
  containerClassName,
  id,
  size = "default",
  tone = "default",
}: SiteSectionProps): JSX.Element {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-20 lg:py-24",
        toneClasses[tone],
        className,
      )}
    >
      <SiteContainer size={size} className={containerClassName}>
        {children}
      </SiteContainer>
    </section>
  );
}
