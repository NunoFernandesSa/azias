"use client";

import { JSX, useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

import { Button } from "@/src/components/ui/button";

export default function BackToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll(): void {
      setIsVisible(window.scrollY > 320);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      type="button"
      size="icon-lg"
      variant="default"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 right-5 z-40 rounded-sm border border-[#1375d0]/15 shadow-lg shadow-primary/10 transition-all duration-300 md:bottom-7 md:right-7 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <BiChevronUp size={22} />
    </Button>
  );
}
