'use client';

import React from 'react';
import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export default function AgentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex justify-between items-center border-b border-gold-500/20 pb-6">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Agent Partner Network</span>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mt-1">Agent Command Center</h1>
        </div>
        <div className="px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400 text-xs font-bold">
          Tier 1 Platinum Partner
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Total Assigned Leads</div>
          <div className="text-3xl font-serif font-bold text-slate-100 mt-2">28</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Confirmed Bookings</div>
          <div className="text-3xl font-serif font-bold text-gold-400 mt-2">8</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Commission Earned</div>
          <div className="text-3xl font-serif font-bold text-emerald-400 mt-2">₹42.50 Lakhs</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Pending Payouts</div>
          <div className="text-3xl font-serif font-bold text-amber-400 mt-2">₹8.00 Lakhs</div>
        </div>
      </div>

      {/* CRM Assigned Leads */}
      <div className="glass-panel rounded-2xl p-6 border border-gold-500/20">
        <h3 className="text-xl font-serif font-bold text-slate-100 mb-4">Assigned Active Leads</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-obsidian-800 text-gold-400 text-xs uppercase">
              <tr>
                <th className="p-3">Client Name</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Interested Project</th>
                <th className="p-3">Budget</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-3 font-semibold">Vikram Malhotra</td>
                <td className="p-3">+91 98765 43210</td>
                <td className="p-3">Prime Palais Royale</td>
                <td className="p-3">₹12.0 Cr</td>
                <td className="p-3"><span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">Qualified</span></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Rohan Sharma</td>
                <td className="p-3">+91 98111 22334</td>
                <td className="p-3">Prime Soho Towers</td>
                <td className="p-3">₹4.5 Cr</td>
                <td className="p-3"><span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">Site Visit Scheduled</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
