"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search, CornerDownLeft, Sparkles, X } from "lucide-react";
import Fuse from "fuse.js";
import { useLandscapeStore } from "../../features/service-landscape/store/useLandscapeStore";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../../domain/repositories/landscapeRepository";

interface SearchItem {
  id: string;
  name: string;
  slug: string;
  type: "area" | "domain" | "service-domain";
  parentName?: string;
  description: string;
  details: string;
}

export default function GlobalSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const selectedId = useLandscapeStore((state) => state.selectedId);
  const setSelectedId = useLandscapeStore((state) => state.setSelectedId);
  const searchQuery = useLandscapeStore((state) => state.searchQuery);
  const setSearchQuery = useLandscapeStore((state) => state.setSearchQuery);

  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Compile search database
  const searchDatabase = useRef<SearchItem[]>([]);
  useEffect(() => {
    const db: SearchItem[] = [];
    
    // Add Business Areas
    getBusinessAreas().forEach((ba) => {
      db.push({
        id: ba.id,
        name: ba.nameEs,
        slug: ba.slug,
        type: "area",
        description: ba.description,
        details: `${ba.id} ${ba.purpose} ${ba.tags.join(" ")}`,
      });
    });

    // Add Business Domains
    getBusinessDomains().forEach((bd) => {
      const area = getBusinessAreas().find((a) => a.id === bd.businessAreaId);
      db.push({
        id: bd.id,
        name: bd.nameEs,
        slug: bd.slug,
        type: "domain",
        parentName: area?.nameEs,
        description: bd.description || "",
        details: `${bd.id} ${bd.purpose} ${bd.actors.join(" ")} ${bd.valueStreams.join(" ")} ${bd.tags.join(" ")}`,
      });
    });

    // Add Service Domains
    getServiceDomains().forEach((sd) => {
      const bd = getBusinessDomains().find((d) => d.id === sd.businessDomainId);
      const ops = sd.serviceOperations.map((o) => `${o.name} ${o.description}`).join(" ");
      const evs = sd.businessEvents.map((e) => `${e.name} ${e.description}`).join(" ");
      const objs = sd.businessObjects.map((b) => b.name).join(" ");
      const regs = sd.regulations.map((r) => r.name).join(" ");
      const caps = sd.capabilities.join(" ");
      const aliases = sd.aliases?.join(" ") || "";
      
      db.push({
        id: sd.id,
        name: sd.nameEs,
        slug: sd.slug,
        type: "service-domain",
        parentName: bd?.nameEs,
        description: sd.summary,
        details: `${sd.id} ${sd.definition} ${sd.purpose} ${aliases} ${caps} ${ops} ${evs} ${objs} ${regs} ${sd.tags.join(" ")}`,
      });
    });

    searchDatabase.current = db;
  }, []);

  // Fuse configuration
  const fuse = useRef<Fuse<SearchItem> | null>(null);
  useEffect(() => {
    if (searchDatabase.current.length > 0) {
      fuse.current = new Fuse(searchDatabase.current, {
        keys: ["id", "name", "description", "details"],
        threshold: 0.35,
        location: 0,
        distance: 100,
      });
    }
  }, [searchDatabase.current]);

  // Handle Search Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (!val) {
      setResults([]);
      return;
    }

    if (fuse.current) {
      const searchRes = fuse.current.search(val).slice(0, 10).map((r) => r.item);
      setResults(searchRes);
      setActiveIndex(0);
    }
  };

  // Keyboard Navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle search on Ctrl+K / Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
        setResults([]);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(results.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (results[activeIndex]) {
          handleSelectItem(results[activeIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, activeIndex]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Selection
  const handleSelectItem = (item: SearchItem) => {
    setSelectedId(item.id);
    setIsOpen(false);
    setSearchQuery("");
    setResults([]);
    
    // Update the URL query params
    const params = new URLSearchParams(searchParams.toString());
    params.set("selected", item.id);

    if (pathname.includes("/service-landscape/value-chain")) {
      router.push(`${pathname}?${params.toString()}`);
    } else {
      // Redirect to dashboard with the selection
      router.push(`/service-landscape/value-chain?${params.toString()}`);
    }
  };

  // Type labels and styles
  const typeStyles = {
    area: { label: "Área", bg: "bg-blue-50 text-blue-700 border-blue-100" },
    domain: { label: "Dominio", bg: "bg-teal-50 text-teal-700 border-teal-100" },
    "service-domain": { label: "Servicio", bg: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar capacidades, servicios... (Ctrl+K)"
          className="w-full pl-9 pr-12 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-raia-blue-inst focus:bg-white transition-all shadow-sm"
        />
        <div className="absolute left-3 top-2.5 text-slate-400">
          <Search size={14} />
        </div>
        {searchQuery ? (
          <button
            onClick={() => {
              setSearchQuery("");
              setResults([]);
            }}
            className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
          >
            <X size={14} />
          </button>
        ) : (
          <span className="absolute right-3 top-2 px-1.5 py-0.5 border border-slate-200 rounded text-[9px] font-semibold text-slate-400 bg-slate-100 uppercase pointer-events-none select-none">
            Ctrl K
          </span>
        )}
      </div>

      {isOpen && (results.length > 0 || searchQuery) && (
        <div 
          ref={resultsRef}
          className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-96 overflow-y-auto"
        >
          {results.length > 0 ? (
            <div className="p-1">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                Resultados de búsqueda
              </div>
              <ul className="mt-1 space-y-0.5">
                {results.map((item, idx) => {
                  const style = typeStyles[item.type];
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className={`flex items-start gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
                        idx === activeIndex
                          ? "bg-slate-50 border-l-2 border-raia-blue-inst pl-2.5"
                          : "hover:bg-slate-50 border-l-2 border-transparent"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`px-1.5 py-0.5 text-[8px] font-semibold rounded border ${style.bg}`}>
                            {style.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {item.id}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold text-slate-800 mt-0.5 truncate">
                          {item.name}
                        </h4>
                        {item.parentName && (
                          <p className="text-[10px] text-slate-400 truncate">
                            En {item.parentName}
                          </p>
                        )}
                        <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      {idx === activeIndex && (
                        <div className="text-slate-400 mt-1 self-center">
                          <CornerDownLeft size={10} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="p-6 text-center">
              <Sparkles size={20} className="mx-auto text-slate-300" />
              <p className="text-xs font-medium text-slate-800 mt-2">
                Sin resultados para "{searchQuery}"
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                Prueba buscando nombres de servicios, regulaciones, o identificadores como RAIA-SD-045.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
