sed -i 's/import { css } from "@codemirror\/lang-css";/import { css } from "@codemirror\/lang-css";\nimport { javascript } from "@codemirror\/lang-javascript";/g' src/components/editor/EditorTab.tsx
sed -i 's/type FileType = "html" | "css";/type FileType = "html" | "css" | "js";/g' src/components/editor/EditorTab.tsx
