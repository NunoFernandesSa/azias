import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import CalendarSection from "@/src/components/features/calendar/CalendarSection";
import { JSX } from "react";

export default function CalendarPage(): JSX.Element {
  return (
    <Container className="px-1 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center mb-12">
        Calendário 2025/2026
      </Title>
      <CalendarSection />
    </Container>
  );
}
