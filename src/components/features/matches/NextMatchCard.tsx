// ---------- React/Next ----------
import Link from "next/link";
import Image from "next/image";

// ---------- components ----------
import { TeamLogoAndName } from "./TeamLogoAndName";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

// ---------- icons ----------
import { BiMapPin, BiTimer } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

// ---------- constants ----------
import { calendar } from "@/src/constants/constants";

export default function NextMatchCard() {
  const { match, team } = calendar[0];

  return (
    <Card
      className={
        "relative bg-gradient-to-r from-primary to-primary/70 rounded-lg text-primary-foreground"
      }
    >
      <Image
        src="/images/background/bg-match-card.jpg"
        alt="Imagem de fundo"
        className="absolute w-full h-full object-cover -z-10 rounded-lg"
        fill
        priority
      />

      <CardHeader>
        <CardTitle className="flex flex-col gap-2">
          <p className="text-3xl font-bold">Próximo Jogo</p>
          <p className="text-secondary text-md">🕒 Faltam x dias</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex items-center justify-center gap-3 lg:gap-6">
          <TeamLogoAndName
            teamLogo={team?.teamPlayingAtHomeLogo}
            teamName={team?.teamPlayingAtHome}
          />
          <p className="text-xl lg:text-4xl font-bold text-secondary">X</p>
          <TeamLogoAndName
            teamLogo={team?.teamPlayingAwayLogo}
            teamName={team?.teamPlayingAway}
          />
        </div>

        <div className="flex flex-col mt-12 gap-3">
          <p className="flex items-center">
            <FaRegCalendarAlt className="mr-2" /> {match.date}
          </p>
          <p className="flex items-center">
            <BiTimer className="mr-2" /> {match.hour}H
          </p>

          <p className="flex items-center">
            <BiMapPin className="mr-2" /> {match.address}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <Button asChild variant={"secondary"} className="w-full md:w-1/2">
            <Link href="/calendario">Consultar calendário</Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="w-full md:w-1/2 bg-transparent hover:bg-white/80 text-primary-foreground hover:text-primary"
          >
            <Link
              href="https://desporto.inatel.pt/pt/tournament/1322383/ranking"
              target="_blank"
            >
              Consultar classificação
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
