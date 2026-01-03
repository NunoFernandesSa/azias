"use client";

import { useIsMobile } from "@/src/hooks/useIsMobile";
import Container from "../common/Container";

export function MobileLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <main className={isMobile ? "flex-1 w-full" : "lg:ml-48 flex-1 w-full"}>
      <Container>{children}</Container>
    </main>
  );
}
