import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, GitCommit, HelpCircle, Layers, Network, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "RAIA Metamodel Overview",
  description: "Definiciones y relaciones formales de las entidades y conceptos que integran RAIA.",
};

export default function MetamodelPage() {
  const concepts = [
    { name: "Architecture Repository", definition: "El almacén central y canónico de todo el conocimiento arquitectónico de la industria mexicana de ahorro para el retiro." },
    { name: "Portal Module", definition: "Cada una de las secciones del portal que exponen u organizan los entregables (ej. Value Chain View, Business Object Model)." },
    { name: "Architecture Artifact", definition: "Unidad tangible de documentación o representación técnica (ej. un catálogo, un diagrama de flujo)." },
    { name: "Business Area", definition: "Clasificación de más alto nivel que agrupa dominios de negocio afines en la cadena de valor (ej. Inversiones)." },
    { name: "Business Domain", definition: "Agrupación intermedia de capacidades de negocio con un propósito común y delimitado." },
    { name: "Service Domain", definition: "Unidad estable, versionada y evolutiva de responsabilidad funcional pura en la industria previsional." },
    { name: "Service Operation", definition: "Operación lógica asociada a un Service Domain (initiate, register, retrieve, etc.) independiente de tecnologías." },
    { name: "Control Record", definition: "Concepto lógico que define el ciclo de vida, estados y transiciones del objeto de negocio enfocado." },
    { name: "Business Object", definition: "Modelo de información canónico que representa una entidad de datos real de la industria (ej. Trabajador)." },
    { name: "Business Event", definition: "Hecho de negocio significativo en el ciclo de vida de un Service Domain que puede representarse mediante evento, API, mensaje, archivo, lote o interacción manual." },
    { name: "Business Scenario", definition: "Secuencia ordenada de interacciones entre Service Domains para materializar un trámite o proceso del SAR." },
    { name: "Actor", definition: "Participante o rol del ecosistema (Afore, Trabajador, CONSAR, Empresa Operadora) con responsabilidades asignadas." },
    { name: "Regulation", definition: "Disposición legal o circular aplicable que norma una capacidad u obligación previsional." },
    { name: "Control", definition: "Mecanismo de mitigación y aseguramiento (regulatorio, operativo, financiero, de inversión, privacidad, seguridad, datos, continuidad o auditoría) mapeado a operaciones del Service Domain." },
    { name: "Evidence", definition: "Registro de auditoría, acuse firmado digitalmente o bitácora que comprueba la ejecución de un control." },
    { name: "KPI", definition: "Métrica de calidad o desempeño que mide la efectividad operativa de las operaciones del dominio." },
    { name: "Industry Reference Model", definition: "La composición navegable de los principales viewpoints de RAIA." },
    { name: "Reference Model Viewpoint", definition: "Punto de vista que selecciona y agrupa un conjunto de capas y artefactos para una audiencia o caso específico." },
    { name: "Reference Model Layer", definition: "Subdivisión lógica de la cadena de trazabilidad de arquitectura (Ecosistema, Procesos, Datos, etc.)." },
    { name: "Reference Artifact Reference", definition: "Referencia liviana a un elemento canónico (SD, Objeto, etc.) sin duplicar sus propiedades." },
    { name: "Cross-model Traceability Relation", definition: "Asociación que conecta elementos pertenecientes a distintos modelos de RAIA." },
    { name: "Reference Composition Rule", definition: "Regla de consulta que determina cómo se resuelven y combinan las relaciones entre capas del modelo." },
    { name: "Reference Model Gap", definition: "Inconsistencia o punto ciego identificado en la trazabilidad cruzada o cobertura del modelo." },
    { name: "Reference Model Baseline", definition: "Estado verificado y congelado de composición de la arquitectura en una fecha determinada." },
    { name: "Scenario Snippet", definition: "Un fragmento reutilizable y parametrizable de comportamiento de negocio que representa una colaboración recurrente entre participantes, Service Domains, Business Objects, controles y eventos." },
    { name: "Scenario Snippet Step", definition: "Paso interno de un Scenario Snippet que detalla una acción o intercambio específico." },
    { name: "Participant Role", definition: "Rol abstracto o ranura de participante definida en un Scenario Snippet que se vincula a un actor real en la invocación." },
    { name: "Service Domain Slot", definition: "Ranura de dominio de servicio parametrizable dentro de un Scenario Snippet." },
    { name: "Business Object Slot", definition: "Ranura que requiere la vinculación de un objeto de negocio canónico dentro de un Scenario Snippet." },
    { name: "Snippet Decision", definition: "Evaluación o bifurcación condicional definida dentro de un fragmento de secuencia." },
    { name: "Snippet Variant", definition: "Variación funcional de un snippet que mantiene el mismo propósito semántico pero altera ciertos pasos o condiciones." },
    { name: "Snippet Exception", definition: "Flujo alternativo o de recuperación ante errores lógicos o de negocio dentro de un snippet." },
    { name: "Snippet Invocation", definition: "Instanciación y binding de un Scenario Snippet dentro de un Business Scenario específico." },
    { name: "Snippet Binding", definition: "Asociación que vincula un rol o slot abstracto de un snippet con un elemento canónico real en el escenario." },
    { name: "Resolved Scenario Step", definition: "Paso final compilado y ordenado resultante de resolver y expandir las invocaciones y pasos inline de un escenario." },
    { name: "Snippet Version", definition: "Versión SemVer asociada a un Scenario Snippet que regula su compatibilidad e impacto." },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-wider mb-6"
        >
          <ArrowLeft size={14} />
          Volver al Portal Principal
        </Link>

        {/* Card Content */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-md" data-testid="metamodel-overview">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <BookOpen size={24} className="text-raia-blue-inst" />
            <h1 className="text-2xl font-bold text-slate-800">RAIA Metamodel Overview</h1>
          </div>

          <p className="text-sm text-slate-600 mt-6 leading-relaxed">
            El metamodelo de RAIA define la estructura de información de nuestro repositorio de arquitectura de industria. Asegura que todos los activos compartan un esquema homogéneo de identificación, versionamiento y gobernanza.
          </p>

          {/* Conceptual Diagram */}
          <h2 className="text-lg font-bold text-slate-800 mt-10">Diagrama Conceptual Metamodelo</h2>
          <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">
            A continuación se presenta la jerarquía estructural y de relaciones lógicas del metamodelo canónico.
          </p>

          <div className="mt-6 border border-slate-200 rounded-xl bg-slate-50 p-6 flex flex-col gap-6">
            {/* Top-down boxes hierarchy */}
            <div className="flex flex-col items-center gap-4" data-testid="metamodel-hierarchy">
              <div className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-lg border border-slate-800 shadow-sm text-center w-64">
                Business Area (BA)
                <span className="block text-[9px] font-normal text-slate-400 mt-0.5">Contiene 1 o más Dominios</span>
              </div>
              <div className="w-0.5 h-6 bg-slate-300"></div>

              <div className="bg-raia-blue-inst text-white font-bold text-xs px-6 py-2.5 rounded-lg border border-blue-900 shadow-sm text-center w-64">
                Business Domain (BD)
                <span className="block text-[9px] font-normal text-blue-200 mt-0.5">Agrupa 1 o más Service Domains</span>
              </div>
              <div className="w-0.5 h-6 bg-slate-300"></div>

              <div className="bg-raia-turquoise text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow-sm text-center w-64">
                Service Domain (SD)
                <span className="block text-[9px] font-normal text-teal-100 mt-0.5">Unidad estable y evolutiva</span>
              </div>
            </div>

            {/* Grid of connected elements to Service Domain */}
            <div className="border-t border-slate-200 pt-6" data-testid="metamodel-service-domain">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block text-center mb-4">
                Componentes de un Service Domain
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Service Operation", detail: "initiate, register, retrieve" },
                  { name: "Business Event", detail: "produces, consumes" },
                  { name: "Business Object", detail: "Focus & reference objects" },
                  { name: "Regulation", detail: "Leyes y circulares de CONSAR" },
                  { name: "Control", detail: "Controles reguladores y operativos" },
                  { name: "Evidence", detail: "Bitácoras, acuses y firmas" },
                  { name: "KPI", detail: "Métricas de desempeño" },
                  { name: "Control Record", detail: "Ciclo de vida lógico" }
                ].map((el, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg border border-slate-200 text-center shadow-xs">
                    <h4 className="text-xs font-bold text-slate-800">{el.name}</h4>
                    <p className="text-[9px] text-slate-400 mt-1 font-medium">{el.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cardinalities and Rules */}
          <h2 className="text-lg font-bold text-slate-800 mt-10">Reglas y Cardinalidades</h2>
          <div className="mt-4 space-y-4" data-testid="metamodel-governance-rules">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold text-slate-800">1. Entidades Canónicas vs Vistas</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Cada elemento arquitectónico (como un Service Domain o un Objeto de Negocio) tiene una definición única y canónica en el repositorio. Las vistas (Value Chain View, Matrix View, etc.) no duplican ni modifican estas definiciones; únicamente las filtran, agrupan y proyectan para diferentes audiencias.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold text-slate-800">2. Identificación Inmutable</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Todas las entidades de RAIA deben poseer un identificador permanente y tipado que responda al formato del metamodelo (ej. <code className="bg-slate-200 px-1 rounded">RAIA-BA-001</code> para áreas de negocio o <code className="bg-slate-200 px-1 rounded">RAIA-SD-001</code> para dominios de servicio).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold text-slate-800">3. Independencia de Implementación</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Las operaciones de servicio (Service Operations) definen capacidades lógicas puras (ej. registrar la solicitud). No deben asociarse en este nivel a tecnologías de transporte específicas como REST, gRPC, SOAP o mensajería síncrona/asíncrona.
              </p>
            </div>
          </div>

          {/* Catalog of concept definitions */}
          <h2 className="text-lg font-bold text-slate-800 mt-10 border-t border-slate-100 pt-6">
            Glosario del Metamodelo
          </h2>
          <div className="mt-4 space-y-3.5" data-testid="metamodel-glossary">
            {concepts.map((c, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pb-3 border-b border-slate-100 last:border-0">
                <span className="text-xs font-extrabold text-raia-blue-inst shrink-0 sm:w-48">
                  {c.name}
                </span>
                <span className="text-xs text-slate-600 leading-relaxed">
                  {c.definition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
