"use client";

import React from "react";
import dynamic from "next/dynamic";

const DynamicWorkspace = dynamic(
  () => import("../../../features/business-scenarios/snippets/components/ScenarioSnippetsWorkspace"),
  {
    ssr: false,
    loading: () => (
      <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-[400px]">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Cargando Scenario Snippets...
          </p>
        </div>
      </div>
    )
  }
);

export default function ScenarioSnippetsClientPage() {
  return <DynamicWorkspace />;
}
