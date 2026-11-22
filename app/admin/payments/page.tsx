'use client';

import React, { useState, useEffect } from 'react';
import { DataTable, Column } from '@/components/tables/DataTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { getStoredData, setStoredData, INITIAL_PAYMENTS } from '@/data/mock/academyData';
import { FeePayment } from '@/types';
import { Check, Receipt, IndianRupee, Download } from 'lucide-react';

export default function PaymentsManagementPage() {
  const { showToast } = useToast();
  const [payments, setPayments] = useState<FeePayment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState<FeePayment | null>(null);

  const [formData, setFormData] = useState({
    playerName: '',
    batchName: 'Rising Stars',
    amount: '4500',
    method: 'UPI' as FeePayment['method'],
    status: 'Paid' as FeePayment['status'],
  });

  useEffect(() => {
    setPayments(getStoredData<FeePayment[]>('payments', INITIAL_PAYMENTS));
  }, []);

  const savePayments = (updated: FeePayment[]) => {
    setPayments(updated);
    setStoredData('payments', updated);
  };

  const handleOpenAdd = () => {
    setFormData({
      playerName: '',
      batchName: 'Rising Stars',
      amount: '4500',
      method: 'UPI',
      status: 'Paid',
    });
    setModalOpen(true);
  };

  const handleMarkPaid = (id: string) => {
    const updated = payments.map((p) =>
      p.id === id ? { ...p, status: 'Paid' as const, date: new Date().toISOString().split('T')[0] } : p
    );
    savePayments(updated);
    showToast('Fee status updated to Paid!', 'success');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.playerName) {
      showToast('Player name is required', 'error');
      return;
    }

    const newPayment: FeePayment = {
      id: `pay-${Date.now().toString().slice(-4)}`,
      playerId: `ply-${Math.floor(Math.random() * 900) + 100}`,
      playerName: formData.playerName,
      batchName: formData.batchName,
      amount: parseInt(formData.amount) || 4500,
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
      method: formData.method,
      status: formData.status,
      receiptNo: `REC-2025-${Math.floor(Math.random() * 9000) + 1000}`,
    };

    savePayments([newPayment, ...payments]);
    showToast('Payment record logged!', 'success');
    setModalOpen(false);
  };

  const columns: Column<FeePayment>[] = [
    {
      header: 'Receipt #',
      accessorKey: 'receiptNo',
      cell: (row) => <span className="font-mono text-[#FF6B1A] font-bold">{row.receiptNo}</span>,
    },
    {
      header: 'Student Name',
      accessorKey: 'playerName',
      cell: (row) => <span className="font-bold text-white">{row.playerName}</span>,
    },
    {
      header: 'Batch',
      accessorKey: 'batchName',
    },
    {
      header: 'Amount',
      cell: (row) => <span className="font-bold text-white">₹{row.amount}</span>,
    },
    {
      header: 'Method',
      accessorKey: 'method',
    },
    {
      header: 'Payment Date',
      accessorKey: 'date',
    },
    {
      header: 'Status',
      cell: (row) => (
        <Badge variant={row.status === 'Paid' ? 'green' : row.status === 'Pending' ? 'orange' : 'red'}>
          {row.status}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      className: 'text-right',
      cell: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          {row.status !== 'Paid' && (
            <button
              onClick={() => handleMarkPaid(row.id)}
              className="px-2.5 py-1 rounded-full bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 text-[10px] font-bold hover:bg-[#22C55E] hover:text-white transition-all"
            >
              Mark Paid
            </button>
          )}
          <button
            onClick={() => setSelectedReceipt(row)}
            className="p-1.5 text-[#AAB2BD] hover:text-white rounded-lg hover:bg-white/5"
            title="View Receipt"
          >
            <Receipt className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Fees & Collections Management
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Track tuition installments, collect monthly dues, issue receipts and reconcile payment modes.
        </p>
      </div>

      <DataTable
        data={payments}
        columns={columns}
        searchKey="playerName"
        searchPlaceholder="Search student name..."
        filterKey="status"
        filterOptions={['Paid', 'Pending', 'Overdue']}
        filterPlaceholder="All Statuses"
        onAddNew={handleOpenAdd}
        addNewLabel="Record Payment"
      />

      {/* Record Payment Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Record Fee Payment"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Athlete / Student Name *"
            value={formData.playerName}
            onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
            placeholder="e.g. Rahul Deshmukh"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Batch Name"
              value={formData.batchName}
              onChange={(e) => setFormData({ ...formData, batchName: e.target.value })}
            />
            <Input
              label="Amount (₹) *"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Payment Method"
              value={formData.method}
              onChange={(e) => setFormData({ ...formData, method: e.target.value as FeePayment['method'] })}
            >
              <option value="UPI" className="bg-[#101C2C]">UPI (GPay / PhonePe / Paytm)</option>
              <option value="Card" className="bg-[#101C2C]">Debit / Credit Card</option>
              <option value="Cash" className="bg-[#101C2C]">Cash Counter</option>
              <option value="Net Banking" className="bg-[#101C2C]">Net Banking</option>
            </Select>

            <Select
              label="Status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as FeePayment['status'] })}
            >
              <option value="Paid" className="bg-[#101C2C]">Paid</option>
              <option value="Pending" className="bg-[#101C2C]">Pending</option>
              <option value="Overdue" className="bg-[#101C2C]">Overdue</option>
            </Select>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" size="md" glow>
              Save Payment
            </Button>
          </div>
        </form>
      </Modal>

      {/* Printable Receipt Modal */}
      {selectedReceipt && (
        <Modal
          isOpen={!!selectedReceipt}
          onClose={() => setSelectedReceipt(null)}
          title="Academy Fee Receipt"
          subtitle={selectedReceipt.receiptNo}
          maxWidth="md"
        >
          <div className="space-y-4 p-4 bg-[#101C2C] rounded-2xl border border-white/10 text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="font-extrabold text-white text-base">KABADDI ACADEMY</span>
                <p className="text-[10px] text-[#AAB2BD]">Balewadi Complex, Pune</p>
              </div>
              <Badge variant="green">{selectedReceipt.status}</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[#AAB2BD]">Receipt Number:</span>
                <span className="font-mono font-bold text-white">{selectedReceipt.receiptNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#AAB2BD]">Student Name:</span>
                <span className="font-bold text-white">{selectedReceipt.playerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#AAB2BD]">Training Batch:</span>
                <span className="text-white">{selectedReceipt.batchName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#AAB2BD]">Payment Method:</span>
                <span className="text-white">{selectedReceipt.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#AAB2BD]">Transaction Date:</span>
                <span className="text-white">{selectedReceipt.date}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-sm">
                <span className="font-bold text-white">Total Amount Paid:</span>
                <span className="font-extrabold text-[#22C55E]">₹{selectedReceipt.amount}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  showToast('Receipt download initiated (PDF Demo)', 'info');
                }}
              >
                <Download className="w-3.5 h-3.5 mr-1.5" /> Download PDF
              </Button>
              <Button size="sm" onClick={() => setSelectedReceipt(null)}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
