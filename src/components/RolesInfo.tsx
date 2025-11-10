import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Package } from "lucide-react";

const RolesInfo = () => {
  return (
    <section id="cargos" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Conheça os Cargos</h2>
          <p className="text-xl text-muted-foreground">
            Entenda melhor sobre as oportunidades disponíveis na Stone Franquias
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">Agente Comercial</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">O que faz?</h4>
                <p className="text-muted-foreground">
                  O Agente Stone é responsável por levar soluções financeiras aos lojistas brasileiros. 
                  Tem diariamente como escritório as ruas do país, apresentando aos donos e donas de negócios 
                  uma nova realidade empreendedora.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Atividades do dia a dia:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Prospectar novos clientes na rota do polo
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Gerenciar carteira de clientes ativos e pós-venda
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Participar das matinais diárias do time
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Entregar atendimento de excelência ao cliente
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Requisitos:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Ter CNH
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Ensino Superior completo ou cursando (desejável)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">Operador Logístico</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">O que faz?</h4>
                <p className="text-muted-foreground">
                  O Operador Logístico (Green Angel) atende clientes em seus pontos de venda, 
                  entregando maquininhas e ajudando na utilização dos produtos. Faz parte da logística 
                  própria da Stone, planejando e gerenciando toda a cadeia logística.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Atividades do dia a dia:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Entregar maquininhas aos clientes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Orientar clientes na utilização dos produtos
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Oferecer treinamento aos donos de negócios
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Gerir estoque e realizar logística reversa
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Organizar e inventariar o estoque
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Fazer ordens de serviço externas
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Requisitos:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Disponibilidade para atividades externas
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Organização e gestão de estoque
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RolesInfo;
