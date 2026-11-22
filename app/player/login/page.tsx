'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import { ArrowRight, Lock, User, Shield } from 'lucide-react';

export default function PlayerLoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState('player@kabaddiacademy.in');
  const [password, setPassword] = useState('demo1234');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Demo login successful! Welcome back.', 'success');
    router.push('/player');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center py-6">
      <div className="text-center space-y-2 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF6B1A] to-[#FF8A25] flex items-center justify-center mx-auto shadow-glowSm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-black text-white font-display">Player Login</h2>
        <p className="text-xs text-[#AAB2BD]">Enter your athlete credentials to access portal</p>
      </div>

      <Card className="p-6 bg-[#171F2B] border-white/5 space-y-5">
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Athlete Email / Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex items-center justify-between text-xs text-[#AAB2BD]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-[#FF6B1A]" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-[#FF6B1A]">Forgot password?</a>
          </div>

          <Button type="submit" size="lg" glow className="w-full">
            Log In <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </form>

        <div className="pt-2 text-center text-xs text-[#AAB2BD]">
          <span>Don&apos;t have an athlete account? </span>
          <Link href="/player/register" className="text-[#FF6B1A] font-bold hover:underline">
            Register Here
          </Link>
        </div>
      </Card>
    </div>
  );
}
