/**
 * Summary Cards Component
 * Displays key statistics for the residential tracker
 */

import { Users, MapPin, TrendingUp, Package } from 'lucide-react';

interface SummaryCardsProps {
  stats: {
    totalRecords: number;
    activeRecords: number;
    inactiveRecords: number;
    totalRegions: number;
    totalTeamMembers: number;
    totalUnits: number;
    totalSites: number;
  };
}

export default function SummaryCards({ stats }: SummaryCardsProps) {
  const cards = [
    {
      label: 'Total Units Onboarded',
      value: stats.totalUnits.toLocaleString(),
      icon: Package,
      color: 'from-orange-200 to-orange-100',
      accentColor: 'text-orange-600',
    },
    {
      label: 'Total Sites Onboarded',
      value: stats.totalSites.toLocaleString(),
      icon: MapPin,
      color: 'from-cyan-200 to-cyan-100',
      accentColor: 'text-cyan-600',
    },
    {
      label: 'Active Records',
      value: stats.activeRecords.toLocaleString(),
      icon: TrendingUp,
      color: 'from-purple-200 to-purple-100',
      accentColor: 'text-purple-600',
    },
    {
      label: 'Team Members',
      value: stats.totalTeamMembers.toLocaleString(),
      icon: Users,
      color: 'from-pink-200 to-pink-100',
      accentColor: 'text-pink-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`
              bg-gradient-to-br ${card.color}
              rounded-2xl p-6
              shadow-sm hover:shadow-md
              transition-all duration-300 ease-out
              hover:scale-105
              border border-white/40
            `}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-700">{card.label}</h3>
              <Icon className={`w-5 h-5 ${card.accentColor}`} />
            </div>

            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          </div>
        );
      })}
    </div>
  );
}
