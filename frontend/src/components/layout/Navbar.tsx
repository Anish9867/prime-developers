'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-amber-500/30 backdrop-blur-xl bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 flex items-center justify-center text-zinc-950 font-serif font-bold text-xl shadow-lg">
            P
          </div>
          <div>
            <span className="font-serif font-extrabold text-xl tracking-wider text-amber-400">PRIME</span>
            <span className="text-xs uppercase tracking-widest block text-slate-400 -mt-1 font-semibold">DEVELOPERS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="/projects" className="hover:text-amber-400 transition">Projects</Link>
          <Link href="/plots" className="hover:text-amber-400 transition flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            2D Master Plan
          </Link>
          <Link href="/properties" className="hover:text-amber-400 transition">Properties</Link>
          <Link href="/about" className="hover:text-amber-400 transition">About</Link>
          <Link href="/blogs" className="hover:text-amber-400 transition">Insights</Link>
          <Link href="/contact" className="hover:text-amber-400 transition">Contact</Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 glass-panel rounded-full text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/30 transition"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <a
            href="tel:+919999999999"
            className="p-2.5 glass-panel rounded-full text-amber-400 hover:bg-amber-500/10 border border-amber-500/30 transition"
            title="Call Prime Concierge"
          >
            <Phone className="w-4 h-4" />
          </a>

          <div className="h-6 w-[1px] bg-zinc-800" />

          <Link
            href="/login"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-zinc-950 font-bold text-sm hover:brightness-110 shadow-lg transition"
          >
            Portal Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-amber-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-amber-500/20 px-6 py-6 space-y-4 bg-zinc-950">
          <Link href="/projects" className="block text-slate-200 font-medium hover:text-amber-400">Projects</Link>
          <Link href="/plots" className="block text-slate-200 font-medium hover:text-amber-400">2D Master Plan</Link>
          <Link href="/properties" className="block text-slate-200 font-medium hover:text-amber-400">Properties</Link>
          <Link href="/about" className="block text-slate-200 font-medium hover:text-amber-400">About Us</Link>
          <Link href="/blogs" className="block text-slate-200 font-medium hover:text-amber-400">Blogs</Link>
          <Link href="/contact" className="block text-slate-200 font-medium hover:text-amber-400">Contact</Link>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <Link
              href="/login"
              className="w-full text-center py-2.5 bg-amber-500 text-zinc-950 font-bold rounded-lg"
            >
              Sign In to Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
