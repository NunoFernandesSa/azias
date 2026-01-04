import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="lg:ml-48 md:px-8">
        <div className="flex flex-col items-center gap-3 py-6">
          <p className="text-xl font-semibold">Clube Amador INATEL</p>
          <div className="flex gap-0 md:gap-8 w-full justify-center items-center">
            <img
              src="/images/azias-fc-logo.webp"
              alt="Logo Inatel"
              className="w-30 md:w-36"
            />
            <img
              src="/images/logo-inatel.webp"
              alt="Logo Inatel"
              className="w-30 md:w-36"
            />
          </div>
        </div>
        <div className="container mx-auto h-16 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Azias FC - Todos os direitos
            reservados
          </p>

          <Button
            variant="link"
            className="text-sm font-light cursor-pointer text-primary-foreground ease-in-out transition-all duration-500 hover:text-primary-foreground/70"
          >
            Termos e Condições
          </Button>
        </div>
      </div>
    </footer>
  );
}
