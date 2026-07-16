import { useState, useRef, useEffect } from "react";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { useAppContext } from "../../AppContext";

type FileType = "html" | "css" | "js";

export function EditorTab() {
  const { editorHtml, setEditorHtml, editorCss, setEditorCss, editorJs, setEditorJs, setActiveTab } = useAppContext();
  const [activeFile, setActiveFile] = useState<FileType>("html");
  const [showPreview, setShowPreview] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const editorRef = useRef<ReactCodeMirrorRef>(null);

  const htmlExtensions = [html()];
  const cssExtensions = [css()];
  const jsExtensions = [javascript()];

  const updatePreview = () => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>${editorCss}</style>
            </head>
            <body>${editorHtml}<script>${editorJs}</script></body>
          </html>
        `);
        doc.close();
      }
    }
  };

  useEffect(() => {
    if (showPreview) {
      updatePreview();
    }
  }, [showPreview, editorHtml, editorCss, editorJs]);

  // Fallback simple append
  const insertSnippet = (snippet: string) => {
    if (activeFile === "html") {
      setEditorHtml(prev => prev + snippet);
    } else if (activeFile === "css") {
      setEditorCss(prev => prev + snippet);
    } else {
      setEditorJs(prev => prev + snippet);
    }
  };

  const insertCodeSnippet = (snippet: string, cursorOffsetBack: number = 0) => {
    const view = editorRef.current?.view;
    if (!view) {
      insertSnippet(snippet);
      return;
    }
    
    const state = view.state;
    const selection = state.selection.main;
    
    view.dispatch({
      changes: { from: selection.from, to: selection.to, insert: snippet },
      selection: { anchor: selection.from + snippet.length - cursorOffsetBack }
    });
    view.focus();
  };

  const insertHtmlAttribute = (attrName: string) => {
    const view = editorRef.current?.view;
    if (!view || activeFile !== "html") {
      insertSnippet(` ${attrName}=""`);
      return;
    }

    const state = view.state;
    const selection = state.selection.main;
    const cursor = selection.head;
    const docText = state.doc.toString();

    let insertPos = -1;
    let tagContent = "";

    // Case 1: Cursor is currently INSIDE an opening tag (e.g., `<div |>`)
    const textBefore = docText.slice(0, cursor);
    const textAfter = docText.slice(cursor);
    const insideTagMatch = textBefore.match(/<[a-zA-Z0-9-]+[^>]*$/);
    
    if (insideTagMatch) {
      const endOffset = textAfter.indexOf('>');
      if (endOffset !== -1) {
        insertPos = cursor + endOffset;
        tagContent = insideTagMatch[0] + textAfter.slice(0, endOffset);
      }
    } else {
      // Case 2: Cursor is OUTSIDE an opening tag (e.g., `<div>|</div>` or `<button>|`)
      // Find the most recent opening tag before the cursor
      const regex = /<([a-zA-Z0-9-]+)([^>]*?)(\/?)>/g;
      let match;
      let lastOpenTag = null;
      let lastOpenTagEnd = -1;

      while ((match = regex.exec(docText)) !== null) {
        if (match.index < cursor) {
          lastOpenTag = match;
          lastOpenTagEnd = match.index + match[0].length;
        } else {
          break;
        }
      }

      if (lastOpenTag) {
        // We found the nearest opening tag. The insertion point is right before the `>` or `/>`
        const isSelfClosing = lastOpenTag[3] === '/';
        insertPos = lastOpenTagEnd - (isSelfClosing ? 2 : 1);
        tagContent = lastOpenTag[0];
      }
    }

    if (insertPos !== -1) {
      // Check if attribute already exists
      const attrRegex = new RegExp(`\\s${attrName}=['"]`, 'i');
      if (attrRegex.test(tagContent)) {
        view.focus();
        return;
      }

      // Check if we need a leading space
      const textJustBeforeInsert = docText.slice(0, insertPos);
      const needsSpace = !textJustBeforeInsert.match(/\s$/);
      const textToInsert = (needsSpace ? " " : "") + `${attrName}=""`;
      
      view.dispatch({
        changes: { from: insertPos, insert: textToInsert },
        selection: { anchor: insertPos + textToInsert.length - 1 }
      });
      view.focus();
    } else {
      // Fallback
      const textToInsert = ` ${attrName}=""`;
      view.dispatch({
        changes: { from: selection.from, to: selection.to, insert: textToInsert },
        selection: { anchor: selection.from + textToInsert.length - 1 }
      });
      view.focus();
    }
  };

  const handleReset = () => {
    setEditorHtml("<!-- Write HTML here -->\n");
    setEditorCss("/* Write CSS here */\n");
    setEditorJs("// Write JS here\n");
  };

  const handleAskAI = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    
    try {
      const response = await fetch("/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: aiPrompt,
          html: editorHtml,
          css: editorCss,
          js: editorJs,
        }),
      });

      if (!response.ok) {
        throw new Error("AI request failed");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      let parsedCode: any = null;
      try {
        parsedCode = JSON.parse(data.code);
      } catch (e) {
        console.error("Failed to parse JSON code:", data.code);
      }

      if (parsedCode) {
        if (parsedCode["index.html"]) setEditorHtml(parsedCode["index.html"]);
        if (parsedCode["style.css"]) setEditorCss(parsedCode["style.css"]);
        if (parsedCode["script.js"]) {
          setEditorJs(parsedCode["script.js"]);
        }
      } else {
        // Fallback if not JSON
        insertCodeSnippet(`\n${data.code}\n`);
      }
      
      setAiPrompt("");
    } catch (error) {
      console.error(error);
      alert("Failed to get AI response. Please ensure API key is set.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (showPreview) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
          <button 
            onClick={() => setShowPreview(false)}
            className="text-indigo-400 hover:text-indigo-300 font-bold px-3 py-1 flex items-center gap-1"
          >
            ← Back to Editor
          </button>
          <span className="font-bold">Preview</span>
          <button onClick={updatePreview} className="p-2 text-slate-400 hover:text-white">
            <RotateCcw size={18} />
          </button>
        </div>
        <iframe 
          ref={iframeRef} 
          className="w-full flex-1 bg-white border-none"
          title="preview"
        />
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen pb-24 max-w-5xl mx-auto flex flex-col">
      {/* Top Navigation Back */}
      <div className="px-3 pt-3 flex items-center">
        <button 
          onClick={() => setActiveTab("home")}
          className="text-slate-400 hover:text-white font-bold px-1 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-2 pt-2 border-b border-slate-800">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveFile("html")}
            className={`px-4 py-2 rounded-t-lg font-bold text-sm flex items-center gap-2 transition-colors ${
              activeFile === "html" ? "bg-slate-800 text-orange-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-orange-500">&lt;/&gt;</span> index.html
          </button>
          <button
            onClick={() => setActiveFile("css")}
            className={`px-4 py-2 rounded-t-lg font-bold text-sm flex items-center gap-2 transition-colors ${
              activeFile === "css" ? "bg-slate-800 text-blue-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-blue-500">#</span> style.css
          </button>
        </div>
        <div className="flex items-center gap-2 px-2 pb-1">
          <button
            onClick={() => setActiveFile("js")}
            className={`px-4 py-2 rounded-t-lg font-bold text-sm flex items-center gap-2 transition-colors ${
              activeFile === "js" ? "bg-slate-800 text-yellow-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className="text-yellow-500">{}</span> script.js
          </button>
          <button onClick={handleReset} className="text-slate-500 hover:text-slate-300">
             <RotateCcw size={16} />
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors"
          >
            <Play size={14} fill="currentColor" /> Live Preview
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto bg-[#282c34]">
        <CodeMirror
          ref={editorRef}
          value={activeFile === "html" ? editorHtml : activeFile === "css" ? editorCss : editorJs}
          height="100%"
          theme="dark"
          extensions={activeFile === "html" ? htmlExtensions : activeFile === "css" ? cssExtensions : jsExtensions}
          onChange={(val) => {
            if (activeFile === "html") setEditorHtml(val);
            else if (activeFile === "css") setEditorCss(val);
            else setEditorJs(val);
          }}
          className="text-sm h-full"
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            foldGutter: false,
          }}
        />
      </div>

      {/* Keyboard helpers */}
      <div className="bg-slate-800 border-t border-slate-700 p-2 flex flex-col gap-2">
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
          {activeFile === "html" ? (
            <>
              <HelperBtn onClick={() => insertCodeSnippet("<div>\n  \n</div>", 7)}>&lt;div&gt;</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("<h1></h1>", 5)}>&lt;h1&gt;</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("<p></p>", 4)}>&lt;p&gt;</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("class")}>class</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("id")}>id</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("style")}>style</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("src")}>src</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("href")}>href</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("alt")}>alt</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("title")}>title</HelperBtn>
              <HelperBtn onClick={() => insertHtmlAttribute("target")}>target</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("<!--  -->", 4)}>&lt;!-- --&gt;</HelperBtn>
            </>
          ) : activeFile === "css" ? (
            <>
              <HelperBtn onClick={() => insertCodeSnippet("{\n  \n}", 2)}>{"{ }"}</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("color: ;", 1)}>color:</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("background: ;", 1)}>bg:</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("margin: ;", 1)}>margin:</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("padding: ;", 1)}>padding:</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("/*  */", 3)}>/* */</HelperBtn>
            </>
          ) : (
            <>
              <HelperBtn onClick={() => insertCodeSnippet("function () {\n  \n}", 2)}>function</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("console.log();", 2)}>console.log</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("const  =", 2)}>const</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("let  =", 2)}>let</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet('document.querySelector("");', 3)}>querySelector</HelperBtn>
              <HelperBtn onClick={() => insertCodeSnippet("// ", 0)}>//</HelperBtn>
            </>
          )}
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-2">
          <HelperBtn onClick={() => insertCodeSnippet("<")}>&lt;</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet(">")}>&gt;</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet("/")}>/</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet("=")}>=</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet('"')}>"</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet(":")}>:</HelperBtn>
          <HelperBtn onClick={() => insertCodeSnippet(";")}>;</HelperBtn>
        </div>
      </div>

      {/* Ask AI Footer */}
      <div className="bg-slate-900 border-t border-slate-800 p-3 flex gap-2">
        <input 
          type="text" 
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          placeholder="Ask AI Mentor to help you code..."
          className="flex-1 bg-slate-800 border border-slate-700 text-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleAskAI}
          disabled={isGenerating || !aiPrompt.trim()}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl px-4 py-2 flex items-center gap-1 transition-colors disabled:opacity-50"
        >
          <Sparkles size={16} />
          {isGenerating ? "..." : "Ask Me"}
        </button>
      </div>
    </div>
  );
}

function HelperBtn({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-slate-700 hover:bg-slate-600 text-slate-300 font-mono text-xs px-3 py-1.5 rounded whitespace-nowrap shrink-0 transition-colors"
    >
      {children}
    </button>
  );
}
