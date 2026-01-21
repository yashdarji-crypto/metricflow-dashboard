/**
 * Residential Tracker Dashboard
 * Displays Lodha Group sales metrics and team performance
 */

import { useEffect, useState } from 'react';
import {
  calculateRegionMetrics,
  calculateTeamPerformance,
  calculateMetricSummaries,
  getSummaryStats,
  ResidentialRecord,
  RegionMetrics,
  TeamPerformance,
  MetricSummary,
} from '@/lib/dataProcessor';
import Sidebar from '@/components/Sidebar';
import FilterBar from '@/components/FilterBar';
import RegionCard from '@/components/RegionCard';
import TeamTable from '@/components/TeamTable';
import MetricsGrid from '@/components/MetricsGrid';
import SummaryCards from '@/components/SummaryCards';

export default function ResidentialTracker() {
  const [data, setData] = useState<ResidentialRecord[]>([]);
  const [regionMetrics, setRegionMetrics] = useState<RegionMetrics[]>([]);
  const [teamPerformance, setTeamPerformance] = useState<TeamPerformance[]>([]);
  const [metricSummaries, setMetricSummaries] = useState<MetricSummary[]>([]);
  const [summaryStats, setSummaryStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  useEffect(() => {
    // Load and process data
    fetch('/data.json')
      .then((res) => res.json())
      .then((rawData) => {
        // Filter data based on selections
        let filtered = rawData;

        if (selectedRegion) {
          filtered = filtered.filter((r: ResidentialRecord) => r.region === selectedRegion);
        }

        if (selectedStatus) {
          filtered = filtered.filter((r: ResidentialRecord) => r.status === selectedStatus);
        }

        setData(filtered);
        setRegionMetrics(calculateRegionMetrics(filtered));
        setTeamPerformance(calculateTeamPerformance(filtered));
        setMetricSummaries(calculateMetricSummaries(filtered));
        setSummaryStats(getSummaryStats(filtered));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load data:', err);
        setLoading(false);
      });
  }, [selectedRegion, selectedStatus]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500 mx-auto"></div>
          <p className="text-gray-600">Loading residential tracker data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Filter Bar */}
        <FilterBar
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          regions={Array.from(new Set(data.map((r) => r.region).filter(Boolean)))}
        />

        {/* Page Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Residential Tracker
            </h1>
            <p className="text-gray-600">
              Lodha Group sales performance and team analytics
            </p>
          </div>

          {/* Summary Cards */}
          {summaryStats && <SummaryCards stats={summaryStats} />}

          {/* Region Performance */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Regional Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionMetrics.map((region) => (
                <RegionCard
                  key={region.region}
                  region={region}
                  onClick={() => setSelectedRegion(selectedRegion === region.region ? '' : region.region)}
                  isSelected={selectedRegion === region.region}
                />
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Key Metrics
            </h2>
            <MetricsGrid metrics={metricSummaries.slice(0, 6)} />
          </div>

          {/* Team Performance */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Team Performance
            </h2>
            <TeamTable teamData={teamPerformance.slice(0, 15)} />
          </div>
        </div>
      </div>
    </div>
  );
}
