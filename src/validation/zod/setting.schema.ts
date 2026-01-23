import { z } from "zod";

export const settingsSchema = z.object({
  name: z.string().min(2, "Platform name must be at least 2 characters"),

  email: z.string().email("Invalid support email"),

  phone: z.string().min(6, "Phone number is too short"),

  subscription: z.object({
    standard: z
      .number({ error: "Standard price is required" })
      .min(0, "Must be a positive number"),

    classic: z
      .number({ error: "Classic price is required" })
      .min(0, "Must be a positive number"),

    premium: z
      .number({ error: "Premium price is required" })
      .min(0, "Must be a positive number"),
  }),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
