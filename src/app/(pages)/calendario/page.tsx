import PageIntro from "@/src/components/common/PageIntro";
import CalendarSection from "@/src/components/features/calendar/CalendarSection";
import { SiteSection } from "@/src/components/layout/SiteSection";
import { calendar } from "@/src/constants/constants";
import { JSX } from "react";

export default function CalendarPage(): JSX.Element {
  const stats = [
    { value: calendar.length, label: "Jornadas previstas" },
    {
      value: new Set(
        calendar.map((match) =>
          "championship" in match ? match.championship : match.match.championship,
        ),
      ).size,
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
