sed -i 's/} else {/} else if (activeFile === "css") {/g' src/components/editor/EditorTab.tsx
sed -i '/} else if (activeFile === "css") {/!b;n;a\    } else {\n      setEditorJs(prev => prev + snippet);' src/components/editor/EditorTab.tsx
