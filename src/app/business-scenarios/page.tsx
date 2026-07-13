import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Eye, ShieldAlert, Sparkles, BookOpen, Layers } from "lucide-react";
import { getPortalModuleBySlug } from "../../domain/repositories/portalRepository";

export const metadata = {
  title: "RAIA Business Scenarios - Catálogo",
  description: "Catálogo de escenarios transaccionales típicos del SAR por categorías operativas.",
};

export default async function BusinessScenariosPage() {
  const module = getPortalModuleBySlug("business-scenarios");

  const categories = [
    {
      title: "Identidad y expediente",
      description: "Escenarios relativos a la identificación digital del trabajador y su expediente.",
      scenarios: ["Registro de identidad biométrica", "Validación biométrica en enrolamiento", "Actualización de expediente electrónico", "Corrección de datos demográficos", "Gestión y designación de beneficiarios"],
    },
    {
      title: "Afiliación y cuenta",
      description: "Operaciones del ciclo de vida de la cuenta individual.",
      scenarios: ["Localización de cuenta individual", "Registro de cuenta en AFORE", "Asignación automática de cuentas", "Reasignación por desempeño", "Traspaso de cuenta entre AFORE", "Unificación de cuentas duplicadas", "Separación de cuentas (IMSS/ISSSTE)", "Regularización de saldos"],
    },
    {
      title: "Recaudación y aportaciones",
      description: "Ingreso de aportaciones obligatorias y ahorro voluntario.",
      scenarios: ["Recepcion y procesamiento de aportaciones", "Conciliación de recaudación RCV", "Individualización de recursos por subcuenta", "Resolución de pagos no identificados", "Depósitos de ahorro voluntario", "Corrección y devolución de aportaciones"],
    },
    {
      title: "Inversión y SIEFORE",
      description: "Procesos de inversión y asignación generacional de fondos.",
      scenarios: ["Asignación automática a SIEFORE Generacional", "Construcción y rebalanceo de portafolio", "Ejecución y liquidación de operaciones", "Valuación de instrumentos financieros", "Cumplimiento normativo de límites de inversión", "Asignación diaria de rendimientos"],
    },
    {
      title: "Retiros",
      description: "Retiros de recursos parciales por derecho de ley o voluntad.",
      scenarios: ["Retiro por desempleo (IMSS/ISSSTE)", "Ayuda para gastos de matrimonio", "Retiro de ahorro voluntario", "Disposición total de recursos por vejez"],
    },
    {
      title: "Pensiones",
      description: "Trámites de obtención y pago de pensiones pre-validados.",
      scenarios: ["Validación de elegibilidad pensionaria", "Resolución y concesión de pensión", "Elección de modalidad de pensión", "Contratación de retiro programado", "Transferencia de fondos para renta vitalicia", "Cálculo y pago de pensión garantizada"],
    },
    {
      title: "Fallecimiento y beneficiarios",
      description: "Trámites post-mortem y entrega de saldos.",
      scenarios: ["Notificación oficial de fallecimiento", "Validación de beneficiarios legales", "Distribución de saldos de subcuentas", "Pago de pensiones de sobrevivencia"],
    },
    {
      title: "Servicio y protección al usuario",
      description: "Interacciones de servicio y aclaraciones reguladas.",
      scenarios: ["Atención de solicitudes de servicio", "Aclaración de movimientos", "Registro de queja ante la AFORE", "Trámite de reclamación ante la UNE", "Gestión de controversias con CONDUSEF"],
    },
    {
      title: "Supervisión y regulación",
      description: "Reporteo regulatorio y auditoría.",
      scenarios: ["Entrega periódica de información regulatoria", "Atención de requerimientos oficiales", "Auditoría e inspección en sitio", "Ejecución de programas correctivos", "Notificación y resolución de sanciones"],
    },
    {
      title: "Fondo de Pensiones para el Bienestar",
      description: "Interacciones del SAR con el Fondo del Bienestar.",
      scenarios: ["Identificación de cuentas inactivas elegibles", "Transferencia de saldos no reclamados", "Conciliación de recursos transferidos", "Cálculo del complemento de pensión", "Reintegro de recursos al IMSS/ISSSTE"],
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider mb-6"
        >
          <ArrowLeft size={14} />
          Volver al Portal Principal
        </Link>

        {/* Hero Header */}
        <div className="bg-slate-900 rounded-2xl text-white p-8 md:p-10 shadow-lg border border-slate-800 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-raia-blue-inst/20 border border-raia-blue-inst/40 flex items-center justify-center text-raia-turquoise">
              <Compass size={24} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                RAIA Business Scenarios
              </h1>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                Catálogo de Escenarios Lógicos del SAR
              </p>
            </div>
          </div>
          <p className="text-slate-300 text-sm mt-4 leading-relaxed max-w-3xl">
            Catálogo estructurado que define las secuencias de operaciones e interacciones entre los diferentes Service Domains de la industria para ejecutar los trámites y procesos clave del Sistema de Ahorro para el Retiro.
          </p>

          {/* Alert: planned status details */}
          <div className="mt-6 flex gap-3 p-4 bg-blue-950/40 border border-blue-900/60 rounded-xl text-blue-200 text-xs leading-relaxed">
            <Sparkles size={20} className="text-raia-turquoise shrink-0" />
            <div>
              <span className="font-bold block text-white mb-0.5">Explorador de Flujos en Planeación</span>
              El visor gráfico interactivo de diagramas de secuencia se encuentra actualmente clasificado como <span className="font-bold text-raia-turquoise uppercase">planeado</span>. No obstante, a continuación se proporciona el catálogo funcional clasificado de escenarios que se incorporarán en la versión 0.2.0 del estándar.
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <h2 className="text-base font-extrabold text-slate-800 border-b border-slate-100 pb-2">
                  {cat.title}
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {cat.scenarios.map((scen, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-raia-turquoise shrink-0" />
                      {scen}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold">
                <span className="text-slate-400">Roadmap: V0.2.0</span>
                <span className="text-raia-blue-inst flex items-center gap-1">
                  En Planeación
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
