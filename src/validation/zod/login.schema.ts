import z from "zod";

const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password too short"),
});

export { loginSchema };
