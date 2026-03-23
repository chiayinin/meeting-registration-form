import { z } from 'zod';

export const formSchema = z
 .object({
    name: z.string().min(1, "請輸入姓名"),
    email: z.email("Email 格式錯誤"),
    phone: z.string().regex(/^09\d{8}$/, "手機格式錯誤"),
    company: z.string().min(1, "請輸入服務單位"),

    industry: z.string().min(1, "請選擇產業"),
    otherIndustry: z.string().optional(),

    sessions: z.array(z.string()).min(1, "請選擇至少一個場次"),

    // attendDinner: z.enum(["yes", "no"], {
    //   message: "請選擇是否參加晚宴",
    // }),

    // diet: z.enum(["noveg", "veg", "other"], {
    //   message: "請選擇飲食習慣",
    // }),
    // otherDiet: z.string().optional()
 })
 .superRefine((data, ctx) => {
    // 其他產業
    if (data.industry === "other" && !data.otherIndustry) {
      ctx.addIssue({
        path: ["otherIndustry"],
        message: "請填寫產業名稱",
        code: "custom"
      });
    }

    // 晚宴
    // if (data.attendDinner === "yes") {
    //   if (!data.diet) {
    //     ctx.addIssue({
    //       path: ["diet"],
    //       message: "請選擇飲食習慣",
    //       code: "custom"
    //     });
    //   }

    //   // 飲食習慣
    //   if(data.diet === "other" && !data.otherDiet) {
    //     ctx.addIssue({
    //       path: ["otherDiet"],
    //       message: "請填寫飲食習慣",
    //       code: "custom"
    //     });
    //   }
    // }
  })
