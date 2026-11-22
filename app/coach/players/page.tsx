'use client';

import React, { useState } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { Eye, Activity } from 'lucide-react';

export default function CoachPlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const columns: Column<Player>[] = [
    {
      header: 'Jersey #',
      accessorKey: 'jerseyNumber',
      cell: (row) => (
        <span className="font-mono font-bold text-[#FF6B1A]">#{row.jerseyNumber}</span>
      ),
    },
    {
      header: 'Player Name',
      accessorKey: 'name',
      cell: (row) => (
        <div>
          <span className="font-bold text-white block">{row.name}</span>
          <span className="text-[10px] text-[#AAB2BD]">Age: {row.age} yrs</span>
        </div>
      ),
    },
    {
      header: 'Position',
      cell: (row) => (
        <Badge variant={row.position === 'Raider' ? 'orange' : 'blue'}>
          {row.position}
        </Badge>
      ),
    },
    {
      header: 'Batch',
      accessorKey: 'batch',
    },
    {
      header: 'Attendance',
      cell: (row) => <span className="font-bold text-[#22C55E]">{row.attendanceRate}%</span>,
    },
    {
      header: 'Raid / Tackle Pts',
      cell: (row) => (
        <span className="text-xs text-white">
          <strong className="text-[#22C55E]">{row.successfulRaids || 0}</strong> Raids /{' '}
          <strong className="text-blue-400">{row.tacklePoints || 0}</strong> Tackles
        </span>
      ),
    },
    {
      header: 'Details',
      className: 'text-right',
      cell: (row) => (
        <Button size="sm" variant="ghost" onClick={() => setSelectedPlayer(row)} className="text-xs">
          <Eye className="w-4 h-4 mr-1" /> Profile
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          My Player Roster
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Review performance stats, raid success ratios, and attendance records for your athletes.
        </p>
      </div>

      <DataTable
        data={INITIAL_PLAYERS}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search player..."
        filterKey="position"
        filterOptions={['Raider', 'Corner Defender', 'Cover Defender', 'All Rounder']}
        filterPlaceholder="All Positions"
      />

      {/* Player Modal */}
      {selectedPlayer && (
        <Modal
          isOpen={!!selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          title={selectedPlayer.name}
          subtitle={`Jersey #${selectedPlayer.jerseyNumber} • ${selectedPlayer.position}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#101C2C] rounded-xl border border-white/5">
              <div>
                <span className="text-[#AAB2BD]">Batch Cohort</span>
                <p className="font-bold text-white mt-0.5">{selectedPlayer.batch}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Attendance Regularity</span>
                <p className="font-bold text-[#22C55E] mt-0.5">{selectedPlayer.attendanceRate}%</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Total Raids Attempted</span>
                <p className="font-bold text-white mt-0.5">{selectedPlayer.totalRaids}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Successful Raids</span>
                <p className="font-bold text-[#22C55E] mt-0.5">{selectedPlayer.successfulRaids}</p>
              </div>
            </div>

            <div className="p-4 bg-[#101C2C] rounded-xl border border-white/5 space-y-2">
              <span className="text-[#AAB2BD] font-semibold block">Coach Tactical Notes:</span>
              <p className="text-white leading-relaxed">
                Demonstrating rapid dubki evasion under right corner tackles. Recommended to improve retreat canting control and left corner hand touch timing.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <Button size="sm" onClick={() => setSelectedPlayer(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
