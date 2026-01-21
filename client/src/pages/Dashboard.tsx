/**
 * Dashboard Page
 * Design: Soft Minimalism with Pastel Accents
 * Layout: Sidebar navigation + main content area with KPIs, charts, and activity table
 */

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import FilterBar from '@/components/FilterBar';
import KPICard from '@/components/KPICard';
import LineChartSection from '@/components/LineChartSection';
import BarChartSection from '@/components/BarChartSection';
import ActivityTable from '@/components/ActivityTable';
import { kpiData } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Filter Bar */}
        <FilterBar />

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's your performance overview.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {kpiData.map((kpi) => (
              <KPICard
                key={kpi.id}
                label={kpi.label}
                value={kpi.value}
                change={kpi.change}
                trend={kpi.trend as 'up' | 'down'}
                color={kpi.color}
                accentColor={kpi.accentColor}
              />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <LineChartSection />
            <BarChartSection />
          </div>

          {/* Activity Table */}
          <ActivityTable />
        </div>
      </div>
    </div>
  );
}
