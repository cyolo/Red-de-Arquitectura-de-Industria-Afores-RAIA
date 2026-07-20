"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const MatrixWorkspace = dynamic(
  () => import("../../../features/service-landscape/matrix/components/MatrixWorkspace"),
  { ssr: false }
);

export default function MatrixClientPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center bg-slate-55 bg-slate-50 text-slate-500 font-semibold text-sm">
        Cargando Matrix Workspace...
      </div>
    }>
      <MatrixWorkspace />
    </Suspense>
  );
}
