import { Router } from "express";
import { promotionController } from "./promotion.controller.js";

const router = Router();

router.get("/", promotionController.getPromotion);

export default router;
