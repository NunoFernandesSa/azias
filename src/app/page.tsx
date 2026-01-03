"use client";

import { Navbar } from "@components/layout/Navbar";
import { useIsMobile } from "../hooks/useIsMobile";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />

        <main className={isMobile ? "flex-1" : "lg:ml-48 flex-1"}>
          {children}
        </main>
      </div>
    </div>
  );
}
