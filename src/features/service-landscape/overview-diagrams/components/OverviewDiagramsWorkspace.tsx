"use client";

import React, { useEffect } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { Sliders, HelpCircle } from "lucide-react";

import { useOverviewDiagramStore } from "../store/useOverviewDiagramStore";
import useOverviewDiagramUrlState from "../hooks/useOverviewDiagramUrlState";
import OverviewDiagramHeader from "./OverviewDiagramHeader";
import OverviewDiagramCatalog from "./OverviewDiagramCatalog";
import OverviewDiagramCanvas from "./OverviewDiagramCanvas";
import OverviewDiagramToolbar from "./OverviewDiagramToolbar";
import OverviewDiagramLegend from "./OverviewDiagramLegend";
import OverviewDiagramDetailsPanel from "./OverviewDiagramDetailsPanel";
import OverviewDiagramNarrative from "./OverviewDiagramNarrative";
import OverviewDiagramExportMenu from "./OverviewDiagramExportMenu";

export function OverviewDiagramsWorkspace() {
  // Sync state to URL params
  useOverviewDiagramUrlState();

  const { fullscreen, selectedDiagramId } = useOverviewDiagramStore();

  // Escape key handler to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        useOverviewDiagramStore.getState().setSelectedNodeId(null);
        useOverviewDiagramStore.getState().setSelectedEdgeId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={`flex flex-col bg-slate-50 text-slate-800 ${
        fullscreen ? "fixed inset-0 z-50 w-screen h-screen bg-white" : "w-full min-h-screen"
      }`}
    >
      {/* Header (hidden in fullscreen) */}
      {!fullscreen && <OverviewDiagramHeader />}

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative min-h-[500px]">
        {/* Left Drawer Catalog (hidden in fullscreen or responsive toggle) */}
        {!fullscreen && (
          <div className="w-full md:w-[280px] flex-shrink-0 border-b md:border-b-0 border-slate-200">
            <OverviewDiagramCatalog />
          </div>
        )}

        {/* Center Panel Container */}
        <div className="flex-1 flex flex-col min-w-0 bg-slate-100">
          <ReactFlowProvider>
            {/* Toolbar */}
            <OverviewDiagramToolbar />

            {/* Canvas */}
            <div className="flex-1 min-h-[380px] relative">
              <OverviewDiagramCanvas />
            </div>
          </ReactFlowProvider>
        </div>

        {/* Right Details Drawer Panel */}
        <OverviewDiagramDetailsPanel />
      </div>

      {/* Legend & Narrative below the canvas (hidden in fullscreen) */}
      {!fullscreen && (
        <div className="p-4 space-y-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Sliders className="w-4 h-4 text-slate-500" />
              <h2 className="text-sm font-bold text-slate-700">Guía de Referencia</h2>
            </div>
            <OverviewDiagramExportMenu />
          </div>

          <OverviewDiagramLegend />
          <OverviewDiagramNarrative />
        </div>
      )}
    </div>
  );
}
export default OverviewDiagramsWorkspace;
