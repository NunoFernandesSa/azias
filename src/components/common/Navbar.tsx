"use client";

import { navLinks } from "@/src/constants/constants";
import { SiteContainer } from "@/src/components/layout/SiteSection";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useRef, useState } from "react";
import { BiChevronRight, BiMenu, BiX } from "react-icons/bi";

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

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
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/96 backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(19,117,208,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(243,200,74,0.08),_transparent_28%)]"
      />

      <SiteContainer className="relative">
        <div ref={mobileNavRef} className="relative">
          <div className="flex h-20 items-center justify-between gap-4 lg:h-24">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden border border-primary/10 bg-white p-1 shadow-sm lg:h-16 lg:w-16 lg:p-1.5 xl:h-[4.5rem] xl:w-[4.5rem]">
                <Image
                  src="/images/logo-ada.jpg"
                  alt="Logo da A.D. Azias"
                  fill
                  sizes="(max-width: 1024px) 48px, 72px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="min-w-0 space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground lg:text-[11px]">
                  Site oficial
                </p>
                <p className="text-lg font-extrabold tracking-tight text-primary lg:text-[1.4rem] xl:text-[1.55rem]">
                  A.D. Azias
                </p>
              </div>
            </Link>

            <nav className="hidden items-center border border-primary/8 bg-white px-2 py-2 shadow-sm lg:flex">
              {navLinks.map(({ href, label, id }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={id}
                    href={href}
                    className={`
                      px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 xl:px-5 xl:text-[14px]
                      ${
                        isActive
                          ? "bg-accent text-accent-foreground shadow-sm"
                          : "text-primary/72 hover:bg-muted hover:text-[#1375d0]"
                      }
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex items-center justify-center border border-primary/10 bg-white p-2 text-primary shadow-sm transition-colors hover:bg-muted lg:hidden"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <BiX size={26} /> : <BiMenu size={26} />}
            </button>
          </div>

          {isMenuOpen ? (
            <div className="animate-fade-in border-t border-primary/8 pb-5 pt-4 lg:hidden">
              <div className="border border-primary/10 bg-white p-3 shadow-xl shadow-primary/5">
                <div className="space-y-2">
                  {navLinks.map(({ href, label, id }) => {
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={id}
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          flex items-center justify-between border-b px-4 py-3 text-sm font-semibold transition-all duration-300
                          ${
                            isActive
                              ? "border-[#1375d0] bg-[#1375d0]/10 text-[#1375d0]"
                              : "border-primary/8 text-primary hover:bg-muted"
                          }
                        `}
                      >
                        <span>{label}</span>
                        <BiChevronRight
                          size={18}
                          className={
                            isActive
                              ? "text-[#1375d0]"
                              : "text-muted-foreground"
                          }
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </SiteContainer>
    </header>
  );
}
