// ---------- components ----------
import Link from "next/link";
import { JSX } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

/**
 * A card component that displays a Google Maps iframe with the
 * location of Campo de Futebol da Manguela.
 *
 * @returns {JSX.Element} - the MapsCard component
 */
export default function MapsCard(): JSX.Element {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Campo%20de%20Futebol%20da%20Manguela%2C%20Azias%20-%20Ponte%20da%20Barca";

  return (
    <Card
      aria-labelledby="map-card-title"
      className="overflow-hidden border-primary/10 p-0 shadow-xl shadow-primary/10"
    >
      <CardHeader className="gap-3 border-b bg-card/90 py-5 backdrop-blur-sm">
        <span className="inline-flex w-fit items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
          Localização
        </span>
        <CardTitle className="space-y-3">
          <h2
            id="map-card-title"
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Onde nos encontrar
          </h2>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
            Visite o Campo de Futebol da Manguela e acompanhe de perto a vida do
            clube em Azias, Ponte da Barca.
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 p-0">
        <iframe
          title="Localização do Campo de Futebol da Manguela"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3848121857786!2d-8.365324423425053!3d41.77691977174226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd250f08fdba3cb3%3A0xc741083a73dd31e1!2sCampo%20de%20Futebol%20da%20Manguela!5e0!3m2!1sfr!2spt!4v1767123579062!5m2!1sfr!2spt"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full"
        />

        <div className="flex justify-end px-6 pb-6">
          <Button
            asChild
            variant="outline"
            className="text-primary hover:text-primary"
          >
            <Link href={googleMapsLink} target="_blank" rel="noreferrer">
              Abrir no Google Maps
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
