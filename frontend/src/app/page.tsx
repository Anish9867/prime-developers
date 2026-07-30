'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Building, ShieldCheck, ArrowRight, Phone, Sparkles, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { MasterPlan2D } from '@/components/master-plan/MasterPlan2D';

export default function HomePage() {
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', project: 'Palais Royale' });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-20 bg-zinc-950 text-slate-100">
      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="Prime Luxury Estate"
            fill
            className="object-cover object-center filter brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Enterprise PropTech SaaS Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight drop-shadow-md"
          >
            Elevating the Art of <span className="gold-gradient-text">Luxury Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light drop-shadow"
          >
            Discover iconic residential estates, Grade-A commercial towers, and interactive 2D master-planned developments.
          </motion.p>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 max-w-4xl mx-auto glass-panel p-4 sm:p-5 rounded-2xl border border-amber-500/30 shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="text-left bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                <label className="text-xs text-amber-400 font-semibold block mb-1 uppercase tracking-wider">City / Location</label>
                <select className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer">
                  <option className="bg-zinc-900 text-white">Gurugram</option>
                  <option className="bg-zinc-900 text-white">Hyderabad</option>
                  <option className="bg-zinc-900 text-white">Mumbai</option>
                  <option className="bg-zinc-900 text-white">Bengaluru</option>
                </select>
              </div>

              <div className="text-left bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                <label className="text-xs text-amber-400 font-semibold block mb-1 uppercase tracking-wider">Property Type</label>
                <select className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer">
                  <option className="bg-zinc-900 text-white">Luxury Villa</option>
                  <option className="bg-zinc-900 text-white">Penthouse</option>
                  <option className="bg-zinc-900 text-white">2D Plot Layout</option>
                  <option className="bg-zinc-900 text-white">Commercial Office</option>
                </select>
              </div>

              <div className="text-left bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                <label className="text-xs text-amber-400 font-semibold block mb-1 uppercase tracking-wider">Budget Range</label>
                <select className="w-full bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer">
                  <option className="bg-zinc-900 text-white">₹3 Cr - ₹10 Cr</option>
                  <option className="bg-zinc-900 text-white">₹10 Cr - ₹25 Cr</option>
                  <option className="bg-zinc-900 text-white">₹25 Cr+</option>
                </select>
              </div>

              <Link
                href="/projects"
                className="w-full h-full min-h-[50px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-zinc-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 shadow-lg transition"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </Link>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. ANIMATED STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: '₹14,500 Cr+', label: 'Portfolio Delivered', icon: TrendingUp },
            { stat: '45+', label: 'Landmark Projects', icon: Building },
            { stat: '12,000+', label: 'HNW Homeowners', icon: Users },
            { stat: '100%', label: 'RERA Compliant', icon: ShieldCheck },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-amber-500/20 text-center space-y-2 hover:border-amber-500/40 transition"
            >
              <item.icon className="w-7 h-7 mx-auto text-amber-400" />
              <div className="text-3xl font-serif font-extrabold text-white">{item.stat}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED LUXURY PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Flagship Portfolio</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">Curated Luxury Estates</h2>
          </div>
          <Link href="/projects" className="mt-4 md:mt-0 text-amber-400 font-semibold text-sm flex items-center gap-2 hover:underline">
            View Complete Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: 'Prime Palais Royale',
              city: 'Gurugram',
              price: '₹8.5 Cr - ₹25 Cr',
              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
              slug: 'prime-palais-royale',
              tag: 'Ultra-Luxury Villas'
            },
            {
              title: 'Prime Soho Towers',
              city: 'Hyderabad',
              price: '₹2.5 Cr - ₹12 Cr',
              image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
              slug: 'prime-soho-towers',
              tag: 'Commercial Office Space'
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl overflow-hidden border border-amber-500/20 group hover:border-amber-500/40 transition duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-amber-500/30">
                  {project.tag}
                </div>
              </div>
              <div className="p-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-400 transition">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{project.city}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Starting from</div>
                  <div className="text-lg font-bold text-amber-400">{project.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE 2D SVG MASTER PLAN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MasterPlan2D />
      </section>

      {/* 5. LEAD CAPTURE VIP CONCIERGE FORM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Private Advisory</span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">Request Exclusive Site Inspection</h2>
            <p className="text-sm text-slate-300 mt-2">
              Connect directly with our senior developer concierge for personalized unit availability and private walkthroughs.
            </p>

            {leadSubmitted ? (
              <div className="mt-6 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span>Thank you! Your VIP private consultation request has been logged. Our senior advisor will call you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (+91)"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-zinc-950 font-bold rounded-xl hover:brightness-110 transition shadow-xl"
                >
                  Schedule Private Inspection
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
