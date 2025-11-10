import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Ambiente dinâmico com chances reais de desenvolvimento profissional e evolução rápida."
  },
  {
    icon: Heart,
    title: "Cultura de Impacto",
    description: "Trabalhe com autonomia e foco no sucesso do empreendedor brasileiro."
  },
  {
    icon: Users,
    title: "Time de Campeões",
    description: "Colaboração e aprendizado contínuo com os melhores do mercado."
  },
  {
    icon: Award,
    title: "Reconhecimento",
    description: "Remuneração competitiva e bônus por performance."
  }
];

const WhyStone = () => {
  return (
    <section id="beneficios" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher uma Franquia Stone?
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos muito mais do que um emprego. Oferecemos uma oportunidade de crescimento e impacto real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStone;
