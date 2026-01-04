import Container from "../components/common/Container";
import Hero from "../components/features/hero/Hero";
import NextMatchCard from "../components/features/matches/NextMatchCard";
import SponsorsComponent from "../components/features/sponsors/SponsorsComponent";
import TeamCard from "../components/features/team/TeamCard";
import TeamHistoryCard from "../components/features/team/TeamHistoryCard";
import ContactCard from "../components/features/contact/ContactCard";
import MapsCard from "../components/features/contact/MapsCard";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Autres sections de la page d'accueil */}
      <Container className="px-1 py-16 lg:px-16 grid grid-cols-1 xl:grid-cols-2 gap-6 items-center justify-center">
        <NextMatchCard />
        <TeamCard />
      </Container>

      <Container className="w-full lg:w-1/2 mx-auto px-2">
        <TeamHistoryCard />
      </Container>

      <Container className="px-1 py-16 lg:px-16">
        <SponsorsComponent />
      </Container>

      <Container className="px-1 lg:mx-16 my-16 grid grid-cols-1 xl:grid-cols-[3fr_7fr] gap-6">
        <ContactCard />
        <MapsCard />
      </Container>
    </>
  );
}
