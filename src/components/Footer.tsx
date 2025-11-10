const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl">RecrutAÚ - Stone Franquias</span>
            </div>
            <p className="text-background/80">
              Transformando o mercado de pagamentos e empreendedorismo no Brasil.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#vagas" className="text-background/80 hover:text-background transition-colors">
                  Vagas Abertas
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-background transition-colors">
                  Por que Stone?
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <p className="text-background/80">
              Entre em contato conosco para saber mais sobre as oportunidades disponíveis.
            </p>
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
