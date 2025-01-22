import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Plugins = () => {
  const plugins = [
    {
      name: "Physics Engine",
      category: "Core",
      description: "Advanced physics simulation for realistic game mechanics",
      tags: ["Physics", "Simulation", "Core"]
    },
    {
      name: "Multiplayer Kit",
      category: "Networking",
      description: "Easy-to-integrate multiplayer functionality",
      tags: ["Multiplayer", "Networking", "Real-time"]
    },
    {
      name: "AI Behavior System",
      category: "Artificial Intelligence",
      description: "Smart AI behavior patterns for NPCs",
      tags: ["AI", "NPC", "Behavior"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Plugins</h1>
        <p className="text-lg text-secondary mb-12">
          Extend your game's functionality with our powerful plugins.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin) => (
            <Card key={plugin.name} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{plugin.name}</h3>
                <Badge variant="secondary">{plugin.category}</Badge>
              </div>
              <p className="text-secondary mb-4">{plugin.description}</p>
              <div className="flex flex-wrap gap-2">
                {plugin.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plugins;