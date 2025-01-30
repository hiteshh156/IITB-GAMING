import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { MessageCircle, Users, Send, AtSign, MessageSquare, Bookmark, ThumbsUp, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { database } from "@/lib/firebase";
import { ref, onValue, push, serverTimestamp } from "firebase/database";
import { useEffect, useState } from "react";

const Community = () => {
  const { toast } = useToast();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  
  const channels = [
    { id: 1, name: "general", description: "General discussion", unread: 3, icon: MessageCircle },
    { id: 2, name: "help", description: "Get help with GameForge", unread: 0, icon: MessageSquare },
    { id: 3, name: "showcase", description: "Share your games", unread: 5, icon: Share2 },
    { id: 4, name: "announcements", description: "Official updates", unread: 1, icon: Bookmark },
  ];

  const onlineUsers = [
    { id: 1, name: "Alice Dev", status: "online", lastSeen: "now", avatar: "/avatars/alice.png" },
    { id: 2, name: "Bob Builder", status: "online", lastSeen: "now", avatar: "/avatars/bob.png" },
    { id: 3, name: "Charlie Coder", status: "away", lastSeen: "5m ago", avatar: "/avatars/charlie.png" },
    { id: 4, name: "Diana Designer", status: "offline", lastSeen: "1h ago", avatar: "/avatars/diana.png" },
  ];

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          ...value,
        }));
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messagesRef = ref(database, 'messages');
    try {
      await push(messagesRef, {
        content: newMessage,
        user: "Anonymous User", // Replace with actual user name when auth is implemented
        timestamp: serverTimestamp(),
        avatar: "/avatars/default.png",
        reactions: { likes: 0, bookmarks: 0 }
      });

      setNewMessage("");
      toast({
        title: "Message sent",
        description: "Your message has been sent to the channel.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleReaction = (messageId: string, type: 'like' | 'bookmark') => {
    // Implementation for reactions can be added here
    toast({
      title: "Reaction added",
      description: `You ${type}d the message`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Channels Sidebar */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm p-4">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-primary">
              <MessageCircle className="w-4 h-4" /> Channels
            </h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="p-2 hover:bg-accent rounded-md cursor-pointer mb-1 transition-all duration-200 group relative"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium flex items-center gap-2">
                      <channel.icon className="w-4 h-4" />
                      <span>{channel.name}</span>
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
                <MessageCircle className="w-5 h-5" /> General Discussion
              </h2>
              <p className="text-sm text-muted-foreground">
                Welcome to the general discussion channel
              </p>
            </div>
            <Separator className="my-2" />
            
            <ScrollArea className="flex-1 p-4">
              {messages.map((message) => (
                <div key={message.id} className="mb-6 group animate-fade-in">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback>{message.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold hover:underline cursor-pointer">
                          {message.user}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm mt-1 leading-relaxed">{message.content}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          onClick={() => handleReaction(message.id, 'like')}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ThumbsUp className="w-4 h-4" /> {message.reactions.likes}
                        </button>
                        <button
                          onClick={() => handleReaction(message.id, 'bookmark')}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Bookmark className="w-4 h-4" /> {message.reactions.bookmarks}
                        </button>
                      </div>
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
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
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
                  className="flex items-center justify-between p-2 hover:bg-accent rounded-md group transition-all duration-200"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      user.status === 'online' ? 'bg-green-500' :
                      user.status === 'away' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`} />
                    <span className="text-xs text-muted-foreground">
                      {user.lastSeen}
                    </span>
                  </div>
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