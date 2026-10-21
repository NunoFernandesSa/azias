/**
 * @author: Nuno Fernandes
 * @license MIT
 */

// ----- react/nextjs -----
import { JSX } from "react";

// ----- components -----
import HomeClubStory from "../components/features/home/HomeClubStory";
import HomeMatchShowcase from "../components/features/home/HomeMatchShowcase";
import HomeSponsorsSection from "../components/features/home/HomeSponsorsSection";
import HomeVisitSection from "../components/features/home/HomeVisitSection";
import Hero from "../components/features/hero/Hero";
import { SiteSection } from "../components/layout/SiteSection";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />

      <SiteSection id="home-content" className="pt-8 md:pt-10">
        <HomeMatchShowcase />
      </SiteSection>

      <SiteSection size="wide" className="pt-0">
        <HomeClubStory />
      </SiteSection>

      <SiteSection tone="muted">
        <HomeSponsorsSection />
      </SiteSection>

      <SiteSection size="wide">
        <HomeVisitSection />
      </SiteSection>
    </>
  );
}
