'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Heritage & Vision</span>
        <h1 className="text-4xl font-serif font-bold text-white mt-2">About Prime Developers</h1>
      </div>
      <div className="glass-panel p-8 rounded-2xl border border-amber-500/20 text-slate-300 leading-relaxed space-y-4">
        <p>Prime Developers is a premier international real estate development and PropTech SaaS enterprise.</p>
        <p>With over ₹14,500 Cr in delivered developments, we specialize in high-yield plotted developments, smart city townships, and eco-luxury architecture.</p>
      </div>
    </div>
  );
}
