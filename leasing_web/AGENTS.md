# Project: Leasing Web

## 1. Overview & Architecture
- **สถาปัตยกรรม**: **Node.js + Express 5 + TypeScript** สำหรับ Backend และ Serve Static Frontend ด้วย **HTML + Tailwind CSS v4**
- **โครงสร้างโค้ด**: ถอดแบบโครงสร้าง Modular Architecture จาก `/Users/lolymarsh/Desktop/ms_media_work/airsense-pm2.5/backend`
- **จุดเด่น**:
  - โหลดเร็วมาก (Page Speed สูง ไม่มี JS Framework Overhead)
  - รองรับ SEO/GEO/AEO เต็มรูปแบบ (Schema.org JSON-LD, FAQPage, OpenGraph, sitemap.xml)
  - รองรับ Ad Tracking (Meta Pixel, Google Tag Manager, Conversion Tracking สำหรับปุ่มโทรและ LINE)
  - มี **Unit/Integration Test** ประจำทุก Feature Module

---

## 2. Tech Stack & Standards
- **Backend**: Node.js, Express 5, TypeScript, CORS, dotenv, Zod, Supertest
- **Testing**: `bun test` หรือ `supertest`
- **Frontend**: Pure Semantic HTML5, Tailwind CSS v4, Prompt Font (Google Fonts), Lucide Icons
- **Tracking**: Google Tag Manager (`GTM-KFPP23F`), Meta Pixel (`1028137008191726`, `1157449724806372`)
- **Execution**: รองรับทั้ง `bun` (`bun --watch src/index.ts`) และ `tsx` (`npm run dev`)

---

## 3. Backend Module Structure Standard
ทุก Feature ใน `src/modules/<feature>/` **ต้องมีไฟล์ครบ 5 ส่วนเสมอ**:
1. `<feature>.routes.ts`: กำหนด Express Router & HTTP Methods
2. `<feature>.controller.ts`: จัดการ Request/Response, Handle Error และเรียก Service
3. `<feature>.service.ts`: Business Logic, ประมวลผลข้อมูล
4. `<feature>.dto.ts`: Zod Schema Validation & Data Transfer Object Types
5. **`<feature>.test.ts`**: Unit / Integration Test สำหรับทดสอบ Service และ API Endpoints

---

## 4. Folder Structure Overview
```text
leasing_web/
├── public/
│   ├── index.html            # หน้าหลัก (5,990) + SEO/GEO/AEO + Schema.org + Pixel + Tailwind v4
│   ├── facebook.html         # หน้าแคมเปญ Facebook (12,990) + Pixel แยก
│   ├── robots.txt            # Search engine robots rule
│   └── sitemap.xml           # XML Sitemap สำหรับ Google Search
├── src/
│   ├── index.ts              # Entry point: Express server, static serve public/, route mapping
│   ├── config/
│   │   ├── env.ts            # Environment variables
│   │   └── site.ts           # Config ข้อมูลเว็บ, เบอร์ติดต่อ, SEO defaults
│   ├── modules/
│   │   ├── promotion/        # Promotion data API
│   │   │   ├── promotion.routes.ts
│   │   │   ├── promotion.controller.ts
│   │   │   ├── promotion.service.ts
│   │   │   ├── promotion.dto.ts
│   │   │   └── promotion.test.ts      # Test file ประจำ module
│   │   └── leads/            # ฟอร์มรับข้อมูลลูกค้าติดต่อกลับ
│   │       ├── leads.routes.ts
│   │       ├── leads.controller.ts
│   │       ├── leads.service.ts
│   │       ├── leads.dto.ts
│   │       └── leads.test.ts          # Test file ประจำ module
│   └── utils/
│       └── response.ts       # sendSuccess, sendError helper
├── .env.example
├── .gitignore
├── tsconfig.json
├── package.json
└── AGENTS.md
```

---

## 5. Development & Test Commands
- `npm run dev` หรือ `bun run bun:dev` — รันเซิร์ฟเวอร์โหมด Development (Hot-reload)
- `npm test` หรือ `bun test` — รันการทดสอบ Unit & API Tests ทั้งหมด
- `npm run build` — คอมไพล์ TypeScript ไปยัง `dist/`
- `npm start` — รัน Production server
