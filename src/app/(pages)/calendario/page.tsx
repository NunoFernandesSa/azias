import PageIntro from "@/src/components/common/PageIntro";
import CalendarSection from "@/src/components/features/calendar/CalendarSection";
import { SiteSection } from "@/src/components/layout/SiteSection";
import { MATCHES } from "@/src/constants/data/teams.constants";
import { JSX } from "react";

export default function CalendarPage(): JSX.Element {
  const stats = [
    { value: MATCHES.length, label: "Jornadas previstas" },
    {
      value: new Set(MATCHES.map((match) => match.competition.name)).size,
      label: "Competições",
    },
  ];

  return (
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <PageIntro
        eyebrow="Época 2025/2026"
        title="Calendário"
        description="Consulta os encontros da A.D. Azias, acompanha a evolução da temporada e encontra rapidamente datas, adversários, resultados e local dos jogos."
        stats={stats}
      />

      <div className="pt-12 md:pt-16">
        <CalendarSection />
      </div>
    </SiteSection>
  );
}
