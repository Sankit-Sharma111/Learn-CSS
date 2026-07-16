sed -i '1i import { AdBanner } from "../AdBanner";' src/components/home/HomeMain.tsx
sed -i '/<h3 className="text-xl font-bold/i \      <AdBanner />\n' src/components/home/HomeMain.tsx
