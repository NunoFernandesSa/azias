// ---------- React/Next ----------
import Link from "next/link";

// ---------- Components ----------
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

// ---------- Icons ----------
import { BiEnvelope, BiMapPin, BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { JSX } from "react";

/**
 * A card component for contact information.
 *
 * This component renders a card with the title "Informações de Contacto" and contact information
 * including phone number, email and address, and social media links.
 *
 * @returns {JSX.Element} - the contact card component
 */
export default function ContactCard(): JSX.Element {
  const phoneNumber = "+351 932 287 445";
  const phoneHref = "tel:+351932287445";
  const email = "azias-fc@gmail.com";
  const emailHref = `mailto:${email}`;
  const address = "Campo de Futebol da Manguela, Azias - Ponte da Barca";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const contactItems = [
    {
      icon: BiPhoneCall,
      label: "Telefone",
      value: phoneNumber,
      href: phoneHref,
    },
    {
      icon: BiEnvelope,
      label: "Email",
      value: email,
      href: emailHref,
    },
    {
      icon: BiMapPin,
      label: "Morada",
      value: address,
      href: mapsHref,
      external: true,
    },
  ];

  return (
    <Card
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-primary/15 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_24%)]"
      />

      <CardHeader className="relative z-10 gap-4">
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
          Falar connosco
        </span>
        <CardTitle className="space-y-3">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold">
            Informações de contacto
          </h2>
          <p className="max-w-md text-base md:text-lg leading-relaxed text-primary-foreground/85">
            Estamos disponíveis para esclarecer dúvidas, receber apoios e
            aproximar mais pessoas do clube.
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 flex flex-col gap-6">
        <div className="grid gap-4">
          {contactItems.map(({ icon: Icon, label, value, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-2xl border border-white/12 bg-white/10 p-4 transition-all duration-300 hover:bg-white/14 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="rounded-full bg-secondary/90 p-3 text-primary">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {label}
                </p>
                <p className="mt-1 text-base md:text-lg font-semibold leading-7 text-white break-words">
                  {value}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-secondary">
            <BiTimeFive size={22} />
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Disponibilidade
            </p>
          </div>
          <p className="mt-3 text-base leading-7 text-primary-foreground/85">
            Envie-nos uma mensagem e responderemos assim que possível. Também
            pode acompanhar a atividade do clube nas redes sociais.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link
              href="https://www.facebook.com/profile.php?id=61565229806192"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FaFacebook />
              Facebook
            </Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link
              href="https://www.instagram.com/aziasfc"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagram />
              Instagram
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
