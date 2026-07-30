'use client';

import React from 'react';
import Link from 'next/link';
import { Home, CreditCard, FileText, Bell, CheckCircle2, Clock } from 'lucide-react';

export default function CustomerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold-500/20 pb-6 gap-4">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Customer Portal</span>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mt-1">Welcome back, Alexander</h1>
          <p className="text-sm text-slate-400">Track your property investments, installment schedules, and legal documents.</p>
        </div>
        <div className="px-4 py-2 glass-panel border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Account Verified & Active
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Total Investment</div>
          <div className="text-3xl font-serif font-bold text-gold-400 mt-2">₹12.50 Cr</div>
          <div className="text-xs text-slate-500 mt-1">2 Active Bookings</div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Total Paid</div>
          <div className="text-3xl font-serif font-bold text-emerald-400 mt-2">₹4.20 Cr</div>
          <div className="text-xs text-slate-500 mt-1">Receipts Available for Download</div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Next Milestone Due</div>
          <div className="text-3xl font-serif font-bold text-amber-400 mt-2">₹1.50 Cr</div>
          <div className="text-xs text-amber-500/80 mt-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Due on 15 Aug 2026
          </div>
        </div>
      </div>

      {/* Booked Units List */}
      <div className="glass-panel rounded-2xl p-6 border border-gold-500/20">
        <h3 className="text-xl font-serif font-bold text-slate-100 mb-4">My Booked Estates</h3>
        <div className="divide-y divide-slate-800">
          <div className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="text-lg font-bold text-gold-400">Prime Palais Royale - Villa #12</div>
              <div className="text-sm text-slate-400">Sector 65, Golf Course Extension, Gurugram • 4,500 sq.ft</div>
              <div className="text-xs text-emerald-400 mt-1">Status: Under Construction (Structure 80% Complete)</div>
            </div>
            <button className="px-4 py-2 bg-gold-500 text-obsidian-900 font-bold text-xs rounded-lg hover:bg-gold-400">
              Download All Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
