'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div>
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Global Headquarters</span>
        <h1 className="text-4xl font-serif font-bold text-white mt-2">Contact Prime Concierge</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-2">
          <MapPin className="w-6 h-6 text-amber-400" />
          <h4 className="font-bold text-white">Headquarters</h4>
          <p className="text-sm text-slate-300">Level 42, Prime House, Golf Course Ext Road, Gurugram, India</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-2">
          <Phone className="w-6 h-6 text-amber-400" />
          <h4 className="font-bold text-white">Direct Line</h4>
          <p className="text-sm text-slate-300">+91 1800 200 9000</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-2">
          <Mail className="w-6 h-6 text-amber-400" />
          <h4 className="font-bold text-white">Email Advisory</h4>
          <p className="text-sm text-slate-300">concierge@primedevelopers.com</p>
        </div>
      </div>
    </div>
  );
}
