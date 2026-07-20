"use client";

import React from "react";
import { Search } from "lucide-react";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";

export default function GlobalSearchTrigger() {
  const setSearchOpen = useLandscapeStore((state) => state.setSearchOpen);

  return (
    <button
      onClick={() => setSearchOpen(true)}
      className="w-full flex items-center justify-between gap-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-slate-700 shadow-sm text-left group"
      aria-label="Buscar en el portal (Presione Control + K)"
    >
      <div className="flex items-center gap-2">
        <Search size={14} className="text-slate-400 group-hover:text-white transition-colors" />
        <span className="text-xs font-semibold">Buscar en RAIA...</span>
      </div>
      <kbd className="hidden sm:inline-flex items-center gap-0.5 bg-slate-900 px-1.5 py-0.5 rounded text-[8px] font-extrabold text-slate-400 border border-slate-800">
        <span>Ctrl</span><span>K</span>
      </kbd>
    </button>
  );
}
