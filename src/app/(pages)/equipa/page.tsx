// ---------- React/Next ----------
import { JSX } from "react";

// ---------- Components ----------
import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import CoachCard from "@/src/components/features/team/CoachCard";
import PlayerCard from "@/src/components/features/team/PlayerCard";
import { PlayersSection } from "@/src/components/features/team/PlayerSection";

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
  return (
    <Container className="px-1 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center mb-12">
        A Nossa Equipa 2025/2026
      </Title>

      <PlayersSection sectionName="Guarda-redes">
        {Goalkeepers.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Defesas">
        {Defenders.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Médios">
        {Midfielders.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Avançados">
        {Forwards.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Treinadores">
        {Coachs.map((coach) => (
          <CoachCard key={coach.id} {...coach} />
        ))}
      </PlayersSection>
    </Container>
  );
}
