import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Users, Hash, Send, AtSign } from "lucide-react";

const Community = () => {
  const { toast } = useToast();
  
  const channels = [
    { id: 1, name: "general", description: "General discussion", unread: 3 },
    { id: 2, name: "help", description: "Get help with GameForge", unread: 0 },
    { id: 3, name: "showcase", description: "Share your games", unread: 5 },
    { id: 4, name: "announcements", description: "Official updates", unread: 1 },
  ];

  const onlineUsers = [
    { id: 1, name: "Alice Dev", status: "online", lastSeen: "now" },
    { id: 2, name: "Bob Builder", status: "online", lastSeen: "now" },
    { id: 3, name: "Charlie Coder", status: "away", lastSeen: "5m ago" },
    { id: 4, name: "Diana Designer", status: "offline", lastSeen: "1h ago" },
  ];

  const messages = [
    { 
      id: 1, 
      user: "Alice Dev", 
      content: "Hey everyone! Working on a new platformer game!", 
      time: "10:30 AM",
      avatar: "A",
      status: "sent"
    },
    { 
      id: 2, 
      user: "Bob Builder", 
      content: "That's awesome! Using the physics engine?", 
      time: "10:32 AM",
      avatar: "B",
      status: "sent"
    },
    { 
      id: 3, 
      user: "Charlie Coder", 
      content: "The physics engine is really powerful for platformers!", 
      time: "10:35 AM",
      avatar: "C",
      status: "sent"
    },
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
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-primary">
              <Hash className="w-4 h-4" /> Channels
            </h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="p-2 hover:bg-accent rounded-md cursor-pointer mb-1 transition-colors group relative"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium flex items-center gap-1">
                      <span>#{channel.name}</span>
                      {channel.unread > 0 && (
                        <span className="bg-accent text-xs px-2 py-0.5 rounded-full">
                          {channel.unread}
                        </span>
                      )}
                    </p>
                  </div>
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
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Hash className="w-5 h-5" /> general
              </h2>
              <p className="text-sm text-muted-foreground">
                General discussion about GameForge
              </p>
            </div>
            <Separator className="my-2" />
            
            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div key={message.id} className="mb-6 group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-medium">
                      {message.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold hover:underline cursor-pointer">
                          {message.user}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {message.time}
                        </span>
                      </div>
                      <p className="text-sm mt-1 leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="mt-4">
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <Input
                    placeholder="Type your message..."
                    className="pr-10"
                  />
                  <AtSign className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                <Button type="submit" className="gap-2">
                  <Send className="w-4 h-4" /> Send
                </Button>
              </div>
            </form>
          </div>

          {/* Online Users Sidebar */}
          <div className="col-span-3 bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-primary">
              <Users className="w-4 h-4" /> Online Members
            </h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {onlineUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-2 hover:bg-accent rounded-md group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      user.status === 'online' ? 'bg-green-500' :
                      user.status === 'away' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`} />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {user.lastSeen}
                  </span>
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