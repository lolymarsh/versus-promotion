import { describe, it, expect } from "bun:test";
import request from "supertest";
import app from "../../index.js";
import { promotionService } from "./promotion.service.js";

describe("Promotion Module", () => {
  describe("Promotion Service", () => {
    it("should return promotion data with required fields", async () => {
      const data = await promotionService.getPromotion();
      expect(data).toBeDefined();
      expect(data.price).toBe(5990);
      expect(data.installmentPlan).toBe("2,000 x 3 เดือน");
      expect(data.bonus.year1).toContain("1 บาท/ลิตร");
      expect(data.conditions.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/promotion", () => {
    it("should return 200 and promotion json data", async () => {
      const response = await request(app).get("/api/promotion");
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.price).toBe(5990);
    });
  });
});
