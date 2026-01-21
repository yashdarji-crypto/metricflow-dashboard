/**
 * Line Chart Section Component
 * Design: Soft Minimalism - Rounded card with pastel chart colors
 * Features: Revenue and user trends over time
 */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { lineChartData } from '@/lib/mockData';

export default function LineChartSection() {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6
        shadow-sm border border-gray-100
        hover:shadow-md transition-shadow duration-300
      `}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Revenue & Users Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#c8e6e0"
            strokeWidth={3}
            dot={{ fill: '#c8e6e0', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#e8d9f0"
            strokeWidth={3}
            dot={{ fill: '#e8d9f0', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
