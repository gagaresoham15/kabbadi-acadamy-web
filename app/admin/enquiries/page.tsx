'use client';

import React, { useState } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { useToast } from '@/components/ui/Toast';
import { useAcademyData } from '@/lib/useAcademyData';
import { INITIAL_ENQUIRIES } from '@/data/mock/academyData';
import { Enquiry } from '@/types';
import { CheckCircle, PhoneCall, Trash2, Eye, MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function AdminEnquiriesPage() {
  const { showToast } = useToast();
  const [enquiries, setEnquiries] = useAcademyData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const updateStatus = (id: string, status: Enquiry['status']) => {
    const updated = enquiries.map((e) => (e.id === id ? { ...e, status } : e));
    setEnquiries(updated);
    showToast(`Applicant status marked as ${status}`, 'success');
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this enquiry record?')) {
      const updated = enquiries.filter((e) => e.id !== id);
      setEnquiries(updated);
      showToast('Enquiry record deleted', 'info');
      if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
    }
  };

  const filteredEnquiries =
    statusFilter === 'All'
      ? enquiries
      : enquiries.filter((e) => e.status.toLowerCase() === statusFilter.toLowerCase());

  const columns: Column<Enquiry>[] = [
    {
      header: 'Applicant Details',
      accessorKey: 'name',
      cell: (row) => (
        <div>
          <span className="font-bold text-white block text-sm">{row.name}</span>
          <span className="text-xs text-[#AAB2BD] font-mono">{row.phone}</span>
        </div>
      ),
    },
    {
      header: 'Program Interest',
      accessorKey: 'programInterest',
      cell: (row) => <span className="text-[#FF8A25] font-semibold text-xs">{row.programInterest}</span>,
    },
    {
      header: 'Date',
      accessorKey: 'date',
      cell: (row) => <span className="text-xs text-[#AAB2BD]">{row.date}</span>,
    },
    {
      header: 'Message snippet',
      cell: (row) => <span className="text-xs text-[#AAB2BD] truncate block max-w-xs">{row.message}</span>,
    },
    {
      header: 'Status',
      cell: (row) => (
        <Badge
          variant={
            row.status === 'New'
              ? 'orange'
              : row.status === 'Contacted'
              ? 'blue'
              : row.status === 'Enrolled'
              ? 'green'
              : 'muted'
          }
        >
          {row.status}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      className: 'text-right',
      cell: (row) => {
        const cleanPhone = row.phone.replace(/[^0-9]/g, '');
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
          row.name
        )},%20this%20is%20from%20Garuda%20Kabaddi%20Academy%20regarding%20your%20training%20trial%20enquiry.`;

        return (
          <div className="flex items-center justify-end gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#22C55E] hover:text-white rounded-lg hover:bg-[#22C55E]/20"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`tel:${cleanPhone}`}
              className="p-1.5 text-blue-400 hover:text-white rounded-lg hover:bg-blue-500/20"
              title="Call Applicant"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setSelectedEnquiry(row)}
              className="p-1.5 text-[#AAB2BD] hover:text-white rounded-lg hover:bg-white/5"
              title="Read Full Inquiry"
            >
              <Eye className="w-4 h-4" />
            </button>

            {row.status === 'New' && (
              <button
                onClick={() => updateStatus(row.id, 'Contacted')}
                className="p-1.5 text-blue-400 hover:text-blue-300 rounded-lg hover:bg-white/5"
                title="Mark Contacted"
              >
                <PhoneCall className="w-4 h-4" />
              </button>
            )}

            {row.status !== 'Enrolled' && (
              <button
                onClick={() => updateStatus(row.id, 'Enrolled')}
                className="p-1.5 text-[#22C55E] hover:text-green-300 rounded-lg hover:bg-white/5"
                title="Mark Enrolled"
              >
                <CheckCircle className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => handleDelete(row.id)}
              className="p-1.5 text-[#EF4444] hover:text-red-300 rounded-lg hover:bg-white/5"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Admissions & Enquiries Management
          </h1>
          <p className="text-xs sm:text-sm text-[#AAB2BD]">
            Real-time enquiries submitted via website trial forms, course pages, and contact portals.
          </p>
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-[#171F2B] p-1 rounded-full border border-white/5 text-xs">
          {['All', 'New', 'Contacted', 'Enrolled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-full font-bold transition-all ${
                statusFilter === st
                  ? 'bg-[#FF6B1A] text-white shadow-glowSm'
                  : 'text-[#AAB2BD] hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredEnquiries}
        searchKey="name"
        searchPlaceholder="Search applicant by name..."
      />

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <Modal
          isOpen={!!selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          title="Admissions Enquiry Details"
          size="md"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#101C2C] border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-base font-black text-white">{selectedEnquiry.name}</span>
                <Badge
                  variant={
                    selectedEnquiry.status === 'New'
                      ? 'orange'
                      : selectedEnquiry.status === 'Enrolled'
                      ? 'green'
                      : 'blue'
                  }
                >
                  {selectedEnquiry.status}
                </Badge>
              </div>
              <p className="text-xs text-[#FF8A25] font-semibold">{selectedEnquiry.programInterest}</p>
              <div className="flex flex-wrap gap-4 text-xs text-[#AAB2BD] pt-1">
                <span>Phone: <strong className="text-white">{selectedEnquiry.phone}</strong></span>
                <span>Email: <strong className="text-white">{selectedEnquiry.email}</strong></span>
                <span>Date: <strong className="text-white">{selectedEnquiry.date}</strong></span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#AAB2BD]">Inquiry Message / Requirement</span>
              <div className="p-3.5 rounded-xl bg-[#101C2C] border border-white/5 text-xs text-white leading-relaxed">
                {selectedEnquiry.message || 'No specific notes entered.'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                  selectedEnquiry.name
                )},%20this%20is%20from%20Garuda%20Kabaddi%20Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E] hover:text-white transition-all text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
              <a
                href={`tel:${selectedEnquiry.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-xs font-bold"
              >
                <Phone className="w-4 h-4" /> Call Applicant
              </a>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateStatus(selectedEnquiry.id, 'Contacted')}
                  className="text-xs"
                >
                  Mark Contacted
                </Button>
                <Button
                  size="sm"
                  glow
                  onClick={() => updateStatus(selectedEnquiry.id, 'Enrolled')}
                  className="text-xs"
                >
                  Mark Enrolled
                </Button>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDelete(selectedEnquiry.id)}
                className="text-xs text-red-400 border-red-500/20 hover:bg-red-500/10"
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
