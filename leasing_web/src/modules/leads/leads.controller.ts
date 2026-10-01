import type { Request, Response } from "express";
import { leadsService } from "./leads.service.js";
import { createLeadSchema } from "./leads.dto.js";
import { sendSuccess, sendError } from "../../utils/response.js";

export const leadsController = {
  async create(req: Request, res: Response) {
    try {
      const parsed = createLeadSchema.parse(req.body);
      const lead = await leadsService.createLead(parsed);
      return sendSuccess(res, {
        data: lead,
        message: "บันทึกข้อมูลเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุด",
        statusCode: 201,
      });
    } catch (error) {
      return sendError(res, error, "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง", 400);
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const data = await leadsService.getAllLeads();
      return sendSuccess(res, { data });
    } catch (error) {
      return sendError(res, error);
    }
  },
};
