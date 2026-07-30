'use client';

import React from 'react';

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Market Intelligence</span>
        <h1 className="text-4xl font-serif font-bold text-white mt-2">Prime Real Estate Insights</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-3">
          <span className="text-xs text-amber-400 font-semibold">Market Trends</span>
          <h3 className="text-xl font-serif font-bold text-white">Ultra-Luxury Real Estate Demand Surges in 2026</h3>
          <p className="text-sm text-slate-300">Analysis of HNW investments in plotted developments and private golf estates.</p>
        </div>
      </div>
    </div>
  );
}
