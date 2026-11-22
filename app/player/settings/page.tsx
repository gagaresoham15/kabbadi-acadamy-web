'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { Save, Bell, Shield, LogOut, Smartphone, Lock } from 'lucide-react';

export default function PlayerSettingsPage() {
  const { showToast } = useToast();

  const [settings, setSettings] = useState({
    sessionPush: true,
    matchAlerts: true,
    dietReminders: true,
    smsAlerts: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Player preferences saved successfully!', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in pt-1">
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Portal & Athlete Settings
        </h2>
        <p className="text-xs text-[#AAB2BD]">
          Manage push notifications, athlete alerts and security preferences
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSave} className="space-y-5">
          <Card className="p-5 bg-[#171F2B] border-white/5 space-y-4 shadow-card">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#FF6B1A]" />
              <span>Training Notifications & Reminders</span>
            </h4>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer text-xs p-3 rounded-xl bg-[#101C2C] hover:bg-[#152336] transition-colors border border-white/5">
                <input
                  type="checkbox"
                  checked={settings.sessionPush}
                  onChange={(e) => setSettings({ ...settings, sessionPush: e.target.checked })}
                  className="rounded text-[#FF6B1A] mt-0.5"
                />
                <div>
                  <span className="text-white font-bold block">Mat Practice Reminders</span>
                  <span className="text-[11px] text-[#AAB2BD]">Push alert 1 hour before practice batch starts</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-xs p-3 rounded-xl bg-[#101C2C] hover:bg-[#152336] transition-colors border border-white/5">
                <input
                  type="checkbox"
                  checked={settings.matchAlerts}
                  onChange={(e) => setSettings({ ...settings, matchAlerts: e.target.checked })}
                  className="rounded text-[#FF6B1A] mt-0.5"
                />
                <div>
                  <span className="text-white font-bold block">Tournament Fixtures & Team Lineups</span>
                  <span className="text-[11px] text-[#AAB2BD]">Instant alerts when starting 7 squad is announced</span>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer text-xs p-3 rounded-xl bg-[#101C2C] hover:bg-[#152336] transition-colors border border-white/5">
                <input
                  type="checkbox"
                  checked={settings.dietReminders}
                  onChange={(e) => setSettings({ ...settings, dietReminders: e.target.checked })}
                  className="rounded text-[#FF6B1A] mt-0.5"
                />
                <div>
                  <span className="text-white font-bold block">Hydration & Recovery Alerts</span>
                  <span className="text-[11px] text-[#AAB2BD]">Post-workout protein & hydration schedule</span>
                </div>
              </label>
            </div>

            <Button type="submit" size="md" glow className="w-full shadow-glowSm">
              <Save className="w-4 h-4 mr-2" /> Save Preferences
            </Button>
          </Card>
        </form>

        <div className="space-y-5">
          <Card className="p-5 bg-[#171F2B] border-white/5 space-y-4 shadow-card">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#22C55E]" />
              <span>Security & Passcode</span>
            </h4>

            <p className="text-xs text-[#AAB2BD] leading-relaxed">
              Your athlete biometric ID and portal password are authenticated directly on the academy server.
            </p>

            <Button
              size="sm"
              variant="outline"
              onClick={() => showToast('Passcode reset link sent to registered email!', 'success')}
              className="w-full text-xs"
            >
              Update Passcode
            </Button>
          </Card>

          <Card className="p-5 bg-[#101C2C] border-white/5 space-y-3 shadow-card">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Portals Access
            </h4>
            <div className="flex gap-2">
              <Link href="/admin" className="flex-1">
                <Button size="sm" variant="outline" className="w-full text-xs">
                  Admin Dashboard
                </Button>
              </Link>
              <Link href="/coach" className="flex-1">
                <Button size="sm" variant="outline" className="w-full text-xs">
                  Coach Panel
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
