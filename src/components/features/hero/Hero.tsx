import Image from "next/image";
import Link from "next/link";
import { BiCalendar, BiPhone } from "react-icons/bi";
import { Button } from "../../ui/button";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Hero() {
  return (
    <div className="relative flex items-end overflow-hidden min-h-screen">
      {/* background image */}
      <Image
        src="/images/bg-hero/bg-hero.jpg"
        alt="Logo da equipa FC Azias"
        fill
        className="absolute object-cover object-center brightness-75 -z-10"
        priority
      />

      {/* Content */}
      <div className="w-full h-screen flex flex-col justify-end items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6 pb-6">
        <h2 className="text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] font-bold text-primary-foreground/70">
          AZIAS FC
        </h2>
        <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6 italic">
          Um clube. Uma família. Uma paixão.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-6">
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

        <div className="mt-8 animate-bounce">
          <Link href="#next-match">
            <MdKeyboardDoubleArrowDown
              size={40}
              className="text-secondary/50"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
