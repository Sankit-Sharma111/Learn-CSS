import { AdBanner } from "../AdBanner";
import { ArrowLeft, Code } from "lucide-react";
import { useAppContext } from "../../AppContext";
import Markdown from "react-markdown";
import { translations } from "../../data/translations";
import { useEffect } from "react";

export function LessonDetail() {
  const { setHomeView, selectedTopic, setActiveTab, setEditorHtml, setEditorCss, language } = useAppContext();
  const t = translations[language];

  useEffect(() => {
    if (!selectedTopic) {
      setHomeView("topics");
    }
  }, [selectedTopic, setHomeView]);

  if (!selectedTopic) {
    return null;
  }

  const handleLoadCode = (sandbox: { html: string; css: string }) => {
    setEditorHtml(sandbox.html);
    setEditorCss(sandbox.css);
    setActiveTab("editor");
  };

  const renderSandbox = (sandbox: { html: string; css: string; title_en?: string; title_hi?: string; title?: string }, index: number) => {
    const sandboxTitle = language === 'en' 
      ? sandbox.title_en || sandbox.title || "CSS INTERACTIVE"
      : sandbox.title_hi || sandbox.title || "CSS INTERACTIVE";

    return (
      <div key={index} className="w-full">
        <div className="bg-[#111827] rounded-3xl p-5 mb-4 shadow-sm border border-slate-800">
          <div className="text-slate-400 text-xs font-bold tracking-widest mb-3 uppercase">{sandboxTitle}</div>
          <pre className="text-slate-50 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
            {sandbox.css}
          </pre>
        </div>
        <button
          onClick={() => handleLoadCode(sandbox)}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl p-4 font-bold shadow-md shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <Code size={20} />
          {t.openInEditor || "Load Code Into Editor"}
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen pb-24 max-w-5xl mx-auto flex flex-col transition-colors">
      <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 z-10 px-4 py-4 flex items-center gap-3 transition-colors">
        <button 
          onClick={() => setHomeView("topics")}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
        </button>
        <h1 className="font-bold text-slate-800 dark:text-white flex-1 truncate">{language === 'en' ? selectedTopic.title_en : selectedTopic.title_hi}</h1>
      </div>

      <div className="p-5 flex-1 overflow-auto flex flex-col gap-5">
        {(() => {
          const content = language === 'en' ? selectedTopic.content_en : selectedTopic.content_hi;
          if (!content) return null;

          const parts = content.split(/(\[\[SANDBOX_\d+\]\])/);
          const hasSandboxes = /\[\[SANDBOX_\d+\]\]/.test(content);

          return (
            <>
              {parts.map((part, index) => {
                const match = part.match(/\[\[SANDBOX_(\d+)\]\]/);
                if (match) {
                  const sandboxIndex = parseInt(match[1], 10);
                  const sandbox = selectedTopic.sandboxes?.[sandboxIndex] || (sandboxIndex === 0 ? selectedTopic.sandboxCode : null);
                  if (sandbox) {
                    return renderSandbox(sandbox, index);
                  }
                  return null;
                }
                
                if (!part.trim()) return null;

                return (
                  <div key={index} className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 prose-code:text-pink-600 prose-code:bg-pink-50 dark:prose-code:bg-pink-900/30 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-800 prose-pre:text-slate-50 prose-img:rounded-2xl prose-img:mx-auto prose-img:shadow-md">
                    {part.split(/(:::(?:tip|warning|suggestion|mistake)\r?\n[\s\S]*?\r?\n:::)/).map((subPart, subIndex) => {
                      const containerMatch = subPart.match(/^:::(tip|warning|suggestion|mistake)\r?\n([\s\S]*?)\r?\n:::$/);
                      if (containerMatch) {
                        const type = containerMatch[1];
                        const content = containerMatch[2];
                        const isGreen = type === 'tip' || type === 'suggestion';
                        
                        return (
                          <div key={subIndex} className={`p-4 my-6 rounded-2xl border-l-4 shadow-sm not-prose ${
                            isGreen 
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-100' 
                              : 'bg-red-50 border-red-500 text-red-900 dark:bg-red-900/20 dark:text-red-100'
                          }`}>
                            <div className={`font-bold mb-2 flex items-center gap-2 ${
                              isGreen ? 'text-emerald-700 dark:text-emerald-300' : 'text-red-700 dark:text-red-300'
                            }`}>
                              {type === 'tip' && '💡 Tip'}
                              {type === 'suggestion' && '🚀 Suggestion'}
                              {type === 'warning' && '⚠️ Warning'}
                              {type === 'mistake' && '❌ Common Mistake'}
                            </div>
                            <div className="prose prose-sm max-w-none dark:prose-invert prose-p:last:mb-0 prose-p:first:mt-0">
                              <Markdown>{content}</Markdown>
                            </div>
                          </div>
                        );
                      }
                      return <Markdown key={subIndex}>{subPart}</Markdown>;
                    })}
                  </div>
                );
              })}

              {!hasSandboxes && (
                <div className="mt-2">
                  {selectedTopic.sandboxes ? (
                    selectedTopic.sandboxes.map((sandbox, index) => renderSandbox(sandbox, index))
                  ) : selectedTopic.sandboxCode ? (
                    renderSandbox(selectedTopic.sandboxCode, 0)
                  ) : null}
                </div>
              )}
              <AdBanner />
            </>
          );
        })()}
      </div>
    </div>
  );
}
