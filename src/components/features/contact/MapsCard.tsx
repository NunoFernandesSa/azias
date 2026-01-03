import { Card } from "../../ui/card";

export default function MapsCard() {
  return (
    <Card className="p-0 m-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3848121857786!2d-8.365324423425053!3d41.77691977174226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd250f08fdba3cb3%3A0xc741083a73dd31e1!2sCampo%20de%20Futebol%20da%20Manguela!5e0!3m2!1sfr!2spt!4v1767123579062!5m2!1sfr!2spt"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[350px] rounded-lg"
      ></iframe>
    </Card>
  );
}
