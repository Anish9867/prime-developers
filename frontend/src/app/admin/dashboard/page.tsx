'use client';

import React from 'react';
import { Building, DollarSign, Users, ShieldAlert, BarChart3, Settings } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex justify-between items-center border-b border-gold-500/20 pb-6">
        <div>
          <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">Enterprise Administration</span>
          <h1 className="text-3xl font-serif font-bold text-slate-100 mt-1">Super Admin Control Hub</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gold-500 text-obsidian-900 font-bold text-xs rounded-xl hover:bg-gold-400">
            + Add New Project
          </button>
        </div>
      </div>

      {/* Overview Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Gross Sales Revenue</div>
          <div className="text-3xl font-serif font-bold text-gold-400 mt-2">₹145.8 Cr</div>
          <div className="text-xs text-emerald-400 mt-1">+18.4% this quarter</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Active Projects</div>
          <div className="text-3xl font-serif font-bold text-slate-100 mt-2">12</div>
          <div className="text-xs text-slate-500 mt-1">Gurugram, Hyderabad, Mumbai</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Total Leads Captured</div>
          <div className="text-3xl font-serif font-bold text-slate-100 mt-2">1,482</div>
          <div className="text-xs text-slate-500 mt-1">Conversion rate: 14.2%</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-gold-500/20">
          <div className="text-xs text-slate-400 font-semibold uppercase">Plotted Inventory</div>
          <div className="text-3xl font-serif font-bold text-slate-100 mt-2">340 Units</div>
          <div className="text-xs text-emerald-400 mt-1">68% Booked</div>
        </div>
      </div>

      {/* Admin Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Project Management', desc: 'Create and configure mega projects, phases, and amenities.', link: '/admin/projects' },
          { title: '2D Plot Grid Editor', desc: 'Configure 2D SVG plot dimensions, prices, and live statuses.', link: '/admin/plots' },
          { title: 'CRM & Lead Engine', desc: 'Assign leads to sales employees and channel partners.', link: '/admin/crm' },
          { title: 'Booking & Installments', desc: 'Manage token payments, agreement contracts, and receipts.', link: '/admin/bookings' },
          { title: 'Roles & Audit Logs', desc: 'Configure enterprise RBAC permissions and audit activity logs.', link: '/admin/audit-logs' },
          { title: 'Platform Settings', desc: 'Configure SMTP, Cloudinary, Razorpay, and OpenAI keys.', link: '/admin/settings' },
        ].map((module, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-gold-500/20 hover:border-gold-500/40 transition">
            <h4 className="text-lg font-serif font-bold text-gold-400 mb-2">{module.title}</h4>
            <p className="text-sm text-slate-400 mb-4">{module.desc}</p>
            <a href={module.link} className="text-xs font-bold text-slate-200 hover:text-gold-400 transition">
              Open Control Panel →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
