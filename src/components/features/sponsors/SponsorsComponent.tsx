// ---------- React/Next ----------
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import SponsorLogoCard from "./SponsorLogoCard";

// ---------- constants ----------
import { sponsors } from "@/src/constants/constants";

/**
 * Displays a responsive card with a gradient background color, a title, a content section
 * with a description and a call to action, and a footer section with sponsor logos.
 *
 * The component is responsive and has a rounded corners.
 * The content section has a title, a description and a call to action
 * with a button to become a sponsor.
 * The footer section displays sponsor logos in a responsive grid.
 *
 * @returns {JSX.Element} A JSX element representing the SponsorsComponent.
 */
export default function SponsorsComponent(): JSX.Element {
  return (
    <Card className="relative bg-gradient-to-r from-primary to-primary/40 rounded-lg overflow-hidden text-primary-foreground">
      {/* background image */}
      <Image
        src="/images/background/bg-match-card.jpg"
        alt="Imagem de fundo"
        className="absolute w-full h-full object-cover -z-10 rounded-lg"
        fill
        priority
      />

      {/* content */}
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Obrigado a quem acredita na A.D. Azias !
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">
          Os nossos patrocinadores são parceiros essenciais da A.D. Azias.
        </p>
        <p className="font-semibold">
          Graças à sua confiança e apoio, o nosso clube pode continuar a
          crescer, promovendo o futebol local e incutindo valores de paixão,
          respeito e união.
        </p>
        <p className="font-semibold">
          Juntos, estamos a construir o futuro da A.D. Azias.
        </p>

        <p className="font-semibold mt-6">
          Quer dar visibilidade à sua empresa e apoiar o futebol local?
        </p>

        <Button
          asChild
          variant={"secondary"}
          size={"lg"}
          className="my-6 w-full md:w-1/2 lg:w-1/3"
        >
          <Link href="/contacto">Torne-se patrocinador</Link>
        </Button>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center lg:gap-16 gap-6 mb-6">
        {sponsors.map((sponsor) => (
          <SponsorLogoCard
            key={sponsor.id}
            id={sponsor.id}
            name={sponsor.name}
            logo={sponsor.logo}
            website={sponsor.website}
          />
        ))}
      </CardFooter>
    </Card>
  );
}
