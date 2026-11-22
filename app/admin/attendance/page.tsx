'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { CalendarCheck, Check, X, Clock, Save } from 'lucide-react';

export default function AttendanceManagementPage() {
  const { showToast } = useToast();
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState<Player[]>([]);
  const [attendanceMap, setAttendanceMap] = useState<Record<string, 'Present' | 'Absent' | 'Late'>>({});

  useEffect(() => {
    const list = getStoredData<Player[]>('students', INITIAL_PLAYERS);
    setStudents(list);

    // Initial state: mostly present
    const init: Record<string, 'Present' | 'Absent' | 'Late'> = {};
    list.forEach((s, idx) => {
      init[s.id] = idx === 4 ? 'Absent' : idx === 6 ? 'Late' : 'Present';
    });
    setAttendanceMap(init);
  }, []);

  const handleStatusChange = (id: string, status: 'Present' | 'Absent' | 'Late') => {
    setAttendanceMap((prev) => ({ ...prev, [id]: status }));
  };

  const handleSaveAttendance = () => {
    showToast(`Attendance saved for ${selectedDate}! (${Object.values(attendanceMap).filter(v => v === 'Present').length} Present)`, 'success');
  };

  const filteredStudents = selectedBatch === 'All'
    ? students
    : students.filter((s) => s.batch.toLowerCase() === selectedBatch.toLowerCase());

  const presentCount = Object.values(attendanceMap).filter((v) => v === 'Present').length;
  const absentCount = Object.values(attendanceMap).filter((v) => v === 'Absent').length;
  const lateCount = Object.values(attendanceMap).filter((v) => v === 'Late').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Attendance Tracking
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Mark daily court training attendance, track regularity, and detect absentees.
          </p>
        </div>

        <Button size="md" glow onClick={handleSaveAttendance}>
          <Save className="w-4 h-4 mr-2" /> Save Daily Roll Call
        </Button>
      </div>

      {/* Filters Bar */}
      <Card className="p-4 bg-[#171F2B] border-white/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block text-[10px] font-bold uppercase text-[#AAB2BD] mb-1">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-[#101C2C] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-[#AAB2BD] mb-1">Batch Roster</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="bg-[#101C2C] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A]"
            >
              <option value="All">All Batches</option>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
              <option value="Pro Academy">Pro Academy</option>
            </select>
          </div>
        </div>

        {/* Quick summary counts */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <span className="text-[#22C55E] flex items-center gap-1.5 bg-[#22C55E]/10 px-3 py-1.5 rounded-full border border-[#22C55E]/20">
            <Check className="w-3.5 h-3.5" /> Present: {presentCount}
          </span>
          <span className="text-[#EF4444] flex items-center gap-1.5 bg-[#EF4444]/10 px-3 py-1.5 rounded-full border border-[#EF4444]/20">
            <X className="w-3.5 h-3.5" /> Absent: {absentCount}
          </span>
          <span className="text-amber-400 flex items-center gap-1.5 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
            <Clock className="w-3.5 h-3.5" /> Late: {lateCount}
          </span>
        </div>
      </Card>

      {/* Roll Call Table */}
      <Card className="bg-[#171F2B] border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#121A24] text-[#AAB2BD] uppercase tracking-wider font-semibold border-b border-white/5">
              <tr>
                <th className="py-3.5 px-4">Jersey #</th>
                <th className="py-3.5 px-4">Player Name</th>
                <th className="py-3.5 px-4">Position</th>
                <th className="py-3.5 px-4">Batch</th>
                <th className="py-3.5 px-4 text-center">Mark Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white">
              {filteredStudents.map((player) => {
                const currentStatus = attendanceMap[player.id] || 'Present';

                return (
                  <tr key={player.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[#FF6B1A]">
                      #{player.jerseyNumber}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-white block">{player.name}</span>
                      <span className="text-[10px] text-[#AAB2BD]">{player.phone}</span>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={player.position === 'Raider' ? 'orange' : 'blue'}>
                        {player.position}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[#AAB2BD]">{player.batch}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleStatusChange(player.id, 'Present')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            currentStatus === 'Present'
                              ? 'bg-[#22C55E] text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]'
                              : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white'
                          }`}
                        >
                          Present
                        </button>
                        <button
                          onClick={() => handleStatusChange(player.id, 'Absent')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            currentStatus === 'Absent'
                              ? 'bg-[#EF4444] text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                              : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white'
                          }`}
                        >
                          Absent
                        </button>
                        <button
                          onClick={() => handleStatusChange(player.id, 'Late')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            currentStatus === 'Late'
                              ? 'bg-amber-500 text-white shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                              : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white'
                          }`}
                        >
                          Late
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
