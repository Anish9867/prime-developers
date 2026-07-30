import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Prime Developers | Ultra-Luxury Real Estate & PropTech SaaS Platform',
  description: 'Enterprise PropTech SaaS Platform featuring ultra-luxury residential developments, Grade-A commercial office spaces, and interactive 2D master plan booking systems.',
  keywords: ['Prime Developers', 'Luxury Real Estate', 'PropTech SaaS', 'Gurugram Luxury Villas', 'Commercial Property'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian-900 text-slate-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
