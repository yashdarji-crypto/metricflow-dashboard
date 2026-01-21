/**
 * Metrics Grid Component
 * Displays key metrics in a grid layout
 */

import { MetricSummary } from '@/lib/dataProcessor';
import { TrendingUp } from 'lucide-react';

interface MetricsGridProps {
  metrics: MetricSummary[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.metric}
          className={`
            bg-white rounded-2xl p-6
            shadow-sm border border-gray-100
            hover:shadow-md transition-shadow duration-300
          `}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {metric.displayName}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {metric.total.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="w-5 h-5 text-orange-500" />
          </div>

          <div className="space-y-2">
            {metric.target > 0 && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Target: {metric.target.toLocaleString()}</span>
                  <span className="text-xs font-semibold text-gray-900">
                    {metric.achievement}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(metric.achievement, 100)}%` }}
                  ></div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
