"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Network, RotateCcw, BookOpen, Layers } from "lucide-react";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";
import GlobalSearch from "../search/GlobalSearch";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const resetAll = useLandscapeStore((state) => state.resetAll);

  const handleReset = () => {
    resetAll();
    router.push("/service-landscape/value-chain");
  };

  return (
    <header className="no-print bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-[1920px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand Logo and Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Link 
            href="/service-landscape/value-chain"
            className="flex items-center gap-2 text-white hover:text-slate-200 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-raia-blue-inst flex items-center justify-center border border-slate-700 shadow-inner">
              <Network size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-sm tracking-tight">RAIA</span>
                <span className="text-[10px] font-bold px-1 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  V14.0
                </span>
              </div>
              <span className="text-[10px] text-slate-400 truncate hidden sm:inline max-w-[250px] md:max-w-[400px]">
                Red de Arquitectura de Industria Afores
              </span>
            </div>
          </Link>
          
          <div className="hidden lg:inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-semibold bg-blue-950 text-blue-300 border border-blue-900 uppercase">
            Arquitectura de referencia de industria
          </div>
        </div>

        {/* Global Search Component */}
        <div className="flex-1 max-w-md hidden md:block">
          <React.Suspense fallback={<div className="h-8 bg-slate-800 animate-pulse rounded border border-slate-700 w-full" />}>
            <GlobalSearch />
          </React.Suspense>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <Link
            href="/service-landscape/value-chain"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              pathname === "/service-landscape/value-chain"
                ? "bg-slate-800 text-white"
                : "text-slate-300 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Layers size={14} />
            <span className="hidden sm:inline">Mapa de Valor</span>
          </Link>

          <Link
            href="/methodology"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              pathname === "/methodology"
                ? "bg-slate-800 text-white"
                : "text-slate-300 hover:text-white hover:bg-slate-800"
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Metodología</span>
          </Link>

          <button
            onClick={handleReset}
            title="Restablecer filtros y vistas"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 hover:border-slate-600 bg-slate-900"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Restablecer</span>
          </button>
        </div>
      </div>
    </header>
  );
}
