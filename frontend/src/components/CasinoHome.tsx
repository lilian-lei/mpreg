import { useState } from "react";
import NavigationSidebar from "./NavigationSidebar";
import GlobalChat from "./GlobalChat";
import ChatInterface, { Message } from "./ChatInterface";
import QueryBar from "./QueryBar";

interface ChatHistory {
  id: number;
  title: string;
  preview: string;
  timestamp: string;
  messages: Message[];
}

export default function CasinoHome() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([
    {
      id: 1,
      title: "Welcome Chat",
      preview: "Welcome to MPreg! How can I help you today?",
      timestamp: "Just now",
      messages: [
        {
          id: 1,
          text: "Welcome to MPreg! How can I help you today?",
          sender: "assistant",
          timestamp: new Date(Date.now() - 60000),
        },
      ]
    },
    {
      id: 2,
      title: "Slot Games Question",
      preview: "Tell me about your best slot games",
      timestamp: "2 hours ago",
      messages: [
        {
          id: 1,
          text: "Tell me about your best slot games",
          sender: "user",
          timestamp: new Date(Date.now() - 7200000),
        },
        {
          id: 2,
          text: "We have amazing slot games! Our most popular ones include Mega Fortune, Dragon's Gold, and Starburst. Each offers unique features and exciting jackpots!",
          sender: "assistant",
          timestamp: new Date(Date.now() - 7199000),
        },
      ]
    },
    {
      id: 3,
      title: "Roulette Strategy",
      preview: "What's the best strategy for roulette?",
      timestamp: "Yesterday",
      messages: [
        {
          id: 1,
          text: "What's the best strategy for roulette?",
          sender: "user",
          timestamp: new Date(Date.now() - 86400000),
        },
        {
          id: 2,
          text: "While roulette is primarily a game of chance, many players use strategies like the Martingale or D'Alembert systems. Remember to play responsibly and set limits!",
          sender: "assistant",
          timestamp: new Date(Date.now() - 86399000),
        },
      ]
    },
  ]);
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);

  // Get current chat messages
  const currentChat = chatHistories.find(chat => chat.id === currentChatId);
  const messages = currentChat?.messages || [];

  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };
    
    // Update current chat with new message
    setChatHistories(prev => prev.map(chat => 
      chat.id === currentChatId 
        ? { 
            ...chat, 
            messages: [...chat.messages, userMessage],
            preview: text,
            timestamp: "Just now"
          }
        : chat
    ));

    // Simulate assistant response
    setTimeout(() => {
      const responses = [
        "I can help you with that! What would you like to know?",
        "Great question! Let me assist you with that.",
        "Our slots have amazing jackpots right now! Would you like to try?",
        "I'm here to help! Feel free to ask about games, bonuses, or account features.",
        "That's a popular choice! Many players love our roulette tables.",
      ];
      
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setChatHistories(prev => prev.map(chat => 
        chat.id === currentChatId 
          ? { ...chat, messages: [...chat.messages, assistantMessage] }
          : chat
      ));
    }, 1000);
  };

  const handleEditMessage = (message: Message) => {
    setEditingMessage(message);
    // Open right sidebar if it's closed
    if (!isRightSidebarOpen) {
      setIsRightSidebarOpen(true);
    }
  };

  const handleSaveEdit = (text: string) => {
    if (editingMessage) {
      // Update existing message
      setChatHistories(prev => prev.map(chat => 
        chat.id === currentChatId 
          ? {
              ...chat,
              messages: chat.messages.map(msg => 
                msg.id === editingMessage.id 
                  ? { ...msg, text, timestamp: new Date() }
                  : msg
              )
            }
          : chat
      ));
      setEditingMessage(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingMessage(null);
  };

  const handleNewChat = () => {
    const newChatId = Math.max(...chatHistories.map(c => c.id)) + 1;
    const newChat: ChatHistory = {
      id: newChatId,
      title: "New Chat",
      preview: "Start a new conversation",
      timestamp: "Just now",
      messages: [
        {
          id: 1,
          text: "Welcome to MPreg! How can I help you today?",
          sender: "assistant",
          timestamp: new Date(),
        },
      ]
    };
    
    setChatHistories(prev => [newChat, ...prev]);
    setCurrentChatId(newChatId);
  };

  const handleLoadChat = (chatId: number) => {
    setCurrentChatId(chatId);
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Sidebar - Navigation */}
      <NavigationSidebar 
        isOpen={isLeftSidebarOpen}
        onToggle={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
        chatHistories={chatHistories}
        currentChatId={currentChatId}
        onNewChat={handleNewChat}
        onLoadChat={handleLoadChat}
      />
      
      {/* Main Content - Chat Interface */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatInterface 
          messages={messages} 
          onEditMessage={handleEditMessage}
        />
        
        {/* Query Bar */}
        <QueryBar 
          onSendMessage={handleSendMessage}
        />
      </div>
      
      {/* Right Sidebar - Global Chat / Edit Panel */}
      <GlobalChat 
        isOpen={isRightSidebarOpen}
        onToggle={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        editingMessage={editingMessage}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
}