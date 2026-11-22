'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { ArrowRight, UserPlus } from 'lucide-react';

export default function PlayerDemoRegisterPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: 'Raider',
    password: '',
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please fill all fields', 'error');
      return;
    }
    showToast('Demo registration successful! Welcome to the academy.', 'success');
    router.push('/player');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-6">
      <div className="text-center space-y-2 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center mx-auto shadow-glowSm">
          <UserPlus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-black text-white font-display">Athlete Registration</h2>
        <p className="text-xs text-[#AAB2BD]">Create your player portal credentials</p>
      </div>

      <Card className="p-6 bg-[#171F2B] border-white/5 space-y-5">
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="Athlete Full Name *"
            placeholder="e.g. Rahul Deshmukh"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            label="Phone Number *"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="player@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Select
            label="Playing Position"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          >
            <option value="Raider" className="bg-[#101C2C]">Raider</option>
            <option value="Corner Defender" className="bg-[#101C2C]">Corner Defender</option>
            <option value="Cover Defender" className="bg-[#101C2C]">Cover Defender</option>
            <option value="All Rounder" className="bg-[#101C2C]">All Rounder</option>
          </Select>

          <Input
            label="Set Password *"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <Button type="submit" size="lg" glow className="w-full">
            Register Account <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </form>

        <div className="pt-2 text-center text-xs text-[#AAB2BD]">
          <span>Already registered? </span>
          <Link href="/player/login" className="text-[#FF6B1A] font-bold hover:underline">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
}
