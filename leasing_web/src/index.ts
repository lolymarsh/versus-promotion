import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { env } from "./config/env.js";

import promotionRouter from "./modules/promotion/promotion.routes.js";
import leadsRouter from "./modules/leads/leads.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const app = express();

// CORS configuration
const corsOrigin = env.CORS_ORIGIN;
const corsOptions = {
  origin: corsOrigin && corsOrigin !== "*"
    ? corsOrigin.split(",").map((origin) => origin.trim())
    : "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets with .html extension support (e.g. /facebook loads public/facebook.html)
app.use(express.static(publicDir, { extensions: ["html"] }));

// API Routes
app.use("/api/promotion", promotionRouter);
app.use("/api/leads", leadsRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Fallback Middleware (Express 5 Compatible)
app.use((req, res) => {
  const cleanPath = req.path.replace(/^\/+|\/+$/g, "");
  const targetHtml = path.join(publicDir, `${cleanPath}.html`);

  if (cleanPath && fs.existsSync(targetHtml)) {
    return res.sendFile(targetHtml);
  }

  return res.sendFile(path.join(publicDir, "index.html"));
});

// Start Server
if (process.env.NODE_ENV !== "test") {
  app.listen(env.PORT, () => {
    console.log(`=============================================`);
    console.log(`🚀 Leasing Web Server running at: http://localhost:${env.PORT}`);
    console.log(`📁 Static files served from: ${publicDir}`);
    console.log(`🔗 Main Page: http://localhost:${env.PORT}/`);
    console.log(`🔗 Facebook Campaign: http://localhost:${env.PORT}/facebook`);
    console.log(`=============================================`);
  });
}

export default app;
