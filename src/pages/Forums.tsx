import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Forums = () => {
  const topics = [
    {
      title: "Integration Help",
      posts: 156,
      lastActive: "2 hours ago"
    },
    {
      title: "Security Discussion",
      posts: 89,
      lastActive: "1 day ago"
    },
    {
      title: "Feature Requests",
      posts: 234,
      lastActive: "3 hours ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Community Forums</h1>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:bg-accent/5 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{topic.posts} posts</span>
                  <span>Last active: {topic.lastActive}</span>
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

export default Forums;