import z from "zod";
export const loginSchema = z.object({
  email: z.string().min(1, "Please provide email address"),
  password: z.string().min(1, "Please provide password"),
});
export const registerSchema = z.object({
  name: z.string().min(1, "Please provide Name"),
  email: z.string().min(1, "Please provide email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
