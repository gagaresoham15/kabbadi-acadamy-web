import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
  title: 'GARUDA KABADDI ACADEMY | Dominate the Mat. Unleash the Warrior.',
  description: 'India premier high-performance Kabaddi & Sports Science Academy. Olympic synthetic mats, NIS certified master coaches, and biomechanics video analysis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080D14] text-white min-h-screen selection:bg-[#FF6B1A] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
