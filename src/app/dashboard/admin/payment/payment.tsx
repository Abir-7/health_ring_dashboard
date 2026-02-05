"use client";
import RevenueChartDay from "@/components/custom_ui/dashboard/page/payment/chart/revenue_chart";
import RevenueOverview from "@/components/custom_ui/dashboard/page/payment/revenue_overview_card";
import RevenueTable from "@/components/custom_ui/dashboard/page/payment/revenue_table";
import { useRevenueOverviewQuery } from "@/react_query_hook/query/revenue_overview";

const PaymentPage = () => {
  const { data } = useRevenueOverviewQuery();
  return (
    <div className="p-4 space-y-4">
      <div>
        <RevenueOverview
          data={data?.revenue_overview || null}
        ></RevenueOverview>
      </div>
      <div>
        <RevenueChartDay data={data?.revenue_chart || []}></RevenueChartDay>
      </div>
      <div>
        <RevenueTable data={data?.payment_data || []} />
      </div>
    </div>
  );
};

export default PaymentPage;
