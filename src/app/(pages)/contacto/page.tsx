// ----------- components -----------
import PageIntro from "@/src/components/common/PageIntro";
import ContactCard from "@/src/components/features/contact/ContactCard";
import MapsCard from "@/src/components/features/contact/MapsCard";
import { SiteSection } from "@/src/components/layout/SiteSection";

export default function ContactPage() {
  return (
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <PageIntro
        eyebrow="A.D. Azias"
        title="Contacto"
        description="Entre em contacto com o clube, acompanhe a nossa atividade e encontre rapidamente o Campo da Manguela em Azias, Ponte da Barca."
      />

      <div className="grid gap-14 pt-12 md:pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <ContactCard />
        <MapsCard />
      </div>
    </SiteSection>
  );
}
