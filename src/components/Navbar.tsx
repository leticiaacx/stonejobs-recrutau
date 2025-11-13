import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const cities = [
  { name: "Mãe do Rio/PA", key: "mae-do-rio" },
  { name: "Santarém/PA", key: "santarem" },
  { name: "Pacajus/CE", key: "pacajus" },
  { name: "Aracati/CE", key: "aracati" },
  { name: "Uruaçu/GO", key: "uruacu" },
  { name: "Santa Maria/ES", key: "santa-maria" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl">RecrutAÚ - Stone Franquias</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="/#vagas" className="text-foreground hover:text-primary transition-colors">
            Vagas
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors focus:outline-none">
              Cidades
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border z-50">
              {cities.map((city) => (
                <DropdownMenuItem key={city.key} asChild>
                  <a
                    href={`/cidades#${city.key}`}
                    className="cursor-pointer"
                  >
                    {city.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/#beneficios" className="text-foreground hover:text-primary transition-colors">
            Por que Stone?
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
