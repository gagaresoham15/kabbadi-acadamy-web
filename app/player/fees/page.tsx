'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useToast } from '@/components/ui/Toast';
import { IndianRupee, Download, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react';

export default function PlayerFeesPage() {
  const { showToast } = useToast();

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Fee Details & Subscriptions
          </h2>
          <p className="text-xs text-[#AAB2BD]">
            View term subscriptions, payment receipts and downloadable GST invoices
          </p>
        </div>
        <Badge variant="green">All Dues Cleared</Badge>
      </div>

      {/* Responsive Grid: 1 col on mobile, 12 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Current Active Plan (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-6 bg-gradient-to-br from-[#1E293B] via-[#171F2B] to-[#101C2C] border-[#FF6B1A]/40 space-y-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#AAB2BD] font-bold uppercase tracking-wider">
                Current Active Plan
              </span>
              <Badge variant="green">Active</Badge>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Pro Academy (Competition)</h3>
              <p className="text-xs text-[#FF8A25] font-semibold mt-1">6 Months Term Subscription</p>
              <p className="text-xs text-[#AAB2BD] mt-2 leading-relaxed">
                Includes 6 days/week mat sessions, gym conditioning, medical therapist checkups and tournament jerseys.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
              <div>
                <span className="text-[10px] text-[#AAB2BD] uppercase font-bold block">Next Renewal</span>
                <span className="text-sm font-extrabold text-white">Dec 05, 2024</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#AAB2BD] uppercase font-bold block">Term Fee</span>
                <span className="text-lg font-black text-[#22C55E]">₹7,500</span>
              </div>
            </div>

            <Button
              size="sm"
              glow
              onClick={() => showToast('Subscription renewal window opens Nov 28', 'info')}
              className="w-full text-xs shadow-glowSm"
            >
              Extend Subscription →
            </Button>
          </Card>
        </div>

        {/* Right Column: Payment Receipts (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Payment Invoices & Receipts
            </h4>
            <span className="text-xs text-[#AAB2BD]">Tax Invoices</span>
          </div>

          <div className="space-y-3">
            {[
              { id: 'REC-2024-0891', title: 'November Term Tuition', date: 'Nov 02, 2024', mode: 'UPI (GPay)', amount: '₹7,500' },
              { id: 'REC-2024-0714', title: 'State Tournament Kit & Jersey Fee', date: 'Oct 15, 2024', mode: 'Debit Card', amount: '₹1,800' },
              { id: 'REC-2024-0520', title: 'October Term Tuition', date: 'Oct 01, 2024', mode: 'Net Banking', amount: '₹7,500' },
              { id: 'REC-2024-0311', title: 'Annual Medical Screening', date: 'Sep 12, 2024', mode: 'UPI (PhonePe)', amount: '₹500' },
            ].map((receipt, idx) => (
              <Card
                key={idx}
                className="p-4 bg-[#171F2B] border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/10 transition-colors shadow-card"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FF6B1A]">{receipt.id}</span>
                    <Badge variant="muted">Paid</Badge>
                  </div>
                  <h5 className="text-sm font-extrabold text-white mt-1">{receipt.title}</h5>
                  <span className="text-xs text-[#AAB2BD]">{receipt.date} • {receipt.mode}</span>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-2 sm:pt-0 border-t sm:border-0 border-white/5">
                  <span className="text-base font-black text-white">{receipt.amount}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => showToast(`Invoice ${receipt.id} download started!`, 'success')}
                    className="text-xs px-3 py-1"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" /> Invoice
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
