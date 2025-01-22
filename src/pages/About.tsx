import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About IITB GAMING</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            IITB GAMING is at the forefront of game security and analytics, providing cutting-edge solutions for game developers and publishers worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To create a safer and more transparent gaming ecosystem through innovative security solutions and comprehensive analytics.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the global standard for game security and analytics, ensuring fair play and optimal performance across all gaming platforms.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;