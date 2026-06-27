"use client";

import Image from "next/image";
import { Spinner } from "@components/common/Spinner";
import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 1000;

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const logo = "/images/logo-ada.png";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, SPLASH_DURATION_MS);

    // TODO: ajouter la logique pour attendre les ressources nécessaires
    // attendre que tes données/joueurs/images soient prêtes
    // puis appeler setIsLoading(false)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          aria-live="polite"
          aria-label="Chargement de l'application"
          className="fixed inset-0 z-50 flex min-h-dvh w-full flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/90"
        >
          <Image
            src={logo}
            alt="Logo do clube"
            width={320}
            height={320}
            sizes="(max-width: 768px) 240px, 320px"
            className="h-60 w-60 md:h-80 md:w-80"
            priority
          />

          <Spinner className="mt-8 w-12 h-12 md:w-16 md:h-16 text-secondary" />

          <h2 className="mt-4 text-2xl md:text-4xl lg:text-7xl font-bold text-primary-foreground/80 text-center px-4">
            Bem-vindo
          </h2>
        </div>
      )}

      <div
        aria-hidden={isLoading}
        className={
          isLoading
            ? "pointer-events-none select-none opacity-0"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        {children}
      </div>
    </>
  );
}
