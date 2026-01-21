/**
 * Filter Bar Component
 * Design: Soft Minimalism - Sticky bar with soft shadow and pastel accents
 * Features: Date range and segment filters with clean UI
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

export default function FilterBar() {
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
        flex items-center gap-6
      `}
    >
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
