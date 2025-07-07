"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 45000, orders: 240, target: 50000 },
  { month: "Feb", sales: 38000, orders: 180, target: 45000 },
  { month: "Mar", sales: 52000, orders: 300, target: 48000 },
  { month: "Apr", sales: 48000, orders: 270, target: 50000 },
  { month: "May", sales: 61000, orders: 360, target: 55000 },
  { month: "Jun", sales: 58000, orders: 330, target: 60000 },
  { month: "Jul", sales: 67000, orders: 410, target: 65000 },
  { month: "Aug", sales: 72000, orders: 450, target: 70000 },
  { month: "Sep", sales: 69000, orders: 420, target: 68000 },
  { month: "Oct", sales: 78000, orders: 480, target: 75000 },
  { month: "Nov", sales: 85000, orders: 520, target: 80000 },
  { month: "Dec", sales: 92000, orders: 580, target: 90000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900">{`Month: ${label}`}</p>
        <p className="text-blue-600">{`Sales: ৳${payload[0].value.toLocaleString()}`}</p>
        <p className="text-green-600">{`Target: ৳${payload[1].value.toLocaleString()}`}</p>
        <p className="text-purple-600">{`Orders: ${
          payload[2]?.payload?.orders || 0
        }`}</p>
      </div>
    );
  }
  return null;
};

export function SalesChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={salesData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
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
            tickFormatter={(value) => `৳${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="sales"
            fill="#3b82f6"
            name="Sales"
            radius={[4, 4, 0, 0]}
            className="hover:opacity-80 transition-opacity"
          />
          <Bar
            dataKey="target"
            fill="#10b981"
            name="Target"
            radius={[4, 4, 0, 0]}
            className="hover:opacity-80 transition-opacity"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
