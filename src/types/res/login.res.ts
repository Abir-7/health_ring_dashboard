import type { UserRole } from "@/lib/redux/features/auth/authSlice";

type TloginRes = {
  id: string;
  email: string;
  access_token: string;
  role: UserRole;
};

export type { TloginRes };
