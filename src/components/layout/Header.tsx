"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Network, Menu, X, ChevronDown, Layers, Compass, BookOpen, BarChart3, History, Users, ArrowUpRight } from "lucide-react";
import GlobalSearch from "../portal/GlobalSearch";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const primaryNav = [
    { label: "Overview", href: "/", active: pathname === "/" },
    { label: "Service Landscape", href: "/service-landscape/value-chain", active: pathname.startsWith("/service-landscape") || pathname.startsWith("/service-domains") },
    { label: "Scenarios", href: "/business-scenarios", active: pathname.startsWith("/business-scenarios") },
  ];

  const secondaryNav = [
    { label: "Metamodel Overview", href: "/metamodel", icon: BookOpen },
    { label: "Metodología", href: "/methodology", icon: Network },
    { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { label: "Releases", href: "/releases", icon: History },
    { label: "Contribuir", href: "/contribute", icon: Users },
  ];

  return (
    <header className="no-print bg-slate-900 text-white border-b border-slate-800 shadow-md relative z-40">
      <div className="max-w-[1920px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand Logo and Title */}
        <div className="flex items-center gap-3 min-w-0">
          <Link 
            href="/"
            className="flex items-center gap-2 text-white hover:text-slate-200 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-raia-blue-inst flex items-center justify-center border border-slate-700 shadow-inner">
              <Network size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-sm tracking-tight">RAIA</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  0.1.0
                </span>
              </div>
              <span className="text-[9px] text-slate-400 truncate hidden sm:inline max-w-[200px]">
                Red de Arquitectura de Industria
              </span>
            </div>
          </Link>
          
          <div className="hidden lg:inline-flex items-center px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-900/60 text-[9px] font-bold uppercase tracking-wider">
            Referencia
          </div>
        </div>

        {/* Global Search Component */}
        <div className="flex-1 max-w-xs hidden md:block">
          <React.Suspense fallback={<div className="h-8 bg-slate-800 animate-pulse rounded border border-slate-700 w-full" />}>
            <GlobalSearch />
          </React.Suspense>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                item.active
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown for Secondary Navigation */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 ${
                dropdownOpen ? "bg-slate-800 text-white" : ""
              }`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Más
              <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-52 bg-slate-950 border border-slate-800 rounded-xl shadow-xl py-1.5 text-left z-50">
                {secondaryNav.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2.5 px-4 py-2 text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white border-l-2 border-raia-blue-inst"
                          : "text-slate-400 hover:text-white hover:bg-slate-900"
                      }`}
                    >
                      <Icon size={14} className="opacity-80" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Actions: Menu and Search */}
        <div className="flex items-center gap-2 md:hidden">
          <React.Suspense fallback={<div className="w-8 h-8 bg-slate-800 animate-pulse rounded" />}>
            <GlobalSearch />
          </React.Suspense>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 space-y-4 shadow-xl">
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block px-2.5">
              Navegación
            </span>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  item.active ? "bg-slate-900 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {item.label}
                {item.active && <div className="w-1.5 h-1.5 rounded-full bg-raia-blue-inst" />}
              </Link>
            ))}
          </div>

          <div className="space-y-1.5 pt-3 border-t border-slate-900">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block px-2.5">
              Módulos de Arquitectura
            </span>
            {secondaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  <Icon size={14} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
