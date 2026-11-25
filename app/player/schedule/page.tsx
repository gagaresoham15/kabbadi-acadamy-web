'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, MapPin, Calendar, CheckCircle2, Flame, User } from 'lucide-react';

const WEEK_SCHEDULE: Record<string, Array<{ time: string; title: string; category: string; mat: string; coach: string; focus: string }>> = {
  Mon: [
    {
      time: '6:30 AM - 8:00 AM',
      title: 'Morning Conditioning & Canting Endurance',
      category: 'Conditioning',
      mat: 'Synthetic Mat 1',
      coach: 'Coach Rohit Sharma',
      focus: 'Aerobic lung capacity and 30-second raid breath control'
    },
    {
      time: '5:30 PM - 7:30 PM',
      title: 'Tactical Raid & Dubki Footwork Drill',
      category: 'Advanced Tactics',
      mat: 'Main Court (Synthetic)',
      coach: 'Coach Rohit Sharma',
      focus: 'Escaping corner ankle holds and rapid recovery to center line'
    }
  ],
  Tue: [
    {
      time: '6:30 AM - 8:00 AM',
      title: 'Strength Conditioning & Core Agility',
      category: 'Gym',
      mat: 'High Performance Gym',
      coach: 'Coach Sagar More',
      focus: 'Explosive jump squats and shoulder mobility drills'
    },
    {
      time: '5:30 PM - 7:30 PM',
      title: 'Corner Defense & Chain Coordination',
      category: 'Defensive Drill',
      mat: 'Synthetic Mat 2',
      coach: 'Coach Amit Yadav',
      focus: 'Synchronized thigh holds and corner dashes'
    }
  ],
  Wed: [
    {
      time: '6:30 AM - 8:00 AM',
      title: 'Footwork Speed & Bonus Line Crossing',
      category: 'Technical',
      mat: 'Synthetic Mat 1',
      coach: 'Coach Rohit Sharma',
      focus: 'Toe touch precision and deception against left in defenders'
    },
    {
      time: '5:30 PM - 7:30 PM',
      title: 'Inter-Squad Tactical Scrimmage',
      category: 'Live Match',
      mat: 'Main Arena Court',
      coach: 'Coach Rohit Sharma & Vikash Patil',
      focus: 'Do-or-die third raid strategy under match conditions'
    }
  ],
  Thu: [
    {
      time: '6:30 AM - 8:00 AM',
      title: 'Flexibility, Yoga & Mat Rehabilitation',
      category: 'Mobility',
      mat: 'Indoor Studio',
      coach: 'Coach Sagar More',
      focus: 'Hamstring release, hip opener mobility and ice bath recovery'
    },
    {
      time: '5:30 PM - 7:30 PM',
      title: 'Super Tackle Simulation & Counter Attacks',
      category: 'Defense',
      mat: 'Synthetic Mat 1',
      coach: 'Coach Amit Yadav',
      focus: '3-man defensive formation execution'
    }
  ],
  Fri: [
    {
      time: '6:30 AM - 8:00 AM',
      title: 'Sprint Accelerations & Reaction Drills',
      category: 'Speed',
      mat: 'Sprint Track',
      coach: 'Coach Sagar More',
      focus: 'First 5-meter explosive speed bursts'
    },
    {
      time: '5:30 PM - 7:30 PM',
      title: 'State Championship Squad Scrimmage',
      category: 'Match Prep',
      mat: 'Main Arena Court',
      coach: 'Coach Rohit Sharma',
      focus: 'Full 40-minute match with electronic referee scoring'
    }
  ],
  Sat: [
    {
      time: '7:00 AM - 9:30 AM',
      title: 'Weekend Inter-Batch Championship Cup',
      category: 'Tournament',
      mat: 'Main Arena Court',
      coach: 'All Coaches',
      focus: 'Live competition against visiting district teams'
    }
  ]
};

export default function PlayerSchedulePage() {
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [selectedDay, setSelectedDay] = useState('Mon');

  const currentSessions = WEEK_SCHEDULE[selectedDay] || [];

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Training Schedule & Timetable
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            Your weekly assigned practice sessions on Synthetic Mats & Gym
          </p>
        </div>
        <Badge variant="orange">Batch: Pro Rising Stars (Evening)</Badge>
      </div>

      {/* Day Selector Pills */}
      <div className="grid grid-cols-6 gap-2">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              selectedDay === day
                ? 'bg-[#FF6B1A] text-white shadow-glowSm scale-[1.02]'
                : 'bg-[#171F2B] text-[#AAB2BD] hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Responsive Session Cards Grid: 1 col on mobile, 2 cols on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {currentSessions.map((session, idx) => (
          <Card
            key={idx}
            className="p-5 bg-[#171F2B] border-white/5 space-y-4 hover:border-[#FF6B1A]/40 transition-all shadow-card flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase text-[#FF6B1A] tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-[#FF6B1A]" />
                  {session.category}
                </span>
                <Badge variant="orange">{session.mat}</Badge>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-white">
                  {session.title}
                </h4>
                <p className="text-xs text-[#AAB2BD] mt-1 leading-relaxed">
                  {session.focus}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5 text-xs text-[#AAB2BD]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#FF6B1A]" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#AAB2BD]">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  <span>{session.coach}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
