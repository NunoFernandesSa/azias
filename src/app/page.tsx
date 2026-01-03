import Container from "../components/common/Container";
import Hero from "../components/features/hero/Hero";
import NextMatchCard from "../components/features/matches/NextMatchCard";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Autres sections de la page d'accueil */}
      <Container className="py-8 px-1 lg:px-16">
        <section
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-12"
          id="next-match"
        >
          <NextMatchCard />
        </section>
      </Container>
    </>
  );
}
