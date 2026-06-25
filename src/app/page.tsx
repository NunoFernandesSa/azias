/**
 * @author: Nuno Fernandes
 * @license MIT
 */

// ----- react/nextjs -----
import { JSX } from "react";

// ----- components -----
import Container from "../components/common/Container";
import Hero from "../components/features/hero/Hero";
import NextMatchCard from "../components/features/matches/NextMatchCard";
import SponsorsComponent from "../components/features/sponsors/SponsorsComponent";
import TeamCard from "../components/features/team/TeamCard";
import TeamHistoryCard from "../components/features/team/TeamHistoryCard";
import ContactCard from "../components/features/contact/ContactCard";
import MapsCard from "../components/features/contact/MapsCard";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />

      <Container
        id="home-content"
        className="px-1 py-16 lg:px-16 grid grid-cols-1 xl:grid-cols-2 gap-6 items-center justify-center"
      >
        <NextMatchCard />
        <TeamCard />
      </Container>

      <Container className="w-full max-w-6xl my-16 mx-auto px-2">
        <TeamHistoryCard />
      </Container>

      <Container className="px-1 py-16 lg:px-16">
        <SponsorsComponent />
      </Container>

      <Container className="w-full max-w-7xl px-2 lg:px-8 my-16 mx-auto grid grid-cols-1 xl:grid-cols-[3.5fr_6.5fr] gap-6">
        <ContactCard />
        <MapsCard />
      </Container>
    </>
  );
}
