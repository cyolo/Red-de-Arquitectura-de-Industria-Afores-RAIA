import React, { useMemo } from "react";
import { Filter, X, RefreshCw } from "lucide-react";
import { useMatrixStore } from "../store/useMatrixStore";
import { getBusinessAreas, getBusinessDomains, getServiceDomains } from "../../../../domain/repositories/landscapeRepository";
import { getRegulatorySources } from "../../../../domain/repositories/regulatoryRepository";
import { getIndustryParticipants } from "../../../../domain/repositories/participantRepository";

export default function MatrixFiltersDrawer() {
  const filters = useMatrixStore((state) => state.filters);
  const setFilter = useMatrixStore((state) => state.setFilter);
  const resetAll = useMatrixStore((state) => state.resetAll);

  // Load static lists for select options
  const areas = useMemo(() => getBusinessAreas(), []);
  const domains = useMemo(() => getBusinessDomains(), []);
  const sds = useMemo(() => getServiceDomains(), []);
  const sources = useMemo(() => getRegulatorySources(), []);
  const actors = useMemo(() => getIndustryParticipants(), []);

  // Compute list of unique controls
  const controls = useMemo(() => {
    const map = new Map<string, string>();
    sds.forEach(sd => {
      sd.controls?.forEach(c => map.set(c.id, c.name));
    });
    return Array.from(map.entries()).sort((a,b) => a[0].localeCompare(b[0]));
  }, [sds]);

  // Compute unique authorities
  const authorities = useMemo(() => {
    const set = new Set<string>();
    sources.forEach(s => {
      if (s.issuingAuthorityId) set.add(s.issuingAuthorityId);
    });
    sds.forEach(sd => {
      sd.regulations?.forEach(r => {
        if (r.authority) set.add(r.authority);
      });
    });
    return Array.from(set).sort();
  }, [sources, sds]);

  // Compute unique value streams
  const valueStreams = useMemo(() => {
    const set = new Set<string>();
    sds.forEach(sd => {
      sd.valueStreams?.forEach(vs => set.add(vs));
    });
    return Array.from(set).sort();
  }, [sds]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-inner space-y-4 shrink-0" data-testid="matrix-filters-drawer">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
        <div className="flex items-center gap-1.5 text-slate-800">
          <Filter size={14} className="text-raia-blue-inst" />
          <span className="text-xs font-bold uppercase tracking-wider">Filtros Avanzados</span>
        </div>
        <button
          onClick={resetAll}
          className="text-[10px] font-bold text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 hover:bg-red-100 border border-red-200 px-2 py-0.5 rounded cursor-pointer"
        >
          <RefreshCw size={10} />
          Limpiar Todos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 1. Business Area */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Área de Negocio</label>
          <select
            value={filters.area || ""}
            onChange={(e) => setFilter("area", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Áreas</option>
            {areas.map(a => <option key={a.id} value={a.id}>{a.id} - {a.nameEs}</option>)}
          </select>
        </div>

        {/* 2. Business Domain */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Dominio de Negocio</label>
          <select
            value={filters.domain || ""}
            onChange={(e) => setFilter("domain", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Dominios</option>
            {domains
              .filter(d => !filters.area || d.businessAreaId === filters.area)
              .map(d => <option key={d.id} value={d.id}>{d.id} - {d.nameEs}</option>)
            }
          </select>
        </div>

        {/* 3. Service Domain */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Dominio de Servicio</label>
          <select
            value={filters.serviceDomain || ""}
            onChange={(e) => setFilter("serviceDomain", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los SD</option>
            {sds
              .filter(s => !filters.domain || s.businessDomainId === filters.domain)
              .map(s => <option key={s.id} value={s.id}>{s.id} - {s.nameEs}</option>)
            }
          </select>
        </div>

        {/* 4. Landscape Layer */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Capa del Landscape</label>
          <select
            value={filters.layer || ""}
            onChange={(e) => setFilter("layer", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Capas</option>
            <option value="sector-governance">Gobierno y Dirección</option>
            <option value="industry-value-stream">Cadena de Valor</option>
            <option value="industry-shared-service">Servicios Compartidos</option>
            <option value="enterprise-enabler">Capacidades Habilitadoras</option>
          </select>
        </div>

        {/* 5. Capability Type */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Tipo de Capacidad</label>
          <select
            value={filters.capabilityType || ""}
            onChange={(e) => setFilter("capabilityType", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Tipos</option>
            <option value="regulated-core">Núcleo Regulado</option>
            <option value="industry-shared">Servicio Compartido</option>
            <option value="enterprise-enabler">Capacidad Habilitadora</option>
            <option value="raia-governance">Gobierno de Arquitectura</option>
          </select>
        </div>

        {/* 6. Lifecycle Status */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Estatus Ciclo de Vida</label>
          <select
            value={filters.status || ""}
            onChange={(e) => setFilter("status", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Estatus</option>
            <option value="draft">Borrador</option>
            <option value="proposed">Propuesto</option>
            <option value="validated">Validado</option>
            <option value="active">Activo</option>
            <option value="deprecated">Deprecado</option>
          </select>
        </div>

        {/* 7. Maturity */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Madurez</label>
          <select
            value={filters.maturity || ""}
            onChange={(e) => setFilter("maturity", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Madureces</option>
            <option value="conceptual">Conceptual</option>
            <option value="defined">Definido</option>
            <option value="validated">Validado</option>
            <option value="adopted">Adoptado</option>
          </select>
        </div>

        {/* 8. Actor */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Actor del Sistema</label>
          <select
            value={filters.actor || ""}
            onChange={(e) => setFilter("actor", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Actores</option>
            {actors.map(ip => <option key={ip.id} value={ip.id}>{ip.nameEs}</option>)}
          </select>
        </div>

        {/* 9. Previsional Regime */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Régimen Previsional</label>
          <select
            value={filters.regime || ""}
            onChange={(e) => setFilter("regime", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Regímenes</option>
            <option value="LSS73">LSS 1973</option>
            <option value="LSS97">LSS 1997</option>
            <option value="ISSSTE2007">ISSSTE 2007</option>
            <option value="ISSSTE10T">ISSSTE Décimo Transitorio</option>
            <option value="SAR92">SAR 92</option>
            <option value="BIENESTAR">Fondo Bienestar</option>
          </select>
        </div>

        {/* 10. Coverage */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Cobertura Regulatoria</label>
          <select
            value={filters.coverage || ""}
            onChange={(e) => setFilter("coverage", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Coberturas</option>
            <option value="unmapped">Sin Mapeo (Rojo)</option>
            <option value="partial">Parcial (Ámbar)</option>
            <option value="mapped">Mapeado (Azul)</option>
            <option value="reviewed">Validado (Verde)</option>
            <option value="not-applicable">No Aplicable</option>
          </select>
        </div>

        {/* 11. Criticality */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Criticidad Regulatoria</label>
          <select
            value={filters.criticality || ""}
            onChange={(e) => setFilter("criticality", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Criticidades</option>
            <option value="none">Ninguna</option>
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
            <option value="systemic">Sistémica</option>
          </select>
        </div>

        {/* 12. Authority */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Autoridad Regulatoria</label>
          <select
            value={filters.authority || ""}
            onChange={(e) => setFilter("authority", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Autoridades</option>
            {authorities.map((auth, idx) => <option key={idx} value={auth}>{auth}</option>)}
          </select>
        </div>

        {/* 13. Regulatory Source */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Fuente Regulatoria</label>
          <select
            value={filters.regulation || ""}
            onChange={(e) => setFilter("regulation", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todas las Normas</option>
            {sources.map(s => <option key={s.id} value={s.id}>{s.shortName}</option>)}
          </select>
        </div>

        {/* 14. Regulatory Validation Status */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Val. de Mapeo</label>
          <select
            value={filters.regulatoryValidationStatus || ""}
            onChange={(e) => setFilter("regulatoryValidationStatus", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Estados</option>
            <option value="pending">Pendiente</option>
            <option value="partially-reviewed">Revisado Parcialmente</option>
            <option value="legally-reviewed">Revisado Legalmente</option>
            <option value="architecture-reviewed">Revisado por Arquitectura</option>
          </select>
        </div>

        {/* 15. Control */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Control de Arquitectura</label>
          <select
            value={filters.control || ""}
            onChange={(e) => setFilter("control", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Controles</option>
            {controls.map(([id, name]) => <option key={id} value={id}>{id} - {name}</option>)}
          </select>
        </div>

        {/* 16. Value Stream */}
        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Proceso / Value Stream</label>
          <select
            value={filters.valueStream || ""}
            onChange={(e) => setFilter("valueStream", e.target.value)}
            className="w-full bg-white border border-slate-200 rounded px-2.5 py-1 text-[11px] text-slate-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="">Todos los Procesos</option>
            {valueStreams.map((vs, idx) => <option key={idx} value={vs}>{vs}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
