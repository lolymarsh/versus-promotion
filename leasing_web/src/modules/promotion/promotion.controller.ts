import type { Request, Response } from "express";
import { promotionService } from "./promotion.service.js";
import { sendSuccess, sendError } from "../../utils/response.js";

export const promotionController = {
  async getPromotion(req: Request, res: Response) {
    try {
      const data = await promotionService.getPromotion();
      return sendSuccess(res, { data });
    } catch (error) {
      return sendError(res, error);
    }
  },
};
