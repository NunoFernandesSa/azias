import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import ShopGrid from "@/src/components/features/shop/ShopGrid";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { products } from "@/src/constants/constants";

export default function ShoppingPage() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <div className="flex items-center justify-center flex-col gap-6">
        <Title className="text-primary">Loja Oficial</Title>
        <p className="text-base md:text-lg font-medium md:font-semibold text-primary flex flex-col items-center justify-center text-center">
          <span>Descubra a nossa coleção exclusiva de produtos oficiais.</span>
          <span> Apoie a sua equipa com estilo!</span>
        </p>
      </div>

      <Card className="bg-secondary/30 mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            📦 Como encomendar?
          </CardTitle>
        </CardHeader>
        <CardContent className="font-semibold">
          <p>
            Para encomendar um produto, contacte-nos diretamente por telefone
            através do número{" "}
            <b>
              <a href="tel:+351932287445">+351 932 287 445</a>
            </b>
            ou por e-mail para o endereço
            <b>
              <a href="mailto:contato@azias-fc.com"> contato@azias-fc.com</a>
            </b>
            .
          </p>
          <p>
            Por favor, especifique o nome do produto, o tamanho, se necessário,
            e as suas informações de contacto.
          </p>
          <p>
            Entraremos em contacto consigo para finalizar o pedido e
            providenciar a entrega.
          </p>
          <p>Agradecemos o seu apoio!</p>
        </CardContent>
      </Card>

      <ShopGrid products={products} />
    </Container>
  );
}
