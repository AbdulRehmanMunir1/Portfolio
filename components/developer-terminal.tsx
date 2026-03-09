"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DeveloperTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([
    {
      command: "welcome",
      output: "Welcome to Abdul Rehman's interactive terminal. Type 'help' to see available commands."
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = "Available commands: help, about, projects, contact, clear";
        break;
      case "about":
        output = "Abdul Rehman is a Software Engineer specializing in the MERN stack and AI integrations.";
        break;
      case "projects":
        output = "I have built Crypto Dashboards, AI Model Integrators, and Automation Toolkits. Type 'cd projects' then 'ls' to view in a real environment (just kidding, view the section above!).";
        break;
      case "contact":
        output = "Email me at hello@example.com or find me on LinkedIn & GitHub.";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
    }

    setHistory([...history, { command: input, output }]);
    setInput("");
  };

  return (
    <section id="terminal" className="w-full py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
            Interactive
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center gap-3">
             <TerminalIcon className="w-8 h-8" /> Developer Terminal
          </h2>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border bg-[#0a0a0a] shadow-2xl font-mono text-sm sm:text-base relative"
        >
          {/* Terminal Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-border flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-muted-foreground text-xs font-sans">bash — abdul-rehman@portfolio:~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-4 sm:p-6 h-[350px] overflow-y-auto text-green-400">
            {history.map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">~/portfolio</span>
                  <span className="text-foreground">$</span>
                  <span className="text-foreground">{item.command}</span>
                </div>
                <div className="mt-1 text-muted-foreground/80">{item.output}</div>
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-foreground">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground caret-foreground"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
