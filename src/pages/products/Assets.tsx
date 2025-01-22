import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Assets = () => {
  const assetCategories = [
    {
      name: "3D Models",
      count: "1000+",
      description: "High-quality 3D models for various game genres"
    },
    {
      name: "Textures",
      count: "2000+",
      description: "Professional game textures and materials"
    },
    {
      name: "Sound Effects",
      count: "5000+",
      description: "Audio effects and background music"
    },
    {
      name: "Animations",
      count: "500+",
      description: "Character and object animations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">Game Assets</h1>
        <p className="text-lg text-secondary mb-12">
          Browse our extensive collection of high-quality game assets.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {assetCategories.map((category) => (
            <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-3xl font-bold text-primary mb-4">{category.count}</p>
              <p className="text-secondary">{category.description}</p>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assets;