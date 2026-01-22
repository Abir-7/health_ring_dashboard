/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
interface SubscriptionData {
  name: string;
  value: number;
  percentage: number;
  fill: string;
}

interface SubscriptionChartProps {
  data: SubscriptionData[];
  title?: string;
}

const SubscriptionChart: React.FC<SubscriptionChartProps> = ({
  data,
  title = "Subscription Distribution",
}) => {
  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name, percentage } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#666"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "14px" }}
      >
        {name} {percentage}%
      </text>
    );
  };

  const CustomLegend: React.FC = () => (
    <div className="flex justify-center gap-6">
      {data.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.fill }}
          />
          <span className="text-sm text-gray-600">{entry.value} users</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={130}
            paddingAngle={2}
            dataKey="value"
            label={renderCustomLabel}
            labelLine={false}
          />
        </PieChart>
      </ResponsiveContainer>

      <CustomLegend />
    </div>
  );
};

export default SubscriptionChart;
