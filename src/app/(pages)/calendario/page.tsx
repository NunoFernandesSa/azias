import PageIntro from "@/src/components/common/PageIntro";
import CalendarSection from "@/src/components/features/calendar/CalendarSection";
import { SiteSection } from "@/src/components/layout/SiteSection";
import { JSX } from "react";

/**
 * @description Calendar page component
 * @returns JSX.Element
 */
export default function CalendarPage(): JSX.Element {
  return (
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <PageIntro
        eyebrow="Época 2025/2026"
        title="Calendário"
        description="Consulta os encontros da A.D. Azias, acompanha a evolução da temporada e encontra rapidamente datas, adversários, resultados e local dos jogos."
      />

      <div className="pt-12 md:pt-16">
        <CalendarSection />
      </div>
    </SiteSection>
  );
}
