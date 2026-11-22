'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { INITIAL_NOTICES } from '@/data/mock/academyData';
import { Bell, AlertCircle, Info, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PlayerNotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'priority' | 'announcements'>('all');

  const filteredNotices = INITIAL_NOTICES.filter((n) => {
    if (filter === 'priority') return n.important;
    if (filter === 'announcements') return !n.important;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Notifications & Announcements
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Mat schedules, medical screening notices & trial announcements
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="orange">{INITIAL_NOTICES.length} Active Alerts</Badge>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'all'
              ? 'bg-[#FF6B1A] text-white shadow-glowSm'
              : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white'
          }`}
        >
          All Alerts ({INITIAL_NOTICES.length})
        </button>
        <button
          onClick={() => setFilter('priority')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'priority'
              ? 'bg-[#FF6B1A] text-white shadow-glowSm'
              : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white'
          }`}
        >
          High Priority
        </button>
        <button
          onClick={() => setFilter('announcements')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'announcements'
              ? 'bg-[#FF6B1A] text-white shadow-glowSm'
              : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white'
          }`}
        >
          General Notices
        </button>
      </div>

      {/* Responsive List */}
      <div className="space-y-3">
        {filteredNotices.map((n) => (
          <Card
            key={n.id}
            className={`p-5 bg-[#171F2B] border-white/5 space-y-2.5 hover:border-[#FF6B1A]/40 transition-all shadow-card ${
              n.important ? 'border-l-4 border-l-[#FF6B1A]' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant={n.important ? 'orange' : 'muted'}>
                  {n.important ? 'High Priority' : 'Notice'}
                </Badge>
                <span className="text-xs text-[#AAB2BD] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" /> {n.date}
                </span>
              </div>
              <span className="text-[10px] text-[#AAB2BD]">Broadcast to All Athletes</span>
            </div>

            <h4 className="text-sm font-extrabold text-white">{n.title}</h4>
            <p className="text-xs text-[#AAB2BD] leading-relaxed">{n.message}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
