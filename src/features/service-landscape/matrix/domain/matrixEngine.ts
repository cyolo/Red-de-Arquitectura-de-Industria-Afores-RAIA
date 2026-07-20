import { 
  getServiceDomains, 
  getRelations 
} from "../../../../domain/repositories/landscapeRepository";
import { 
  getRegulatorySources, 
  getRegulatoryMappings 
} from "../../../../domain/repositories/regulatoryRepository";
import { ServiceDomain } from "../../../../domain/types";
import { 
  matrixDimensionDefinitions, 
  getDomainValuesForDimension 
} from "./matrixDimensions";
import { 
  matrixMeasureDefinitions, 
  formatMeasureValue 
} from "./matrixMeasures";
import { matchesMatrixFilters } from "./matrixFilters";
import { 
  MatrixCellResult, 
  MatrixConfiguration, 
  MatrixResult, 
  MatrixDimensionValue 
} from "./matrixTypes";

/**
 * Core calculation engine for the Service Landscape Matrix
 */
export function calculateMatrix(config: MatrixConfiguration): MatrixResult {
  const startTime = Date.now();

  // 1. Get raw data
  const allServiceDomains = getServiceDomains();
  const allRelations = getRelations();
  const allMappings = getRegulatoryMappings();
  const allSources = getRegulatorySources();

  // 2. Resolve dimensions and measure
  const rowDimDef = matrixDimensionDefinitions[config.rowDimension];
  const colDimDef = matrixDimensionDefinitions[config.columnDimension];
  const measureDef = matrixMeasureDefinitions[config.measure];

  const rowValues = rowDimDef.getValues();
  const colValues = colDimDef.getValues();

  // 3. Filter service domains based on config filters
  const filteredDomains = allServiceDomains.filter(sd => 
    matchesMatrixFilters(sd, config.filters, config.filters.searchQuery || "")
  );

  // 4. Pre-index entities for fast calculation
  const domainsInCell = new Map<string, ServiceDomain[]>();

  filteredDomains.forEach(sd => {
    const sdRowIds = getDomainValuesForDimension(sd, config.rowDimension);
    const sdColIds = getDomainValuesForDimension(sd, config.columnDimension);

    sdRowIds.forEach(rowId => {
      sdColIds.forEach(colId => {
        const cellKey = `${rowId}::${colId}`;
        if (!domainsInCell.has(cellKey)) {
          domainsInCell.set(cellKey, []);
        }
        domainsInCell.get(cellKey)!.push(sd);
      });
    });
  });

  // Helper score map for maturity
  const maturityScores: Record<string, number> = {
    conceptual: 1,
    defined: 2,
    validated: 3,
    adopted: 4
  };

  // 5. Calculate cell values
  const cells: MatrixCellResult[] = [];
  let maxValue = 0;
  let minValue = Infinity;

  const activeRowIdsSet = new Set<string>();
  const activeColIdsSet = new Set<string>();

  // Temporary calculation helper
  function computeMeasureForDomains(sds: ServiceDomain[]): {
    value: number;
    sdIds: string[];
    mappingIds: string[];
    relationIds: string[];
    controlIds: string[];
  } {
    if (sds.length === 0) {
      return { value: 0, sdIds: [], mappingIds: [], relationIds: [], controlIds: [] };
    }

    const sdIds = sds.map(s => s.id);
    
    // Collect associated IDs
    const controlIds: string[] = [];
    sds.forEach(s => {
      s.controls?.forEach(c => controlIds.push(c.id));
    });

    const sdIdsSet = new Set(sdIds);
    const cellRelations = allRelations.filter(r => sdIdsSet.has(r.sourceId) || sdIdsSet.has(r.targetId));
    const relationIds = cellRelations.map(r => r.id);

    const cellMappings = allMappings.filter(m => sdIdsSet.has(m.serviceDomainId));
    const mappingIds = cellMappings.map(m => m.id);

    let rawValue = 0;

    switch (config.measure) {
      case "service-domain-count":
        rawValue = sds.length;
        break;

      case "regulatory-mapping-count": {
        // Uniquely mapped regulation sources
        const uniqueSourceIds = new Set<string>();
        sds.forEach(s => {
          s.regulatoryMappingIds?.forEach(mId => uniqueSourceIds.add(mId));
        });
        cellMappings.forEach(m => uniqueSourceIds.add(m.regulatorySourceId));
        rawValue = uniqueSourceIds.size;
        break;
      }

      case "relation-count":
        rawValue = new Set(relationIds).size;
        break;

      case "control-count":
        rawValue = new Set(controlIds).size;
        break;

      case "evidence-count": {
        const uniqueEvs = new Set<string>();
        sds.forEach(s => {
          s.evidences?.forEach(ev => uniqueEvs.add(ev.toLowerCase().trim()));
        });
        rawValue = uniqueEvs.size;
        break;
      }

      case "business-object-count": {
        const uniqueBOs = new Set<string>();
        sds.forEach(s => {
          s.businessObjects?.forEach(bo => uniqueBOs.add(bo.id));
        });
        rawValue = uniqueBOs.size;
        break;
      }

      case "regulatory-coverage-percentage": {
        const regulated = sds.filter(s => s.regulatoryCoverage !== "not-applicable" && s.capabilityType !== "raia-governance");
        if (regulated.length === 0) {
          rawValue = 0;
        } else {
          const covered = regulated.filter(s => {
            const hasStatus = s.regulatoryCoverage && ["reviewed", "mapped", "partial"].includes(s.regulatoryCoverage);
            const hasMappings = s.regulatoryMappingIds && s.regulatoryMappingIds.length > 0;
            const hasCanonical = allMappings.some(m => m.serviceDomainId === s.id);
            return hasStatus || hasMappings || hasCanonical;
          });
          rawValue = (covered.length / regulated.length) * 100;
        }
        break;
      }

      case "average-maturity-score": {
        const matured = sds.filter(s => s.maturity && maturityScores[s.maturity] !== undefined);
        if (matured.length === 0) {
          rawValue = 0;
        } else {
          const sum = matured.reduce((acc, s) => acc + maturityScores[s.maturity!], 0);
          rawValue = sum / matured.length;
        }
        break;
      }

      case "critical-domain-count":
        rawValue = sds.filter(s => s.regulatoryCriticality === "high" || s.regulatoryCriticality === "systemic").length;
        break;

      case "unmapped-domain-count":
        rawValue = sds.filter(s => s.regulatoryCoverage === "unmapped").length;
        break;

      default:
        rawValue = 0;
    }

    return { value: rawValue, sdIds, mappingIds, relationIds, controlIds };
  }

  // Iterate over row and column combinations
  rowValues.forEach(row => {
    colValues.forEach(col => {
      const cellKey = `${row.id}::${col.id}`;
      const cellDomains = domainsInCell.get(cellKey) || [];

      if (cellDomains.length > 0) {
        activeRowIdsSet.add(row.id);
        activeColIdsSet.add(col.id);
      }

      const calc = computeMeasureForDomains(cellDomains);

      if (cellDomains.length > 0) {
        if (calc.value > maxValue) maxValue = calc.value;
        if (calc.value < minValue) minValue = calc.value;
      }

      cells.push({
        rowId: row.id,
        columnId: col.id,
        value: calc.value,
        formattedValue: formatMeasureValue(calc.value, measureDef.format),
        serviceDomainIds: calc.sdIds,
        regulatoryMappingIds: calc.mappingIds,
        relationIds: calc.relationIds,
        controlIds: calc.controlIds,
        severity: "none", // will calculate below after knowing max
        hasData: cellDomains.length > 0
      });
    });
  });

  // Filters empty rows/columns if requested
  const filteredRowHeaders = config.includeEmptyRows 
    ? rowValues 
    : rowValues.filter(r => activeRowIdsSet.has(r.id));

  const filteredColHeaders = config.includeEmptyColumns 
    ? colValues 
    : colValues.filter(c => activeColIdsSet.has(c.id));

  const finalRowIds = new Set(filteredRowHeaders.map(r => r.id));
  const finalColIds = new Set(filteredColHeaders.map(c => c.id));

  // Filter cells based on header constraints
  const finalCells = cells.filter(cell => finalRowIds.has(cell.rowId) && finalColIds.has(cell.columnId));

  // Compute cell severities (heatmap intensity levels)
  finalCells.forEach(cell => {
    if (!cell.hasData || cell.value === 0) {
      cell.severity = "none";
      return;
    }

    if (config.measure === "regulatory-coverage-percentage") {
      // In coverage percentage, low values are critical, high values are fine
      if (cell.value < 25) cell.severity = "critical";
      else if (cell.value < 50) cell.severity = "high";
      else if (cell.value < 75) cell.severity = "medium";
      else cell.severity = "low";
      return;
    }

    if (maxValue === 0) {
      cell.severity = "none";
      return;
    }

    const ratio = cell.value / maxValue;
    if (ratio <= 0.25) cell.severity = "low";
    else if (ratio <= 0.5) cell.severity = "medium";
    else if (ratio <= 0.75) cell.severity = "high";
    else cell.severity = "critical";
  });

  // Calculate totals
  const rowTotals: Record<string, number> = {};
  const columnTotals: Record<string, number> = {};

  filteredRowHeaders.forEach(row => {
    // Collect all unique domains in this row
    const rowDomains: ServiceDomain[] = [];
    filteredColHeaders.forEach(col => {
      const cellKey = `${row.id}::${col.id}`;
      const cellDomains = domainsInCell.get(cellKey) || [];
      cellDomains.forEach(sd => {
        if (!rowDomains.some(d => d.id === sd.id)) rowDomains.push(sd);
      });
    });
    rowTotals[row.id] = computeMeasureForDomains(rowDomains).value;
  });

  filteredColHeaders.forEach(col => {
    // Collect all unique domains in this column
    const colDomains: ServiceDomain[] = [];
    filteredRowHeaders.forEach(row => {
      const cellKey = `${row.id}::${col.id}`;
      const cellDomains = domainsInCell.get(cellKey) || [];
      cellDomains.forEach(sd => {
        if (!colDomains.some(d => d.id === sd.id)) colDomains.push(sd);
      });
    });
    columnTotals[col.id] = computeMeasureForDomains(colDomains).value;
  });

  // Grand total represents the measure evaluated over all filtered domains in the workspace
  const grandTotal = computeMeasureForDomains(filteredDomains).value;

  const executionTimeMs = Date.now() - startTime;

  return {
    rowHeaders: filteredRowHeaders,
    columnHeaders: filteredColHeaders,
    cells: finalCells,
    totals: {
      rowTotals,
      columnTotals,
      grandTotal
    },
    maximumValue: maxValue,
    minimumValue: minValue === Infinity ? 0 : minValue,
    executionTimeMs
  };
}
