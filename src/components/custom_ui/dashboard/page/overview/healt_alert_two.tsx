import { ArrowDown, ArrowUp, Footprints, Heart, Moon } from "lucide-react";

interface HeartAlertProps {
  avg_heart_rate: number;
  heart_growth: number;
  sleep_growth: number;
  sleep_quality: number;
  avg_step: number;
  step_growth: number;
}

const HealthAlertTwo = ({ data }: { data: HeartAlertProps | null }) => {
  const health_alerts = [
    {
      title: "Avg Heart Rate",
      value: data?.avg_heart_rate || 0,
      growth: data?.heart_growth || 0,
      icon: <Heart size={18} />,
      color: "text-red-500 ",
    },
    {
      title: "Avg Sleep Quality",
      value: data?.sleep_quality || 0,
      growth: data?.sleep_growth || 0,
      icon: <Moon size={18} />,
      color: "text-red-500 ",
    },
    {
      title: "Avg Daily Steps",
      value: data?.avg_step || 0,
      growth: data?.step_growth || 0,
      icon: <Footprints size={18} />,
      color: "text-red-500 ",
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
            className="border p-4 rounded-lg  gap-4 w-full"
          >
            <div className="flex items-center gap-2 space-y-1">
              <div className={`   rounded-lg ${alert.color}`}>{alert.icon}</div>{" "}
              <div className="text-sm text-muted-foreground">{alert.title}</div>
            </div>
            <div className="flex flex-col ">
              <span className="text-xl font-bold">{alert.value}</span>
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
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthAlertTwo;
