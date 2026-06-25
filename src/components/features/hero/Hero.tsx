import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiPhone } from "react-icons/bi";
import { Button } from "../../ui/button";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { JSX } from "react";

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

  const title = "A.D. AZIAS";
  const subtitle = "Um clube. Uma família. Uma paixão.";

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden min-h-dvh"
    >
      <Image
        src={heroBg}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="absolute object-cover object-center brightness-75 -z-10"
        priority
      />

      <div className="w-full min-h-dvh flex flex-col justify-end items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6 pb-10 sm:pb-12">
        <div className="w-full max-w-5xl px-6 text-center animate-fade-in">
          <h1
            id="hero-title"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-primary-foreground/80"
          >
            {title}
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-primary-foreground/85 italic">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Button
              asChild
              variant={"default"}
              size="lg"
              className="w-full sm:w-1/3 lg:w-1/4"
            >
              <Link href="/calendario">
                <BiCalendar /> Ver calendário
              </Link>
            </Button>

            <Button
              asChild
              variant={"outline"}
              size="lg"
              className="w-full sm:w-1/3 lg:w-1/4"
            >
              <Link href="/contacto">
                <BiPhone /> Entrar em contato
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 motion-safe:animate-bounce motion-reduce:animate-none">
          <Link
            href="#home-content"
            aria-label="Aller au contenu"
            className="inline-flex items-center justify-center rounded-full outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          >
            <MdKeyboardDoubleArrowDown
              size={40}
              className="text-secondary/60"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
