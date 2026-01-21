/**
 * KPI Card Component
 * Design: Soft Minimalism - Pastel gradient backgrounds with rounded corners
 * Features: Metric display with trend indicator and soft shadow
 */

import { TrendingUp } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  color: string;
  accentColor: string;
}

export default function KPICard({
  label,
  value,
  change,
  trend,
  color,
  accentColor,
}: KPICardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br ${color}
        rounded-2xl p-6
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
        hover:scale-105
        border border-white/40
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700">{label}</h3>
        <TrendingUp className={`w-4 h-4 ${accentColor}`} />
      </div>

      <div className="mb-3">
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>

      <div className="flex items-center gap-2">
        <span className={`text-sm font-semibold ${accentColor}`}>
          {trend === 'up' ? '+' : '-'}{change}
        </span>
        <span className="text-xs text-gray-600">vs last period</span>
      </div>
    </div>
  );
}
