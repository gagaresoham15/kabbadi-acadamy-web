'use client';

import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_BATCHES } from '@/data/mock/academyData';
import { Batch } from '@/types';
import { Edit2, Trash2 } from 'lucide-react';

export default function BatchesManagementPage() {
  const { showToast } = useToast();
  const [batches, setBatches] = useState<Batch[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editBatch, setEditBatch] = useState<Batch | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    programTitle: 'Basic Training',
    coachName: 'Rohit Sharma',
    timings: '6:30 AM - 8:00 AM',
    maxCapacity: '35',
    status: 'Ongoing' as Batch['status'],
  });

  useEffect(() => {
    setBatches(getStoredData<Batch[]>('batches', INITIAL_BATCHES));
  }, []);

  const saveBatches = (updated: Batch[]) => {
    setBatches(updated);
    setStoredData('batches', updated);
  };

  const handleOpenAdd = () => {
    setEditBatch(null);
    setFormData({
      name: '',
      programTitle: 'Basic Training',
      coachName: 'Rohit Sharma',
      timings: '6:30 AM - 8:00 AM',
      maxCapacity: '35',
      status: 'Ongoing',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (batch: Batch) => {
    setEditBatch(batch);
    setFormData({
      name: batch.name,
      programTitle: batch.programTitle,
      coachName: batch.coachName,
      timings: batch.timings,
      maxCapacity: String(batch.maxCapacity),
      status: batch.status,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this training batch?')) {
      const updated = batches.filter((b) => b.id !== id);
      saveBatches(updated);
      showToast('Batch removed', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      showToast('Batch name is required', 'error');
      return;
    }

    if (editBatch) {
      const updated = batches.map((b) =>
        b.id === editBatch.id
          ? {
              ...b,
              name: formData.name,
              programTitle: formData.programTitle,
              coachName: formData.coachName,
              timings: formData.timings,
              maxCapacity: parseInt(formData.maxCapacity) || 30,
              status: formData.status,
            }
          : b
      );
      saveBatches(updated);
      showToast('Batch updated', 'success');
    } else {
      const newB: Batch = {
        id: `batch-${Date.now().toString().slice(-4)}`,
        name: formData.name,
        programId: 'prog-1',
        programTitle: formData.programTitle,
        coachId: 'coach-1',
        coachName: formData.coachName,
        timings: formData.timings,
        days: ['Mon', 'Wed', 'Fri'],
        maxCapacity: parseInt(formData.maxCapacity) || 30,
        enrolledCount: 0,
        status: formData.status,
      };
      saveBatches([...batches, newB]);
      showToast('New batch created', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<Batch>[] = [
    {
      header: 'Batch Name',
      accessorKey: 'name',
      cell: (row) => <span className="font-bold text-white">{row.name}</span>,
    },
    {
      header: 'Program',
      accessorKey: 'programTitle',
    },
    {
      header: 'Coach',
      accessorKey: 'coachName',
      cell: (row) => <span className="text-[#FF8A25] font-semibold">{row.coachName}</span>,
    },
    {
      header: 'Schedule',
      accessorKey: 'timings',
    },
    {
      header: 'Enrolled / Cap',
      cell: (row) => (
        <span>
          <strong className="text-white">{row.enrolledCount}</strong> / {row.maxCapacity}
        </span>
      ),
    },
    {
      header: 'Status',
      cell: (row) => (
        <Badge variant={row.status === 'Ongoing' ? 'green' : 'muted'}>
          {row.status}
        </Badge>
      ),
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
          Batch Management
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Manage court slots, assigning coaches, timing shifts and cohort capacities.
        </p>
      </div>

      <DataTable
        data={batches}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search batches..."
        filterKey="status"
        filterOptions={['Ongoing', 'Upcoming', 'Completed']}
        filterPlaceholder="All Statuses"
        onAddNew={handleOpenAdd}
        addNewLabel="Create Batch"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editBatch ? 'Edit Batch' : 'Create New Batch'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Batch Title *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Morning Pro Raiders"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Assigned Program"
              value={formData.programTitle}
              onChange={(e) => setFormData({ ...formData, programTitle: e.target.value })}
            >
              <option value="Basic Training" className="bg-[#101C2C]">Basic Training</option>
              <option value="Advanced Training" className="bg-[#101C2C]">Advanced Training</option>
              <option value="Fitness Training" className="bg-[#101C2C]">Fitness Training</option>
              <option value="Tournament Prep" className="bg-[#101C2C]">Tournament Prep</option>
            </Select>

            <Select
              label="Assigned Coach"
              value={formData.coachName}
              onChange={(e) => setFormData({ ...formData, coachName: e.target.value })}
            >
              <option value="Rohit Sharma" className="bg-[#101C2C]">Rohit Sharma (Head)</option>
              <option value="Amit Yadav" className="bg-[#101C2C]">Amit Yadav (Defense)</option>
              <option value="Vikash Patil" className="bg-[#101C2C]">Vikash Patil (Tactics)</option>
              <option value="Sagar More" className="bg-[#101C2C]">Sagar More (Fitness)</option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Timings & Shift"
              value={formData.timings}
              onChange={(e) => setFormData({ ...formData, timings: e.target.value })}
              placeholder="e.g. 5:30 PM - 7:30 PM"
            />
            <Input
              label="Max Capacity"
              type="number"
              value={formData.maxCapacity}
              onChange={(e) => setFormData({ ...formData, maxCapacity: e.target.value })}
            />
          </div>

          <Select
            label="Batch Status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as Batch['status'] })}
          >
            <option value="Ongoing" className="bg-[#101C2C]">Ongoing</option>
            <option value="Upcoming" className="bg-[#101C2C]">Upcoming</option>
            <option value="Completed" className="bg-[#101C2C]">Completed</option>
          </Select>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              {editBatch ? 'Save Changes' : 'Create Batch'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
