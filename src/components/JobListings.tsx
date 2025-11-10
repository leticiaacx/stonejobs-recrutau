import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const jobs = [
  {
    city: "Mãe do Rio, PA",
    franchise: "Franquia de São Miguel do Guamá",
    position: "Agente Comercial",
    description: "O coração da nossa operação. Você será responsável por levar as soluções Stone aos empreendedores locais, construindo relacionamentos e impulsionando negócios.",
    requirements: [
      "Experiência em vendas externas",
      "Paixão por metas",
      "Foco no cliente"
    ],
    link: "https://saomiguel.rhinoagencia.com.br/vagas"
  },
  {
    city: "Santarém, PA",
    franchise: "Franquia de Santarém",
    position: "Agente Comercial",
    description: "O coração da nossa operação. Você será responsável por levar as soluções Stone aos empreendedores locais, construindo relacionamentos e impulsionando negócios.",
    requirements: [
      "Experiência em vendas externas",
      "Paixão por metas",
      "Foco no cliente"
    ],
    link: "https://santarem.rhinoagencia.com.br/vagas"
  },
  {
    city: "Altamira, PA",
    franchise: "Franquia de Altamira",
    position: "Agente Comercial",
    description: "O coração da nossa operação. Você será responsável por levar as soluções Stone aos empreendedores locais, construindo relacionamentos e impulsionando negócios.",
    requirements: [
      "Experiência em vendas externas",
      "Paixão por metas",
      "Foco no cliente"
    ],
    link: "https://altamira.rhinoagencia.com.br/vagas"
  }
];

const JobListings = () => {
  return (
    <section id="vagas" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Oportunidades Abertas</h2>
          <p className="text-xl text-muted-foreground">
            Confira as vagas disponíveis nas nossas franquias em diferentes cidades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">{job.city}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{job.franchise}</p>
                <CardTitle className="text-2xl">{job.position}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full" asChild>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    Candidatar-se Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
