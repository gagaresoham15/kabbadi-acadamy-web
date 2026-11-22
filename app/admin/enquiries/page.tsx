'use client';

import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_ENQUIRIES } from '@/data/mock/academyData';
import { Enquiry } from '@/types';
import { CheckCircle, PhoneCall, Trash2, Eye } from 'lucide-react';

export default function AdminEnquiriesPage() {
  const { showToast } = useToast();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  useEffect(() => {
    setEnquiries(getStoredData<Enquiry[]>('enquiries', INITIAL_ENQUIRIES));
  }, []);

  const saveEnquiries = (updated: Enquiry[]) => {
    setEnquiries(updated);
    setStoredData('enquiries', updated);
  };

  const updateStatus = (id: string, status: Enquiry['status']) => {
    const updated = enquiries.map((e) => (e.id === id ? { ...e, status } : e));
    saveEnquiries(updated);
    showToast(`Status updated to ${status}`, 'success');
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete enquiry?')) {
      const updated = enquiries.filter((e) => e.id !== id);
      saveEnquiries(updated);
      showToast('Enquiry removed', 'info');
    }
  };

  const columns: Column<Enquiry>[] = [
    {
      header: 'Applicant Name',
      accessorKey: 'name',
      cell: (row) => (
        <div>
          <span className="font-bold text-white block">{row.name}</span>
          <span className="text-[10px] text-[#AAB2BD]">{row.phone}</span>
        </div>
      ),
    },
    {
      header: 'Program Interest',
      accessorKey: 'programInterest',
      cell: (row) => <span className="text-[#FF8A25] font-semibold">{row.programInterest}</span>,
    },
    {
      header: 'Date',
      accessorKey: 'date',
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
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5">
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
              title="Mark as Contacted"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
          )}
          {row.status !== 'Enrolled' && (
            <button
              onClick={() => updateStatus(row.id, 'Enrolled')}
              className="p-1.5 text-[#22C55E] hover:text-green-300 rounded-lg hover:bg-white/5"
              title="Mark as Enrolled"
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
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Admissions & Enquiries
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Follow up with parents and prospective athletes who submitted trial requests or questions.
        </p>
      </div>

      <DataTable
        data={enquiries}
        columns={columns}
        searchKey="name"
        searchPlaceholder="Search applicant..."
        filterKey="status"
        filterOptions={['New', 'Contacted', 'Enrolled', 'Closed']}
        filterPlaceholder="All Statuses"
      />

      {/* View Modal */}
      {selectedEnquiry && (
        <Modal
          isOpen={!!selectedEnquiry}
          onClose={() => setSelectedEnquiry(null)}
          title="Inquiry Details"
          subtitle={`Submitted on ${selectedEnquiry.date}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#101C2C] rounded-xl border border-white/5">
              <div>
                <span className="text-[#AAB2BD]">Applicant Name</span>
                <p className="font-bold text-white text-sm mt-0.5">{selectedEnquiry.name}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Phone Number</span>
                <p className="font-bold text-[#FF6B1A] text-sm mt-0.5">{selectedEnquiry.phone}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Email Address</span>
                <p className="font-semibold text-white mt-0.5">{selectedEnquiry.email}</p>
              </div>
              <div>
                <span className="text-[#AAB2BD]">Program of Interest</span>
                <p className="font-semibold text-[#FF8A25] mt-0.5">{selectedEnquiry.programInterest}</p>
              </div>
            </div>

            <div className="p-4 bg-[#101C2C] rounded-xl border border-white/5 space-y-1">
              <span className="text-[#AAB2BD] font-semibold block">Inquiry Message:</span>
              <p className="text-sm text-white leading-relaxed">{selectedEnquiry.message}</p>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    updateStatus(selectedEnquiry.id, 'Contacted');
                    setSelectedEnquiry(null);
                  }}
                >
                  Mark Contacted
                </Button>
                <Button
                  size="sm"
                  glow
                  onClick={() => {
                    updateStatus(selectedEnquiry.id, 'Enrolled');
                    setSelectedEnquiry(null);
                  }}
                >
                  Convert to Enrolled
                </Button>
              </div>
              <Button size="sm" variant="ghost" onClick={() => setSelectedEnquiry(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
