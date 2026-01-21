/**
 * Data Processing Utilities for Residential Tracker
 * Processes raw residential sales data for dashboard visualization
 */

export interface ResidentialRecord {
  id: string;
  status: 'Active' | 'Inactive';
  active: string;
  timestamp: string;
  email: string;
  date: string;
  period: string;
  start_date: string;
  end_date: string;
  region: string;
  team_member: string;
  department: string;
  metric_key: string;
  metric_name: string;
  description: string;
  frequency: string;
  target: string;
  actual: string;
}

export interface RegionMetrics {
  region: string;
  totalSites: number;
  totalUnits: number;
  activeRecords: number;
  inactiveRecords: number;
  teamMembersCount: number;
}

export interface TeamPerformance {
  name: string;
  region: string;
  sitesOnboarded: number;
  unitsOnboarded: number;
  closures: number;
  leads: number;
  activeStatus: 'Active' | 'Inactive';
}

export interface MetricSummary {
  metric: string;
  displayName: string;
  total: number;
  target: number;
  achievement: number;
}

/**
 * Calculate region-based metrics
 */
export function calculateRegionMetrics(data: ResidentialRecord[]): RegionMetrics[] {
  const regionMap = new Map<string, { metrics: RegionMetrics; teamMembers: Set<string> }>();

  data.forEach((record) => {
    if (!record.region) return;

    if (!regionMap.has(record.region)) {
      regionMap.set(record.region, {
        metrics: {
          region: record.region,
          totalSites: 0,
          totalUnits: 0,
          activeRecords: 0,
          inactiveRecords: 0,
          teamMembersCount: 0,
        },
        teamMembers: new Set<string>(),
      });
    }

    const entry = regionMap.get(record.region)!;
    const metrics = entry.metrics;

    // Count sites
    if (record.metric_key?.includes('sites_onboarded')) {
      metrics.totalSites += parseInt(record.actual) || 0;
    }

    // Count units
    if (record.metric_key?.includes('units_onboarded')) {
      metrics.totalUnits += parseInt(record.actual) || 0;
    }

    // Count status
    if (record.status === 'Active') {
      metrics.activeRecords++;
    } else {
      metrics.inactiveRecords++;
    }

    // Track team members
    if (record.team_member) {
      entry.teamMembers.add(record.team_member);
    }
  });

  // Convert Sets to counts
  return Array.from(regionMap.values()).map((entry) => ({
    ...entry.metrics,
    teamMembersCount: entry.teamMembers.size,
  }));
}

/**
 * Calculate team performance metrics
 */
export function calculateTeamPerformance(data: ResidentialRecord[]): TeamPerformance[] {
  const teamMap = new Map<string, TeamPerformance>();

  data.forEach((record) => {
    if (!record.team_member) return;

    const key = `${record.team_member}-${record.region}`;

    if (!teamMap.has(key)) {
      teamMap.set(key, {
        name: record.team_member,
        region: record.region || 'Unassigned',
        sitesOnboarded: 0,
        unitsOnboarded: 0,
        closures: 0,
        leads: 0,
        activeStatus: record.status as 'Active' | 'Inactive',
      });
    }

    const team = teamMap.get(key)!;

    if (record.metric_key === 'sites_onboarded') {
      team.sitesOnboarded += parseInt(record.actual) || 0;
    }
    if (record.metric_key === 'units_onboarded_actual') {
      team.unitsOnboarded += parseInt(record.actual) || 0;
    }
    if (record.metric_key === 'closures_actual') {
      team.closures += parseInt(record.actual) || 0;
    }
    if (record.metric_key === 'leads_actual') {
      team.leads += parseInt(record.actual) || 0;
    }
  });

  return Array.from(teamMap.values()).sort(
    (a, b) => b.unitsOnboarded - a.unitsOnboarded
  );
}

/**
 * Calculate metric summaries
 */
export function calculateMetricSummaries(data: ResidentialRecord[]): MetricSummary[] {
  const metricMap = new Map<string, MetricSummary>();

  data.forEach((record) => {
    if (!record.metric_key) return;

    if (!metricMap.has(record.metric_key)) {
      metricMap.set(record.metric_key, {
        metric: record.metric_key,
        displayName: record.metric_name || record.metric_key,
        total: 0,
        target: 0,
        achievement: 0,
      });
    }

    const summary = metricMap.get(record.metric_key)!;
    summary.total += parseInt(record.actual) || 0;
    summary.target += parseInt(record.target) || 0;
  });

  // Calculate achievement percentage
  return Array.from(metricMap.values())
    .map((m) => ({
      ...m,
      achievement: m.target > 0 ? Math.round((m.total / m.target) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total);
}

/**
 * Get summary statistics
 */
export function getSummaryStats(data: ResidentialRecord[]) {
  const activeCount = data.filter((r) => r.status === 'Active').length;
  const inactiveCount = data.filter((r) => r.status === 'Inactive').length;
  const regions = new Set(data.map((r) => r.region).filter(Boolean));
  const teamMembers = new Set(data.map((r) => r.team_member).filter(Boolean));

  let totalUnits = 0;
  let totalSites = 0;

  data.forEach((record) => {
    if (record.metric_key?.includes('units_onboarded')) {
      totalUnits += parseInt(record.actual) || 0;
    }
    if (record.metric_key?.includes('sites_onboarded')) {
      totalSites += parseInt(record.actual) || 0;
    }
  });

  return {
    totalRecords: data.length,
    activeRecords: activeCount,
    inactiveRecords: inactiveCount,
    totalRegions: regions.size,
    totalTeamMembers: teamMembers.size,
    totalUnits,
    totalSites,
  };
}
