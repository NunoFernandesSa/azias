// ---------- React/Next ----------
import Link from "next/link";
import { JSX } from "react";

// ---------- Constants ----------
import { CONTACT } from "@/src/constants/data/contact.constants";

// ---------- Components ----------
import { Button } from "../../ui/button";

// ---------- Icons ----------
import { BiEnvelope, BiMapPin, BiPhoneCall, BiTimeFive } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/**
 * A card component for contact information.
 *
 * This component renders a card with the title "Informações de Contacto" and contact information
 * including phone number, email and address, and social media links.
 *
 * @returns {JSX.Element} - the contact card component
 */
export default function ContactCard(): JSX.Element {
  const phoneNumber = CONTACT.phoneDisplay;
  const phoneHref = CONTACT.phoneHref;
  const email = CONTACT.email;
  const emailHref = CONTACT.emailHref;
  const address = CONTACT.address;
  const mapsHref = CONTACT.mapsHref;
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
    <section aria-labelledby="contact-title" className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Falar connosco
        </p>
        <div className="space-y-3">
          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
          >
            Informações de contacto
          </h2>
          <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            Estamos disponíveis para esclarecer dúvidas, receber apoios e
            aproximar mais pessoas do clube.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid gap-4">
          {contactItems.map(({ icon: Icon, label, value, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-start gap-4 border-b border-primary/10 pb-5 transition-colors duration-300 hover:text-primary"
            >
              <div className="border border-primary/10 bg-muted/40 p-3 text-primary">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 break-words text-base font-semibold leading-7 text-primary md:text-lg">
                  {value}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-primary/10 pt-6">
          <div className="flex items-center gap-3 text-primary">
            <BiTimeFive size={22} />
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Disponibilidade
            </p>
          </div>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
            Envie-nos uma mensagem e responderemos assim que possível. Também
            pode acompanhar a atividade do clube nas redes sociais.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button
            variant={"secondary"}
            className="cursor-pointer rounded-sm"
            asChild
          >
            <Link
              href={CONTACT.facebook}
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FaFacebook />
              Facebook
            </Link>
          </Button>
          <Button
            variant={"secondary"}
            className="cursor-pointer rounded-sm"
            asChild
          >
            <Link
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <FaInstagram />
              Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
