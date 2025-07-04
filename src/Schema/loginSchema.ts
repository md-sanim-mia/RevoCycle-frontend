import z from "zod";
export const loginSchema = z.object({
  email: z.string().min(1, "Please provide email address"),
  password: z.string().min(1, "Please provide password"),
});
export const registerSchema = z.object({
  firstName: z.string().min(1, "Please provide first name "),
  lastName: z.string().min(1, "Please provide last name"),
  phone: z.string().min(1, "Please provide phone number"),
  email: z.string().min(1, "Please provide email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
