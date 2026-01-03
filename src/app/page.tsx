import Container from "../components/common/Container";
import Hero from "../components/layout/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Autres sections de la page d'accueil */}
      <Container className="py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Próximo Jogo</h2>
          {/* Contenu du prochain match */}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nossa Equipa</h2>
          {/* Contenu de l'équipe */}
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Últimas Notícias</h2>
          {/* Dernières actualités */}
        </section>
      </Container>
    </>
  );
}
