/**
 * Sidebar Navigation Component
 * Design: Soft Minimalism - Clean sidebar with icon-based navigation
 * Features: Main navigation with soft hover effects
 */

import { BarChart3, TrendingUp, Users, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 'users',
      label: 'Users',
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div
      className={`
        fixed left-0 top-0 h-screen w-64
        bg-white border-r border-gray-200/50
        shadow-sm
        flex flex-col
      `}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200/50">
        <div className="flex items-center gap-3">
          <div
            className={`
              w-10 h-10 rounded-xl
              bg-gradient-to-br from-orange-200 to-orange-100
              flex items-center justify-center
            `}
          >
            <BarChart3 className="w-6 h-6 text-orange-600" />
          </div>
          <h1 className="text-lg font-bold text-gray-800">MetricFlow</h1>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg
              transition-all duration-200 ease-out
              ${
                activeNav === item.id
                  ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200/50 space-y-2">
        <button
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-gray-50
            transition-all duration-200
          `}
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-red-50 hover:text-red-600
            transition-all duration-200
          `}
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
