import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiPhone } from "react-icons/bi";
import { Button } from "../../ui/button";
import { JSX } from "react";

import { SiteContainer } from "@/src/components/layout/SiteSection";

/**
 * Hero component that serves as the main landing section of the website.
 * Features a full-viewport background image with overlay gradient, centered content
 * including the club name, tagline, and primary call-to-action buttons for navigation.
 *
 * @component
 * @returns {JSX.Element} Rendered Hero section with background media, content, and scroll prompt
 */
export default function Hero(): JSX.Element {
  const heroBg = "/images/hero/hero-img.jpg";
  const title = "A.D. Azias";
  const subtitle =
    "Futebol local com identidade, ambição e orgulho em representar Azias.";
  const highlightStats = [
    { value: "2025/26", label: "Época em destaque" },
    { value: "INATEL", label: "Competição oficial" },
    { value: "Azias", label: "Ligação à comunidade" },
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <Image
        src={heroBg}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover object-center brightness-65"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(19,117,208,0.12),_transparent_26%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#102033]/90 via-[#102033]/68 to-[#102033]/42"
      />

      <SiteContainer className="relative z-10 py-14 md:py-20 lg:py-24">
        <div className="flex min-h-[calc(100svh-5rem)] flex-col justify-end">
          <div className="animate-fade-in max-w-5xl space-y-8 pb-12 md:pb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-secondary">
              Associação Desportiva de Azias
            </p>

            <div className="space-y-5">
              <h1
                id="hero-title"
                className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[6rem]"
              >
                {title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-primary-foreground/82 md:text-xl">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-full rounded-sm border border-[#1375d0]/15 px-7 sm:w-auto"
              >
                <Link href="/calendario">
                  <BiCalendar />
                  Ver calendário
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-sm border-white/25 bg-transparent px-7 text-white hover:bg-white hover:text-primary sm:w-auto"
              >
                <Link href="/contacto">
                  <BiPhone />
                  Entrar em contacto
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/14 py-6 sm:grid-cols-3 sm:gap-8 md:py-8">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="grid gap-2">
                <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
