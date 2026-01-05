"use client";

import { navLinks } from "@/src/constants/constants";
import { useIsMobile } from "@/src/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pour détecter la page active
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`
        ${
          isMobile
            ? "fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg"
            : "lg:h-screen lg:w-48 bg-primary lg:fixed top-0 left-0"
        }
      `}
    >
      {isMobile ? (
        // ---------- Mobile Nav ----------
        <div className="container mx-auto">
          <nav className="flex items-center justify-between p-1">
            <Link href="/" className="relative w-20 h-20">
              <Image
                src="/images/azias-fc-logo.webp"
                alt="Logo da equipa FC Azias"
                fill
                sizes="56px"
                className="rounded-full object-cover"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
            </button>
          </nav>

          {isMenuOpen && (
            <div className="px-4 pb-4 animate-fade-in">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                {navLinks.map(({ href, label, id }) => (
                  <Link
                    key={id}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block px-4 py-3 mb-2 rounded-lg font-semibold transition-all
                      text-white hover:bg-white/20 hover:scale-[1.02]
                      ${pathname === href ? "bg-white/20" : ""}
                    `}
                  >
                    {label.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // ---------- Desktop Nav ----------
        <nav className="h-full w-full flex flex-col items-center pb-8">
          <Link href="/" className="mb-3">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/images/azias-fc-logo.webp"
                alt="Logo da equipa FC Azias"
                fill
                sizes="(max-width: 1024px) 128px, 160px"
                className="rounded-full object-cover"
                priority
              />
            </div>
          </Link>

          {/* ---------- Navigation Desktop ---------- */}
          <div className="w-full flex flex-col items-center justify-center gap-3">
            {navLinks.map(({ href, label, id }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={id}
                  href={href}
                  className={`
                    relative overflow-hidden
                    font-bold text-sm lg:text-base
                    px-6 py-4 w-full max-w-xs
                    transition-all duration-300 ease-out
                    
                    ${
                      isActive
                        ? "text-primary bg-white shadow-lg"
                        : "text-white hover:text-primary"
                    }

                    before:absolute before:inset-0
                    before:bg-gradient-to-r before:from-white before:to-white/80
                    before:transition-transform before:duration-300 before:ease-out
                    before:-translate-x-full
                    before:-z-10

                    hover:before:translate-x-0
                    hover:shadow-xl
                    active:scale-[0.98]
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {label.toUpperCase()}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ---------- Informations additionnelles ---------- */}
          <div className="mt-auto pb-8 text-center text-white/80 text-sm px-4">
            <p className="font-bold">Azias FC</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565229806192"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/aziasfc"
                className="hover:text-white transition-colors"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
