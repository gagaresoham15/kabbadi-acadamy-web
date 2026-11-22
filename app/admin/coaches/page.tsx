'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_COACHES } from '@/data/mock/academyData';
import { Coach } from '@/types';
import { Edit2, Trash2, Shield, Plus } from 'lucide-react';

export default function CoachesManagementPage() {
  const { showToast } = useToast();
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editCoach, setEditCoach] = useState<Coach | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Senior Coach' as Coach['role'],
    experience: '5+ Years',
    specialty: '',
    phone: '',
    email: '',
    status: 'Active' as Coach['status'],
  });

  useEffect(() => {
    setCoaches(getStoredData<Coach[]>('coaches', INITIAL_COACHES));
  }, []);

  const saveCoaches = (updated: Coach[]) => {
    setCoaches(updated);
    setStoredData('coaches', updated);
  };

  const handleOpenAdd = () => {
    setEditCoach(null);
    setFormData({
      name: '',
      role: 'Senior Coach',
      experience: '5+ Years',
      specialty: 'Raiding & Escape Footwork',
      phone: '',
      email: '',
      status: 'Active',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (coach: Coach) => {
    setEditCoach(coach);
    setFormData({
      name: coach.name,
      role: coach.role,
      experience: coach.experience,
      specialty: coach.specialty,
      phone: coach.phone,
      email: coach.email,
      status: coach.status,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this coach?')) {
      const updated = coaches.filter((c) => c.id !== id);
      saveCoaches(updated);
      showToast('Coach removed from roster', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Name and phone are required', 'error');
      return;
    }

    if (editCoach) {
      const updated = coaches.map((c) =>
        c.id === editCoach.id
          ? {
              ...c,
              name: formData.name,
              role: formData.role,
              experience: formData.experience,
              specialty: formData.specialty,
              phone: formData.phone,
              email: formData.email,
              status: formData.status,
            }
          : c
      );
      saveCoaches(updated);
      showToast('Coach details updated', 'success');
    } else {
      const newCoach: Coach = {
        id: `coach-${Date.now().toString().slice(-4)}`,
        name: formData.name,
        role: formData.role,
        experience: formData.experience,
        specialty: formData.specialty,
        phone: formData.phone,
        email: formData.email,
        status: formData.status,
        batchesCount: 2,
        studentsCount: 60,
        image: '/images/coach-rohit.jpg',
        bio: 'Certified Kabaddi coach dedicated to technical mastery and stamina conditioning.',
      };
      saveCoaches([...coaches, newCoach]);
      showToast('New coach registered to academy', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<Coach>[] = [
    {
      header: 'Coach',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#FF6B1A]/40 shrink-0">
            <Image src={row.image} alt={row.name} fill className="object-cover" />
          </div>
          <div>
            <span className="font-bold text-white block">{row.name}</span>
            <span className="text-[10px] text-[#AAB2BD]">{row.role}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Experience',
      accessorKey: 'experience',
    },
    {
      header: 'Specialty',
      cell: (row) => <span className="text-xs text-[#AAB2BD] truncate block max-w-xs">{row.specialty}</span>,
    },
    {
      header: 'Assigned Batches',
      cell: (row) => <span className="font-bold text-white">{row.batchesCount} Batches</span>,
    },
    {
      header: 'Status',
      cell: (row) => (
        <Badge variant={row.status === 'Active' ? 'green' : 'muted'}>
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
          Coaching Staff Directory
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Manage academy head coaches, trainers, assigned schedules and designations.
        </p>
      </div>

      <DataTable
        data={coaches}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search coach name..."
        filterKey="status"
        filterOptions={['Active', 'On Leave']}
        filterPlaceholder="All Statuses"
        onAddNew={handleOpenAdd}
        addNewLabel="Add Coach"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editCoach ? 'Edit Coach Information' : 'Add New Coach'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Role / Designation"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as Coach['role'] })}
            >
              <option value="Head Coach" className="bg-[#101C2C]">Head Coach</option>
              <option value="Senior Coach" className="bg-[#101C2C]">Senior Coach</option>
              <option value="Tactical Coach" className="bg-[#101C2C]">Tactical Coach</option>
              <option value="Fitness Coach" className="bg-[#101C2C]">Fitness Coach</option>
            </Select>

            <Input
              label="Experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            />
          </div>

          <Input
            label="Tactical Specialty"
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            placeholder="e.g. Corner Ankle Hold & Chain Defense"
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Phone *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <Select
            label="Availability Status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as Coach['status'] })}
          >
            <option value="Active" className="bg-[#101C2C]">Active</option>
            <option value="On Leave" className="bg-[#101C2C]">On Leave</option>
          </Select>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              {editCoach ? 'Save Changes' : 'Register Coach'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
