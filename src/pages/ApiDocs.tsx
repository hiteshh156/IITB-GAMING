import { ScrollArea } from "@/components/ui/scroll-area";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ApiDocs = () => {
  const endpoints = [
    {
      title: "Initialize Engine",
      method: "POST",
      endpoint: "/api/engine/init",
      description: "Initialize a new game engine instance with custom configuration.",
      parameters: [
        { name: "apiKey", type: "string", description: "Your GameForge API key" },
        { name: "config", type: "object", description: "Engine configuration options" }
      ],
      example: `{
  "apiKey": "your-api-key",
  "config": {
    "resolution": "1920x1080",
    "fps": 60,
    "debug": false
  }
}`
    },
    {
      title: "Load Assets",
      method: "POST",
      endpoint: "/api/assets/load",
      description: "Preload game assets into the engine.",
      parameters: [
        { name: "assets", type: "array", description: "Array of asset URLs to load" },
        { name: "type", type: "string", description: "Asset type (texture/sound/model)" }
      ],
      example: `{
  "assets": [
    "textures/player.png",
    "sounds/background.mp3"
  ],
  "type": "mixed"
}`
    },
    {
      title: "Update Scene",
      method: "PUT",
      endpoint: "/api/scene/update",
      description: "Update the current game scene with new objects or properties.",
      parameters: [
        { name: "sceneId", type: "string", description: "ID of the scene to update" },
        { name: "objects", type: "array", description: "Array of game objects to update" }
      ],
      example: `{
  "sceneId": "main-scene",
  "objects": [
    {
      "id": "player1",
      "position": { "x": 100, "y": 200 },
      "rotation": 45
    }
  ]
}`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-24">
        <Breadcrumb className="mb-8">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="font-medium">API Reference</span>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
          <p className="text-lg text-secondary mb-12">
            Complete reference documentation for the GameForge Engine API. Learn how to integrate and control every aspect of your game through our comprehensive API endpoints.
          </p>

          <div className="space-y-12">
            {endpoints.map((endpoint, index) => (
              <section key={index} className="border rounded-lg p-6 bg-white shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">{endpoint.title}</h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-primary text-white text-sm rounded">
                    {endpoint.method}
                  </span>
                  <code className="px-3 py-1 bg-gray-100 rounded text-sm">
                    {endpoint.endpoint}
                  </code>
                </div>
                <p className="text-secondary mb-6">{endpoint.description}</p>
                
                <h3 className="font-semibold mb-3">Parameters</h3>
                <div className="mb-6">
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left font-medium px-4 py-2">Parameter</th>
                          <th className="text-left font-medium px-4 py-2">Type</th>
                          <th className="text-left font-medium px-4 py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="px-4 py-2">{param.name}</td>
                            <td className="px-4 py-2">
                              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                                {param.type}
                              </code>
                            </td>
                            <td className="px-4 py-2 text-secondary">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollArea>
                </div>

                <h3 className="font-semibold mb-3">Example Request</h3>
                <ScrollArea className="h-[200px] rounded-md border">
                  <pre className="p-4 bg-gray-50 overflow-x-auto">
                    <code>{endpoint.example}</code>
                  </pre>
                </ScrollArea>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocs;