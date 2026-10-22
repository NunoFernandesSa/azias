"use client";

import Image from "next/image";
import { Spinner } from "@components/common/Spinner";
import { useEffect, useState } from "react";

interface SplashProviderProps {
  children: React.ReactNode;
}

const SPLASH_DURATION_MS = 1150;
const SPLASH_EXIT_DURATION_MS = 450;

export default function SplashProvider({ children }: SplashProviderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const logo = "/images/logo-ada.jpg";

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, SPLASH_DURATION_MS);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION_MS + SPLASH_EXIT_DURATION_MS);

    // TODO: ajouter la logique pour attendre les ressources nécessaires
    // attendre que tes données/joueurs/images soient prêtes
    // puis déclencher setIsLeaving(true)

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          aria-live="polite"
          aria-label="Chargement de l'application"
          className={`fixed inset-0 z-50 flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f7f9fc] px-6 transition-all duration-500 ${
            isLeaving
              ? "pointer-events-none opacity-0 blur-sm"
              : "opacity-100 blur-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(19,117,208,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(49,65,83,0.12),_transparent_28%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8"
          />

          <div className="relative flex w-full max-w-xl flex-col items-center text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-muted-foreground md:text-xs">
              Site oficial
            </p>

            <div className="relative flex h-40 w-40 items-center justify-center border border-primary/10 bg-white p-3 shadow-[0_25px_80px_rgba(18,38,58,0.10)] md:h-48 md:w-48">
              <div className="absolute inset-3 border border-primary/6" />
              <Image
                src={logo}
                alt="Logo do clube"
                width={192}
                height={192}
                sizes="(max-width: 768px) 160px, 192px"
                className="relative h-full w-full object-cover"
                priority
              />
            </div>

            <div className="mt-8 space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
                Associação Desportiva de Azias
              </h2>
              <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground md:text-base">
                A viver a paixão pelo desporto, com uma nova plataforma moderna
                e dedicada a todos os sócios, atletas e adeptos do nosso clube.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Spinner className="h-10 w-10 border-[3px] border-[#1375d0]/20 border-t-[#1375d0]" />
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">
                Carregando
              </span>
            </div>

            <div className="mt-6 h-px w-full max-w-sm overflow-hidden bg-primary/10">
              <div className="h-full w-1/3 animate-pulse bg-[#1375d0]" />
            </div>
          </div>
        </div>
      )}

      <div
        aria-hidden={isVisible}
        className={
          isVisible
            ? "pointer-events-none select-none opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
