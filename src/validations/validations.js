import { z } from "zod";

export const emailValidation = z.object({

  email_id: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long", optional: true })
    .max(50, { message: "Email can't exceed 50 characters", optional: true })
    .email({ message: "Invalid email format", optional: true }),

});

export const passwordValidation = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password can't exceed 100 characters"),
});

export const nameValidation = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(40, "Name can't exceed 40 characters"),
});
