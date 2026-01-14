import type { TMeta } from "./common";

export type Account_Status = "active" | "suspended" | "inactive";
export type Subscription_Tier = "Premium" | "Classic" | "Standard";

export type TGetUsersReq = {
  account_status?: Account_Status | "";
  subscription_type?: Subscription_Tier | "";
  search?: string;
  page?: number;
  limit?: number;
};

// response type
export type TUser = {
  id: string;
  name: string;
  email: string;
  status: Account_Status;
  subscription: Subscription_Tier;
  image: string;
  mobile: string;
  address: string;
  ring_id: string;
  health_score: number;
  created_at: string;
};

export type TUserOverview = {
  total_users: number;
  active_users: number;
  suspended_users: number;
  avg_health: number;
};

export type TGetUsersRes = {
  data: TUser[];
  meta: TMeta;
};
