'use client';

import React from 'react';
import { MasterPlan2D } from '@/components/master-plan/MasterPlan2D';

export default function PlotsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold">2D Interactive Master Plan</span>
        <h1 className="text-4xl font-serif font-bold text-slate-100 mt-2">Prime Plotted Developments</h1>
        <p className="text-slate-400 mt-2">Filter, inspect, and lock your preferred plot location on our live 2D grid canvas.</p>
      </div>

      <MasterPlan2D />
    </div>
  );
}
