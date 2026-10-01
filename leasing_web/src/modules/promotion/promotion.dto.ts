import { z } from "zod";

export const promotionSchema = z.object({
  title: z.string(),
  price: z.number(),
  installment: z.string(),
  limit: z.number(),
  bonusYear1: z.string(),
  bonusYear23: z.string(),
  conditionLiters: z.string(),
  conditionCarAge: z.string(),
});

export type PromotionDTO = z.infer<typeof promotionSchema>;
