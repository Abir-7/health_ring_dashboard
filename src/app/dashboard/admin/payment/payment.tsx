import RevenueChartDay from "@/components/custom_ui/dashboard/page/payment/chart/revenue_chart";
import RevenueOverview from "@/components/custom_ui/dashboard/page/payment/revenue_overview_card";
import RevenueTable, {
  type PaymentStatus,
  type PaymentType,
} from "@/components/custom_ui/dashboard/page/payment/revenue_table";
import type { Subscription_Tier } from "@/types/res/get_all_users";

const PaymentPage = () => {
  const revenueData = [
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

  return (
    <div className="p-4 space-y-4">
      <div>
        <RevenueOverview data={null}></RevenueOverview>
      </div>
      <div>
        <RevenueChartDay
          data={[
            { month: "Jan 1", revenue: 1002000 },
            { month: "Jan 2", revenue: 12222000 },
            { month: "Jan 3", revenue: 2122000 },
            { month: "Jan 4", revenue: 5222000 },
            { month: "Jan 5", revenue: 12222000 },
            { month: "Jan 6", revenue: 1222000 },
          ]}
        ></RevenueChartDay>
      </div>
      <div>
        <RevenueTable data={revenueData} />
      </div>
    </div>
  );
};

export default PaymentPage;
