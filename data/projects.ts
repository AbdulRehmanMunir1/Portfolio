export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    id: "crypto-dashboard",
    title: "Crypto Dashboard",
    description: "A comprehensive cryptocurrency dashboard with live price tracking and analytics.",
    longDescription: "A fully responsive cryptocurrency dashboard built with Next.js and Tailwind CSS. Features include live price tracking, historical data charts, portfolio management, and market analysis using various crypto APIs. Utilizes React Query for efficient data fetching and state management, providing users with a seamless and real-time experience.",
    techStack: ["React", "Next.js", "Tailwind CSS", "React Query", "Chart.js"],
    githubUrl: "https://github.com/abdul-rehman/crypto-dashboard",
    liveUrl: "https://crypto-dashboard.demo",
  },
  {
    id: "ai-model-integrator",
    title: "AI Model Integrator",
    description: "Multi-model AI integration platform supporting OpenAI, Gemini, and Claude.",
    longDescription: "An advanced AI platform that allows users to interact seamlessly with multiple Large Language Models including GPT-4, Gemini Pro, and Claude 3. Built using a robust microservices architecture with Node.js and Express. Features include conversation memory, custom prompt templates, and detailed usage analytics.",
    techStack: ["Next.js", "Node.js", "TypeScript", "Prisma", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/abdul-rehman/ai-model-integrator",
    liveUrl: "https://ai-integrator.demo",
  },
  {
    id: "adspower-automation",
    title: "AdsPower Automation Toolkit",
    description: "Scalable browser automation tools using Playwright and AdsPower API.",
    longDescription: "A powerful suite of automation scripts designed to manage hundreds of browser profiles using AdsPower API and Playwright. The toolkit enables automated account creation, social media engagement, and structured web scraping with advanced proxy rotation and human-like interaction patterns.",
    techStack: ["Python", "Playwright", "AdsPower API", "Docker"],
    githubUrl: "https://github.com/abdul-rehman/adspower-auto",
    liveUrl: "",
  },
  {
    id: "internet-speed-logger",
    title: "Internet Speed Logger",
    description: "Automated internet reliability testing and logging system.",
    longDescription: "An automated logging system that periodically tests internet connection speed, latency, and stability. Data is stored in a MongoDB database and visualized through a modern web interface. Useful for tracking ISP performance over time and generating detailed connectivity reports.",
    techStack: ["Python", "Flask", "React", "MongoDB", "Charts"],
    githubUrl: "https://github.com/abdul-rehman/speed-logger",
    liveUrl: "https://speed-logger.demo",
  },
  {
    id: "yt-transcript-ai",
    title: "YouTube Transcript AI Summarizer",
    description: "AI-powered tool to extract and summarize YouTube videos instantly.",
    longDescription: "A web application that takes any YouTube video URL, extracts its transcript, and generates concise, structured summaries using Anthropic Claude/OpenAI models. Features include timestamped key takeaways, automatic language detection, and export options.",
    techStack: ["React", "Express", "Supabase", "Anthropic Claude API"],
    githubUrl: "https://github.com/abdul-rehman/yt-summarizer",
    liveUrl: "https://yt-summarizer.demo",
  },
  {
    id: "carpooling-platform",
    title: "Carpooling Website",
    description: "Full-stack carpooling platform matching riders with drivers.",
    longDescription: "A complete carpooling platform facilitating secure ridesharing. Real-time driver-rider matching system, integrated mapping for routing, secure payment processing, and comprehensive user verification via SMS. Employs WebSockets for live location tracking.",
    techStack: ["MERN Stack", "Socket.io", "Google Maps API", "Stripe"],
    githubUrl: "https://github.com/abdul-rehman/carpool-app",
    liveUrl: "https://carpool-app.demo",
  }
];
