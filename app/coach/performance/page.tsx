'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { Activity, Target, Zap, Shield, Award, Edit } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const RAID_EFFICIENCY_DATA = [
  { name: 'Rahul (#17)', raids: 188, tackles: 24, rate: 78 },
  { name: 'Pawan (#7)', raids: 245, tackles: 18, rate: 79 },
  { name: 'Suraj (#4)', raids: 18, tackles: 82, rate: 82 },
  { name: 'Ajinkya (#10)', raids: 124, tackles: 64, rate: 75 },
  { name: 'Omkar (#9)', raids: 96, tackles: 16, rate: 69 },
];

export default function CoachPerformancePage() {
  const { showToast } = useToast();
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [evalModal, setEvalModal] = useState(false);
  const [evaluation, setEvaluation] = useState({
    agility: '85',
    stamina: '90',
    escapeSpeed: '88',
    notes: 'Exemplary dubki timing under pressure.',
  });

  const handleSaveEval = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Evaluation saved for ${selectedPlayer?.name}!`, 'success');
    setEvalModal(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Player Performance & Tactical Analytics
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Track raid strike rates, tackle success percentages, and evaluate agility tests.
        </p>
      </div>

      {/* Performance Bar Chart */}
      <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
        <div>
          <h3 className="text-base font-bold text-white tracking-wide">Top Performer Match Efficiency</h3>
          <p className="text-xs text-[#AAB2BD]">Successful raid points vs defensive tackle points scored</p>
        </div>

        <div className="h-64 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={RAID_EFFICIENCY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#AAB2BD" fontSize={11} />
              <YAxis stroke="#AAB2BD" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: '#101C2C', borderColor: 'rgba(255,107,26,0.3)', borderRadius: '10px' }}
              />
              <Bar dataKey="raids" fill="#FF6B1A" name="Successful Raids" radius={[6, 6, 0, 0]} />
              <Bar dataKey="tackles" fill="#3B82F6" name="Tackle Points" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Squad Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INITIAL_PLAYERS.slice(0, 6).map((player) => {
          const successPct = player.totalRaids
            ? Math.round(((player.successfulRaids || 0) / player.totalRaids) * 100)
            : 70;

          return (
            <Card key={player.id} glow className="p-5 bg-[#171F2B] border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#101C2C] border border-[#FF6B1A]/40 flex items-center justify-center font-bold text-sm text-[#FF6B1A]">
                    #{player.jerseyNumber}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{player.name}</h4>
                    <span className="text-[10px] text-[#AAB2BD]">{player.position}</span>
                  </div>
                </div>
                <Badge variant={player.position === 'Raider' ? 'orange' : 'blue'}>
                  {player.batch}
                </Badge>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#AAB2BD]">Raid Success Rate</span>
                  <span className="font-bold text-[#22C55E]">{successPct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#101C2C] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF6B1A] to-[#22C55E] rounded-full"
                    style={{ width: `${successPct}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs p-2.5 bg-[#101C2C] rounded-xl border border-white/5">
                <div>
                  <span className="text-[#AAB2BD] block text-[10px]">Raids</span>
                  <span className="font-bold text-white">{player.totalRaids || 0}</span>
                </div>
                <div>
                  <span className="text-[#AAB2BD] block text-[10px]">Points</span>
                  <span className="font-bold text-[#22C55E]">{player.successfulRaids || 0}</span>
                </div>
                <div>
                  <span className="text-[#AAB2BD] block text-[10px]">Tackles</span>
                  <span className="font-bold text-blue-400">{player.tacklePoints || 0}</span>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setSelectedPlayer(player);
                  setEvalModal(true);
                }}
                className="w-full text-xs"
              >
                <Edit className="w-3.5 h-3.5 mr-1" /> Log Coach Evaluation
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Evaluation Modal */}
      {selectedPlayer && (
        <Modal
          isOpen={evalModal}
          onClose={() => setEvalModal(false)}
          title={`Evaluate ${selectedPlayer.name}`}
          subtitle={`Jersey #${selectedPlayer.jerseyNumber} • ${selectedPlayer.position}`}
          maxWidth="md"
        >
          <form onSubmit={handleSaveEval} className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <Input
                label="Agility Score (1-100)"
                type="number"
                value={evaluation.agility}
                onChange={(e) => setEvaluation({ ...evaluation, agility: e.target.value })}
              />
              <Input
                label="Stamina / Yo-Yo"
                type="number"
                value={evaluation.stamina}
                onChange={(e) => setEvaluation({ ...evaluation, stamina: e.target.value })}
              />
              <Input
                label="Escape Speed"
                type="number"
                value={evaluation.escapeSpeed}
                onChange={(e) => setEvaluation({ ...evaluation, escapeSpeed: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">
                Tactical Mentorship Notes
              </label>
              <textarea
                rows={3}
                value={evaluation.notes}
                onChange={(e) => setEvaluation({ ...evaluation, notes: e.target.value })}
                className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A]"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button type="button" variant="ghost" size="sm" onClick={() => setEvalModal(false)}>
                Cancel
              </Button>
              <Button type="submit" size="md" glow>
                Save Evaluation
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
