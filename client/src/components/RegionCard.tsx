/**
 * Region Card Component
 * Displays regional performance metrics
 */

import { RegionMetrics } from '@/lib/dataProcessor';
import { MapPin, Users } from 'lucide-react';

interface RegionCardProps {
  region: RegionMetrics;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function RegionCard({ region, onClick, isSelected }: RegionCardProps) {
  const colors = {
    West: 'from-orange-200 to-orange-100',
    South: 'from-cyan-200 to-cyan-100',
    Central: 'from-purple-200 to-purple-100',
    Thane: 'from-pink-200 to-pink-100',
    'Navi Mumbai': 'from-green-200 to-green-100',
    Western: 'from-blue-200 to-blue-100',
  };

  const colorClass = colors[region.region as keyof typeof colors] || colors.West;

  return (
    <div
      onClick={onClick}
      className={`
        bg-gradient-to-br ${colorClass}
        rounded-2xl p-6
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
        hover:scale-105 cursor-pointer
        border-2 ${isSelected ? 'border-gray-800' : 'border-white/40'}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{region.region}</h3>
        <MapPin className="w-5 h-5 text-gray-700" />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-600 font-medium">Units Onboarded</p>
          <p className="text-2xl font-bold text-gray-800">
            {region.totalUnits.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-600 font-medium">Sites Onboarded</p>
          <p className="text-xl font-bold text-gray-800">
            {region.totalSites.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/50">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">
              {region.teamMembersCount} team members
            </span>
          </div>
          <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            {region.activeRecords} active
          </span>
        </div>
      </div>
    </div>
  );
}
