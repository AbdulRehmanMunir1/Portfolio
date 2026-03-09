"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { projects, Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-background shadow-none relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-2">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono text-[10px] rounded-sm bg-muted text-muted-foreground group-hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="secondary" className="font-mono text-[10px] rounded-sm bg-muted text-muted-foreground group-hover:bg-primary/10 transition-colors">
                  +{project.techStack.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] border-border bg-background/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-primary" />
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-4 leading-relaxed font-sans">
            {project.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="my-6">
          <h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-mono text-xs">
                 {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          {project.githubUrl && (
            <Button asChild variant="outline" className="flex-1 gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Source Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
            Featured Projects
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Software I&apos;ve Built
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of production-ready applications, tools, and platforms showcasing my full-stack and AI expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
             >
               <ProjectCard project={project} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
