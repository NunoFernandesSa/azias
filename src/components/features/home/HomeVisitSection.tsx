import Link from "next/link";
import { JSX } from "react";
import { BiEnvelope, BiMapPin, BiPhoneCall } from "react-icons/bi";

import { Button } from "@/src/components/ui/button";

const contactItems = [
  {
    label: "Telefone",
    value: "+351 932 287 445",
    href: "tel:+351932287445",
    icon: BiPhoneCall,
  },
  {
    label: "Email",
    value: "azias-fc@gmail.com",
    href: "mailto:azias-fc@gmail.com",
    icon: BiEnvelope,
  },
  {
    label: "Campo",
    value: "Campo de Futebol da Manguela, Azias - Ponte da Barca",
    href: "https://www.google.com/maps/search/?api=1&query=Campo%20de%20Futebol%20da%20Manguela%2C%20Azias%20-%20Ponte%20da%20Barca",
    icon: BiMapPin,
    external: true,
  },
];

export default function HomeVisitSection(): JSX.Element {
  return (
    <section
      aria-labelledby="home-visit-title"
      className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
    >
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Contacto e localização
        </p>

        <h2
          id="home-visit-title"
          className="max-w-xl text-3xl font-bold tracking-tight text-primary md:text-5xl"
        >
          Vem conhecer o clube, o campo e a comunidade que faz Azias viver.
        </h2>

        <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
          Entre em contacto connosco, acompanhe a atividade do clube e visite o
          Campo da Manguela para sentir de perto a identidade da A.D. Azias.
        </p>

        <div className="space-y-5 border-t border-primary/10 pt-5">
          {contactItems.map(({ label, value, href, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="grid gap-2 border-b border-primary/8 pb-5 transition-colors hover:text-primary"
            >
              <div className="flex items-center gap-3 text-primary">
                <Icon size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  {label}
                </span>
              </div>
              <p className="max-w-lg text-base font-semibold leading-7 text-primary">
                {value}
              </p>
            </Link>
          ))}
        </div>

        <Button asChild size="lg" className="rounded-sm px-7">
          <Link href="/contacto">Entrar em contacto</Link>
        </Button>
      </div>

      <div className="min-h-[480px] overflow-hidden border border-primary/10">
        <iframe
          title="Localização do Campo de Futebol da Manguela"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3848121857786!2d-8.365324423425053!3d41.77691977174226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd250f08fdba3cb3%3A0xc741083a73dd31e1!2sCampo%20de%20Futebol%20da%20Manguela!5e0!3m2!1sfr!2spt!4v1767123579062!5m2!1sfr!2spt"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[480px] w-full"
        />
      </div>
    </section>
  );
}
