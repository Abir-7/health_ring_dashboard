/* eslint-disable react-hooks/static-components */
import type { RevenueData } from "@/types/res/dashboard";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: RevenueData;
  }>;
}

const RevenueChartDay: React.FC<{ data: RevenueData[] }> = ({ data }) => {
  // Dynamic data - you can easily modify this

  // Custom tooltip component
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const formattedValue = (value / 1000000).toFixed(1) + "M";

      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">
            {payload[0].payload.month}
          </p>
          <p className="text-sm text-green-600 font-medium">
            ${formattedValue}
          </p>
        </div>
      );
    }
    return null;
  };

  // Format Y-axis labels
  const formatYAxis = (value: number): string => {
    return value / 1000000 + "M";
  };

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          accessibilityLayer={false}
          data={data}
          //   margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={true}
          />
          <XAxis
            dataKey="month"
            tickLine={true}
            tick={{ fill: "#9ca3af", fontSize: 14 }}
            dy={10}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 14 }}
            tickFormatter={formatYAxis}
            dx={-10}
            domain={[0, 20000000]}
            ticks={[0, 5000000, 10000000, 15000000, 20000000]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#22c55e", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ fill: "#22c55e", strokeWidth: 2, r: 5, stroke: "#fff" }}
            focusable={false}
            activeDot={{
              r: 7,
              fill: "#22c55e",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChartDay;
