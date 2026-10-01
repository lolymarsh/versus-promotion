import { describe, it, expect } from "bun:test";
import request from "supertest";
import app from "../../index.js";

describe("Leads Module", () => {
  describe("POST /api/leads", () => {
    it("should successfully create a lead with valid data", async () => {
      const payload = {
        name: "สมชาย ใจดี",
        phone: "0812345678",
        carModel: "Toyota Vios 2019",
      };

      const response = await request(app)
        .post("/api/leads")
        .send(payload);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(payload.name);
      expect(response.body.data.phone).toBe(payload.phone);
      expect(response.body.data.id).toBeDefined();
    });

    it("should fail when name is empty", async () => {
      const payload = {
        name: "",
        phone: "0812345678",
      };

      const response = await request(app)
        .post("/api/leads")
        .send(payload);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it("should fail when phone is too short", async () => {
      const payload = {
        name: "สมชาย",
        phone: "123",
      };

      const response = await request(app)
        .post("/api/leads")
        .send(payload);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe("GET /api/leads", () => {
    it("should return a list of leads", async () => {
      const response = await request(app).get("/api/leads");
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });
});
