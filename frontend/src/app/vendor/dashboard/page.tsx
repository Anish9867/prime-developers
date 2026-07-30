'use client';

import React from 'react';
import { Truck, Package, FileText, CheckCircle2 } from 'lucide-react';

export default function VendorDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex justify-between items-center border-b border-gold-500/20 pb-6">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Vendor & Contractor Portal</span>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mt-1">Apex Infrastructure Supplies</h1>
        </div>
        <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> Approved Grade-A Vendor
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Active Purchase Orders</div>
          <div className="text-3xl font-serif font-bold text-slate-100 mt-2">14</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Material Delivered</div>
          <div className="text-3xl font-serif font-bold text-gold-400 mt-2">4,800 Tons</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Pending Payments</div>
          <div className="text-3xl font-serif font-bold text-emerald-400 mt-2">₹1.85 Cr</div>
        </div>
      </div>

      {/* PO List */}
      <div className="glass-panel rounded-2xl p-6 border border-gold-500/20">
        <h3 className="text-xl font-serif font-bold text-slate-100 mb-4">Current Purchase Orders</h3>
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-obsidian-800 text-gold-400 text-xs uppercase">
            <tr>
              <th className="p-3">PO Number</th>
              <th className="p-3">Material Category</th>
              <th className="p-3">Site Location</th>
              <th className="p-3">Total Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr>
              <td className="p-3 font-semibold">PO-2026-8941</td>
              <td className="p-3">High-Grade TMT Steel Rebars</td>
              <td className="p-3">Prime Palais Royale, Sector 65</td>
              <td className="p-3">₹85,00,000</td>
              <td className="p-3"><span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">In Transit</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
