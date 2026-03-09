import { NextRequest, NextResponse } from "next/server";
import { profile } from "@/data/profile";

const SYSTEM_PROMPT = `You are Abdul Rehman's personal AI assistant embedded in his portfolio website. You answer questions about Abdul Rehman ONLY. Be friendly, concise, and professional. Always respond in 2-3 sentences max.

Here is everything you know about Abdul Rehman:

**Bio:** ${profile.name} is a Software Engineer and MERN Stack Developer who specializes in AI integrations, automation systems, and modern web applications. He is passionate about clean architecture and crafting premium user experiences.

**Skills:**
- Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux, Framer Motion, GSAP
- Backend: Node.js, Express, Python, FastAPI, Flask
- Databases: MongoDB, PostgreSQL, Firebase, Supabase
- AI/ML: OpenAI, Gemini, Claude, Grok, LLaMA, DeepSeek — integrating LLMs into production apps
- Automation: Playwright, AdsPower, Python scripting
- Tools: Git, Docker, Postman, Figma, CI/CD

**Experience:**
- Software Engineer at NewAge (2025 — Present): Architecting scalable backend services, integrating AI models, improving system reliability.
- Frontend Engineer Intern at SocialSwirl (2024): Built responsive UI components with React and Tailwind, optimized frontend performance.

**Projects:**
1. Crypto Dashboard — Real-time crypto tracking with charts and analytics (React, Next.js, Chart.js)
2. AI Model Integrator — Multi-model AI platform supporting GPT-4, Gemini, Claude (Next.js, Node.js, TypeScript)
3. AdsPower Automation Toolkit — Browser automation at scale with Playwright (Python, Docker)
4. Internet Speed Logger — Automated ISP performance tracking (Python, Flask, React, MongoDB)
5. YouTube Transcript AI Summarizer — AI-powered video summaries (React, Express, Claude API)
6. Carpooling Website — Full-stack ridesharing platform (MERN Stack, Socket.io, Google Maps, Stripe)

**Contact:** Email: ${profile.email}, LinkedIn: ${profile.linkedin}, GitHub: ${profile.github}

If someone asks about something unrelated to Abdul Rehman, politely redirect them: "I'm Abdul's portfolio assistant — I can help you learn about his skills, projects, and experience!"`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "z-ai/glm-4.5-air:free";

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://abdulrehman.dev",
        "X-Title": "Abdul Rehman Portfolio",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      // Try fallback model
      const fallbackModel = process.env.OPENROUTER_FALLBACK_MODEL || "arcee-ai/trinity-large-preview:free";
      
      const fallbackResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://abdulrehman.dev",
          "X-Title": "Abdul Rehman Portfolio",
        },
        body: JSON.stringify({
          model: fallbackModel,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      if (!fallbackResponse.ok) {
        const errorText = await fallbackResponse.text();
        console.error("OpenRouter fallback error:", errorText);
        return NextResponse.json(
          { reply: "I'm having trouble connecting right now. Please try again in a moment!" },
          { status: 200 }
        );
      }

      const fallbackData = await fallbackResponse.json();
      const fallbackReply = fallbackData.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again!";
      return NextResponse.json({ reply: fallbackReply });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again later!" },
      { status: 200 }
    );
  }
}
