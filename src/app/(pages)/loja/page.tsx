// ---------- React/Next ----------
import Link from "next/link";
import { JSX } from "react";
import {
  BiEnvelope,
  BiPackage,
  BiPhoneCall,
  BiShieldQuarter,
} from "react-icons/bi";

// ---------- Components ----------
import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import ShopGrid from "@/src/components/features/shop/ShopGrid";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

// ---------- Constants ----------
import { products } from "@/src/constants/constants";

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
  const productCount = products.length;
  const discountedProducts = products.filter(
    (product) => typeof product.discount === "number" && product.discount > 0,
  ).length;

  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <div className="flex items-center justify-center flex-col gap-6 text-center">
        <Title className="text-primary">Loja Oficial</Title>
        <p className="max-w-3xl text-base md:text-lg font-medium md:font-semibold text-primary">
          Descubra a nossa coleção oficial, apoie o clube e encomende os seus
          produtos de forma simples, direta e sem complicações.
        </p>
      </div>

      <Card className="relative isolate mt-10 overflow-hidden rounded-2xl border-primary/15 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,215,0,0.14),_transparent_24%)]"
        />

        <CardHeader className="relative z-10 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur-sm">
              Loja do clube
            </span>
          </div>

          <CardTitle className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Equipe-se com as cores da A.D. Azias
            </h1>
            <p className="max-w-3xl text-base md:text-lg leading-relaxed text-primary-foreground/85">
              Cada encomenda ajuda a dar mais visibilidade ao clube e a apoiar a
              nossa presença dentro e fora de campo.
            </p>
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-secondary">
                <BiPackage size={22} />
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Como encomendar
                </p>
              </div>
              <div className="mt-4 space-y-3 text-base leading-7 text-primary-foreground/90">
                <p>
                  Contacte-nos por telefone ou e-mail e indique o nome do
                  produto, o tamanho pretendido e os seus dados de contacto.
                </p>
                <p>
                  Depois confirmaremos a disponibilidade, o pagamento e a forma
                  de entrega ou recolha.
                </p>
                <p>
                  Processo simples, rápido e pensado para facilitar a encomenda.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
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
                className="w-full sm:w-auto bg-transparent text-white hover:text-primary"
              >
                <Link href={emailHref}>
                  <BiEnvelope />
                  Enviar e-mail
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----- shop ----- */}
      <ShopGrid products={products} />
    </Container>
  );
}
