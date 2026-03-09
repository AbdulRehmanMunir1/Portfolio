"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const timeline = [
    {
      company: "NewAge",
      role: "Software Engineer",
      duration: "2025 — Present",
      achievements: [
        "Architected scalable backend services using Node.js and TypeScript.",
        "Integrated advanced AI models to automate reporting workflows.",
        "Improved system reliability and reduced latency by 40%.",
      ],
    },
    {
      company: "SocialSwirl",
      role: "Frontend Engineer Intern",
      duration: "2024",
      achievements: [
        "Built responsive and accessible UI components with React and Tailwind.",
        "Collaborated with design teams to implement modern UX patterns.",
        "Optimized frontend bundle size resulting in faster page loads.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
            Career Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leading engineering teams and delivering business value through scalable code.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
           <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border/50" />
           {timeline.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               className="relative pl-12 md:pl-20 py-6 group"
             >
               <div className="absolute left-2 md:left-6 -ml-px top-8 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors shadow-[0_0_0_4px_hsl(var(--background))]" />
               
               <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-2 h-full bg-primary/80" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                   <div>
                     <h3 className="text-2xl font-bold flex items-center gap-2">
                       {item.company}
                     </h3>
                     <p className="text-lg font-medium text-muted-foreground flex items-center gap-2 mt-1">
                       <Briefcase className="w-4 h-4" /> {item.role}
                     </p>
                   </div>
                   <Badge variant="secondary" className="w-fit self-start sm:self-center py-1 px-3 gap-1 font-mono text-xs">
                     <Calendar className="w-3 h-3" /> {item.duration}
                   </Badge>
                 </div>
                 
                 <ul className="space-y-3 mt-4 text-muted-foreground">
                   {item.achievements.map((achievement, i) => (
                     <li key={i} className="flex gap-3">
                       <span className="text-primary font-bold mt-1">—</span>
                       <span className="leading-relaxed">{achievement}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
