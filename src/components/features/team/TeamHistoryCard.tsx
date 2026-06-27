// ---------- React/Next ----------
import Image from "next/image";
import { JSX } from "react";
import { BiHeart, BiMapPin, BiShieldQuarter } from "react-icons/bi";

// ---------- components ----------
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

/**
 * A card component for the team's history.
 *
 * This component renders a card with the title "A nossa história" and a paragraph
 * describing the team's history.
 *
 * @returns {JSX.Element} - the team history card component
 */
export default function TeamHistoryCard(): JSX.Element {
  const title = "A nossa história";
  const storyParagraphs = [
    "Fundado em Azias, Ponte da Barca, o Azias FC nasceu da paixão pelo futebol e da vontade de unir a comunidade local em torno de valores sólidos.",
    "Mais do que competir, o clube procura representar a sua terra com identidade, entrega e orgulho, dentro e fora de campo.",
    "Cada treino, cada jogo e cada apoio vindo das bancadas reforçam a mesma ambição: continuar a crescer sem perder a ligação às nossas origens.",
  ];
  const pillars = [
    {
      icon: BiHeart,
      title: "Paixão local",
      description:
        "Um clube ligado à sua terra, às suas pessoas e à energia do futebol local.",
    },
    {
      icon: BiShieldQuarter,
      title: "Valores fortes",
      description:
        "Espírito de equipa, respeito e compromisso como base da identidade do grupo.",
    },
    {
      icon: BiMapPin,
      title: "Azias, Ponte da Barca",
      description:
        "Uma história construída com proximidade, pertença e orgulho em representar a comunidade.",
    },
  ];

  return (
    <Card
      aria-labelledby="team-history-title"
      className="relative isolate overflow-hidden border-primary/15 bg-gradient-to-br from-primary to-primary/85 text-primary-foreground shadow-xl shadow-primary/10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.18),_transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-secondary/20 blur-3xl"
      />

      <CardHeader className="relative z-10 gap-4 pb-0">
        <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
          Identidade do clube
        </span>
        <CardTitle className="space-y-4">
          <h2
            id="team-history-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            {title}
          </h2>
          <p className="max-w-3xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
            Um clube construído pela paixão ao futebol, pela ligação à
            comunidade e pelo desejo de representar Azias com orgulho.
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              {storyParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base md:text-lg leading-8 text-primary-foreground/90"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary font-semibold">
                O que nos move
              </p>
              <p className="mt-3 text-lg md:text-xl font-semibold leading-relaxed text-white">
                Crescer de forma ambiciosa, sem perder a autenticidade, o
                compromisso coletivo e o orgulho de representar Azias.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="mx-auto flex w-fit items-center justify-center rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <Image
                src="/images/logo-ada.png"
                alt="Logo do Azias FC"
                width={160}
                height={160}
                sizes="160px"
                className="h-28 w-28 md:h-36 md:w-36 object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <div className="grid gap-4">
              {pillars.map(
                ({ icon: Icon, title: pillarTitle, description }) => (
                  <div
                    key={pillarTitle}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-secondary/90 p-2 text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {pillarTitle}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-primary-foreground/80">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
