// ---------- React/Next ----------
import Image from "next/image";
import { JSX } from "react";

// ---------- Components ----------
import PageIntro from "@/src/components/common/PageIntro";
import CoachCard from "@/src/components/features/team/CoachCard";
import PlayerCard from "@/src/components/features/team/PlayerCard";
import { PlayersSection } from "@/src/components/features/team/PlayerSection";
import { SiteSection } from "@/src/components/layout/SiteSection";

// ---------- Constants ----------
import {
  Coachs,
  Defenders,
  Forwards,
  Goalkeepers,
  Midfielders,
} from "@/src/constants/data/team.constants";

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
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <div className="space-y-12">
        <PageIntro
          eyebrow="Plantel 2025/2026"
          title="A Nossa Equipa"
          description="Um grupo construído para competir com identidade, ambição e espírito coletivo. Aqui encontras o plantel principal e a equipa técnica que representam a A.D. Azias nesta época."
          stats={overviewStats}
          aside={
            <div className="grid gap-5">
              <div className="flex items-center gap-5 border-b border-primary/10 pb-5">
                <Image
                  src="/images/logo-ada.jpg"
                  alt="Logo da A.D. Azias"
                  width={96}
                  height={96}
                  sizes="96px"
                  className="border border-primary/10 object-contain"
                  priority
                />
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Azias, Ponte da Barca
                  </p>
                  <p className="text-base leading-7 text-muted-foreground">
                    Plantel principal e estrutura técnica numa leitura mais
                    sóbria, mais editorial e mais alinhada com a identidade do
                    clube.
                  </p>
                </div>
              </div>

              {captain ? (
                <div className="grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                    Capitão
                  </p>
                  <p className="text-2xl font-bold tracking-tight text-primary">
                    {captain.name}
                  </p>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Referência dentro e fora de campo, com responsabilidade,
                    liderança e ligação ao grupo.
                  </p>
                </div>
              ) : null}
            </div>
          }
        />

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
    </SiteSection>
  );
}
