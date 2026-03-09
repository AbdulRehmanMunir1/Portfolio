/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github as GitIcon, Activity } from "lucide-react";

export function GithubStats() {
  const username = "AbdulRehmanMunir1";

  return (
    <section id="github" className="w-full py-20 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/10 text-primary">
            Open Source
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-center gap-4">
            <GitIcon className="w-8 h-8 md:w-10 md:h-10" /> GitHub Stats
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex items-center justify-center gap-2">
            <Activity className="w-5 h-5 text-primary" /> Tracking contributions and open source impact
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full flex justify-center p-2 rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
          >
            <img
              src={`https://ghchart.rshah.org/8B5CF6/${username}`}
              alt="GitHub Contribution Graph"
              className="w-full max-w-[800px] hover:invert-[0.1] transition-all dark:invert dark:hue-rotate-180 dark:hover:invert-[0.9]"
            />
          </motion.div>

          <div className="w-full flex justify-center gap-6 flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 max-w-[450px]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=9CA3AF&icon_color=8B5CF6`}
                alt="GitHub Stats"
                className="w-full rounded-2xl bg-card border border-border shadow-sm p-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 max-w-[450px]"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=8B5CF6&text_color=9CA3AF`}
                alt="Top Languages"
                className="w-full rounded-2xl bg-card border border-border shadow-sm p-2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
