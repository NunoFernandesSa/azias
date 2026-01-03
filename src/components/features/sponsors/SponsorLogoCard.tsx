import { Sponsor } from "@/src/types/sponsors-props";
import Link from "next/link";

export default function SponsorLogoCard({ id, name, logo, website }: Sponsor) {
  return (
    <div
      key={id}
      className="hover:scale-102 transition-all duration-300 w-26 h-26 sm:w-36 sm:h-36 lg:w-46 lg:h-46 rounded-lg overflow-hidden bg-primary shadow-sm shadow-secondary cursor-pointer"
    >
      <Link href={website} target="_blank" title="Consultar">
        <img src={logo} alt={name} className="object-cover rounded-lg w-full" />
      </Link>
    </div>
  );
}
