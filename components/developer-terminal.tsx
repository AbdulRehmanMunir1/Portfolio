"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { profile } from "@/data/profile";

export function DeveloperTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string | React.ReactNode }[]>([
    {
      command: "welcome",
      output: "Welcome to Abdul Rehman's interactive terminal. Type 'help' to see available commands (including jokes, skills, links, etc.)."
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    // simple joke list for interactive fun
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "There are 10 types of people in the world: those who understand binary and those who don't.",
      "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    ];

    switch (cmd) {
      case "help":
        output = "Available commands: help, about, profile, skills, projects, contact, github, linkedin, resume, joke, clear";
        break;
      case "about":
        output = `${profile.name} is a Software Engineer specializing in the MERN stack and AI integrations.`;
        break;
      case "skills": {
        const list: string[] = [];
        Object.entries(skills).forEach(([category, items]: any) => {
          list.push(`${category.toUpperCase()}: ` + items.map((i: any) => i.name).join(", "));
        });
        output = list.join("\n");
        break;
      }
      case "projects":
        output = "I have built Crypto Dashboards, AI Model Integrators, and Automation Toolkits. See the Projects section above or visit my GitHub.";
        break;
      case "contact":
        output = `Email: ${profile.email} – also available on LinkedIn & GitHub.`;
        break;
      case "github":
        output = (
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
            {profile.github}
          </a>
        );
        break;
      case "linkedin":
        output = (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
            {profile.linkedin}
          </a>
        );
        break;
      case "resume":
        output = (
          <a href="/AbdulRehman_Software_Engineer.pdf" download className="underline text-blue-400">
            Download Resume
          </a>
        );
        break;
      case "joke":
        output = jokes[Math.floor(Math.random() * jokes.length)];
        break;
      case "profile":
        output = (
          <pre className="text-left whitespace-pre-wrap">
            {JSON.stringify(profile, null, 2)}
          </pre>
        );
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
                autoFocus={false}
                autoComplete="on"
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