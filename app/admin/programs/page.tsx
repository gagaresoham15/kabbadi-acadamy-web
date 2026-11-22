'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PROGRAMS } from '@/data/mock/academyData';
import { TrainingProgram } from '@/types';
import { Edit2, Trash2 } from 'lucide-react';

export default function ProgramsManagementPage() {
  const { showToast } = useToast();
  const [programs, setPrograms] = useState<TrainingProgram[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProg, setEditProg] = useState<TrainingProgram | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Beginner' as TrainingProgram['category'],
    level: 'For Beginners',
    duration: '3 Months',
    fee: '4500',
    schedule: 'Mon, Wed, Fri',
    description: '',
  });

  useEffect(() => {
    setPrograms(getStoredData<TrainingProgram[]>('programs', INITIAL_PROGRAMS));
  }, []);

  const savePrograms = (updated: TrainingProgram[]) => {
    setPrograms(updated);
    setStoredData('programs', updated);
  };

  const handleOpenAdd = () => {
    setEditProg(null);
    setFormData({
      title: '',
      category: 'Beginner',
      level: 'For Beginners',
      duration: '3 Months',
      fee: '4500',
      schedule: 'Mon, Wed, Fri',
      description: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (prog: TrainingProgram) => {
    setEditProg(prog);
    setFormData({
      title: prog.title,
      category: prog.category,
      level: prog.level,
      duration: prog.duration,
      fee: String(prog.fee),
      schedule: prog.schedule,
      description: prog.description,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this program?')) {
      const updated = programs.filter((p) => p.id !== id);
      savePrograms(updated);
      showToast('Program deleted', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      showToast('Program title is required', 'error');
      return;
    }

    if (editProg) {
      const updated = programs.map((p) =>
        p.id === editProg.id
          ? {
              ...p,
              title: formData.title,
              category: formData.category,
              level: formData.level,
              duration: formData.duration,
              fee: parseInt(formData.fee) || 4500,
              schedule: formData.schedule,
              description: formData.description,
            }
          : p
      );
      savePrograms(updated);
      showToast('Program updated', 'success');
    } else {
      const newP: TrainingProgram = {
        id: `prog-${Date.now().toString().slice(-4)}`,
        title: formData.title,
        category: formData.category,
        level: formData.level,
        duration: formData.duration,
        ageGroup: 'Open',
        fee: parseInt(formData.fee) || 4500,
        description: formData.description,
        features: ['Stance & Canting', 'Match Scrimmage', 'Tactical Analysis'],
        schedule: formData.schedule,
        image: '/images/program-basic.jpg',
      };
      savePrograms([...programs, newP]);
      showToast('New program created', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<TrainingProgram>[] = [
    {
      header: 'Program Name',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#101C2C] shrink-0">
            <Image src={row.image} alt={row.title} fill className="object-cover" />
          </div>
          <div>
            <span className="font-bold text-white block">{row.title}</span>
            <span className="text-[10px] text-[#FF8A25]">{row.level}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Category',
      cell: (row) => <Badge variant="orange">{row.category}</Badge>,
    },
    {
      header: 'Duration',
      accessorKey: 'duration',
    },
    {
      header: 'Fee (₹)',
      cell: (row) => <span className="font-bold text-white">₹{row.fee}</span>,
    },
    {
      header: 'Schedule',
      cell: (row) => <span className="text-xs text-[#AAB2BD] truncate block max-w-xs">{row.schedule}</span>,
    },
    {
      header: 'Actions',
      className: 'text-right',
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => handleOpenEdit(row)}
            className="p-1.5 text-blue-400 hover:text-blue-300 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1.5 text-[#EF4444] hover:text-red-300 rounded-lg hover:bg-white/5 transition-colors"
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
          Training Programs Management
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Configure training curricula, duration, age categories and term fees.
        </p>
      </div>

      <DataTable
        data={programs}
        columns={columns}
        searchKey="title"
        searchPlaceholder="Search programs..."
        filterKey="category"
        filterOptions={['Beginner', 'Advanced', 'Fitness', 'Competition']}
        filterPlaceholder="All Categories"
        onAddNew={handleOpenAdd}
        addNewLabel="Create Program"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editProg ? 'Edit Program' : 'Create New Training Program'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Program Title *"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as TrainingProgram['category'] })}
            >
              <option value="Beginner" className="bg-[#101C2C]">Beginner</option>
              <option value="Advanced" className="bg-[#101C2C]">Advanced</option>
              <option value="Fitness" className="bg-[#101C2C]">Fitness</option>
              <option value="Competition" className="bg-[#101C2C]">Competition</option>
            </Select>

            <Input
              label="Level Subtitle"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              placeholder="e.g. For Competitions"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="e.g. 3 Months"
            />
            <Input
              label="Fee Amount (₹)"
              type="number"
              value={formData.fee}
              onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
              required
            />
          </div>

          <Input
            label="Schedule Timings"
            value={formData.schedule}
            onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
          />

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
              {editProg ? 'Save Changes' : 'Create Program'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
