import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    {
      name: "Game Editor",
      description: "Visual editor for game development",
      features: ["Drag-and-drop interface", "Real-time preview", "Asset management"]
    },
    {
      name: "Performance Analyzer",
      description: "Monitor and optimize game performance",
      features: ["FPS monitoring", "Memory usage", "Network analysis"]
    },
    {
      name: "Asset Creator",
      description: "Create and manage game assets",
      features: ["3D model support", "Texture editing", "Animation tools"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Development Tools</h1>
        <p className="text-lg text-secondary mb-12">
          Powerful tools to streamline your game development process.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Card key={tool.name} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{tool.name}</h3>
              <p className="text-secondary mb-4">{tool.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {tool.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;