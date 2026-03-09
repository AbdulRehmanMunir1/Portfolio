"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; text: string }[]>([
    { role: "assistant", text: "Hi! I'm AbdulRehman's AI assistant. Ask me about his skills, projects, or background." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "Sorry, I couldn't process that." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Network error. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center p-0 transition-transform hover:scale-110 bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 border-0"
              onClick={() => setIsOpen(true)}
            >
              <Bot className="w-7 h-7 text-white" />
              <span className="sr-only">Open AI Assistant</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] shadow-2xl rounded-2xl border border-border bg-background z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                AI Portfolio Assistant
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20 rounded-full" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="h-[320px] p-4 overflow-y-auto flex flex-col gap-3 bg-muted/10">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white self-end rounded-br-sm"
                      : "bg-card text-foreground self-start rounded-bl-sm border border-border/50 shadow-sm"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <div className="bg-card text-foreground self-start rounded-2xl rounded-bl-sm border border-border/50 shadow-sm px-4 py-3 text-sm flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-bounce" />
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-border bg-background">
              <form onSubmit={handleSend} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="rounded-full bg-muted/50 focus-visible:ring-1 border-primary/20 h-10"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full shadow-sm bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 h-10 w-10 shrink-0"
                  disabled={isTyping || !input.trim()}
                >
                  <Send className="w-4 h-4 ml-0.5 text-white" />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground text-center mt-2">Powered by AI • Ask about AbdulRehman&apos;s work</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
