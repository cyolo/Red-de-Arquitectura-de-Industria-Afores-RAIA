import React from "react";
import { X, ShieldAlert, FileText, CheckCircle } from "lucide-react";
import { useBusinessObjectStore } from "../store/useBusinessObjectStore";
import {
  getBusinessObjects,
  getAttributesForBusinessObject,
  getRelationshipsForBusinessObject,
  getInvariantsForBusinessObject
} from "../../../domain/repositories/businessObjectRepository";

export default function ObjectDetailsPanel() {
  const { selectedObjectId, setSelectedObjectId } = useBusinessObjectStore();

  if (!selectedObjectId) return null;

  const bo = getBusinessObjects().find((o) => o.id === selectedObjectId);
  if (!bo) return null;

  const attributes = getAttributesForBusinessObject(bo.id);
  const relationships = getRelationshipsForBusinessObject(bo.id);
  const invariants = getInvariantsForBusinessObject(bo.id);

  const handleClose = () => {
    setSelectedObjectId(null);
  };

  return (
    <aside
      className="no-print fixed inset-y-0 right-0 z-40 w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full focus:outline-none"
      data-testid="ia-details-panel"
      role="dialog"
      aria-label="Detalle de Objeto de Negocio"
    >
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
            {bo.id}
          </span>
          <span className="text-xs font-bold text-slate-300">
            Ficha de Objeto
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-slate-400 hover:text-white rounded-md p-1 hover:bg-slate-800 transition-colors cursor-pointer"
          title="Cerrar panel (Esc)"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <h2 className="text-sm font-extrabold text-slate-800 leading-snug">{bo.nameEs}</h2>
          <span className="inline-block text-[9px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded mt-1 uppercase">
            Tipo: {bo.objectType}
          </span>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Definición</h4>
          <p className="text-xs text-slate-650 leading-relaxed mt-1">{bo.definition}</p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Significado de Negocio</h4>
          <p className="text-xs text-slate-650 leading-relaxed mt-1">{bo.businessMeaning}</p>
        </div>

        {/* Attributes list */}
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Atributos Lógicos ({attributes.length})</h4>
          <div className="space-y-2">
            {attributes.map((a) => (
              <div key={a.id} className="p-2 bg-slate-50 border border-slate-200 rounded text-xs">
                <span className="font-bold text-slate-800">{a.nameEs}</span>
                <span className="block text-[9px] text-slate-400 font-mono mt-0.5">{a.logicalDataType}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relationships list */}
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Relaciones ({relationships.length})</h4>
          <div className="space-y-2">
            {relationships.map((r) => (
              <div key={r.id} className="p-2 bg-slate-50 border border-slate-200 rounded text-xs">
                <span className="font-semibold text-slate-700">{r.name}</span>
                <span className="block text-[9px] text-slate-400 uppercase mt-0.5">{r.relationshipType}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
