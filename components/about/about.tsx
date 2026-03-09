"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Globe, Rocket, TerminalSquare } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "MERN Stack Expertise",
      description: "Building scalable, high-performance web applications using MongoDB, Express, React, and Node.js."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI Integration",
      description: "Connecting applications with LLMs like OpenAI, Gemini, and Claude for intelligent features."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Automation Engineering",
      description: "Creating robust automation scripts and scraping tools with Python and Playwright."
    },
    {
      icon: <TerminalSquare className="w-5 h-5" />,
      title: "Clean Architecture",
      description: "Writing maintainable, well-documented, and production-ready code."
    }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Engineering the Future
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a Software Engineer who bridges the gap between sophisticated backend logic and elegant user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-start space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
