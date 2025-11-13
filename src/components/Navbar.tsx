import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl">RecrutAÚ - Stone Franquias</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="/#vagas" className="text-foreground hover:text-primary transition-colors">
            Vagas
          </a>
          <a href="/cidades" className="text-foreground hover:text-primary transition-colors">
            Cidades
          </a>
          <a href="/#beneficios" className="text-foreground hover:text-primary transition-colors">
            Por que Stone?
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
