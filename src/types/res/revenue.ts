import type { RevenueData } from "./dashboard";
import type { Subscription_Tier } from "./get_all_users";

export type PaymentType = "Stripe" | "Paypal";
export type PaymentStatus = "complete" | "pending" | "failed";

export interface PaymentData {
  trx_id: string;
  user: string;
  plan: Subscription_Tier;
  amount: number;
  method: PaymentType;
  status: PaymentStatus;
  date: string;
}

export interface RevenueOverviewProps {
  total_revenue: number;
  revenue_growth: number;
  total_transactions: number;
  transaction_growth: number;
  success_rate: number;
  success_rate_growth: number | null;
}

export interface RevenueRes {
  revenue_overview: RevenueOverviewProps;
  revenue_chart: RevenueData[];
  payment_data: PaymentData[];
}
