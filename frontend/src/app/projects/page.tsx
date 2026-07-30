'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Prime Palais Royale',
      city: 'Gurugram',
      price: '₹8.5 Cr - ₹25 Cr',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      tag: 'Ultra-Luxury Villas',
      desc: 'Exclusive golf & lake residences featuring private elevators and Olympic pools.'
    },
    {
      title: 'Prime Soho Towers',
      city: 'Hyderabad',
      price: '₹2.5 Cr - ₹12 Cr',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      tag: 'Commercial Office Space',
      desc: 'Grade-A commercial workspace with LEED Platinum certification and sky lounge.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div>
        <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Architectural Icons</span>
        <h1 className="text-4xl font-serif font-bold text-white mt-2">Prime Development Portfolio</h1>
        <p className="text-slate-400 mt-2">Explore our collection of ultra-luxury residential communities and Grade-A commercial towers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel rounded-2xl overflow-hidden border border-amber-500/20 group hover:border-amber-500/40 transition">
            <div className="relative h-72 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-amber-500/30">
                {project.tag}
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{project.city}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Price</div>
                  <div className="text-lg font-bold text-amber-400">{project.price}</div>
                </div>
              </div>
              <p className="text-sm text-slate-300">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
