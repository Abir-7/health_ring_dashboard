import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface MonthlyData {
  name: string; // month label
  value: number; // amount / count
}

const UserGrowthChart = ({ data }: { data: MonthlyData[] }) => {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">User Growth</h2>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer>
          <BarChart
            accessibilityLayer={false}
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={14} />
            <YAxis stroke="#9ca3af" fontSize={14} />
            <Tooltip wrapperClassName="rounded-lg" />
            <Bar dataKey="value" fill="#457B9D" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;
