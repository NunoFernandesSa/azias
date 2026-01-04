import Container from "@/src/components/common/Container";
import Title from "@/src/components/common/Title";
import ShopGrid from "@/src/components/features/shop/ShopGrid";
import { products } from "@/src/constants/constants";

export default function ShoppingPage() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <div className="flex items-center justify-center flex-col gap-6">
        <Title className="text-primary">Loja Oficial</Title>
        <p className="text-base md:text-lg font-semibold text-primary flex flex-col items-center justify-center text-center">
          <span>Descubra a nossa coleção exclusiva de produtos oficiais.</span>
          <span> Apoie a sua equipa com estilo!</span>
        </p>
      </div>

      <ShopGrid products={products} />
    </Container>
  );
}
