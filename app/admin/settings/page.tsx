'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { resetAllDataToDefault } from '@/data/mock/academyData';
import { Save, Shield, Bell, Database, RotateCcw, Download, CheckCircle2 } from 'lucide-react';

export default function AdminSettingsPage() {
  const { showToast } = useToast();

  const [settings, setSettings] = useState({
    academyName: 'GARUDA KABADDI ACADEMY',
    tagline: 'FORGE CHAMPIONS • BORN FOR THE MAT',
    regNumber: 'MAH/PUNE/KBD/2021/0488',
    gstin: '27AABCG9822F1Z6',
    emailAlerts: true,
    smsAlerts: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('System configuration saved!', 'success');
  };

  const handleResetAllData = () => {
    if (
      confirm(
        'Are you sure you want to restore ALL demo data (CMS, Programs, Coaches, Batches, Events, Enquiries) to default sample state?'
      )
    ) {
      resetAllDataToDefault();
      showToast('All demo academy data restored to official default setup!', 'success');
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
  };

  const handleExportData = () => {
    const dump: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('kabaddi_')) {
        try {
          dump[k] = JSON.parse(localStorage.getItem(k) || '{}');
        } catch {}
      }
    }
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `garuda-academy-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Academy database exported as JSON backup!', 'success');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
          Academy System Settings & Data Control
        </h1>
        <p className="text-xs sm:text-sm text-[#AAB2BD]">
          Configure legal registrations, automated parent alerts, and manage the demo database reset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl">
        <div className="lg:col-span-8 space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Shield className="w-4 h-4 text-[#FF6B1A]" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Academy Registration</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Organization Legal Name"
                  value={settings.academyName}
                  onChange={(e) => setSettings({ ...settings, academyName: e.target.value })}
                />
                <Input
                  label="Official Tagline"
                  value={settings.tagline}
                  onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="State Sports Registration #"
                  value={settings.regNumber}
                  onChange={(e) => setSettings({ ...settings, regNumber: e.target.value })}
                />
                <Input
                  label="GSTIN / Society Registration"
                  value={settings.gstin}
                  onChange={(e) => setSettings({ ...settings, gstin: e.target.value })}
                />
              </div>
            </Card>

            <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Bell className="w-4 h-4 text-[#FF6B1A]" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Automated Notifications</h3>
              </div>

              <div className="space-y-3 text-xs">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailAlerts}
                    onChange={(e) => setSettings({ ...settings, emailAlerts: e.target.checked })}
                    className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20 focus:ring-[#FF6B1A]"
                  />
                  <span className="text-white font-medium">Send automatic fee receipt email to parents upon payment</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.smsAlerts}
                    onChange={(e) => setSettings({ ...settings, smsAlerts: e.target.checked })}
                    className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20 focus:ring-[#FF6B1A]"
                  />
                  <span className="text-white font-medium">Send WhatsApp / SMS alert when student is marked absent</span>
                </label>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" size="md" glow className="px-6 font-bold uppercase text-xs">
                <Save className="w-4 h-4 mr-2" /> Save System Settings
              </Button>
            </div>
          </form>
        </div>

        {/* Demo Management Side Panel */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 bg-[#171F2B] border-[#FF6B1A]/20 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <Database className="w-4 h-4 text-[#FF6B1A]" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Demo Data Controls</h3>
            </div>

            <p className="text-xs text-[#AAB2BD] leading-relaxed">
              When demonstrating this system to a client, you can modify any data freely. Use these controls to reset or backup the state.
            </p>

            <div className="space-y-3 pt-2">
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={handleResetAllData}
                className="w-full text-xs font-bold border-red-500/30 text-red-400 hover:bg-red-500/10 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Reset All Demo Data
              </Button>

              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={handleExportData}
                className="w-full text-xs font-bold border-white/10 text-white hover:border-[#FF6B1A] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Export JSON Backup
              </Button>
            </div>

            <div className="p-3 rounded-xl bg-[#101C2C] border border-white/5 text-[11px] text-[#AAB2BD] space-y-1">
              <span className="font-bold text-white block">100% Client Manageable</span>
              <span>All changes persist in browser storage and reflect across all pages in real time.</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
