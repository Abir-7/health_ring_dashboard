/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/static-components */
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface SubscriptionData {
  name: string;
  value: number;
  percentage: number;
  fill: string;
}

const PaymentChart: React.FC = () => {
  const data: SubscriptionData[] = [
    { name: "Paypal", value: 50, percentage: 50, fill: "#032B45" },
    { name: "Stripe", value: 50, percentage: 50, fill: "#216283" },
  ];

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
        {`${name} ${percentage}%`}
      </text>
    );
  };

  const CustomLegend: React.FC = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      {data.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: entry.fill,
            }}
          />
          <span style={{ fontSize: "14px", color: "#666" }}>{entry.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment Methods
      </h2>
      <div className="flex flex-col">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart accessibilityLayer={false}>
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
    </div>
  );
};

export default PaymentChart;
