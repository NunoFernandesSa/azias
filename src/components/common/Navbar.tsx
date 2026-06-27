"use client";

import { navLinks } from "@/src/constants/constants";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pour détecter la page active
import { JSX, useEffect, useRef, useState } from "react";
import { BiChevronRight, BiMenu, BiX } from "react-icons/bi";

export function Navbar(): JSX.Element {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen || !isMobile) return;

    function handlePointerDown(event: MouseEvent | TouchEvent): void {
      const target = event.target as Node | null;
      if (!target) return;

      if (mobileNavRef.current?.contains(target)) return;
      setIsMenuOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isMenuOpen, isMobile]);

  return (
    <header
      className={`
        ${
          isMobile
            ? "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md shadow-lg"
            : "lg:fixed top-0 left-0 lg:h-screen lg:w-48 overflow-hidden border-r border-white/10 bg-primary"
        }
      `}
    >
      {isMobile ? (
        // ---------- Mobile Navigation ----------
        <div
          ref={mobileNavRef as React.RefObject<HTMLDivElement>}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.12),_transparent_28%)]"
          />

          <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-white/10">
                <Image
                  src="/images/azias-fc-logo.webp"
                  alt="Logo da equipa FC Azias"
                  fill
                  sizes="56px"
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="relative animate-fade-in border-t border-white/10 px-4 pb-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="space-y-2">
                  {navLinks.map(({ href, label, id }) => (
                    <Link
                      key={id}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        flex items-center justify-between rounded-xl px-4 py-3 font-semibold transition-all
                        ${
                          pathname === href
                            ? "bg-white text-primary shadow-lg"
                            : "text-white hover:bg-white/15"
                        }
                      `}
                    >
                      <span>{label.toUpperCase()}</span>
                      <BiChevronRight
                        className={
                          pathname === href ? "text-primary" : "text-secondary"
                        }
                        size={18}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // ---------- Desktop Navigation ----------
        <nav className="relative flex h-full w-full flex-col px-3 py-5">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.12),_transparent_26%)]"
          />

          <div className="relative z-10 flex flex-1 flex-col">
            <div className="rounded-3xl border border-white/10 bg-white/8 p-3 backdrop-blur-sm">
              <Link
                href="/"
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-primary/25"
              >
                <Image
                  src="/images/azias-fc-logo.webp"
                  alt="Logo da equipa FC Azias"
                  width={300}
                  height={300}
                  className="h-auto w-full rounded-full object-cover"
                  priority
                />
              </Link>

              <p className="px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
                Navegação
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.map(({ href, label, id }) => {
                  const isActive: boolean = pathname === href;

                  return (
                    <Link
                      key={id}
                      href={href}
                      className={`
                        group relative flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ease-out
                        ${
                          isActive
                            ? "bg-white text-primary shadow-lg"
                            : "text-white/85 hover:bg-white/12 hover:text-white"
                        }
                      `}
                    >
                      <span>{label.toUpperCase()}</span>
                      <BiChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-secondary group-hover:translate-x-0.5"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
