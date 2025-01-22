import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">General Inquiries</h2>
              <p className="text-muted-foreground mb-4">
                For general questions about our products and services.
              </p>
              <p className="font-medium">Email: contact@iitbgaming.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
              <p className="text-muted-foreground mb-4">
                For technical assistance and implementation support.
              </p>
              <p className="font-medium">Email: support@iitbgaming.com</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <p className="text-muted-foreground">
              Indian Institute of Technology Bombay<br />
              Powai, Mumbai<br />
              Maharashtra 400076<br />
              India
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;