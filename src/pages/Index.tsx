import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Trophy, Wind, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Timer,
      title: "Pomodoro em Grupo",
      description: "Estude junto com outros estudantes em salas públicas compartilhando o tempo de foco.",
    },
    {
      icon: Trophy,
      title: "Ranking de Estudantes",
      description: "Conquiste maçãs douradas e suba no ranking dos estudantes mais dedicados.",
    },
    {
      icon: Wind,
      title: "Exercícios de Respiração",
      description: "Relaxe entre as sessões com exercícios guiados de respiração.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="text-center mb-16 pt-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <span className="text-4xl">🍎</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            FocoEstudo
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Potencialize seus estudos com o método Pomodoro em grupo. 
            Foque, descanse e conquiste suas metas educacionais.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="shadow-lg" asChild>
              <Link to="/ranking">
                <Trophy className="w-4 h-4 mr-2" />
                Ver Ranking
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/respiracao">
                <Wind className="w-4 h-4 mr-2" />
                Respirar
              </Link>
            </Button>
          </div>
        </section>

        <section className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle>Estude em Grupo</CardTitle>
              </div>
              <CardDescription className="text-base">
                Junte-se a salas públicas de estudo e compartilhe seu progresso com outros estudantes. 
                Juntos somos mais fortes! 🚀
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
