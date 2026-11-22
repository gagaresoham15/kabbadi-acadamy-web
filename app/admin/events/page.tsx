'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_EVENTS } from '@/data/mock/academyData';
import { TournamentEvent } from '@/types';
import { Edit2, Trash2 } from 'lucide-react';

export default function AdminEventsPage() {
  const { showToast } = useToast();
  const [events, setEvents] = useState<TournamentEvent[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState<TournamentEvent | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'State Level',
    date: '2025-11-20',
    time: '09:00 AM',
    location: 'Balewadi Complex',
    city: 'Pune, Maharashtra',
    entryFee: '3000',
    prizePool: '₹1,00,000 + Trophy',
    status: 'Upcoming' as TournamentEvent['status'],
    description: '',
  });

  useEffect(() => {
    setEvents(getStoredData<TournamentEvent[]>('events', INITIAL_EVENTS));
  }, []);

  const saveEvents = (updated: TournamentEvent[]) => {
    setEvents(updated);
    setStoredData('events', updated);
  };

  const handleOpenAdd = () => {
    setEditEvent(null);
    setFormData({
      title: '',
      category: 'State Level',
      date: '2025-11-20',
      time: '09:00 AM',
      location: 'Balewadi Complex',
      city: 'Pune, Maharashtra',
      entryFee: '3000',
      prizePool: '₹1,00,000 + Trophy',
      status: 'Upcoming',
      description: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (evt: TournamentEvent) => {
    setEditEvent(evt);
    setFormData({
      title: evt.title,
      category: evt.category,
      date: evt.date,
      time: evt.time,
      location: evt.location,
      city: evt.city,
      entryFee: String(evt.entryFee),
      prizePool: evt.prizePool,
      status: evt.status,
      description: evt.description,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this tournament event?')) {
      const updated = events.filter((e) => e.id !== id);
      saveEvents(updated);
      showToast('Event deleted', 'info');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      showToast('Title is required', 'error');
      return;
    }

    if (editEvent) {
      const updated = events.map((e) =>
        e.id === editEvent.id
          ? {
              ...e,
              title: formData.title,
              category: formData.category,
              date: formData.date,
              time: formData.time,
              location: formData.location,
              city: formData.city,
              entryFee: parseInt(formData.entryFee) || 0,
              prizePool: formData.prizePool,
              status: formData.status,
              description: formData.description,
            }
          : e
      );
      saveEvents(updated);
      showToast('Event updated', 'success');
    } else {
      const newEvt: TournamentEvent = {
        id: `evt-${Date.now().toString().slice(-4)}`,
        title: formData.title,
        category: formData.category,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        city: formData.city,
        entryFee: parseInt(formData.entryFee) || 0,
        prizePool: formData.prizePool,
        status: formData.status,
        registeredTeams: 0,
        image: '/images/event-action.jpg',
        description: formData.description || 'Championship event organized by Kabaddi Academy.',
      };
      saveEvents([...events, newEvt]);
      showToast('Event published', 'success');
    }
    setModalOpen(false);
  };

  const columns: Column<TournamentEvent>[] = [
    {
      header: 'Event Name',
      accessorKey: 'title',
      cell: (row) => (
        <div>
          <span className="font-bold text-white block">{row.title}</span>
          <span className="text-[10px] text-[#AAB2BD]">{row.category}</span>
        </div>
      ),
    },
    {
      header: 'Date & Time',
      cell: (row) => (
        <span className="text-xs text-white">
          {row.date} • <span className="text-[#AAB2BD]">{row.time}</span>
        </span>
      ),
    },
    {
      header: 'Venue',
      cell: (row) => <span>{row.location}, {row.city}</span>,
    },
    {
      header: 'Prize Pool',
      cell: (row) => <span className="text-[#22C55E] font-bold">{row.prizePool}</span>,
    },
    {
      header: 'Teams Registered',
      cell: (row) => <span className="font-bold text-white">{row.registeredTeams} Squads</span>,
    },
    {
      header: 'Status',
      cell: (row) => (
        <Badge variant={row.status === 'Upcoming' ? 'orange' : row.status === 'Live' ? 'green' : 'muted'}>
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
          Events & Tournaments Management
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Host inter-academy tournaments, state trials, and manage registration brackets.
        </p>
      </div>

      <DataTable
        data={events}
        columns={columns}
        searchKey="title"
        searchPlaceholder="Search events..."
        filterKey="status"
        filterOptions={['Upcoming', 'Live', 'Completed']}
        filterPlaceholder="All Statuses"
        onAddNew={handleOpenAdd}
        addNewLabel="Host Event"
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editEvent ? 'Edit Tournament Event' : 'Host New Tournament Event'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Tournament Title *"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Date (YYYY-MM-DD)"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
            <Input
              label="Reporting Time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Venue Arena"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <Input
              label="City, State"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Prize Pool"
              value={formData.prizePool}
              onChange={(e) => setFormData({ ...formData, prizePool: e.target.value })}
              placeholder="e.g. ₹2,50,000 + Trophy"
            />
            <Input
              label="Entry Fee (₹)"
              type="number"
              value={formData.entryFee}
              onChange={(e) => setFormData({ ...formData, entryFee: e.target.value })}
            />
          </div>

          <Select
            label="Event Status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as TournamentEvent['status'] })}
          >
            <option value="Upcoming" className="bg-[#101C2C]">Upcoming</option>
            <option value="Live" className="bg-[#101C2C]">Live Now</option>
            <option value="Completed" className="bg-[#101C2C]">Completed</option>
          </Select>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              {editEvent ? 'Save Changes' : 'Publish Tournament'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
