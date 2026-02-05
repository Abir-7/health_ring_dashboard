import type { RevenueOverviewProps } from "@/types/res/revenue";
import {
  ArrowDown,
  ArrowUp,
  CircleCheckBigIcon,
  CreditCard,
  DollarSign,
} from "lucide-react";

const RevenueOverview = ({ data }: { data: RevenueOverviewProps | null }) => {
  const health_alerts = [
    {
      title: "Total Revenue",
      value: data?.total_revenue || 0,
      growth: data?.revenue_growth || 0,
      icon: <DollarSign size={18} />,
      color: "text-green-500 ",
    },
    {
      title: "Transactions",
      value: data?.total_transactions || 0,
      growth: data?.transaction_growth || 0,
      icon: <CreditCard size={18} />,
      color: "text-red-500 ",
    },
    {
      title: "Success Rate",
      value: data?.success_rate || 0,
      growth: null,
      icon: <CircleCheckBigIcon size={18} />,
      color: "text-green-500 ",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {health_alerts.map((alert) => (
        <div key={alert.title} className="border p-4 rounded-lg  gap-4 w-full">
          <div className="flex justify-between items-center gap-2 space-y-1">
            <div className="text-sm text-muted-foreground">{alert.title}</div>{" "}
            <div className={`   rounded-lg ${alert.color}`}>
              {alert.icon}
            </div>{" "}
          </div>
          <div className="flex flex-col ">
            <span className="text-xl font-bold">{alert.value}</span>
            {alert.growth !== null ? (
              <span
                className={`text-sm flex items-center gap-1 ${
                  alert.growth >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {alert.growth >= 0 ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}
                <span>{Math.abs(alert.growth)}%</span>
                <span>vs last month</span>
              </span>
            ) : (
              <span className="text-sm text-user-filter-option">
                Last 30 days
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueOverview;
