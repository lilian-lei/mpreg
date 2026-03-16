import { 
  Home, 
  Gamepad2, 
  Trophy, 
  Users, 
  CreditCard, 
  Settings, 
  Gift,
  Star,
  TrendingUp,
  Plus,
  MessageSquare
} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface ChatHistoryItem {
  id: number;
  title: string;
  preview: string;
  timestamp: string;
}

interface NavigationSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  chatHistories?: ChatHistoryItem[];
  currentChatId?: number;
  onNewChat?: () => void;
  onLoadChat?: (chatId: number) => void;
}

export default function NavigationSidebar({ isOpen, onToggle, chatHistories = [], currentChatId = 1, onNewChat, onLoadChat }: NavigationSidebarProps) {
  const menuItems = [
    { icon: Home, label: "Home", active: true, onClick: onToggle },
    { icon: Gamepad2, label: "All Games" },
    { icon: Star, label: "Favorites" },
    { icon: TrendingUp, label: "Live Casino" },
    { icon: Trophy, label: "Tournaments" },
    { icon: Gift, label: "Promotions" },
    { icon: Users, label: "Community" },
    { icon: CreditCard, label: "Banking" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div 
      className={`bg-card border-r border-border h-full flex relative transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Navigation Icons Column - Always visible */}
      <div className="w-16 flex-shrink-0 flex flex-col">
        {/* Navigation Icons */}
        <ScrollArea className="flex-1">
          <div className="py-4 space-y-2 px-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                }`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat History - Only visible when expanded */}
      {isOpen && (
        <div className="flex-1 flex flex-col overflow-hidden border-l border-border">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold mb-3">Chat History</h2>
            <Button 
              onClick={onNewChat} 
              className="w-full justify-start gap-2" 
              size="sm"
              disabled={!onNewChat}
            >
              <Plus className="w-4 h-4" />
              New Chat
            </Button>
          </div>

          {/* Chat History List */}
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {chatHistories.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onLoadChat?.(chat.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    chat.id === currentChatId
                      ? "bg-accent"
                      : "hover:bg-accent/50"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate">{chat.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 ml-6">
                    {chat.preview}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 ml-6">
                    {chat.timestamp}
                  </p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}