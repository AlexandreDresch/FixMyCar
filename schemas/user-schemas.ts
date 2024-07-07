import { nameRegex, phoneRegex } from "@/lib/utils";
import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." })
    .regex(nameRegex, {
      message:
        "Name can only contain alphabetic characters and common special characters (', -, space).",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(8, { message: "Phone number must be at least 8 characters long." })
    .max(14, { message: "Phone number must be at most 14 characters long." })
    .regex(phoneRegex, { message: "Invalid phone number format." }),
});
