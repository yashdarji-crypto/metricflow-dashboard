/**
 * Bar Chart Section Component
 * Design: Soft Minimalism - Rounded card with pastel chart colors
 * Features: Product performance comparison
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { barChartData } from '@/lib/mockData';

export default function BarChartSection() {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6
        shadow-sm border border-gray-100
        hover:shadow-md transition-shadow duration-300
      `}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Product Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Bar
            dataKey="value"
            fill="#d4e9f7"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
