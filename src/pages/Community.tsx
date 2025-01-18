import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Users, Hash } from "lucide-react";

const Community = () => {
  const { toast } = useToast();
  
  const channels = [
    { id: 1, name: "general", description: "General discussion" },
    { id: 2, name: "help", description: "Get help with GameForge" },
    { id: 3, name: "showcase", description: "Share your games" },
    { id: 4, name: "announcements", description: "Official updates" },
  ];

  const onlineUsers = [
    { id: 1, name: "Alice Dev", status: "online" },
    { id: 2, name: "Bob Builder", status: "online" },
    { id: 3, name: "Charlie Coder", status: "away" },
  ];

  const messages = [
    { id: 1, user: "Alice Dev", content: "Hey everyone! Working on a new platformer game!", time: "10:30 AM" },
    { id: 2, user: "Bob Builder", content: "That's awesome! Using the physics engine?", time: "10:32 AM" },
    { id: 3, user: "Charlie Coder", content: "The physics engine is really powerful for platformers!", time: "10:35 AM" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Your message has been sent to the channel.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Channels Sidebar */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Hash className="w-4 h-4" /> Channels
            </h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="p-2 hover:bg-accent rounded-md cursor-pointer mb-1"
                >
                  <p className="font-medium">#{channel.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {channel.description}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Main Chat Area */}
          <div className="col-span-7 bg-white rounded-lg shadow-sm p-4 flex flex-col">
            <div className="mb-4">
              <h2 className="font-semibold">#general</h2>
              <p className="text-sm text-muted-foreground">
                General discussion about GameForge
              </p>
            </div>
            <Separator className="my-2" />
            
            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div key={message.id} className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{message.user}</span>
                    <span className="text-xs text-muted-foreground">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm mt-1">{message.content}</p>
                </div>
              ))}
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="mt-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>

          {/* Online Users Sidebar */}
          <div className="col-span-3 bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" /> Online Members
            </h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {onlineUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>{user.name}</span>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;