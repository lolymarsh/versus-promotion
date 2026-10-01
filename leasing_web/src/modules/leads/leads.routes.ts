import { Router } from "express";
import { leadsController } from "./leads.controller.js";

const router = Router();

router.get("/", leadsController.getAll);
router.post("/", leadsController.create);

export default router;
