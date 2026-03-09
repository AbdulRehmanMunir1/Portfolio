"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Projects } from "@/components/projects/projects";
import { Experience } from "@/components/experience/experience";
import { GithubStats } from "@/components/github/github";
import { DeveloperTerminal } from "@/components/developer-terminal";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import { AIAssistant } from "@/components/ai-assistant";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Navbar />
      <CommandMenu />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <DeveloperTerminal />
        <Contact />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
