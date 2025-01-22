import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Examples = () => {
  const examples = [
    {
      title: "Basic Integration",
      description: "Simple example of GameGuard integration",
      language: "TypeScript"
    },
    {
      title: "Real-time Analytics",
      description: "Implementation of real-time analytics",
      language: "JavaScript"
    },
    {
      title: "Security Features",
      description: "Advanced security implementation",
      language: "TypeScript"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Code Examples</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{example.description}</p>
                <div className="text-sm bg-accent/10 px-2 py-1 rounded inline-block">
                  {example.language}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Examples;