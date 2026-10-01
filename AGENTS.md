# Workspace: Versus Promotion

## Projects Overview
- **`leasing_web`**: เว็บไซต์โปรโมชั่นสินเชื่อ เช่าซื้อ (Node.js + Express 5 + TypeScript + HTML + Tailwind CSS v4 ถอดแบบโครงสร้างจาก `airsense-pm2.5/backend` พร้อม `<feature>.test.ts` ทุก Module)
- **`leasing_ad`**: โฟลเดอร์สำหรับจัดการสื่อโฆษณา / Assets

## Project Standards & Rules
- โปรเจกต์ `leasing_web` ยึดตามแนวทางใน `leasing_web/AGENTS.md`
- Backend ใช้ Modular Pattern (`src/modules/<feature>/`) โดยทุกโมดูลต้องมีครบทั้ง `.routes.ts`, `.controller.ts`, `.service.ts`, `.dto.ts` และ `.test.ts`
- Frontend ใช้ Static Semantic HTML ใน `public/` ร่วมกับ Tailwind CSS v4, Prompt font, Lucide Icons, SEO Meta & Schema.org JSON-LD, และ Ad Tracking (Meta Pixel / GTM)
