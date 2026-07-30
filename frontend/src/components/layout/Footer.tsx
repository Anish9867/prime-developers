import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Building, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-obsidian-900 border-t border-gold-500/20 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center text-obsidian-900 font-serif font-bold text-lg">
                P
              </div>
              <span className="font-serif font-bold text-xl text-gold-400">PRIME DEVELOPERS</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the evolution of ultra-luxury real estate developments, landmark commercial office towers, and sustainable master-planned communities.
            </p>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>RERA Registered Developer (Reg: RERA-GRG-2026-904)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-slate-100 text-base mb-4 border-b border-gold-500/20 pb-2">Portfolio</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/projects" className="hover:text-gold-400 transition">Palais Royale Villas</Link></li>
              <li><Link href="/projects" className="hover:text-gold-400 transition">Soho Tech Towers</Link></li>
              <li><Link href="/plots" className="hover:text-gold-400 transition">2D Plotted Developments</Link></li>
              <li><Link href="/commercial" className="hover:text-gold-400 transition">Grade-A Commercial</Link></li>
            </ul>
          </div>

          {/* Corporate Portals */}
          <div>
            <h4 className="font-serif font-bold text-slate-100 text-base mb-4 border-b border-gold-500/20 pb-2">Enterprise Portals</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/portal/dashboard" className="hover:text-gold-400 transition">Customer Portal</Link></li>
              <li><Link href="/agent/login" className="hover:text-gold-400 transition">Agent Network Portal</Link></li>
              <li><Link href="/admin/login" className="hover:text-gold-400 transition">Admin Dashboard</Link></li>
              <li><Link href="/career" className="hover:text-gold-400 transition">Careers & Talent</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-slate-100 text-base mb-4 border-b border-gold-500/20 pb-2">Headquarters</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>Prime House, Level 42, Golf Course Extension, Gurugram, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 1800 200 9000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>concierge@primedevelopers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Prime Developers Enterprise Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-slate-400">RERA Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
