'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid
} from 'recharts';
import { Download, FileSpreadsheet, TrendingUp, Users, Award, Shield } from 'lucide-react';

const REVENUE_DATA = [
  { month: 'Jul', revenue: 180000, expenses: 110000 },
  { month: 'Aug', revenue: 210000, expenses: 125000 },
  { month: 'Sep', revenue: 235000, expenses: 130000 },
  { month: 'Oct', revenue: 245000, expenses: 140000 },
  { month: 'Nov', revenue: 250000, expenses: 145000 },
];

const ATTENDANCE_TRENDS = [
  { week: 'W1', rate: 88 },
  { week: 'W2', rate: 92 },
  { week: 'W3', rate: 89 },
  { week: 'W4', rate: 94 },
  { week: 'W5', rate: 96 },
];

export default function AdminReportsPage() {
  const { showToast } = useToast();
  const [reportType, setReportType] = useState('Financial');

  const exportReport = (format: string) => {
    showToast(`Exporting ${reportType} report as ${format}... File ready!`, 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Academy Performance Reports
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Audit financial flows, attendance consistency, and player skill growth trends.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => exportReport('CSV')}>
            <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5" /> Export Excel
          </Button>
          <Button size="sm" glow onClick={() => exportReport('PDF')}>
            <Download className="w-3.5 h-3.5 mr-1.5" /> Download PDF
          </Button>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <span className="text-xs text-[#AAB2BD] font-semibold uppercase">Total YTD Collections</span>
          <div className="text-3xl font-extrabold text-white">₹24,80,000</div>
          <p className="text-xs text-[#22C55E]">↑ 18.4% compared to last financial year</p>
        </Card>

        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <span className="text-xs text-[#AAB2BD] font-semibold uppercase">Average Attendance Rate</span>
          <div className="text-3xl font-extrabold text-[#FF6B1A]">92.8%</div>
          <p className="text-xs text-[#22C55E]">↑ 4.2% across junior & senior squads</p>
        </Card>

        <Card className="p-5 bg-[#171F2B] border-white/5 space-y-2">
          <span className="text-xs text-[#AAB2BD] font-semibold uppercase">Pro Trial Conversion</span>
          <div className="text-3xl font-extrabold text-white">76.5%</div>
          <p className="text-xs text-[#AAB2BD]">18 athletes signed into state/PKL camps</p>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Monthly Revenue & Expenses (₹)</h3>
            <p className="text-xs text-[#AAB2BD]">Fee receipts vs court maintenance & coach honorariums</p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" stroke="#AAB2BD" fontSize={11} />
                <YAxis stroke="#AAB2BD" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#101C2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}
                />
                <Bar dataKey="revenue" fill="#FF6B1A" radius={[6, 6, 0, 0]} name="Fee Revenue" />
                <Bar dataKey="expenses" fill="#252F3D" radius={[6, 6, 0, 0]} name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Attendance Rate Trend */}
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Weekly Regularity Curve (%)</h3>
            <p className="text-xs text-[#AAB2BD]">Aggregate court presence rate across all 4 cohorts</p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ATTENDANCE_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="week" stroke="#AAB2BD" fontSize={11} />
                <YAxis domain={[80, 100]} stroke="#AAB2BD" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#101C2C', borderColor: '#22C55E', borderRadius: '10px' }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#22C55E"
                  strokeWidth={3}
                  dot={{ fill: '#22C55E', r: 5 }}
                  name="Attendance %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
