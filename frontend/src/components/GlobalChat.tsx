import { Menu, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Message } from "./ChatInterface";

interface GlobalChatProps {
  isOpen: boolean;
  onToggle: () => void;
  editingMessage?: Message | null;
  onSaveEdit?: (text: string) => void;
  onCancelEdit?: () => void;
}

export default function GlobalChat({ isOpen, onToggle, editingMessage, onSaveEdit, onCancelEdit }: GlobalChatProps) {
  const [editorText, setEditorText] = useState("");

  // Update editor text when editing message changes
  useEffect(() => {
    if (editingMessage) {
      setEditorText(editingMessage.text);
    } else {
      // Don't clear the editor when not editing, keep the user's text
    }
  }, [editingMessage]);

  const handleSaveEdit = () => {
    if (editingMessage && editorText.trim() && onSaveEdit) {
      onSaveEdit(editorText.trim());
      setEditorText("");
    }
  };

  const handleCancelEdit = () => {
    if (editingMessage) {
      setEditorText("");
      if (onCancelEdit) {
        onCancelEdit();
      }
    }
  };

  const handleClear = () => {
    if (editingMessage && onCancelEdit) {
      // If editing, cancel the edit
      onCancelEdit();
    }
    setEditorText("");
  };

  return (
    <div 
      className={`bg-card border-l border-border h-full flex flex-col transition-all duration-300 ease-in-out relative ${
        isOpen ? "w-80" : "w-16"
      }`}
    >
      {/* Toggle Button - Hamburger when collapsed, Arrow when expanded */}
      {isOpen ? (
        <button
          onClick={onToggle}
          className="absolute -left-3 top-6 z-10 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-primary-foreground" />
        </button>
      ) : (
        <div className="h-[73px] flex items-center justify-center border-b border-border">
          <button
            onClick={onToggle}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      )}

      {/* Text Editor Content */}
      <div className={`flex-1 overflow-hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}>
        <div className="flex flex-col h-full">
          {/* Editor Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">
                {editingMessage ? "Edit Message" : "Text Editor"}
              </h3>
              {editorText && (
                <button
                  onClick={handleClear}
                  className="w-6 h-6 flex items-center justify-center rounded hover:bg-accent transition-colors"
                  title="Clear"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              {editingMessage 
                ? `Editing ${editingMessage.sender === "user" ? "your" : "assistant"} message` 
                : `${editorText.length} characters`}
            </p>
          </div>

          {/* Text Area */}
          <div className="flex-1 flex flex-col p-4">
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              className="flex-1 w-full bg-background border border-border rounded-lg p-3 text-sm resize-none outline-none focus:border-primary transition-colors"
              placeholder={editingMessage ? "Edit your message..." : "Start typing..."}
              autoFocus
            />
            
            {/* Editor Actions */}
            <div className="flex gap-2 mt-4">
              {editingMessage ? (
                <>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSaveEdit}
                    size="sm"
                    className="flex-1"
                    disabled={!editorText.trim()}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => setEditorText("")}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    disabled={!editorText}
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={() => {
                      // Copy to clipboard
                      navigator.clipboard.writeText(editorText);
                    }}
                    size="sm"
                    className="flex-1"
                    disabled={!editorText}
                  >
                    Copy
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}