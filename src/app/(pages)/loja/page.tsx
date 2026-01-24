// ---------- React/Next ----------
import { JSX } from "react";

// ---------- Components ----------
import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import ShopGrid from "@/src/components/features/shop/ShopGrid";
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

  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <div className="flex items-center justify-center flex-col gap-6">
        <Title className="text-primary">Loja Oficial</Title>
        <p className="text-base md:text-lg font-medium md:font-semibold text-primary flex flex-col items-center justify-center text-center">
          <span>Descubra a nossa coleção exclusiva de produtos oficiais.</span>
          <span> Apoie a sua equipa com estilo!</span>
        </p>
      </div>
      {/* ----- Info card ----- */}
      <Card className="bg-secondary/30 mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            📦 Como encomendar ?
          </CardTitle>
        </CardHeader>
        <CardContent className="font-semibold">
          <div className="flex flex-col gap-1">
            <p>
              Para encomendar um produto, contacte-nos diretamente por telefone
              através do número
              <b>
                <a
                  href={`tel:+351${phoneNumber}`}
                  className="hover:underline transition-all duration-300 ease-in-out"
                >
                  <span className="italic text-sm font-normal">(+351)</span>{" "}
                  {phoneNumber}
                </a>
              </b>
            </p>
            <p>
              ou por e-mail para o endereço
              <b>
                <a
                  href={`mailto:${email}`}
                  className="hover:underline transition-all duration-300 ease-in-out"
                >
                  {" "}
                  {email}
                </a>
              </b>
              .
            </p>
            <p>
              Por favor, especifique o nome do produto, o tamanho, se
              necessário, e as suas informações de contacto.
            </p>
            <p>
              Entraremos em contacto consigo para finalizar o pedido e
              providenciar a entrega.
            </p>
            <p>Agradecemos o seu apoio!</p>
          </div>
        </CardContent>
      </Card>

      {/* ----- shop ----- */}
      <ShopGrid products={products} />
    </Container>
  );
}
