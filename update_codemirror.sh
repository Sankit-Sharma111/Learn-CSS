sed -i 's/value={activeFile === "html" ? editorHtml : editorCss}/value={activeFile === "html" ? editorHtml : activeFile === "css" ? editorCss : editorJs}/g' src/components/editor/EditorTab.tsx
sed -i 's/extensions={activeFile === "html" ? htmlExtensions : cssExtensions}/extensions={activeFile === "html" ? htmlExtensions : activeFile === "css" ? cssExtensions : jsExtensions}/g' src/components/editor/EditorTab.tsx
sed -i 's/else setEditorCss(val);/else if (activeFile === "css") setEditorCss(val);\n            else setEditorJs(val);/g' src/components/editor/EditorTab.tsx
