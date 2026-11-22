'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  UserCheck,
  Calendar,
  IndianRupee,
  TrendingUp,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const TRAINING_OVERVIEW_DATA = [
  { month: 'Jan', students: 620, sessions: 48 },
  { month: 'Feb', students: 780, sessions: 64 },
  { month: 'Mar', students: 890, sessions: 76 },
  { month: 'Apr', students: 1020, sessions: 92 },
  { month: 'May', students: 1140, sessions: 110 },
  { month: 'Jun', students: 1250, sessions: 128 },
];

const BATCH_DISTRIBUTION_DATA = [
  { name: 'Beginner', value: 40, color: '#FF6B1A' },
  { name: 'Advanced', value: 35, color: '#3B82F6' },
  { name: 'Pro', value: 25, color: '#22C55E' },
];

const RECENT_ACTIVITIES = [
  {
    id: 1,
    title: 'New student registered',
    subtitle: 'Rahul Deshmukh • Raider (#17)',
    time: '2 min ago',
    type: 'student',
  },
  {
    id: 2,
    title: 'Payment received ₹2,000',
    subtitle: 'Amit Yadav • Monthly Tuition Fee',
    time: '5 min ago',
    type: 'payment',
  },
  {
    id: 3,
    title: 'New event created',
    subtitle: 'Inter Academy Championship • Pune',
    time: '10 min ago',
    type: 'event',
  },
  {
    id: 4,
    title: 'Attendance marked',
    subtitle: 'Morning Juniors Batch (28/30 Present)',
    time: '35 min ago',
    type: 'attendance',
  },
];

export default function AdminDashboardPage() {
  const [timeRange, setTimeRange] = useState('This Month');
  const [chartYear, setChartYear] = useState('This Year');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar (Matching Figma top right) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#AAB2BD] mt-0.5">
            Welcome back, <span className="text-white font-semibold">Admin</span>!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-[#171F2B] border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#FF6B1A] cursor-pointer appearance-none pr-8"
            >
              <option value="This Month">This Month</option>
              <option value="Last Month">Last Month</option>
              <option value="This Year">This Year</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#AAB2BD] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* METRIC CARDS (Exact values from Figma: 1,250 / 980 / 12 / ₹2,50,000) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Total Students</span>
            <div className="w-10 h-10 rounded-xl bg-[#FF6B1A]/15 text-[#FF6B1A] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1,250</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#22C55E] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 12%</span>
              <span className="text-[#AAB2BD] font-normal">vs last month</span>
            </div>
          </div>
        </Card>

        {/* Active Players */}
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Active Players</span>
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">980</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#22C55E] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 8%</span>
              <span className="text-[#AAB2BD] font-normal">regular attendance</span>
            </div>
          </div>
        </Card>

        {/* Total Events */}
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Total Events</span>
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">12</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#22C55E] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 20%</span>
              <span className="text-[#AAB2BD] font-normal">this season</span>
            </div>
          </div>
        </Card>

        {/* Revenue */}
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#AAB2BD] uppercase tracking-wider">Revenue</span>
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">₹2,50,000</div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#22C55E] font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 15%</span>
              <span className="text-[#AAB2BD] font-normal">monthly collections</span>
            </div>
          </div>
        </Card>
      </div>

      {/* CHARTS SECTION (Training Overview Area Chart + Students by Batch Donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Training Overview */}
        <Card className="lg:col-span-8 p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">Training Overview</h3>
              <p className="text-xs text-[#AAB2BD]">Student enrollments and active court sessions</p>
            </div>
            <select
              value={chartYear}
              onChange={(e) => setChartYear(e.target.value)}
              className="bg-[#101C2C] border border-white/10 rounded-full px-3 py-1 text-xs text-white focus:outline-none focus:border-[#FF6B1A] cursor-pointer"
            >
              <option value="This Year">This Year</option>
              <option value="Last Year">Last Year</option>
            </select>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TRAINING_OVERVIEW_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B1A" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#FF6B1A" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#AAB2BD" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#AAB2BD" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#101C2C', borderColor: 'rgba(255,107,26,0.3)', borderRadius: '12px', fontSize: '12px' }}
                  itemStyle={{ color: '#FF6B1A' }}
                />
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#FF6B1A"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorStudents)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Right: Students By Batch Donut */}
        <Card className="lg:col-span-4 p-6 bg-[#171F2B] border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Students By Batch</h3>
            <p className="text-xs text-[#AAB2BD]">Capacity allocation across levels</p>
          </div>

          <div className="h-48 w-full relative flex items-center justify-center my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={BATCH_DISTRIBUTION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {BATCH_DISTRIBUTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#101C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="text-xs text-[#AAB2BD] block">Total</span>
              <span className="text-xl font-extrabold text-white">100%</span>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center text-xs">
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B1A]" />
                <span className="text-[#AAB2BD]">Beginner</span>
              </div>
              <span className="font-bold text-white block mt-0.5">40%</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                <span className="text-[#AAB2BD]">Advanced</span>
              </div>
              <span className="font-bold text-white block mt-0.5">35%</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                <span className="text-[#AAB2BD]">Pro</span>
              </div>
              <span className="font-bold text-white block mt-0.5">25%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* BOTTOM ROW: Recent Activities + "Grow Our Kabaddi Family" Promo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Activities List (Matching Figma bottom-right item) */}
        <Card className="lg:col-span-8 p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-wide">Recent Activities</h3>
            <Link href="/admin/students" className="text-xs text-[#FF6B1A] hover:underline font-semibold">
              View All
            </Link>
          </div>

          <div className="divide-y divide-white/5">
            {RECENT_ACTIVITIES.map((act) => (
              <div key={act.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#101C2C] border border-white/5 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#FF6B1A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{act.title}</h4>
                    <p className="text-[11px] text-[#AAB2BD]">{act.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#AAB2BD] shrink-0">
                  <Clock className="w-3 h-3 text-[#FF6B1A]" />
                  <span>{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Promo Card: "Grow Our Kabaddi Family" (Figma match) */}
        <Card className="lg:col-span-4 p-6 bg-gradient-to-br from-[#1E293B] via-[#171F2B] to-[#101C2C] border-orange-500/20 flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-3 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B1A]/20 text-[#FF6B1A] text-[10px] font-extrabold uppercase tracking-wider">
              Admissions Drive 2025
            </span>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Grow Our <br /> Kabaddi Family
            </h3>
            <p className="text-xs text-[#AAB2BD] leading-relaxed">
              Launch regional school trials, scout rural champions, and manage scholarships.
            </p>
          </div>

          <div className="pt-6 relative z-10">
            <Link href="/admin/students">
              <Button size="sm" glow className="w-full text-xs">
                View Details <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </Link>
          </div>

          {/* Decorative silhouette background */}
          <div className="absolute right-0 bottom-0 w-32 h-36 opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none">
            <Image
              src="/images/mobile-raider.jpg"
              alt="Raider"
              fill
              className="object-contain"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
