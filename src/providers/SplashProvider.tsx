"use client";

import Image from "next/image";
import { Spinner } from "@components/common/Spinner";
import { useEffect, useState } from "react";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const logo = "/images/azias-fc-logo.webp";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // TODO: ajouter la logique pour attendre les ressources nécessaires
    // attendre que tes données/joueurs/images soient prêtes
    // puis appeler setIsLoading(false)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/90 w-screen h-screen">
          <Image
            src={logo}
            alt="Logo du club"
            width={320}
            height={320}
            className="w-80 h-80"
            priority
          />

          <Spinner className="mt-8 w-12 h-12 md:w-16 md:h-16 text-secondary" />

          <h2 className="mt-4 text-2xl md:text-4xl lg:text-7xl font-bold text-primary-foreground/80 text-center px-4">
            Bem-vindo
          </h2>
        </div>
      )}

      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        {children}
      </div>
    </>
  );
}
