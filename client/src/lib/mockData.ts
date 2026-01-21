/**
 * Mock data for MetricFlow dashboard
 * Design: Soft Minimalism with Pastel Accents
 * All data is fictional for demonstration purposes
 */

export const kpiData = [
  {
    id: 'revenue',
    label: 'Revenue',
    value: '$48,250',
    change: '+12.5%',
    trend: 'up',
    color: 'from-orange-200 to-orange-100',
    accentColor: 'text-orange-600',
  },
  {
    id: 'active-users',
    label: 'Active Users',
    value: '12,847',
    change: '+8.2%',
    trend: 'up',
    color: 'from-cyan-200 to-cyan-100',
    accentColor: 'text-cyan-600',
  },
  {
    id: 'conversions',
    label: 'Conversions',
    value: '3,421',
    change: '+5.1%',
    trend: 'up',
    color: 'from-purple-200 to-purple-100',
    accentColor: 'text-purple-600',
  },
];

export const lineChartData = [
  { month: 'Jan', revenue: 4000, users: 2400 },
  { month: 'Feb', revenue: 3000, users: 1398 },
  { month: 'Mar', revenue: 2000, users: 9800 },
  { month: 'Apr', revenue: 2780, users: 3908 },
  { month: 'May', revenue: 1890, users: 4800 },
  { month: 'Jun', revenue: 2390, users: 3800 },
  { month: 'Jul', revenue: 3490, users: 4300 },
];

export const barChartData = [
  { name: 'Product A', value: 4000 },
  { name: 'Product B', value: 3000 },
  { name: 'Product C', value: 2000 },
  { name: 'Product D', value: 2780 },
  { name: 'Product E', value: 1890 },
];

export const activityData = [
  {
    id: 1,
    event: 'User Signup',
    user: 'Sarah Chen',
    timestamp: '2 hours ago',
    status: 'completed',
  },
  {
    id: 2,
    event: 'Payment Processed',
    user: 'John Smith',
    timestamp: '4 hours ago',
    status: 'completed',
  },
  {
    id: 3,
    event: 'Feature Upgrade',
    user: 'Emma Wilson',
    timestamp: '6 hours ago',
    status: 'completed',
  },
  {
    id: 4,
    event: 'Account Created',
    user: 'Michael Brown',
    timestamp: '8 hours ago',
    status: 'completed',
  },
  {
    id: 5,
    event: 'Subscription Renewed',
    user: 'Lisa Anderson',
    timestamp: '10 hours ago',
    status: 'completed',
  },
];

export const dateRanges = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 90 days', value: '90d' },
  { label: 'This Year', value: 'ytd' },
];

export const segments = [
  { label: 'All Segments', value: 'all' },
  { label: 'Free Tier', value: 'free' },
  { label: 'Pro Tier', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise' },
];
