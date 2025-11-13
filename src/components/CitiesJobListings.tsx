import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const jobsByCity = {
  "mae-do-rio": [
    {
      city: "Mãe do Rio",
      state: "PA",
      franchise: "São Miguel",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://saomiguel.rhinoagencia.com.br/vagas"
    }
  ],
  "santarem": [
    {
      city: "Santarém",
      state: "PA",
      franchise: "Santarém",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://santarem.rhinoagencia.com.br/vagas"
    },
    {
      city: "Santarém",
      state: "PA",
      franchise: "Santarém",
      position: "Operador Logístico",
      description: "Responsável pela gestão de estoque, organização do almoxarifado, controle de entregas e recebimentos de equipamentos e materiais.",
      activities: [
        "Recebimento e conferência de mercadorias",
        "Organização do estoque",
        "Separação e preparação de pedidos",
        "Controle de entrada e saída de materiais",
        "Apoio nas entregas quando necessário"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com entregas (desejável)",
        "Organização",
        "Atenção aos detalhes",
        "CNH categoria B (desejável)"
      ],
      link: "https://santarem.rhinoagencia.com.br/vagas"
    }
  ],
  "pacajus": [
    {
      city: "Pacajus",
      state: "CE",
      franchise: "Pacajus",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://pacajus.rhinoagencia.com.br/vagas"
    }
  ],
  "aracati": [
    {
      city: "Aracati",
      state: "CE",
      franchise: "Aracati",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://aracati.rhinoagencia.com.br/vagas"
    }
  ],
  "uruacu": [
    {
      city: "Uruaçu",
      state: "GO",
      franchise: "Uruaçu",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://uruacu.rhinoagencia.com.br/vagas"
    }
  ],
  "santa-maria": [
    {
      city: "Santa Maria de Jetibá",
      state: "ES",
      franchise: "Santa Maria de Jetibá",
      position: "Agente Comercial",
      description: "Responsável por prospectar novos clientes, realizar vendas de máquinas de cartão e serviços Stone, e manter relacionamento com os clientes.",
      activities: [
        "Prospecção ativa de novos clientes",
        "Apresentação de produtos e serviços Stone",
        "Fechamento de vendas",
        "Suporte e atendimento ao cliente",
        "Alcance de metas comerciais"
      ],
      requirements: [
        "Ensino médio completo",
        "Experiência com vendas (desejável)",
        "Boa comunicação",
        "Proatividade e dinamismo",
        "CNH categoria B (desejável)"
      ],
      link: "https://jetiba.rhinoagencia.com.br/vagas"
    }
  ]
};

const CitiesJobListings = () => {
  return (
    <section id="cidades" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Vagas por Cidade</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selecione sua cidade e confira as oportunidades disponíveis
        </p>

        <Tabs defaultValue="mae-do-rio" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full mb-8 h-auto gap-2">
            <TabsTrigger value="mae-do-rio">Mãe do Rio/PA</TabsTrigger>
            <TabsTrigger value="santarem">Santarém/PA</TabsTrigger>
            <TabsTrigger value="pacajus">Pacajus/CE</TabsTrigger>
            <TabsTrigger value="aracati">Aracati/CE</TabsTrigger>
            <TabsTrigger value="uruacu">Uruaçu/GO</TabsTrigger>
            <TabsTrigger value="santa-maria">Santa Maria/ES</TabsTrigger>
          </TabsList>

          {Object.entries(jobsByCity).map(([cityKey, jobs]) => (
            <TabsContent key={cityKey} value={cityKey} className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {jobs.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2 text-primary">
                          <MapPin className="h-5 w-5" />
                          <span className="font-semibold">{job.city}/{job.state}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm">{job.franchise}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{job.position}</CardTitle>
                      <CardDescription className="mt-2">{job.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Atividades do dia a dia:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {job.activities.map((activity, idx) => (
                            <li key={idx} className="text-sm">{activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Requisitos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm">{req}</li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full mt-4" 
                        onClick={() => window.open(job.link, '_blank')}
                      >
                        Candidatar-se Agora
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CitiesJobListings;