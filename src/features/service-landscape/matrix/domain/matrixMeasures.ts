import { MatrixMeasureDefinition, MatrixMeasureId } from "./matrixTypes";

export const matrixMeasureDefinitions: Record<MatrixMeasureId, MatrixMeasureDefinition> = {
  "service-domain-count": {
    id: "service-domain-count",
    label: "Cantidad de Dominios de Servicio",
    description: "Número total de Dominios de Servicio (SD) en la intersección.",
    format: "integer",
    aggregation: "count"
  },
  "regulatory-mapping-count": {
    id: "regulatory-mapping-count",
    label: "Cantidad de Mapeos Normativos",
    description: "Número total de mapeos regulatorios asociados a los SD en la intersección.",
    format: "integer",
    aggregation: "distinct-count"
  },
  "relation-count": {
    id: "relation-count",
    label: "Cantidad de Relaciones",
    description: "Número total de relaciones de dependencia u orquestación asociadas a los SD en la intersección.",
    format: "integer",
    aggregation: "distinct-count"
  },
  "control-count": {
    id: "control-count",
    label: "Cantidad de Controles",
    description: "Número total de controles de arquitectura de seguridad y operacionales declarados.",
    format: "integer",
    aggregation: "count"
  },
  "evidence-count": {
    id: "evidence-count",
    label: "Cantidad de Evidencias",
    description: "Número total de tipos de evidencia e insumos registrados.",
    format: "integer",
    aggregation: "count"
  },
  "business-object-count": {
    id: "business-object-count",
    label: "Objetos de Negocio Únicos",
    description: "Número de entidades de negocio distintas (Focus, Input, Output) en la intersección.",
    format: "integer",
    aggregation: "distinct-count"
  },
  "regulatory-coverage-percentage": {
    id: "regulatory-coverage-percentage",
    label: "Porcentaje de Cobertura Regulatoria",
    description: "Porcentaje de dominios regulados que cuentan con mapeos regulatorios completos o revisados.",
    format: "percentage",
    aggregation: "percentage"
  },
  "average-maturity-score": {
    id: "average-maturity-score",
    label: "Puntuación de Madurez Promedio",
    description: "Promedio ponderado de madurez (Conceptual = 1, Definido = 2, Validado = 3, Adoptado = 4).",
    format: "decimal",
    aggregation: "average"
  },
  "critical-domain-count": {
    id: "critical-domain-count",
    label: "Dominios Críticos",
    description: "Cantidad de dominios con criticidad regulatoria Alta o Sistémica.",
    format: "integer",
    aggregation: "count"
  },
  "unmapped-domain-count": {
    id: "unmapped-domain-count",
    label: "Dominios Sin Mapear",
    description: "Cantidad de dominios en estatus de cobertura Sin Mapeo (Rojo).",
    format: "integer",
    aggregation: "count"
  }
};

/**
 * Format helper for cell values based on measure format
 */
export function formatMeasureValue(value: number, format: "integer" | "percentage" | "decimal"): string {
  switch (format) {
    case "percentage":
      return `${value.toFixed(1)}%`;
    case "decimal":
      return value.toFixed(2);
    case "integer":
    default:
      return Math.round(value).toString();
  }
}
