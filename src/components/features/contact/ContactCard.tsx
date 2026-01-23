// ---------- React/Next ----------
import Link from "next/link";

// ---------- Components ----------
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";

// ---------- Icons ----------
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { JSX } from "react";

/**
 * A card component for contact information.
 *
 * This component renders a card with the title "Informações de Contacto" and contact information
 * including phone number, email and address, and social media links.
 *
 * @returns {JSX.Element} - the contact card component
 */
export default function ContactCard(): JSX.Element {
  const phoneNumber = "+351 932 287 445";
  const email = "contacto@gmail.com";
  const address = "Campo de Futebol da Manguela, Azias - Ponte da Barca";

  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <CardHeader>
        <p className="text-3xl font-bold">Informações de Contacto</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 text-lg font-semibold">
        <p>📞 {phoneNumber}</p>
        <p>📧 {email}</p>
        <p className="flex flex-col">📍{address}</p>

        <div className="flex gap-6">
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link
              href="https://www.facebook.com/profile.php?id=61565229806192"
              target="_blank"
              title="Facebook"
            >
              <FaFacebook />
            </Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link
              href="https://www.instagram.com/aziasfc"
              target="_blank"
              title="Instagram"
            >
              <FaInstagram />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
