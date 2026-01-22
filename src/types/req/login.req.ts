import type { loginSchema } from "@/validation/zod/login.schema";
import type z from "zod";

export type TLoginReq = z.infer<typeof loginSchema>;
