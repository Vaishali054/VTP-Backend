import { z } from "zod";

export const updateDetail = z.object({
  name: z
    .string()
    .optional(),
    // .min(3, { message: "Name must be at least 3 characters long", optional: true })
    // .max(40, { message: "Name can't exceed 40 characters", optional: true }),
  email_id: z
    .string()
    .min(5, { message: "Email must be at least 5 characters long", optional: true })
    .max(50, { message: "Email can't exceed 50 characters", optional: true })
    .email({ message: "Invalid email format", optional: true }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long", optional: true })
    .max(100, { message: "Password can't exceed 100 characters", optional: true }),
});
