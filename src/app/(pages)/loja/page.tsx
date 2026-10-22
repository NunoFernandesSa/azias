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
import { products } from "@/src/constants/data/shop.constants";

/**
 * A shopping page component.
 * This component renders a page with a title, a description of the products, a call to action
 * to contact the team, and a grid of products.
 * The component is responsive and has a rounded corners.
 * The contact information includes phone number and email.
 * The products grid displays products in a responsive grid.
 * The products are fetched from the products constant.
 * @returns {JSX.Element} - the shopping page component
 */
export default function ShoppingPage(): JSX.Element {
  const phoneNumber = "932287445";
  const email = "azias-fc@gmail.com";
  const phoneHref = `tel:+351${phoneNumber}`;
  const emailHref = `mailto:${email}`;
  const stats = [
    { value: products.length, label: "Produtos disponíveis" },
    { value: "2", label: "Canais de encomenda" },
  ];

  return (
    <SiteSection className="pt-28 md:pt-32" size="wide">
      <PageIntro
        eyebrow="Loja oficial"
        title="Merch do Clube"
        description="Descobre a coleção oficial da A.D. Azias, apoia o clube e encomenda os teus produtos de forma simples, direta e sem complicações."
        stats={stats}
        aside={
          <div className="space-y-5">
            <div className="flex items-start gap-3 border-b border-primary/10 pb-5">
              <BiPackage size={20} className="mt-1 text-primary" />
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
