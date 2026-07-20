"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const OverviewDiagramsWorkspace = dynamic(
  () => import("../../../features/service-landscape/overview-diagrams/components/OverviewDiagramsWorkspace"),
  { ssr: false }
);

export default function OverviewDiagramsClientPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 font-semibold text-sm">
        Cargando Overview Diagrams...
      </div>
    }>
      <OverviewDiagramsWorkspace />
    </Suspense>
  );
}
