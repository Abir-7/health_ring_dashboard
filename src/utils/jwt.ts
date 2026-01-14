// src/lib/jwt.ts
import type { UserRole } from "@/lib/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

export type DecodedToken = {
  user_email: string;
  user_id: string;
  user_role: UserRole;
  iat: number; // issued at (seconds)
  exp: number; // expiry (seconds)
};
export function decodeToken(token: string): DecodedToken | null {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error("Invalid JWT token", error);
    return null;
  }
}
