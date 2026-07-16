import fs from 'fs';

const files = fs.readdirSync('src/content').filter(f => f.startsWith('chapter-') && f.endsWith('.ts'));
const chapters = files.map(f => f.replace('.ts', '').replace('-', ''));

let indexContent = '';
for (const f of files) {
  const ch = f.replace('.ts', '').replace('-', '');
  indexContent += `import { ${ch}, ${ch}Quiz } from './${f.replace('.ts', '')}';\n`;
  indexContent += `export { ${ch}, ${ch}Quiz };\n`;
}

indexContent += `\nexport const courseData = [\n`;
for (const ch of chapters) {
  indexContent += `  { ...${ch}, quiz: ${ch}Quiz },\n`;
}
indexContent += `];\n`;

fs.writeFileSync('src/content/index.ts', indexContent);
console.log('index.ts updated');
