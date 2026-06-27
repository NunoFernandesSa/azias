import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { BiEnvelope, BiMapPin, BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { navLinks } from "@/src/constants/constants";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+351 932 287 445";
  const email = "azias-fc@gmail.com";
  const address = "Campo de Futebol da Manguela, Azias - Ponte da Barca";

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground lg:ml-48 lg:w-[calc(100%-12rem)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.12),_transparent_26%)]"
      />

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-8 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative h-18 w-18 overflow-hidden rounded-full border border-white/15 bg-white/10 p-1">
                  <Image
                    src="/images/logo-ada.png"
                    alt="Logo da A.D. Azias"
                    fill
                    sizes="72px"
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                    Clube Amador INATEL
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">A.D. AZIAS</h2>
                </div>
              </div>

              <p className="max-w-md text-sm leading-7 text-primary-foreground/80">
                Um clube movido pela paixão pelo futebol, pela ligação à
                comunidade e pela vontade de representar Azias com orgulho.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Navegação
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                {navLinks.map(({ id, href, label }) => (
                  <Link
                    key={id}
                    href={href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Contacto
              </p>
              <div className="mt-4 flex flex-col gap-4 text-sm text-primary-foreground/80">
                <Link
                  href="tel:+351932287445"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <BiPhoneCall size={18} className="mt-0.5 text-secondary" />
                  <span>{phoneNumber}</span>
                </Link>
                <Link
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <BiEnvelope size={18} className="mt-0.5 text-secondary" />
                  <span>{email}</span>
                </Link>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <BiMapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-secondary"
                  />
                  <span>{address}</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                Comunidade
              </p>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
                Acompanha o clube nas redes sociais e fica a par das novidades,
                jogos e momentos da equipa.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61565229806192"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook da A.D. Azias"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-primary"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/aziasfc"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da A.D. Azias"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-primary"
                >
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
            <p>
              &copy; {currentYear} A.D. AZIAS. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido para valoriser o clube, os parceiros e a comunidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
