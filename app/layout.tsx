import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abdul Rehman — Software Engineer | MERN Stack | AI Integrations",
  description: "Portfolio of Abdul Rehman, a Software Engineer and MERN Stack Developer specializing in AI integrations, automation systems, and modern web applications.",
  keywords: [
    "Abdul Rehman",
    "Software Engineer",
    "MERN Stack",
    "AI Integrations",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman — Software Engineer | MERN Stack | AI Integrations",
    description: "I build scalable web applications, automation systems, and AI-powered tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — Software Engineer",
    description: "I build scalable web applications, automation systems, and AI-powered tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
