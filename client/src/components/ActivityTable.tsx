/**
 * Activity Table Component
 * Design: Soft Minimalism - Clean table with pastel accents
 * Features: Recent activity log with status indicators
 */

import { activityData } from '@/lib/mockData';
import { CheckCircle2 } from 'lucide-react';

export default function ActivityTable() {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6
        shadow-sm border border-gray-100
        hover:shadow-md transition-shadow duration-300
      `}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Activity
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/50">
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                Event
              </th>
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                User
              </th>
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                Time
              </th>
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((activity) => (
              <tr
                key={activity.id}
                className="border-b border-gray-100/50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-3 px-4 text-sm font-medium text-gray-800">
                  {activity.event}
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">
                  {activity.user}
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {activity.timestamp}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-medium text-green-600">
                      {activity.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
