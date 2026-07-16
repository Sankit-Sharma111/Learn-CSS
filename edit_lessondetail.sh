sed -i '1i import { AdBanner } from "../AdBanner";' src/components/home/LessonDetail.tsx
sed -i '/<\/div>$/!b;n;/<AdBanner \/>/!b;a\        <AdBanner />' src/components/home/LessonDetail.tsx
