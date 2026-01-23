// ----------- components -----------
import Container from "@/src/components/common/Container";
import ContactCard from "@/src/components/features/contact/ContactCard";
import MapsCard from "@/src/components/features/contact/MapsCard";

export default function ContactPage() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0 flex flex-col gap-12">
      <ContactCard />
      <MapsCard />
    </Container>
  );
}
