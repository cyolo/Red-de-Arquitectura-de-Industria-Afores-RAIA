import { LandscapeFilters } from "../../store/useLandscapeStore";

export type MatrixDimensionId =
  | "business-area"
  | "business-domain"
  | "service-domain"
  | "landscape-layer"
  | "capability-type"
  | "lifecycle-status"
  | "maturity"
  | "accountable-participant"
  | "participating-participant"
  | "applicable-regime"
  | "regulatory-coverage"
  | "regulatory-criticality"
  | "regulatory-validation-status"
  | "regulatory-authority"
  | "regulatory-source"
  | "business-object"
  | "focus-object"
  | "control"
  | "relation-type"
  | "value-stream";

export type MatrixDimensionCategory =
  | "architecture"
  | "governance"
  | "regulation"
  | "participants"
  | "operations"
  | "relationships";

export interface MatrixDimensionValue {
  id: string;
  label: string;
  color?: string;
  description?: string;
}

export interface MatrixDimensionDefinition {
  id: MatrixDimensionId;
  label: string;
  shortLabel: string;
  description: string;
  category: MatrixDimensionCategory;
  supportsRows: boolean;
  supportsColumns: boolean;
  getValues: () => MatrixDimensionValue[];
}

export type MatrixMeasureId =
  | "service-domain-count"
  | "regulatory-mapping-count"
  | "relation-count"
  | "control-count"
  | "evidence-count"
  | "business-object-count"
  | "regulatory-coverage-percentage"
  | "average-maturity-score"
  | "critical-domain-count"
  | "unmapped-domain-count";

export interface MatrixMeasureDefinition {
  id: MatrixMeasureId;
  label: string;
  description: string;
  format: "integer" | "percentage" | "decimal";
  aggregation: "count" | "distinct-count" | "average" | "percentage";
}

export interface MatrixConfiguration {
  rowDimension: MatrixDimensionId;
  columnDimension: MatrixDimensionId;
  measure: MatrixMeasureId;
  filters: LandscapeFilters;
  normalize: boolean;
  includeEmptyRows: boolean;
  includeEmptyColumns: boolean;
}

export interface MatrixCellResult {
  rowId: string;
  columnId: string;
  value: number;
  formattedValue: string;

  serviceDomainIds: string[];
  regulatoryMappingIds: string[];
  relationIds: string[];
  controlIds: string[];

  severity: "none" | "low" | "medium" | "high" | "critical";
  hasData: boolean;
}

export interface MatrixResult {
  rowHeaders: MatrixDimensionValue[];
  columnHeaders: MatrixDimensionValue[];
  cells: MatrixCellResult[];
  totals: {
    rowTotals: Record<string, number>;
    columnTotals: Record<string, number>;
    grandTotal: number;
  };
  maximumValue: number;
  minimumValue: number;
  executionTimeMs: number;
}

export interface SavedMatrixView {
  id: string;
  name: string;
  description?: string;
  configuration: MatrixConfiguration;
  createdAt: string;
}
