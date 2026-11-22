'use client';

import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PLAYERS } from '@/data/mock/academyData';
import { Player } from '@/types';
import { Edit2, Trash2, Eye, UserCheck, Shield } from 'lucide-react';

export default function StudentsManagementPage() {
  const { showToast } = useToast();
  const [students, setStudents] = useState<Player[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editPlayer, setEditPlayer] = useState<Player | null>(null);
  const [viewPlayer, setViewPlayer] = useState<Player | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    jerseyNumber: '',
    position: 'Raider' as Player['position'],
    batch: 'Beginner' as Player['batch'],
    age: '16',
    phone: '',
    email: '',
    feeStatus: 'Paid' as Player['feeStatus'],
  });

  useEffect(() => {
    setStudents(getStoredData<Player[]>('students', INITIAL_PLAYERS));
  }, []);

  const saveStudents = (updated: Player[]) => {
    setStudents(updated);
    setStoredData('students', updated);
  };

  const handleOpenAdd = () => {
    setEditPlayer(null);
    setFormData({
      name: '',
      jerseyNumber: String(Math.floor(Math.random() * 50) + 1),
      position: 'Raider',
      batch: 'Beginner',
      age: '16',
      phone: '',
      email: '',
      feeStatus: 'Paid',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (player: Player) => {
    setEditPlayer(player);
    setFormData({
      name: player.name,
      jerseyNumber: String(player.jerseyNumber),
      position: player.position,
      batch: player.batch,
      age: String(player.age),
      phone: player.phone,
      email: player.email,
      feeStatus: player.feeStatus,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this player?')) {
      const updated = students.filter((s) => s.id !== id);
      saveStudents(updated);
      showToast('Player deleted successfully', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Name and phone are required', 'error');
      return;
    }

    if (editPlayer) {
      const updated = students.map((s) =>
        s.id === editPlayer.id
          ? {
              ...s,
              name: formData.name,
              jerseyNumber: parseInt(formData.jerseyNumber) || s.jerseyNumber,
              position: formData.position,
              batch: formData.batch,
              age: parseInt(formData.age) || s.age,
              phone: formData.phone,
              email: formData.email,
              feeStatus: formData.feeStatus,
            }
          : s
      );
      saveStudents(updated);
      showToast('Player updated successfully', 'success');
    } else {
      const newPlayer: Player = {
        id: `ply-${Date.now().toString().slice(-4)}`,
        name: formData.name,
        jerseyNumber: parseInt(formData.jerseyNumber) || 10,
        position: formData.position,
        batch: formData.batch,
        age: parseInt(formData.age) || 16,
        phone: formData.phone,
        email: formData.email,
        joiningDate: new Date().toISOString().split('T')[0],
        status: 'Active',
        attendanceRate: 100,
        totalRaids: 0,
        successfulRaids: 0,
        tacklePoints: 0,
        feeStatus: formData.feeStatus,
        avatar: '/images/hero-kabaddi.jpg',
      };
      saveStudents([newPlayer, ...students]);
      showToast('New player added successfully', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<Player>[] = [
    {
      header: 'Player',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#101C2C] border border-[#FF6B1A]/40 flex items-center justify-center font-bold text-xs text-[#FF6B1A]">
            #{row.jerseyNumber}
          </div>
          <div>
            <span className="font-bold text-white block">{row.name}</span>
            <span className="text-[10px] text-[#AAB2BD]">{row.id}</span>
          </div>
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
      cell: (row) => (
        <span className="font-semibold text-[#22C55E]">{row.attendanceRate}%</span>
      ),
    },
    {
      header: 'Fees',
      cell: (row) => (
        <Badge variant={row.feeStatus === 'Paid' ? 'green' : row.feeStatus === 'Pending' ? 'orange' : 'red'}>
          {row.feeStatus}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      className: 'text-right',
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => setViewPlayer(row)}
            className="p-1.5 text-[#AAB2BD] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleOpenEdit(row)}
            className="p-1.5 text-blue-400 hover:text-blue-300 rounded-lg hover:bg-white/5 transition-colors"
            title="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1.5 text-[#EF4444] hover:text-red-300 rounded-lg hover:bg-white/5 transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Students & Players Management
          </h1>
          <p className="text-xs text-[#AAB2BD]">
            Manage registered athletes, jersey numbers, batch rosters and fee statuses.
          </p>
        </div>
      </div>

      <DataTable
        data={students}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search player name..."
        filterKey="batch"
        filterOptions={['Beginner', 'Advanced', 'Pro Academy']}
        filterPlaceholder="All Batches"
        onAddNew={handleOpenAdd}
        addNewLabel="Add Athlete"
        pageSize={6}
      />

      {/* Add / Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editPlayer ? 'Edit Player Profile' : 'Register New Athlete'}
        subtitle="Manage athlete squad parameters"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Jersey # (1-99)"
              type="number"
              value={formData.jerseyNumber}
              onChange={(e) => setFormData({ ...formData, jerseyNumber: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Playing Position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value as Player['position'] })}
            >
              <option value="Raider" className="bg-[#101C2C]">Raider</option>
              <option value="Corner Defender" className="bg-[#101C2C]">Corner Defender</option>
              <option value="Cover Defender" className="bg-[#101C2C]">Cover Defender</option>
              <option value="All Rounder" className="bg-[#101C2C]">All Rounder</option>
            </Select>

            <Select
              label="Assigned Batch"
              value={formData.batch}
              onChange={(e) => setFormData({ ...formData, batch: e.target.value as Player['batch'] })}
            >
              <option value="Beginner" className="bg-[#101C2C]">Beginner</option>
              <option value="Advanced" className="bg-[#101C2C]">Advanced</option>
              <option value="Pro Academy" className="bg-[#101C2C]">Pro Academy</option>
            </Select>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Input
              label="Age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <Input
              label="Phone *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Select
              label="Fee Status"
              value={formData.feeStatus}
              onChange={(e) => setFormData({ ...formData, feeStatus: e.target.value as Player['feeStatus'] })}
            >
              <option value="Paid" className="bg-[#101C2C]">Paid</option>
              <option value="Pending" className="bg-[#101C2C]">Pending</option>
              <option value="Overdue" className="bg-[#101C2C]">Overdue</option>
            </Select>
          </div>

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              {editPlayer ? 'Save Changes' : 'Add Player'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* View Player Modal */}
      {viewPlayer && (
        <Modal
          isOpen={!!viewPlayer}
          onClose={() => setViewPlayer(null)}
          title={viewPlayer.name}
          subtitle={`Jersey #${viewPlayer.jerseyNumber} • ${viewPlayer.position}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#101C2C] rounded-xl border border-white/5">
              <div>
                <span className="text-[#AAB2BD]">Student ID</span>
                <p className="font-bold text-white mt-0.5">{viewPlayer.id}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Batch</span>
                <p className="font-bold text-[#FF8A25] mt-0.5">{viewPlayer.batch}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Attendance Rate</span>
                <p className="font-bold text-[#22C55E] mt-0.5">{viewPlayer.attendanceRate}%</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Fee Status</span>
                <p className="font-bold text-white mt-0.5">{viewPlayer.feeStatus}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center p-3 bg-[#101C2C] rounded-xl border border-white/5">
              <div>
                <span className="text-[#AAB2BD] block">Total Raids</span>
                <span className="text-base font-extrabold text-white">{viewPlayer.totalRaids || 0}</span>
              </div>
              <div>
                <span className="text-[#AAB2BD] block">Success Raids</span>
                <span className="text-base font-extrabold text-[#22C55E]">{viewPlayer.successfulRaids || 0}</span>
              </div>
              <div>
                <span className="text-[#AAB2BD] block">Tackle Points</span>
                <span className="text-base font-extrabold text-blue-400">{viewPlayer.tacklePoints || 0}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button size="sm" onClick={() => setViewPlayer(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
