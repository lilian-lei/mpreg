import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  onEditMessage?: (message: Message) => void;
}

export default function ChatInterface({ messages, onEditMessage }: ChatInterfaceProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <ScrollArea ref={scrollRef} className="flex-1 px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Start a conversation</h3>
            <p className="text-muted-foreground">
              Ask about games, promotions, or get help with your account
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <MessageBubble 
              key={message.id} 
              message={message} 
              onEdit={onEditMessage}
            />
          ))
        )}
      </div>
    </ScrollArea>
  );
}

function MessageBubble({ message, onEdit }: { message: Message; onEdit?: (message: Message) => void }) {
  const isUser = message.sender === "user";
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex gap-3 max-w-[70%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          isUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        }`}>
          {isUser ? "U" : "AI"}
        </div>
        
        {/* Message Bubble */}
        <div className="flex flex-col gap-1">
          <div className={`rounded-2xl px-4 py-3 ${
            isUser 
              ? "bg-primary text-primary-foreground rounded-tr-sm" 
              : "bg-muted text-foreground rounded-tl-sm"
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {message.text}
            </p>
          </div>
          
          {/* Timestamp and Edit Link */}
          <div className={`flex items-center gap-2 px-1 ${
            isUser ? "flex-row-reverse" : "flex-row"
          }`}>
            <span className="text-xs text-muted-foreground">
              {message.timestamp.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
              })}
            </span>
            
            {onEdit && (
              <>
                <span className="text-xs text-muted-foreground">•</span>
                <button
                  onClick={() => onEdit(message)}
                  className="text-xs text-primary hover:text-primary/80 transition-colors hover:underline"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}