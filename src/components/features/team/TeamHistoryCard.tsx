// ---------- React/Next ----------
import { JSX } from "react";

// ---------- components ----------
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

/**
 * A card component for the team's history.
 *
 * This component renders a card with the title "A nossa história" and a paragraph
 * describing the team's history.
 *
 * @returns {JSX.Element} - the team history card component
 */
export default function TeamHistoryCard(): JSX.Element {
  const title = "A nossa história";
  const description = `Fundado em Azias, Ponte da Barca, o Azias FC nasceu da paixão pelo
          futebol e da vontade de unir a comunidade local em torno de valores
          sólidos - espírito de equipa, respeito e compromisso.`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">{description}</p>
      </CardContent>
    </Card>
  );
}
