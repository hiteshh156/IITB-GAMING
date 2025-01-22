import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApiReference = () => {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/games",
      description: "Retrieve a list of all games"
    },
    {
      method: "POST",
      endpoint: "/api/v1/analytics",
      description: "Submit game analytics data"
    },
    {
      method: "GET",
      endpoint: "/api/v1/security",
      description: "Get security status"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>
        <div className="space-y-4">
          {endpoints.map((endpoint, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-lg">{endpoint.endpoint}</code>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{endpoint.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiReference;