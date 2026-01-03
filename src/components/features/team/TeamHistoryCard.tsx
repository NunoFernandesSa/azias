import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

export default function TeamHistoryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">A nossa história</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">
          Fundado em Azias, Ponte da Barca, o Azias FC nasceu da paixão pelo
          futebol e da vontade de unir a comunidade local em torno de valores
          sólidos: <b>espírito de equipa, respeito e compromisso.</b>
        </p>
      </CardContent>
    </Card>
  );
}
