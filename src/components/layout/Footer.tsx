import React from "react";

export default function Footer() {
  return (
    <footer className="no-print bg-slate-900 border-t border-slate-800 text-slate-400 py-3.5 px-4 md:px-6">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        {/* Regulatory Disclaimer */}
        <p className="text-[10px] leading-relaxed max-w-4xl text-slate-400 font-medium">
          <span className="font-bold text-slate-300 uppercase tracking-wide mr-1.5 border border-slate-700 bg-slate-950 px-1 py-0.5 rounded">
            Disclaimer
          </span>
          RAIA es una arquitectura de referencia y no sustituye las leyes, disposiciones, criterios, manuales ni publicaciones oficiales de las autoridades mexicanas.
        </p>

        {/* Copy note */}
        <p className="text-[10px] text-slate-500 shrink-0 font-medium">
          RAIA V14.0 &copy; 2026. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
