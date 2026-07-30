'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CUSTOMER');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Set mock authentication token cookie for local session routing
    document.cookie = `accessToken=mock_jwt_token_${Date.now()}; path=/; max-age=86400`;

    if (role === 'ADMIN') {
      router.push('/admin/dashboard');
    } else if (role === 'AGENT') {
      router.push('/agent/dashboard');
    } else {
      router.push('/portal/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="glass-panel p-8 rounded-3xl border border-gold-500/30 max-w-md w-full shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gold-500 rounded-xl mx-auto flex items-center justify-center font-serif font-bold text-obsidian-900 text-2xl mb-3">
            P
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-100">Enterprise Portal Login</h2>
          <p className="text-sm text-slate-400 mt-1">Select portal role to access your dedicated dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Target Portal Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 bg-obsidian-800 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-gold-400"
            >
              <option value="CUSTOMER">Customer Portal (/portal)</option>
              <option value="AGENT">Agent Partner Portal (/agent)</option>
              <option value="ADMIN">Super Admin Dashboard (/admin)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@primedevelopers.com"
              className="w-full px-4 py-3 bg-obsidian-800 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-obsidian-800 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-gold-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-obsidian-900 font-bold rounded-xl hover:brightness-110 shadow-lg transition"
          >
            Authenticate Session
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          Don't have an enterprise account?{' '}
          <Link href="/register" className="text-gold-400 font-semibold hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
