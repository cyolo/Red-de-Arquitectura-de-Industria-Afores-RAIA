"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
  X,
  ExternalLink,
  Cpu,
  Shield,
  Layers,
  ArrowRightLeft,
  FileText,
  Bookmark
} from "lucide-react";
import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import { getOverviewDiagramById } from "../../../../domain/repositories/overviewDiagramRepository";
import { getServiceDomainById } from "../../../../domain/repositories/landscapeRepository";
import { getIndustryParticipantById } from "../../../../domain/repositories/participantRepository";

export function OverviewDiagramDetailsPanel() {
  const {
    selectedDiagramId,
    selectedNodeId,
    selectedEdgeId,
    setSelectedNodeId,
    setSelectedEdgeId
  } = useOverviewDiagramStore();

  const activeDiagram = useMemo(
    () => getOverviewDiagramById(selectedDiagramId),
    [selectedDiagramId]
  );

  const selectedNode = useMemo(() => {
    if (!selectedNodeId || !activeDiagram) return null;
    return activeDiagram.nodes.find((n) => n.id === selectedNodeId) || null;
  }, [selectedNodeId, activeDiagram]);

  const selectedEdge = useMemo(() => {
    if (!selectedEdgeId || !activeDiagram) return null;
    return activeDiagram.edges.find((e) => e.id === selectedEdgeId) || null;
  }, [selectedEdgeId, activeDiagram]);

  // Lookup domain details
  const domainDetails = useMemo(() => {
    if (!selectedNode || selectedNode.nodeType !== "service-domain" || !selectedNode.referenceId) {
      return null;
    }
    return getServiceDomainById(selectedNode.referenceId) || null;
  }, [selectedNode]);

  // Lookup participant details
  const participantDetails = useMemo(() => {
    if (!selectedNode || !selectedNode.referenceId) return null;
    if (selectedNode.nodeType !== "actor" && selectedNode.nodeType !== "organization" && selectedNode.nodeType !== "authority") {
      return null;
    }
    return getIndustryParticipantById(selectedNode.referenceId) || null;
  }, [selectedNode]);

  // Find incoming and outgoing edges for node
  const nodeConnections = useMemo(() => {
    if (!selectedNodeId || !activeDiagram) return null;
    const incoming = activeDiagram.edges.filter((e) => e.targetNodeId === selectedNodeId);
    const outgoing = activeDiagram.edges.filter((e) => e.sourceNodeId === selectedNodeId);
    return { incoming, outgoing };
  }, [selectedNodeId, activeDiagram]);

  const getSourceNodeName = (srcId: string) => {
    const node = activeDiagram?.nodes.find((n) => n.id === srcId);
    return node ? node.label : srcId;
  };

  const getTargetNodeName = (tgtId: string) => {
    const node = activeDiagram?.nodes.find((n) => n.id === tgtId);
    return node ? node.label : tgtId;
  };

  if (!selectedNode && !selectedEdge) return null;

  return (
    <div className="w-[320px] h-full bg-white border-l border-slate-200 flex flex-col shadow-lg z-20 flex-shrink-0 select-none">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Detalle del Elemento
        </h3>
        <button
          onClick={() => {
            setSelectedNodeId(null);
            setSelectedEdgeId(null);
          }}
          className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[480px]">
        {/* Node detail display */}
        {selectedNode && (
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[8px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                  {selectedNode.nodeType}
                </span>
                {selectedNode.referenceId && (
                  <span className="text-[8px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">
                    {selectedNode.referenceId}
                  </span>
                )}
              </div>
              <h2 className="text-sm font-bold text-slate-800 leading-tight">
                {selectedNode.label}
              </h2>
              {selectedNode.description && (
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {selectedNode.description}
                </p>
              )}
            </div>

            {/* Service Domain metadata lookup */}
            {domainDetails && (
              <div className="border border-slate-100 bg-slate-50/50 rounded-lg p-3 space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-slate-500" />
                  Atributos de Arquitectura
                </h4>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <span className="text-slate-400 font-medium">Área:</span>
                    <p className="text-slate-700 font-semibold truncate">
                      {domainDetails.businessAreaId}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Dominio:</span>
                    <p className="text-slate-700 font-semibold truncate">
                      {domainDetails.businessDomainId}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Estatus:</span>
                    <p className="text-slate-700 font-semibold uppercase">
                      {domainDetails.status}
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Madurez:</span>
                    <p className="text-slate-700 font-semibold uppercase">
                      {domainDetails.maturity || "n/a"}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-1.5">
                  <Link
                    href={`/service-landscape/value-chain?selected=${domainDetails.id}`}
                    className="flex items-center justify-between text-[9px] bg-slate-850 bg-slate-800 text-white font-bold py-1 px-2.5 rounded hover:bg-slate-700 transition-colors"
                  >
                    <span>Ver en Value Chain</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/service-landscape/matrix?row=business-area&column=regulatory-coverage&selectedCell=${domainDetails.id}`}
                    className="flex items-center justify-between text-[9px] bg-slate-100 text-slate-700 border border-slate-200 font-bold py-1 px-2.5 rounded hover:bg-slate-200 transition-colors"
                  >
                    <span>Analizar en Matrix</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

            {/* Participant metadata lookup */}
            {participantDetails && (
              <div className="border border-slate-100 bg-slate-50/50 rounded-lg p-3 space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Ficha de Participante
                </h4>
                <div className="text-[10px] space-y-1 text-slate-700">
                  <p>
                    <span className="text-slate-400 font-medium">Nombre:</span> {participantDetails.name}
                  </p>
                  <p>
                    <span className="text-slate-400 font-medium">Tipo:</span> {participantDetails.participantType}
                  </p>
                  {participantDetails.organizationType && (
                    <p>
                      <span className="text-slate-400 font-medium">Organización:</span> {participantDetails.organizationType}
                    </p>
                  )}
                  {participantDetails.aliases && participantDetails.aliases.length > 0 && (
                    <p>
                      <span className="text-slate-400 font-medium">Alias:</span> {participantDetails.aliases.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Inbound & Outbound Connections list */}
            {nodeConnections && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <ArrowRightLeft className="w-3 h-3" />
                  Conexiones del Nodo
                </h4>

                {/* Outgoing */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400">Salientes ({nodeConnections.outgoing.length}):</span>
                  {nodeConnections.outgoing.length === 0 ? (
                    <p className="text-[9px] text-slate-400 italic">Ninguna conexión saliente.</p>
                  ) : (
                    nodeConnections.outgoing.map((out) => (
                      <div
                        key={out.id}
                        onClick={() => setSelectedEdgeId(out.id)}
                        className="text-[9.5px] p-1.5 border border-slate-100 hover:bg-slate-50 cursor-pointer rounded text-slate-700 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold truncate max-w-[150px]">
                          → {getTargetNodeName(out.targetNodeId)}
                        </span>
                        <span className="text-[8px] bg-slate-100 px-1 rounded uppercase">
                          {out.edgeType}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Incoming */}
                <div className="space-y-1 pt-1.5">
                  <span className="text-[9px] font-bold text-slate-400">Entrantes ({nodeConnections.incoming.length}):</span>
                  {nodeConnections.incoming.length === 0 ? (
                    <p className="text-[9px] text-slate-400 italic">Ninguna conexión entrante.</p>
                  ) : (
                    nodeConnections.incoming.map((inc) => (
                      <div
                        key={inc.id}
                        onClick={() => setSelectedEdgeId(inc.id)}
                        className="text-[9.5px] p-1.5 border border-slate-100 hover:bg-slate-50 cursor-pointer rounded text-slate-700 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold truncate max-w-[150px]">
                          ← {getSourceNodeName(inc.sourceNodeId)}
                        </span>
                        <span className="text-[8px] bg-slate-100 px-1 rounded uppercase">
                          {inc.edgeType}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Edge detail display */}
        {selectedEdge && (
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[8px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                  Relación ({selectedEdge.edgeType})
                </span>
                <span className="text-[8px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">
                  {selectedEdge.id}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 mb-2.5">
                <span className="truncate max-w-[110px]">{getSourceNodeName(selectedEdge.sourceNodeId)}</span>
                <span className="text-slate-400 mx-1">→</span>
                <span className="truncate max-w-[110px]">{getTargetNodeName(selectedEdge.targetNodeId)}</span>
              </div>

              <h3 className="text-xs font-bold text-slate-700">Descripción:</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {selectedEdge.description}
              </p>
            </div>

            {/* Objects associated */}
            {selectedEdge.businessObjectIds.length > 0 && (
              <div className="space-y-1.5 bg-slate-50/50 p-2.5 border border-slate-150 rounded-lg">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Objetos de Negocio
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedEdge.businessObjectIds.map((obj) => (
                    <span
                      key={obj}
                      className="text-[8.5px] font-semibold bg-white border border-slate-200 text-slate-700 px-1.5 rounded uppercase"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Events associated */}
            {selectedEdge.businessEventIds.length > 0 && (
              <div className="space-y-1.5 bg-slate-50/50 p-2.5 border border-slate-150 rounded-lg">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Eventos Relacionados
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedEdge.businessEventIds.map((ev) => (
                    <span
                      key={ev}
                      className="text-[8.5px] font-semibold bg-white border border-slate-200 text-slate-650 px-1.5 rounded uppercase"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default OverviewDiagramDetailsPanel;
