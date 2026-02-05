import type {} from "@/components/custom_ui/dashboard/page/payment/revenue_table";

import type { Subscription_Tier } from "@/types/res/get_all_users";
import type { PaymentStatus, PaymentType } from "@/types/res/revenue";

export const payment_data = [
  {
    trx_id: "TRX-1001",
    user: "John Doe",
    plan: "Premium" as Subscription_Tier,
    amount: 49.99,
    method: "Stripe" as PaymentType,
    status: "complete" as PaymentStatus,
    date: "2025-01-20",
  },
  {
    trx_id: "TRX-1002",
    user: "Jane Smith",
    plan: "Classic" as Subscription_Tier,
    amount: 19.99,
    method: "Paypal" as PaymentType,
    status: "pending" as PaymentStatus,
    date: "2025-01-21",
  },
  {
    trx_id: "TRX-1002",
    user: "Jane Smith",
    plan: "Classic" as Subscription_Tier,
    amount: 19.99,
    method: "Paypal" as PaymentType,
    status: "failed" as PaymentStatus,
    date: "2025-01-21",
  },
];

export const revenue_chart = [
  { month: "Jan 1", revenue: 1002000 },
  { month: "Jan 2", revenue: 12222000 },
  { month: "Jan 3", revenue: 2122000 },
  { month: "Jan 4", revenue: 5222000 },
  { month: "Jan 5", revenue: 12222000 },
  { month: "Jan 6", revenue: 1222000 },
];

export const revenue_overview = {
  total_revenue: 125430.75,
  revenue_growth: 12.4, // +12.4%
  total_transactions: 3421,
  transaction_growth: 8.9, // +8.9%
  success_rate: 96.3, // 96.3%
  success_rate_growth: 1.2, // +1.2%
};
