/**
 * Filter Bar Component
 * Design: Soft Minimalism - Sticky bar with soft shadow and pastel accents
 * Features: Date range, segment, region, and status filters with clean UI
 */

import { useState } from 'react';
import { dateRanges, segments } from '@/lib/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterBarProps {
  selectedRegion?: string;
  onRegionChange?: (region: string) => void;
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
  regions?: string[];
}

export default function FilterBar({
  selectedRegion = '',
  onRegionChange,
  selectedStatus = '',
  onStatusChange,
  regions = [],
}: FilterBarProps) {
  const [dateRange, setDateRange] = useState('30d');
  const [segment, setSegment] = useState('all');

  return (
    <div
      className={`
        sticky top-0 z-40
        bg-white/95 backdrop-blur-sm
        border-b border-gray-200/50
        shadow-sm
        px-6 py-4
        flex items-center gap-6 flex-wrap
      `}
    >
      {regions && regions.length > 0 && onRegionChange && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Region:</label>
          <Select value={selectedRegion || 'all'} onValueChange={(val) => onRegionChange(val === 'all' ? '' : val)}>
            <SelectTrigger className="w-40 rounded-lg border-gray-200/50 bg-gray-50/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {onStatusChange && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Status:</label>
          <Select value={selectedStatus || 'all'} onValueChange={(val) => onStatusChange(val === 'all' ? '' : val)}>
            <SelectTrigger className="w-40 rounded-lg border-gray-200/50 bg-gray-50/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Date Range:</label>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-40 rounded-lg border-gray-200/50 bg-gray-50/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {dateRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Segment:</label>
        <Select value={segment} onValueChange={setSegment}>
          <SelectTrigger className="w-40 rounded-lg border-gray-200/50 bg-gray-50/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {segments.map((seg) => (
              <SelectItem key={seg.value} value={seg.value}>
                {seg.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
