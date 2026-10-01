import { z } from "zod";

export const createLeadSchema = z.object({
  name: z.string().min(1, "กรุณากรอกชื่อ"),
  phone: z.string().min(9, "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง"),
  carModel: z.string().optional(),
  carYear: z.string().optional(),
  note: z.string().optional(),
});

export type CreateLeadDTO = z.infer<typeof createLeadSchema>;
