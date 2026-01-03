import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

export default function TeamCard() {
  return (
    <Card
      className={
        "relative bg-gradient-to-r from-primary to-primary/70 rounded-lg text-primary-foreground flex flex-col h-full justify-between"
      }
    >
      <Image
        src="/images/background/bg-match-card.jpg"
        alt="Imagem de fundo"
        className="absolute w-full h-full object-cover rounded-lg -z-10"
        fill
        priority
      />

      <CardHeader>
        <CardTitle className="flex flex-col gap-2">
          <p className="text-3xl font-bold">A nossa equipa</p>
          <p className="text-secondary text-md">
            Um grupo unido, dedicado e apaixonado.
          </p>
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex flex-col items-start gap-3">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          ⚽ Espírito de equipa
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🤝 Respeito
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🔥 Paixão local
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🏆 Campeonato INATEL
        </div>

        <Button asChild variant={"secondary"} className="w-full md:w-1/2">
          <Link href="/equipa">Ver plantel</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
