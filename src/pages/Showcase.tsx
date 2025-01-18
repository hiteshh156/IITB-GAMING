import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Showcase = () => {
  const showcaseItems = [
    {
      title: "Space Explorer",
      description: "A stunning 3D space exploration game built with GameForge",
      image: "/space-game.jpg",
      developer: "Cosmic Studios",
      link: "#"
    },
    {
      title: "Forest Adventure",
      description: "2D platformer with beautiful pixel art graphics",
      image: "/forest-game.jpg",
      developer: "Green Leaf Games",
      link: "#"
    },
    {
      title: "Racing Evolution",
      description: "High-speed racing game with realistic physics",
      image: "/racing-game.jpg",
      developer: "Speed Games Inc",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Game Showcase</h1>
        <p className="text-xl text-muted-foreground">
          Discover amazing games built with GameForge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseItems.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <p className="text-sm text-muted-foreground mb-4">
                By {item.developer}
              </p>
              <Button className="w-full">View Project</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Showcase;