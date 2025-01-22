import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const positions = [
    {
      title: "Senior Security Engineer",
      department: "Security",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      title: "Game Analytics Specialist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Developer Relations Manager",
      department: "Community",
      location: "Mumbai, India",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Careers at IITB GAMING</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Join our team and help shape the future of game security and analytics.
        </p>
        <div className="grid gap-6">
          {positions.map((position, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{position.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Department:</span>
                    <p>{position.department}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p>{position.location}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <p>{position.type}</p>
                  </div>
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

export default Careers;