import { array, z } from "zod";

export const contestSchema = z
  .object({
    title: z.string().min(1, "Contest title is required."),
    description: z.string().optional(),
    startTime: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid startTime format.",
    }),
    endTime: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid endTime format.",
    }),
    problemIds: z
      .array(z.string(), { required_error: "problemIds must be string array." })
      .min(1, "At least one problem ID is required."),
  })
  .refine((data) => new Date(data.endTime) > new Date(data.startTime), {
    message: "endTime must be after startTime.",
    path: ["endTime"],
  });
