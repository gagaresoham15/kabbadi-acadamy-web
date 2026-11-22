'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { Save, Bell, Lock } from 'lucide-react';

export default function CoachSettingsPage() {
  const { showToast } = useToast();

  const [settings, setSettings] = useState({
    sessionReminders: true,
    attendanceAlerts: true,
    tournamentNotifications: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Coach preferences saved!', 'success');
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Coach Preferences & Settings
        </h1>
        <p className="text-xs text-[#AAB2BD]">
          Manage court alert notifications and timetable reminders.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="p-6 bg-[#171F2B] border-white/5 space-y-4">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3">
            <Bell className="w-4 h-4 text-[#FF6B1A]" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Alert Preferences</h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.sessionReminders}
                onChange={(e) => setSettings({ ...settings, sessionReminders: e.target.checked })}
                className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20"
              />
              <span className="text-white font-medium">Send reminder 30 minutes before practice batch starts</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.attendanceAlerts}
                onChange={(e) => setSettings({ ...settings, attendanceAlerts: e.target.checked })}
                className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20"
              />
              <span className="text-white font-medium">Daily summary of absent athletes in assigned batches</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.tournamentNotifications}
                onChange={(e) => setSettings({ ...settings, tournamentNotifications: e.target.checked })}
                className="w-4 h-4 rounded text-[#FF6B1A] bg-[#101C2C] border-white/20"
              />
              <span className="text-white font-medium">Notify when new tournament registration closes</span>
            </label>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="md" glow>
            <Save className="w-4 h-4 mr-1.5" /> Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
}
