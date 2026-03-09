import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border bg-background">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start text-center md:text-left">
          <p className="text-xl font-bold tracking-tight">Abdul Rehman</p>
          <p className="text-sm text-muted-foreground italic font-medium">
            &quot;Build systems. Solve problems. Keep learning.&quot;
          </p>
        </div>

        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${profile.email}`} className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground flex items-center justify-center">
          © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
