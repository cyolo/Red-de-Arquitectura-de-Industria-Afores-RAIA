"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, CornerDownLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { getPortalModules } from "../../domain/repositories/portalRepository";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../../domain/repositories/landscapeRepository";

export interface SearchItem {
  id: string;
  name: string;
  type: "Módulo" | "Área de Negocio" | "Dominio de Negocio" | "Service Domain";
  route: string;
  description: string;
}

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [corpus, setCorpus] = useState<SearchItem[]>([]);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build the search corpus dynamically on mount
  useEffect(() => {
    try {
      const modules = getPortalModules();
      const areas = getBusinessAreas();
      const domains = getBusinessDomains();
      const serviceDomains = getServiceDomains();

      const items: SearchItem[] = [
        ...modules.map((m) => ({
          id: m.id,
          name: m.name,
          type: "Módulo" as const,
          route: m.route,
          description: m.description,
        })),
        ...areas.map((ba) => ({
          id: ba.id,
          name: ba.nameEs,
          type: "Área de Negocio" as const,
          route: `/service-landscape/value-chain?area=${ba.id}`,
          description: ba.description,
        })),
        ...domains.map((bd) => ({
          id: bd.id,
          name: bd.nameEs,
          type: "Dominio de Negocio" as const,
          route: `/service-landscape/value-chain?area=${bd.businessAreaId}&domain=${bd.id}`,
          description: bd.description,
        })),
        ...serviceDomains.map((sd) => ({
          id: sd.id,
          name: sd.nameEs,
          type: "Service Domain" as const,
          route: `/service-domains/${sd.slug}`,
          description: sd.purpose,
        })),
      ];
      setCorpus(items);
    } catch (e) {
      console.error("Error building search corpus", e);
    }
  }, []);

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const filteredItems = query.trim() === ""
    ? []
    : corpus.filter((item) => {
        const text = `${item.id} ${item.name} ${item.description} ${item.type}`.toLowerCase();
        return text.includes(query.toLowerCase());
      }).slice(0, 8); // limit results

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    setQuery("");
    router.push(item.route);
  };

  // Group by type
  const groupedResults = filteredItems.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  const flatFilteredList = Object.values(groupedResults).flat();

  return (
    <>
      {/* Search Bar Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
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

      {/* Modal Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-10"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col mt-10 text-slate-800"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            {/* Header / Input */}
            <div className="flex items-center gap-3 border-b border-slate-100 p-4">
              <Search size={20} className="text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe para buscar (ej. Traspaso, RAIA-SD-004)..."
                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
                aria-label="Caja de búsqueda"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Cerrar búsqueda"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto max-h-[350px] p-4">
              {query.trim() === "" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center text-slate-400 space-y-2">
                  <Sparkles size={28} className="text-slate-300" />
                  <p className="text-xs font-semibold">Ingrese un término para buscar</p>
                  <p className="text-[10px] text-slate-400">Busque áreas, dominios de negocio, service domains o módulos de arquitectura.</p>
                </div>
              ) : flatFilteredList.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs font-semibold">
                  No se encontraron resultados para "{query}"
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(groupedResults).map(([type, items]) => (
                    <div key={type} className="space-y-1.5">
                      <h3 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2">
                        {type}
                      </h3>
                      <div className="space-y-1">
                        {items.map((item) => {
                          const index = flatFilteredList.findIndex((f) => f.id === item.id);
                          const isSelected = index === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelect(item)}
                              onMouseEnter={() => setSelectedIndex(index)}
                              className={`w-full flex items-start justify-between gap-4 p-2.5 rounded-lg text-left transition-colors ${
                                isSelected ? "bg-slate-900 text-white" : "hover:bg-slate-50 text-slate-700"
                              }`}
                            >
                              <div>
                                <span className={`text-[10px] font-bold block ${isSelected ? "text-raia-turquoise" : "text-raia-blue-inst"}`}>
                                  {item.id}
                                </span>
                                <span className="text-xs font-bold block mt-0.5">
                                  {item.name}
                                </span>
                                <span className={`text-[10px] mt-0.5 block line-clamp-1 ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                                  {item.description}
                                </span>
                              </div>

                              {isSelected && (
                                <span className="flex items-center gap-1 text-[9px] font-bold text-slate-300 self-center">
                                  Ir
                                  <CornerDownLeft size={10} />
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between text-[10px] font-bold text-slate-400">
              <div className="flex gap-4">
                <span>↑↓ para navegar</span>
                <span>Enter para abrir</span>
              </div>
              <span>Esc para cerrar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
