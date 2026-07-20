import React, { useState, useEffect } from "react";
import { Copy, Plus, Trash2, Eye, ClipboardCheck } from "lucide-react";
import { useMatrixStore } from "../store/useMatrixStore";
import { serializeMatrixConfig } from "../domain/matrixSerialization";

export default function MatrixSavedViews() {
  const [open, setOpen] = useState(false);
  const [saveMode, setSaveMode] = useState(false);
  const [newViewName, setNewViewName] = useState("");
  const [newViewDesc, setNewViewDesc] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const savedViews = useMatrixStore((state) => state.savedViews);
  const loadSavedViews = useMatrixStore((state) => state.loadSavedViews);
  const saveView = useMatrixStore((state) => state.saveView);
  const deleteView = useMatrixStore((state) => state.deleteView);
  const loadConfig = useMatrixStore((state) => state.loadConfig);

  const rowDimension = useMatrixStore((state) => state.rowDimension);
  const columnDimension = useMatrixStore((state) => state.columnDimension);
  const measure = useMatrixStore((state) => state.measure);
  const normalize = useMatrixStore((state) => state.normalize);
  const includeEmptyRows = useMatrixStore((state) => state.includeEmptyRows);
  const includeEmptyColumns = useMatrixStore((state) => state.includeEmptyColumns);
  const filters = useMatrixStore((state) => state.filters);
  const searchQuery = useMatrixStore((state) => state.searchQuery);

  // Load saved views initially
  useEffect(() => {
    loadSavedViews();
  }, [loadSavedViews]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newViewName.trim()) return;
    
    saveView(newViewName.trim(), newViewDesc.trim() || undefined);
    setNewViewName("");
    setNewViewDesc("");
    setSaveMode(false);
  };

  const handleCopyLink = (viewConfig: any, id: string) => {
    const qStr = serializeMatrixConfig(viewConfig, "", null);
    const fullUrl = `${window.location.origin}${window.location.pathname}?${qStr}`;
    
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    });
  };

  return (
    <div className="relative inline-block text-left" data-testid="matrix-saved-views">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => { if (!saveMode) setOpen(false); }, 300)}
        className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
      >
        <Eye size={12} />
        <span>Vistas Guardadas</span>
        {savedViews.length > 0 && (
          <span className="bg-slate-900 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">
            {savedViews.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-lg p-3 z-45 text-left space-y-3">
          {saveMode ? (
            /* Save Form */
            <form onSubmit={handleSave} className="space-y-2.5">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                Guardar Vista Actual
              </span>
              
              <div className="space-y-1">
                <input
                  type="text"
                  required
                  placeholder="Nombre de la vista..."
                  value={newViewName}
                  onChange={(e) => setNewViewName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  placeholder="Descripción (opcional)..."
                  value={newViewDesc}
                  onChange={(e) => setNewViewDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded px-2.5 py-1 text-xs text-slate-700 focus:outline-none"
                />
              </div>

              <div className="flex gap-2 justify-end pt-1">
                <button
                  type="button"
                  onClick={() => setSaveMode(false)}
                  className="px-2.5 py-1 bg-white hover:bg-slate-55 bg-slate-50 text-slate-600 hover:text-slate-800 border border-slate-200 rounded text-[10px] font-bold cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white border border-slate-900 rounded text-[10px] font-bold cursor-pointer"
                >
                  Guardar
                </button>
              </div>
            </form>
          ) : (
            /* Views List */
            <>
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Vistas Configuradas
                </span>
                <button
                  onClick={() => setSaveMode(true)}
                  className="text-[9px] font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-0.5 bg-emerald-50 px-1.5 py-0.5 rounded cursor-pointer"
                >
                  <Plus size={10} />
                  Guardar Nueva
                </button>
              </div>

              {savedViews.length > 0 ? (
                <div className="max-h-48 overflow-y-auto divide-y divide-slate-100 pr-1">
                  {savedViews.map((view) => (
                    <div key={view.id} className="py-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => {
                          loadConfig(view.configuration);
                          setOpen(false);
                        }}
                        className="flex-1 text-left min-w-0 group cursor-pointer focus:outline-none"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-raia-blue-inst block truncate">
                          {view.name}
                        </span>
                        {view.description && (
                          <span className="text-[9px] text-slate-400 block truncate leading-tight">
                            {view.description}
                          </span>
                        )}
                      </button>

                      <div className="flex items-center gap-1 shrink-0">
                        {/* Copy Link */}
                        <button
                          onClick={() => handleCopyLink(view.configuration, view.id)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                          title="Copiar Enlace Compartible"
                        >
                          {copiedId === view.id ? (
                            <ClipboardCheck size={12} className="text-green-600" />
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                        
                        {/* Delete */}
                        <button
                          onClick={() => deleteView(view.id)}
                          className="p-1 rounded text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                          title="Eliminar Vista"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-[10px] text-slate-400 italic block py-2">
                  No tienes ninguna vista guardada en este navegador.
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
