import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SDK = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-8">SDK Documentation</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-secondary mb-6">
            The IITB GAMING SDK provides a comprehensive set of tools and libraries for game development.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Getting Started</h2>
              <p>Learn how to integrate our SDK into your game development workflow.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Quick installation guide</li>
                <li>Basic configuration</li>
                <li>First game setup</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Cross-platform support</li>
                <li>Real-time analytics</li>
                <li>Asset management</li>
                <li>Multiplayer capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SDK;