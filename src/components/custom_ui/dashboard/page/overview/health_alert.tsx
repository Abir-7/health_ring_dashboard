import { Activity, AlertTriangle, Heart } from "lucide-react";

interface HeartAlertProps {
  critical: number;
  high_priority: number;
  monitoring: number;
}

const HealthAlert = ({ data }: { data: HeartAlertProps | null }) => {
  const health_alerts = [
    {
      title: "Critical",
      value: data?.critical || 0,
      icon: <AlertTriangle />,
      color: "text-red-500 bg-red-50",
    },
    {
      title: "High Priority",
      value: data?.high_priority || 0,
      icon: <Heart />,
      color: "text-orange-500 bg-orange-50",
    },
    {
      title: "Monitoring",
      value: data?.monitoring || 0,
      icon: <Activity />,
      color: "text-yellow-500 bg-yellow-50",
    },
  ];

  return (
    <div className="border p-4 rounded-lg text-user-filter-default">
      <h1 className="text-base font-semibold mb-4">
        Health Alerts Requiring Attention
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {health_alerts.map((alert) => (
          <div
            key={alert.title}
            className="border p-4 rounded-lg flex items-center gap-4 w-full"
          >
            <div className={`p-2 rounded-lg ${alert.color}`}>{alert.icon}</div>

            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">
                {alert.title}
              </span>
              <span className="text-xl font-bold">{alert.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthAlert;
