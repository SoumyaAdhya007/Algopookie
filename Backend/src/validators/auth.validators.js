import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least of 6 character"),
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least of 6 character"),
});

export const userIdSchema = z.object({
  id: z.string().min(1, { message: "userId must be a nonempty string" }),
});
