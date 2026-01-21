/**
 * Team Table Component
 * Displays team member performance metrics
 */

import { TeamPerformance } from '@/lib/dataProcessor';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface TeamTableProps {
  teamData: TeamPerformance[];
}

export default function TeamTable({ teamData }: TeamTableProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6
        shadow-sm border border-gray-100
        hover:shadow-md transition-shadow duration-300
      `}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200/50">
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                Team Member
              </th>
              <th className="text-left text-xs font-semibold text-gray-600 py-3 px-4">
                Region
              </th>
              <th className="text-right text-xs font-semibold text-gray-600 py-3 px-4">
                Sites
              </th>
              <th className="text-right text-xs font-semibold text-gray-600 py-3 px-4">
                Units
              </th>
              <th className="text-right text-xs font-semibold text-gray-600 py-3 px-4">
                Closures
              </th>
              <th className="text-right text-xs font-semibold text-gray-600 py-3 px-4">
                Leads
              </th>
              <th className="text-center text-xs font-semibold text-gray-600 py-3 px-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100/50 hover:bg-gray-50/50 transition-colors"
              >
                <td className="py-3 px-4 text-sm font-medium text-gray-800">
                  {member.name}
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">
                  {member.region}
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-800 text-right">
                  {member.sitesOnboarded}
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-800 text-right">
                  {member.unitsOnboarded.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-800 text-right">
                  {member.closures}
                </td>
                <td className="py-3 px-4 text-sm font-semibold text-gray-800 text-right">
                  {member.leads}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {member.activeStatus === 'Active' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-medium text-green-600">Active</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">Inactive</span>
                      </>
                    )}
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
