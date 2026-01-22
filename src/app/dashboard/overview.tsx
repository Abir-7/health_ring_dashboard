import PaymentChart from "@/components/custom_ui/dashboard/page/overview/chart/payment_chart";
import RevenueChart from "@/components/custom_ui/dashboard/page/overview/chart/revenue_chart";
import SubscriptionChart from "@/components/custom_ui/dashboard/page/overview/chart/subscription_chart";
import UserGrowthChart from "@/components/custom_ui/dashboard/page/overview/chart/user_growth_chart";
import HealthAlertTwo from "@/components/custom_ui/dashboard/page/overview/healt_alert_two";
import HealthAlert from "@/components/custom_ui/dashboard/page/overview/health_alert";
import OverviewCardDashboard from "@/components/custom_ui/dashboard/page/overview/overview_card_dashboard";
import { useDashboardOverviewQuery } from "@/react_query_hook/query/dashboard_overview";

const OverviewPage = () => {
  const { data, isLoading } = useDashboardOverviewQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5 space-y-5">
      <OverviewCardDashboard
        data={data?.overview_data || null}
      ></OverviewCardDashboard>
      <HealthAlert data={data?.health_data || null}></HealthAlert>
      <div className="grid lg:grid-cols-2 gap-4">
        <RevenueChart data={data?.revenue_data || []} />
        <UserGrowthChart data={data?.user_data || []}></UserGrowthChart>
        <SubscriptionChart
          data={data?.subscriptionData || []}
        ></SubscriptionChart>
        <PaymentChart></PaymentChart>
      </div>
      <HealthAlertTwo data={data?.health_data_two || null}></HealthAlertTwo>
    </div>
  );
};

export default OverviewPage;
