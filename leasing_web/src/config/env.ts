import "dotenv/config";

export const env = {
  PORT: Number(process.env.PORT) || 1234,
  NODE_ENV: process.env.NODE_ENV || "development",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
  SITE_URL: process.env.SITE_URL || "http://localhost:1234",
};
