import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroTeam from "@/assets/hero-team-edited.jpg";

const Hero = () => {
  return (
    <section className="relative bg-primary pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroTeam} 
          alt="Time Stone Franquias" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Faça Parte da Revolução Stone
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
          Junte-se ao time que está transformando o mercado de pagamentos e empreendedorismo no Brasil. 
          Sua carreira de impacto começa aqui!
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 animate-fade-in hover:scale-105 transition-transform"
          onClick={() => document.getElementById('vagas')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explorar Vagas
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
