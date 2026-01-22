import HealthAlert from "@/components/custom_ui/dashboard/page/overview/health_alert";
import OverviewCardDashboard from "@/components/custom_ui/dashboard/page/overview/overview_card_dashboard";

const OverviewPage = () => {
  return (
    <div className="p-5 space-y-5">
      <OverviewCardDashboard data={null}></OverviewCardDashboard>
      <HealthAlert data={null}></HealthAlert>
    </div>
  );
};

export default OverviewPage;
