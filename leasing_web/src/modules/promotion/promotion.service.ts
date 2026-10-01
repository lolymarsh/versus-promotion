import { siteConfig } from "../../config/site.js";

export const promotionService = {
  async getPromotion() {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      price: 5990,
      installmentPlan: "2,000 x 3 เดือน",
      quota: "รับเพียง 1,000 คันเท่านั้น",
      bonus: {
        year1: "ส่วนลด 1 บาท/ลิตร",
        year2_3: "ส่วนลด 0.50 บาท/ลิตร",
      },
      conditions: [
        "เติมแก๊สกับปั๊ม PT จำนวน 100 ลิตร / เดือน เป็นเวลา 36 เดือน (หรือ 3,600 ลิตร ตลอดสัญญา)",
        "อายุรถไม่เกิน 9 ปี (ถ้าเกินสามารถขออนุมัติเป็นกรณีพิเศษได้)",
      ],
      contacts: siteConfig.contacts,
    };
  },
};
