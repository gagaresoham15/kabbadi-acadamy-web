import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'KABADDI ACADEMY | Train Hard. Play Smart. Win Together.',
  description: 'Professional Kabaddi Academy Management System - Comprehensive training programs, expert coaches, tournaments and elite player development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#080D14] text-white min-h-screen selection:bg-[#FF6B1A] selection:text-white">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
