import { Send, Paperclip, Mic } from "lucide-react";
import { useState, FormEvent } from "react";

interface QueryBarProps {
  onSendMessage?: (message: string) => void;
}

export default function QueryBar({ onSendMessage }: QueryBarProps) {
  const [query, setQuery] = useState("");

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSend = () => {
    if (query.trim()) {
      // Handle query submission
      onSendMessage?.(query.trim());
      setQuery("");
      
      // Reset textarea height
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.style.height = 'auto';
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="border-t border-border bg-card">
      <div className="max-w-4xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-end gap-3 bg-background border border-border rounded-2xl p-3 shadow-lg focus-within:border-primary transition-colors">
            {/* Attachment Button */}
            <button
              type="button"
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              title="Attach file"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            {/* Input Field */}
            <div className="flex-1">
              <textarea
                value={query}
                onChange={handleInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Message MPreg..."
                className="w-full bg-transparent border-none outline-none resize-none max-h-32 text-foreground placeholder:text-muted-foreground"
                rows={1}
                style={{
                  minHeight: "24px",
                  height: "auto",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = target.scrollHeight + "px";
                }}
              />
            </div>

            {/* Voice Input Button */}
            <button
              type="button"
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              title="Voice input"
            >
              <Mic className="w-5 h-5" />
            </button>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!query.trim()}
              className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                query.trim()
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
              title="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <p className="text-xs text-muted-foreground text-center mt-3">
          MPreg can make mistakes. Please verify important information.
        </p>
      </div>
    </div>
  );
}