// ---------- React/Next ----------
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import CoachCard from "@/src/components/features/team/CoachCard";
import PlayerCard from "@/src/components/features/team/PlayerCard";
import { PlayersSection } from "@/src/components/features/team/PlayerSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

// ---------- Constants ----------
import {
  Coachs,
  Defenders,
  Forwards,
  Goalkeepers,
  Midfielders,
} from "@/src/constants/constants";

/**
 * A page that displays the team's players, coaches and other staff for the 2025/2026 season.
 * @returns {JSX.Element} - the team page component
 */
export default function TeamPage(): JSX.Element {
  const coaches = Coachs.filter(({ name }) => name.trim().length > 0);
  const squadSections = [
    {
      sectionName: "Guarda-redes",
      description:
        "Segurança entre os postes, presença na área e primeira construção desde trás.",
      players: Goalkeepers,
    },
    {
      sectionName: "Defesas",
      description:
        "Solidez, agressividade no duelo e equilíbrio para proteger a equipa em todos os momentos.",
      players: Defenders,
    },
    {
      sectionName: "Médios",
      description:
        "Critério com bola, intensidade sem bola e ligação entre setores ao longo do jogo.",
      players: Midfielders,
    },
    {
      sectionName: "Avançados",
      description:
        "Profundidade, criatividade e capacidade para decidir perto da baliza adversária.",
      players: Forwards,
    },
  ];
  const captain = [
    ...Goalkeepers,
    ...Defenders,
    ...Midfielders,
    ...Forwards,
  ].find((player) => player.isCaptain);
  const totalPlayers = squadSections.reduce(
    (accumulator, section) => accumulator + section.players.length,
    0,
  );
  const overviewStats = [
    { value: totalPlayers, label: "Jogadores" },
    { value: squadSections.length, label: "Setores" },
    { value: coaches.length, label: "Treinadores" },
  ];

  return (
    <Container className="my-30 px-3 pt-6 lg:mx-16 lg:my-16 lg:pt-0">
      <div className="space-y-10">
        <Card className="relative isolate overflow-hidden rounded-[2rem] border-primary/15 bg-gradient-to-br from-primary via-primary to-primary/85 text-primary-foreground shadow-xl shadow-primary/10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_24%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
          />

          <CardHeader className="relative z-10 gap-6 pb-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
                Plantel 2025/2026
              </span>
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-1 text-sm font-semibold text-primary-foreground/80">
                Azias, Ponte da Barca
              </span>
            </div>

            <CardTitle className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
              <div className="space-y-5">
                <div className="space-y-4">
                  <Title className="text-left text-white">
                    A Nossa Equipa 2025/2026
                  </Title>
                  <p className="max-w-3xl text-base leading-7 text-primary-foreground/85 md:text-lg">
                    Um grupo construído para competir com identidade, ambição e
                    espírito coletivo. Aqui encontras o plantel principal e a
                    equipa técnica que representam a A.D. Azias nesta época.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {overviewStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                    >
                      <p className="text-2xl font-bold text-white md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="mx-auto flex w-full max-w-xs items-center justify-center rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur-sm">
                  <Image
                    src="/images/logo-ada.jpg"
                    alt="Logo da A.D. Azias"
                    width={220}
                    height={220}
                    sizes="220px"
                    className="h-36 w-36 object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        {squadSections.map(({ sectionName, description, players }) => (
          <PlayersSection
            key={sectionName}
            sectionName={sectionName}
            description={description}
            count={players.length}
          >
            {players.map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </PlayersSection>
        ))}

        {coaches.length > 0 ? (
          <PlayersSection
            sectionName="Treinadores"
            eyebrowLabel="Staff técnico"
            description="A estrutura técnica responsável pela preparação, liderança e acompanhamento do grupo ao longo da época."
            count={coaches.length}
          >
            {coaches.map((coach, index) => (
              <CoachCard
                key={`${coach.name}-${index}`}
                imageUrl={coach.imageUrl}
                name={coach.name}
                age={coach.age}
              />
            ))}
          </PlayersSection>
        ) : null}
      </div>
    </Container>
  );
}
