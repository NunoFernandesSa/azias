import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactCard() {
  return (
    <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <CardHeader>
        <p className="text-3xl font-bold">Informações de Contacto</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 text-lg font-semibold">
        <p>📞 +351 258 258 258</p>
        <p>📧 contato@azias-fc.com</p>
        <p className="flex flex-col">
          📍 Campo de Futebol da Manguela,<span> Azias Ponte da Barca</span>
        </p>

        <div className="flex gap-6">
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link
              href="https://www.facebook.com/profile.php?id=61565229806192"
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </Button>
          <Button variant={"secondary"} className="cursor-pointer" asChild>
            <Link href="https://www.instagram.com/aziasfc" target="_blank">
              <FaInstagram />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
