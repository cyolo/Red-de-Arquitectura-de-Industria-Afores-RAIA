import { MatrixConfiguration, MatrixDimensionId, MatrixMeasureId } from "./matrixTypes";
import { LandscapeFilters } from "../../store/useLandscapeStore";

/**
 * Serializes the Matrix configuration, filters, and UI state into URL search parameters
 */
export function serializeMatrixConfig(
  config: MatrixConfiguration,
  searchQuery: string,
  selectedCell: { rowId: string; columnId: string } | null
): string {
  const params = new URLSearchParams();

  // 1. Dimensions and Measure
  params.set("row", config.rowDimension);
  params.set("column", config.columnDimension);
  params.set("measure", config.measure);

  // 2. Swicthes
  if (config.normalize) params.set("normalize", "true");
  if (config.includeEmptyRows) params.set("includeEmptyRows", "true");
  if (config.includeEmptyColumns) params.set("includeEmptyColumns", "true");

  // 3. Search query
  if (searchQuery) params.set("search", searchQuery);

  // 4. Filters
  const f = config.filters as any;
  const filterKeys = [
    "area", "domain", "serviceDomain", "layer", "capabilityType",
    "actor", "status", "maturity", "regime", "coverage", "criticality",
    "authority", "regulation", "regulatoryValidationStatus", "control", "valueStream"
  ];

  filterKeys.forEach(key => {
    if (f[key]) params.set(key, f[key]);
  });

  // 5. Selection
  if (selectedCell) {
    params.set("selectedCell", `${selectedCell.rowId}::${selectedCell.columnId}`);
  }

  return params.toString();
}

/**
 * Deserializes URL search parameters into the Matrix configuration, filters, and selection states
 */
export function deserializeMatrixParams(searchParams: URLSearchParams): {
  config: Partial<MatrixConfiguration>;
  searchQuery: string;
  selectedCell: { rowId: string; columnId: string } | null;
} {
  // 1. Core dimensions and measure (with safe defaults)
  const rowDimension = (searchParams.get("row") as MatrixDimensionId) || "business-area";
  const columnDimension = (searchParams.get("column") as MatrixDimensionId) || "regulatory-coverage";
  const measure = (searchParams.get("measure") as MatrixMeasureId) || "service-domain-count";

  const normalize = searchParams.get("normalize") === "true";
  const includeEmptyRows = searchParams.get("includeEmptyRows") === "true";
  const includeEmptyColumns = searchParams.get("includeEmptyColumns") === "true";

  // 2. Filters
  const filters: Record<string, string | undefined> = {};
  const filterKeys = [
    "area", "domain", "serviceDomain", "layer", "capabilityType",
    "actor", "status", "maturity", "regime", "coverage", "criticality",
    "authority", "regulation", "regulatoryValidationStatus", "control", "valueStream"
  ];

  filterKeys.forEach(key => {
    const val = searchParams.get(key);
    if (val) filters[key] = val;
  });

  // 3. Search and selections
  const searchQuery = searchParams.get("search") || "";
  const selectedCellVal = searchParams.get("selectedCell");
  let selectedCell: { rowId: string; columnId: string } | null = null;
  if (selectedCellVal && selectedCellVal.includes("::")) {
    const parts = selectedCellVal.split("::");
    selectedCell = { rowId: parts[0], columnId: parts[1] };
  }

  return {
    config: {
      rowDimension,
      columnDimension,
      measure,
      normalize,
      includeEmptyRows,
      includeEmptyColumns,
      filters: filters as LandscapeFilters
    },
    searchQuery,
    selectedCell
  };
}
