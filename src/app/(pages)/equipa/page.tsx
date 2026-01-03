import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import PlayerCard from "@/src/components/features/team/PlayerCard";
import { PlayersSection } from "@/src/components/features/team/PlayerSection";
import {
  Coaches,
  Defenders,
  Forwards,
  Goalkeepers,
  Midfielders,
} from "@/src/constants/constants";

export default function TeamPage() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
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
        {Coaches.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>
    </Container>
  );
}
