import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Getting Started with GameGuard",
      description: "Learn the basics of integrating GameGuard into your game",
      duration: "15 mins",
      level: "Beginner"
    },
    {
      title: "Advanced Security Features",
      description: "Implement advanced security measures in your game",
      duration: "30 mins",
      level: "Advanced"
    },
    {
      title: "Real-time Analytics Integration",
      description: "Set up real-time analytics for your game",
      duration: "20 mins",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Game Development Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{tutorial.title}</CardTitle>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{tutorial.duration}</span>
                  <span>{tutorial.level}</span>
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

export default Tutorials;