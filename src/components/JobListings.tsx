import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const jobs = [
  {
    city: "Mãe do Rio, PA",
    franchise: "Franquia de São Miguel do Guamá",
    position: "Agente Comercial",
    description: "O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios uma nova realidade empreendedora.",
    activities: [
      "Prospectar novos clientes na rota do polo",
      "Gerenciar carteira de clientes ativos e pós-venda",
      "Participar das matinais diárias do time",
      "Entregar atendimento de excelência ao cliente"
    ],
    requirements: [
      "Ensino médio completo",
      "Ter CNH",
      "Experiência com vendas (desejável)",
      "Ensino Superior completo ou cursando (desejável)"
    ],
    link: "https://saomiguel.rhinoagencia.com.br/vagas"
  },
  {
    city: "Santarém, PA",
    franchise: "Franquia de Santarém",
    position: "Agente Comercial",
    description: "O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios uma nova realidade empreendedora.",
    activities: [
      "Prospectar novos clientes na rota do polo",
      "Gerenciar carteira de clientes ativos e pós-venda",
      "Participar das matinais diárias do time",
      "Entregar atendimento de excelência ao cliente"
    ],
    requirements: [
      "Ensino médio completo",
      "Ter CNH",
      "Experiência com vendas (desejável)",
      "Ensino Superior completo ou cursando (desejável)"
    ],
    link: "https://santarem.rhinoagencia.com.br/vagas"
  },
  {
    city: "Santarém, PA",
    franchise: "Franquia de Santarém",
    position: "Operador Logístico",
    description: "O Operador Logístico (Green Angel) atende clientes em seus pontos de venda, entregando maquininhas e ajudando na utilização dos produtos. Faz parte da logística própria da Stone, planejando e gerenciando toda a cadeia logística.",
    activities: [
      "Entregar maquininhas aos clientes",
      "Orientar clientes na utilização dos produtos",
      "Oferecer treinamento aos donos de negócios",
      "Gerir estoque e realizar logística reversa",
      "Organizar e inventariar o estoque",
      "Fazer ordens de serviço externas"
    ],
    requirements: [
      "Ensino médio completo",
      "Disponibilidade para atividades externas",
      "Organização e gestão de estoque",
      "Experiência com entregas (desejável)"
    ],
    link: "https://santarem.rhinoagencia.com.br/vagas"
  },
  {
    city: "Aracati, CE",
    franchise: "Franquia de Aracati",
    position: "Agente Comercial",
    description: "O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios uma nova realidade empreendedora.",
    activities: [
      "Prospectar novos clientes na rota do polo",
      "Gerenciar carteira de clientes ativos e pós-venda",
      "Participar das matinais diárias do time",
      "Entregar atendimento de excelência ao cliente"
    ],
    requirements: [
      "Ensino médio completo",
      "Ter CNH",
      "Experiência com vendas (desejável)",
      "Ensino Superior completo ou cursando (desejável)"
    ],
    link: "https://aracati.rhinoagencia.com.br/vagas"
  },
  {
    city: "Uruaçu, GO",
    franchise: "Franquia de Uruaçu",
    position: "Agente Comercial",
    description: "O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios uma nova realidade empreendedora.",
    activities: [
      "Prospectar novos clientes na rota do polo",
      "Gerenciar carteira de clientes ativos e pós-venda",
      "Participar das matinais diárias do time",
      "Entregar atendimento de excelência ao cliente"
    ],
    requirements: [
      "Ensino médio completo",
      "Ter CNH",
      "Experiência com vendas (desejável)",
      "Ensino Superior completo ou cursando (desejável)"
    ],
    link: "https://uruacu.rhinoagencia.com.br/vagas"
  },
  {
    city: "Santa Maria de Jetibá, ES",
    franchise: "Franquia de Santa Maria de Jetibá",
    position: "Agente Comercial",
    description: "O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios uma nova realidade empreendedora.",
    activities: [
      "Prospectar novos clientes na rota do polo",
      "Gerenciar carteira de clientes ativos e pós-venda",
      "Participar das matinais diárias do time",
      "Entregar atendimento de excelência ao cliente"
    ],
    requirements: [
      "Ensino médio completo",
      "Ter CNH",
      "Experiência com vendas (desejável)",
      "Ensino Superior completo ou cursando (desejável)"
    ],
    link: "https://santamariadojetiba.rhinoagencia.com.br/vagas"
  },
  {
    city: "Santa Maria de Jetibá, ES",
    franchise: "Franquia de Santa Maria de Jetibá",
    position: "Operador Logístico",
    description: "O Operador Logístico (Green Angel) atende clientes em seus pontos de venda, entregando maquininhas e ajudando na utilização dos produtos. Faz parte da logística própria da Stone, planejando e gerenciando toda a cadeia logística.",
    activities: [
      "Entregar maquininhas aos clientes",
      "Orientar clientes na utilização dos produtos",
      "Oferecer treinamento aos donos de negócios",
      "Gerir estoque e realizar logística reversa",
      "Organizar e inventariar o estoque",
      "Fazer ordens de serviço externas"
    ],
    requirements: [
      "Ensino médio completo",
      "Disponibilidade para atividades externas",
      "Organização e gestão de estoque",
      "Experiência com entregas (desejável)"
    ],
    link: "https://santamariadojetiba.rhinoagencia.com.br/vagas"
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
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">O que faz?</h4>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Atividades do dia a dia:</h4>
                  <ul className="space-y-1">
                    {job.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Requisitos:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
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
