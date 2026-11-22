'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { Check, X, Clock, Save, ShieldAlert } from 'lucide-react';

export default function CoachAttendancePage() {
  const { showToast } = useToast();
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [students, setStudents] = useState<Player[]>([]);
  const [attendance, setAttendance] = useState<Record<string, 'Present' | 'Absent' | 'Late'>>({});

  useEffect(() => {
    const list = getStoredData<Player[]>('students', INITIAL_PLAYERS);
    setStudents(list);

    const init: Record<string, 'Present' | 'Absent' | 'Late'> = {};
    list.forEach((s) => {
      init[s.id] = 'Present';
    });
    setAttendance(init);
  }, []);

  const handleMark = (id: string, status: 'Present' | 'Absent' | 'Late') => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const handleSave = () => {
    const pCount = Object.values(attendance).filter((v) => v === 'Present').length;
    showToast(`Roll call submitted! ${pCount} players present on court.`, 'success');
  };

  const filtered = selectedBatch === 'All'
    ? students
    : students.filter((s) => s.batch.toLowerCase() === selectedBatch.toLowerCase());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Coach Court Attendance
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Mark athlete attendance before beginning practice drills on Mat 1 & 2.
          </p>
        </div>

        <Button size="md" glow onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" /> Submit Roll Call
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-xs font-bold text-[#AAB2BD]">Filter Batch:</label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
          className="bg-[#171F2B] border border-white/10 rounded-full px-4 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF6B1A]"
        >
          <option value="All">All Squads</option>
          <option value="Beginner">Morning Juniors</option>
          <option value="Advanced">Evening Rising Stars</option>
          <option value="Pro Academy">Elite Pro Warriors</option>
        </select>
      </div>

      <Card className="bg-[#171F2B] border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#121A24] text-[#AAB2BD] uppercase tracking-wider font-semibold border-b border-white/5">
              <tr>
                <th className="py-3.5 px-4">Jersey #</th>
                <th className="py-3.5 px-4">Athlete Name</th>
                <th className="py-3.5 px-4">Position</th>
                <th className="py-3.5 px-4">Batch</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white">
              {filtered.map((player) => {
                const status = attendance[player.id] || 'Present';

                return (
                  <tr key={player.id} className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono font-bold text-[#FF6B1A]">
                      #{player.jerseyNumber}
                    </td>
                    <td className="py-3 px-4 font-bold">{player.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant={player.position === 'Raider' ? 'orange' : 'blue'}>
                        {player.position}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-[#AAB2BD]">{player.batch}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleMark(player.id, 'Present')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            status === 'Present'
                              ? 'bg-[#22C55E] text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]'
                              : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white'
                          }`}
                        >
                          Present
                        </button>
                        <button
                          onClick={() => handleMark(player.id, 'Absent')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            status === 'Absent'
                              ? 'bg-[#EF4444] text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                              : 'bg-[#101C2C] text-[#AAB2BD] hover:text-white'
                          }`}
                        >
                          Absent
                        </button>
                        <button
                          onClick={() => handleMark(player.id, 'Late')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            status === 'Late'
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
