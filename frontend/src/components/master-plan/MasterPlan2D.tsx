'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, Filter, Search, CheckCircle, Clock, ShieldAlert } from 'lucide-react';
import { PlotStatus } from '@/shared/enums';

export interface PlotItem {
  id: string;
  plotNumber: string;
  sector: string;
  areaSqFt: number;
  facing: string;
  price: number;
  status: PlotStatus;
  x: number;
  y: number;
  width: number;
  height: number;
}

const mockPlots: PlotItem[] = Array.from({ length: 24 }).map((_, i) => {
  const statuses = [PlotStatus.AVAILABLE, PlotStatus.RESERVED, PlotStatus.BOOKED, PlotStatus.SOLD, PlotStatus.AVAILABLE];
  return {
    id: `plot-${i + 1}`,
    plotNumber: `PL-${101 + i}`,
    sector: i < 12 ? 'Sector A - East Meadow' : 'Sector B - West Boulevard',
    areaSqFt: 2800 + (i % 5) * 400,
    facing: i % 2 === 0 ? 'North-East' : 'East',
    price: 35000000 + (i % 6) * 5000000,
    status: statuses[i % statuses.length],
    x: (i % 6) * 115 + 30,
    y: Math.floor(i / 6) * 85 + 40,
    width: 95,
    height: 65,
  };
});

export const MasterPlan2D = () => {
  const [plots, setPlots] = useState<PlotItem[]>(mockPlots);
  const [selectedPlot, setSelectedPlot] = useState<PlotItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const filteredPlots = plots.filter((plot) => {
    const matchesStatus = statusFilter === 'ALL' || plot.status === statusFilter;
    const matchesSearch = plot.plotNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: PlotStatus) => {
    switch (status) {
      case PlotStatus.AVAILABLE:
        return { fill: '#10B981', stroke: '#059669', label: 'Available', bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
      case PlotStatus.RESERVED:
        return { fill: '#F59E0B', stroke: '#D97706', label: 'Reserved', bg: 'bg-amber-500/20 text-amber-400 border-amber-500/30' };
      case PlotStatus.BOOKED:
        return { fill: '#EF4444', stroke: '#DC2626', label: 'Booked', bg: 'bg-rose-500/20 text-rose-400 border-rose-500/30' };
      case PlotStatus.SOLD:
        return { fill: '#64748B', stroke: '#475569', label: 'Sold Out', bg: 'bg-slate-500/20 text-slate-400 border-slate-500/30' };
      default:
        return { fill: '#D4AF37', stroke: '#AA7C11', label: 'Blocked', bg: 'bg-gold-500/20 text-gold-400 border-gold-500/30' };
    }
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 border border-gold-500/20 shadow-2xl">
      {/* Interactive Controls Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-gold-400">Interactive 2D Master Layout</h3>
          <p className="text-sm text-slate-400">Select any plot on the master plan to inspect pricing, dimensions, and availability.</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search Plot No..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 bg-obsidian-800 border border-gold-500/30 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-gold-400"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-obsidian-800 border border-gold-500/30 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-gold-400"
          >
            <option value="ALL">All Statuses</option>
            <option value={PlotStatus.AVAILABLE}>Available Only</option>
            <option value={PlotStatus.RESERVED}>Reserved</option>
            <option value={PlotStatus.BOOKED}>Booked</option>
            <option value={PlotStatus.SOLD}>Sold Out</option>
          </select>

          <div className="flex items-center gap-1 bg-obsidian-800 p-1 border border-gold-500/30 rounded-lg">
            <button onClick={handleZoomIn} className="p-1.5 hover:bg-gold-500/20 text-gold-400 rounded" title="Zoom In">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button onClick={handleZoomOut} className="p-1.5 hover:bg-gold-500/20 text-gold-400 rounded" title="Zoom Out">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={handleResetZoom} className="p-1.5 hover:bg-gold-500/20 text-gold-400 rounded" title="Reset Zoom">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full h-[520px] bg-obsidian-900/90 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
        <div
          className="transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg width="780" height="420" viewBox="0 0 780 420" className="drop-shadow-lg">
            {/* Background Grid Lines & Roads */}
            <rect width="780" height="420" fill="#0D0D10" rx="8" />
            <rect x="0" y="195" width="780" height="30" fill="#1E1E24" />
            <text x="390" y="215" fill="#475569" fontSize="12" textAnchor="middle" letterSpacing="4">
              MAIN BOULEVARD AVENUE (60 FT ROAD)
            </text>

            {/* Plot Nodes */}
            {filteredPlots.map((plot) => {
              const statusStyle = getStatusColor(plot.status);
              const isSelected = selectedPlot?.id === plot.id;

              return (
                <g
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                >
                  <rect
                    x={plot.x}
                    y={plot.y}
                    width={plot.width}
                    height={plot.height}
                    fill={statusStyle.fill}
                    fillOpacity={isSelected ? 0.9 : 0.35}
                    stroke={isSelected ? '#F3E5AB' : statusStyle.stroke}
                    strokeWidth={isSelected ? 3 : 1.5}
                    rx={6}
                  />
                  <text
                    x={plot.x + plot.width / 2}
                    y={plot.y + plot.height / 2 - 4}
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {plot.plotNumber}
                  </text>
                  <text
                    x={plot.x + plot.width / 2}
                    y={plot.y + plot.height / 2 + 12}
                    fill="#CBD5E1"
                    fontSize="9"
                    textAnchor="middle"
                  >
                    {plot.areaSqFt} sq.ft
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Plot Detail Overlay Tooltip */}
        {selectedPlot && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4 glass-panel p-5 rounded-xl border border-gold-500/40 w-80 shadow-2xl z-20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold text-gold-400">{selectedPlot.plotNumber}</span>
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusColor(selectedPlot.status).bg}`}>
                {getStatusColor(selectedPlot.status).label}
              </span>
            </div>

            <div className="space-y-2 text-sm text-slate-300 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Sector:</span>
                <span className="font-medium text-slate-200">{selectedPlot.sector}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Plot Area:</span>
                <span className="font-medium text-slate-200">{selectedPlot.areaSqFt} sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Facing:</span>
                <span className="font-medium text-slate-200">{selectedPlot.facing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Price:</span>
                <span className="font-bold text-gold-400">₹{(selectedPlot.price / 100000).toFixed(2)} Lakhs</span>
              </div>
            </div>

            {selectedPlot.status === PlotStatus.AVAILABLE && (
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-obsidian-900 font-bold rounded-lg hover:brightness-110 transition shadow-lg"
              >
                Instant Token Booking
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedPlot && (
        <div className="fixed inset-0 bg-obsidian-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel p-6 rounded-2xl border border-gold-500/40 max-w-md w-full"
          >
            <h3 className="text-xl font-serif font-bold text-gold-400 mb-2">Reserve {selectedPlot.plotNumber}</h3>
            <p className="text-sm text-slate-300 mb-4">Submit a token payment of ₹100,000 to lock this plot instantly.</p>
            
            <div className="bg-obsidian-800 p-4 rounded-xl border border-slate-800 space-y-2 text-sm text-slate-300 mb-6">
              <div className="flex justify-between">
                <span>Plot Area:</span>
                <span className="font-bold">{selectedPlot.areaSqFt} sq.ft</span>
              </div>
              <div className="flex justify-between">
                <span>Total Cost:</span>
                <span className="font-bold text-gold-400">₹{(selectedPlot.price / 100000).toFixed(2)} Lakhs</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 py-2.5 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Plot ${selectedPlot.plotNumber} successfully reserved! Proceeding to Payment Gateway.`);
                  setShowBookingModal(false);
                }}
                className="flex-1 py-2.5 bg-gold-500 text-obsidian-900 font-bold rounded-lg hover:bg-gold-400"
              >
                Proceed to Pay
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
