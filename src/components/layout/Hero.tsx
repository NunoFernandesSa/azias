import Link from "next/link";
import { BiCalendar, BiPhone } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="relative flex items-end overflow-hidden min-h-screen">
      {/* Content */}
      <div className="w-full h-screen flex flex-col justify-end items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6 pb-20">
        <h2 className="text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] font-bold text-primary-foreground/70">
          AZIAS FC
        </h2>
        <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6 italic">
          Um clube. Uma família. Uma paixão.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-6">
          <Link href="/calendario">
            <BiCalendar /> Ver calendário
          </Link>

          <Link href="/contacto">
            <BiPhone /> Entrar em contato
          </Link>
        </div>
      </div>
    </div>
  );
}
