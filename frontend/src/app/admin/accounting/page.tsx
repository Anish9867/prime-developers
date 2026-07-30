'use client';

import React from 'react';
import { DollarSign, FileText, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function AccountingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex justify-between items-center border-b border-gold-500/20 pb-6">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Financial ERP & Accounting</span>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mt-1">General Ledger & Revenue Audit</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Total Accounts Receivable (AR)</div>
          <div className="text-3xl font-serif font-bold text-emerald-400 mt-2">₹145.80 Cr</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Total Accounts Payable (AP)</div>
          <div className="text-3xl font-serif font-bold text-rose-400 mt-2">₹42.30 Cr</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 uppercase font-semibold">Net Working Capital</div>
          <div className="text-3xl font-serif font-bold text-gold-400 mt-2">₹103.50 Cr</div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="glass-panel rounded-2xl p-6 border border-gold-500/20">
        <h3 className="text-xl font-serif font-bold text-slate-100 mb-4">Recent Audit Transactions</h3>
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-obsidian-800 text-gold-400 text-xs uppercase">
            <tr>
              <th className="p-3">Txn ID</th>
              <th className="p-3">Type</th>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr>
              <td className="p-3 font-semibold">TXN-880912</td>
              <td className="p-3 text-emerald-400 font-bold">CREDIT</td>
              <td className="p-3">BOOKING_PAYMENT</td>
              <td className="p-3">Token Payment for Palais Royale Villa #12</td>
              <td className="p-3 font-bold text-slate-100">₹1,00,00,000</td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">TXN-880913</td>
              <td className="p-3 text-rose-400 font-bold">DEBIT</td>
              <td className="p-3">VENDOR_PAYOUT</td>
              <td className="p-3">Apex Infra Structural Steel Batch PO-8941</td>
              <td className="p-3 font-bold text-slate-100">₹85,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
