'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { Save, Shield, Bell, Lock } from 'lucide-react';

export default function AdminSettingsPage() {
  const { showToast } = useToast();

  const [settings, setSettings] = useState({
    academyName: 'KABADDI ACADEMY',
    tagline: 'TRAIN HARD. PLAY SMART. WIN TOGETHER.',
    regNumber: 'MAH/SPORTS/KBD/2020/094',
    gstin: '27AABCK1234F1Z8',
    emailAlerts: true,
    smsAlerts: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('System configuration saved!', 'success');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Academy System Settings
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Configure general organization credentials, tax identities, and alert notifications.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Shield className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Academy Registration</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Organization Name"
              value={settings.academyName}
              onChange={(e) => setSettings({ ...settings, academyName: e.target.value })}
            />
            <Input
              label="Tagline"
              value={settings.tagline}
              onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="State Sports Reg #"
              value={settings.regNumber}
              onChange={(e) => setSettings({ ...settings, regNumber: e.target.value })}
            />
            <Input
              label="GSTIN / Tax ID"
              value={settings.gstin}
              onChange={(e) => setSettings({ ...settings, gstin: e.target.value })}
            />
          </div>
        </Card>

        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Bell className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Automated Notifications</h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={(e) => setSettings({ ...settings, emailAlerts: e.target.checked })}
                className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20 focus:ring-[#FF6B1A]"
              />
              <span className="text-white font-medium">Send automatic fee receipt email to parents</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.smsAlerts}
                onChange={(e) => setSettings({ ...settings, smsAlerts: e.target.checked })}
                className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20 focus:ring-[#FF6B1A]"
              />
              <span className="text-white font-medium">Send SMS alert when player is marked absent</span>
            </label>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" glow className="px-8">
            <Save className="w-4 h-4 mr-2" /> Save Configuration
          </Button>
        </div>
      </form>
    </div>
  );
}
