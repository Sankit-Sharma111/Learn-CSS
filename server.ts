import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Code Assistant Endpoint
  app.post("/api/ask-ai", async (req, res) => {
    try {
      const { prompt, html: currentHtml, css: currentCss, js: currentJs } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key is missing. Please configure it in the secrets menu." });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `You are an expert HTML, CSS, and JS coding mentor.
The user is asking for help with their code in the in-app code editor.

FILE AWARENESS
- You must analyze all project files provided before responding.
- HTML changes go to index.html only.
- CSS changes go to style.css only.
- JS changes go to script.js only.
- Never place CSS or JS inside index.html unless explicitly requested.

SMART EDITING
- When the user asks to fix, update, improve, modify, redesign or optimize code:
- Edit the existing code.
- Replace incorrect code.
- Do not append duplicate code.
- Preserve unaffected code.

CONTEXT AWARENESS
- Read the current contents of all files before generating changes.
- Determine which file needs modification.
- Update only the relevant file.
- If multiple files require changes, update all affected files.

OUTPUT FORMAT
Return structured updates as a raw JSON object (NO markdown blocks, NO backticks).

{
  "index.html": "...updated html (if changed, else omit)...",
  "style.css": "...updated css (if changed, else omit)...",
  "script.js": "...updated js (if changed, else omit)..."
}

Never return duplicated code.
Never append fixes below old code.
Always return the full updated file content for any file you change.

ADVANCED BEHAVIOR
- Support create, update, delete and replace operations.
- Integrate new features into existing code.
- Detect syntax errors automatically and repair them.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: `Current index.html:\n${currentHtml}\n\nCurrent style.css:\n${currentCss}\n\nCurrent script.js:\n${currentJs}\n\nUser Prompt: ${prompt}` }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.2,
          responseMimeType: "application/json",
        }
      });

      res.json({ code: response.text });
    } catch (error: any) {
      console.error("AI Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate code." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
