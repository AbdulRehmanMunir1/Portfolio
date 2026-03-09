"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Code, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4 pt-10 md:pt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Hi, I&apos;m <span className="gradient-text">Abdul Rehman</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground font-mono">
                Software Engineer | MERN Stack | AI Integrations
              </p>
              <p className="max-w-[600px] text-lg text-muted-foreground/80 leading-relaxed pt-4">
                I build scalable web applications, automation systems, and AI-powered tools. 
                Passionate about clean architecture and crafting modern user experiences.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >

              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="#projects">View Projects</Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-primary/50 hover:bg-primary/10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>

              <Button asChild variant="ghost" size="lg" className="h-12 px-8 text-base">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end relative mt-10 md:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 p-2 shadow-2xl backdrop-blur-sm z-20">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-muted">
                <Image 
                  src="/rehman.jpg" 
                  alt="Abdul Rehman"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 left-10 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-lg z-30 hidden sm:block"
            >
               <Code className="w-8 h-8 text-blue-500" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 right-10 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-lg z-30 hidden sm:block"
            >
               <Bot className="w-8 h-8 text-purple-500" />
            </motion.div>

            <motion.div 
              animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/2 -left-10 p-4 bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-lg z-30 hidden lg:block"
            >
               <Terminal className="w-8 h-8 text-green-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
