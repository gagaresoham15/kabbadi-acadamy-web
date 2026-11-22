'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_ACHIEVEMENTS } from '@/data/mock/academyData';
import { Achievement } from '@/types';
import { Edit2, Trash2, Trophy } from 'lucide-react';

export default function AdminAchievementsPage() {
  const { showToast } = useToast();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Achievement | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    tournament: '',
    year: '2024',
    position: 'Winner' as Achievement['position'],
    category: 'State Gold Medal',
    description: '',
  });

  useEffect(() => {
    setAchievements(getStoredData<Achievement[]>('achievements', INITIAL_ACHIEVEMENTS));
  }, []);

  const saveAchievements = (updated: Achievement[]) => {
    setAchievements(updated);
    setStoredData('achievements', updated);
  };

  const handleOpenAdd = () => {
    setEditItem(null);
    setFormData({
      title: '',
      tournament: '',
      year: '2024',
      position: 'Winner',
      category: 'State Gold Medal',
      description: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (ach: Achievement) => {
    setEditItem(ach);
    setFormData({
      title: ach.title,
      tournament: ach.tournament,
      year: ach.year,
      position: ach.position,
      category: ach.category,
      description: ach.description,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete achievement record?')) {
      const updated = achievements.filter((a) => a.id !== id);
      saveAchievements(updated);
      showToast('Achievement removed', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      showToast('Title is required', 'error');
      return;
    }

    if (editItem) {
      const updated = achievements.map((a) =>
        a.id === editItem.id
          ? {
              ...a,
              title: formData.title,
              tournament: formData.tournament,
              year: formData.year,
              position: formData.position,
              category: formData.category,
              description: formData.description,
            }
          : a
      );
      saveAchievements(updated);
      showToast('Achievement updated', 'success');
    } else {
      const newAch: Achievement = {
        id: `ach-${Date.now().toString().slice(-4)}`,
        title: formData.title,
        tournament: formData.tournament,
        year: formData.year,
        position: formData.position,
        category: formData.category,
        description: formData.description,
        image: '/images/trophy.jpg',
      };
      saveAchievements([newAch, ...achievements]);
      showToast('New achievement logged to Hall of Fame', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<Achievement>[] = [
    {
      header: 'Honor / Title',
      accessorKey: 'title',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white block">{row.title}</span>
            <span className="text-[10px] text-[#AAB2BD]">{row.tournament}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Year',
      accessorKey: 'year',
    },
    {
      header: 'Standing',
      cell: (row) => (
        <Badge variant={row.position === 'Winner' ? 'orange' : 'green'}>
          {row.position}
        </Badge>
      ),
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
    {
      header: 'Actions',
      className: 'text-right',
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => handleOpenEdit(row)}
            className="p-1.5 text-blue-400 hover:text-blue-300 rounded-lg hover:bg-white/5"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1.5 text-[#EF4444] hover:text-red-300 rounded-lg hover:bg-white/5"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Achievements & Trophy Showcase
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Manage tournament trophies, player accolades, medals, and state championship honors.
        </p>
      </div>

      <DataTable
        data={achievements}
        columns={columns}
        searchKey="title"
        searchPlaceholder="Search achievements..."
        onAddNew={handleOpenAdd}
        addNewLabel="Add Achievement"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editItem ? 'Edit Achievement' : 'Add New Achievement'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Achievement Title *"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g. Champions - State Youth Trophy 2024"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Tournament Name"
              value={formData.tournament}
              onChange={(e) => setFormData({ ...formData, tournament: e.target.value })}
            />
            <Input
              label="Year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Position / Award"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value as Achievement['position'] })}
            >
              <option value="Winner" className="bg-[#101C2C]">Winner (Gold Medal)</option>
              <option value="Runner Up" className="bg-[#101C2C]">Runner Up (Silver Medal)</option>
              <option value="3rd Place" className="bg-[#101C2C]">3rd Place (Bronze Medal)</option>
              <option value="Best Raider" className="bg-[#101C2C]">Best Raider Award</option>
              <option value="Best Defender" className="bg-[#101C2C]">Best Defender Award</option>
            </Select>

            <Input
              label="Category / Division"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="e.g. Under-19 Gold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#AAB2BD]">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-[#101C2C] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#AAB2BD]/50 focus:outline-none focus:border-[#FF6B1A]"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              {editItem ? 'Save Changes' : 'Log Achievement'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
