import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Autonomia e Flexibilidade",
    description: "Gerencie seu tempo e defina suas estratégias de trabalho."
  },
  {
    icon: GraduationCap,
    title: "Treinamento Completo",
    description: "Formação inicial e contínua para desenvolver suas habilidades."
  },
  {
    icon: Shield,
    title: "Suporte Dedicado",
    description: "Time Stone sempre disponível para apoiar seu crescimento."
  },
  {
    icon: Zap,
    title: "Tecnologia de Ponta",
    description: "Ferramentas e sistemas mais avançados do mercado."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefícios e Vantagens</h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para ter sucesso na sua carreira.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
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

export default Benefits;
