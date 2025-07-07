"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, profit: 12000, expenses: 33000 },
  { month: "Feb", revenue: 38000, profit: 9500, expenses: 28500 },
  { month: "Mar", revenue: 52000, profit: 15600, expenses: 36400 },
  { month: "Apr", revenue: 48000, profit: 13440, expenses: 34560 },
  { month: "May", revenue: 61000, profit: 18300, expenses: 42700 },
  { month: "Jun", revenue: 58000, profit: 16240, expenses: 41760 },
  { month: "Jul", revenue: 67000, profit: 20100, expenses: 46900 },
  { month: "Aug", revenue: 72000, profit: 21600, expenses: 50400 },
  { month: "Sep", revenue: 69000, profit: 19320, expenses: 49680 },
  { month: "Oct", revenue: 78000, profit: 23400, expenses: 54600 },
  { month: "Nov", revenue: 85000, profit: 25500, expenses: 59500 },
  { month: "Dec", revenue: 92000, profit: 27600, expenses: 64400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900">{`Month: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ৳${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={revenueData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={3}
            name="Revenue"
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorProfit)"
            strokeWidth={3}
            name="Profit"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
