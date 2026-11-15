// ---------- React/Next ----------
import Link from "next/link";
import { JSX } from "react";
import { BiEnvelope, BiPackage, BiPhoneCall } from "react-icons/bi";

// ---------- Components ----------
import PageIntro from "@/src/components/common/PageIntro";
import ShopGrid from "@/src/components/features/shop/ShopGrid";
import { SiteSection } from "@/src/components/layout/SiteSection";
import { Button } from "@/src/components/ui/button";

// ---------- Constants ----------
import { CONTACT } from "@/src/constants/data/contact.constants";
import { products } from "@/src/constants/data/shop.constants";

/**
 * @description Shopping page component
 * @returns JSX.Element
 */
export default function ShoppingPage(): JSX.Element {
  const phoneHref = CONTACT.phoneHref;
  const emailHref = CONTACT.emailHref;

  return (
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <PageIntro
        eyebrow="Loja oficial"
        title="Merch do Clube"
        description="Descobre a coleção oficial da A.D. Azias, apoia o clube e encomenda os teus produtos de forma simples, direta e sem complicações."
        aside={
          <div className="space-y-5 bg-amber-100 p-6 rounded-md">
            <div className="flex items-start gap-3 border-b border-primary/10 pb-5">
              <BiPackage size={96} className="mt-1 text-primary" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Como encomendar
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Indica o produto, o tamanho pretendido e os teus dados de
                  contacto. Depois confirmamos disponibilidade, pagamento e
                  entrega.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-sm border border-[#1375d0]/15 px-6"
              >
                <Link href={phoneHref}>
                  <BiPhoneCall />
                  Ligar agora
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-sm px-6"
              >
                <Link href={emailHref}>
                  <BiEnvelope />
                  Enviar e-mail
                </Link>
              </Button>
            </div>
          </div>
        }
      />

      <div className="pt-12 md:pt-16">
        <ShopGrid products={products} />
      </div>
    </SiteSection>
  );
}
