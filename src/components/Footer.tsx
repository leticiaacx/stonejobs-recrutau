import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vagas" className="text-background/80 hover:text-background transition-colors">
                  Vagas
                </a>
              </li>
              <li>
                <a href="#cargos" className="text-background/80 hover:text-background transition-colors">
                  Conheça os Cargos
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Vagas divulgadas por:</h3>
            <p className="font-bold text-xl">RecrutAÚ - Stone Franquias</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <p className="text-background/80 mb-4">
              Dúvidas? Entre em contato conosco para mais informações sobre as vagas.
            </p>
            <Button 
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
              asChild
            >
              <a 
                href="https://wa.me/5585981725203" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp RecrutAÚ
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Stone Franquias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
