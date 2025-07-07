"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const categoryData = [
  { name: "Mountain", sales: 1234, revenue: 246800, color: "#3b82f6" },
  { name: "Electric", sales: 987, revenue: 197400, color: "#10b981" },
  { name: "Road", sales: 756, revenue: 151200, color: "#f59e0b" },
  { name: "Hybrid", sales: 654, revenue: 130800, color: "#8b5cf6" },
  { name: "Kids", sales: 432, revenue: 86400, color: "#ef4444" },
  { name: "BMX", sales: 321, revenue: 64200, color: "#06b6d4" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900">{`Category: ${label}`}</p>
        <p className="text-blue-600">{`Sales: ${payload[0].value} units`}</p>
        <p className="text-green-600">{`Revenue: ৳${payload[0].payload.revenue.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

export function CategoryChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={categoryData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            stroke="#666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#666"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="sales"
            radius={[4, 4, 0, 0]}
            className="hover:opacity-80 transition-opacity"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
