import React, { useState, useEffect, useRef } from "react";
import { useMatrixStore } from "../store/useMatrixStore";
import { MatrixResult, MatrixCellResult, MatrixDimensionValue } from "../domain/matrixTypes";
import { formatMeasureValue } from "../domain/matrixMeasures";

interface MatrixGridProps {
  result: MatrixResult;
  onSelectCell: (rowId: string, colId: string) => void;
}

export default function MatrixGrid({ result, onSelectCell }: MatrixGridProps) {
  const selectedCell = useMatrixStore((state) => state.selectedCell);
  const measure = useMatrixStore((state) => state.measure);

  const { rowHeaders, columnHeaders, cells, totals } = result;

  // Manage roving tabIndex focus
  const [focusedCell, setFocusedCell] = useState<{ rowIdx: number; colIdx: number }>({ rowIdx: 0, colIdx: 0 });
  const cellsRef = useRef<HTMLButtonElement[][]>([]);

  // Initialize refs array
  useEffect(() => {
    cellsRef.current = Array(rowHeaders.length)
      .fill(null)
      .map(() => Array(columnHeaders.length).fill(null));
  }, [rowHeaders, columnHeaders]);

  const handleKeyDown = (e: React.KeyboardEvent, rowIdx: number, colIdx: number) => {
    let nextRowIdx = rowIdx;
    let nextColIdx = colIdx;

    switch (e.key) {
      case "ArrowUp":
        nextRowIdx = Math.max(0, rowIdx - 1);
        break;
      case "ArrowDown":
        nextRowIdx = Math.min(rowHeaders.length - 1, rowIdx + 1);
        break;
      case "ArrowLeft":
        nextColIdx = Math.max(0, colIdx - 1);
        break;
      case "ArrowRight":
        nextColIdx = Math.min(columnHeaders.length - 1, colIdx + 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        onSelectCell(rowHeaders[rowIdx].id, columnHeaders[colIdx].id);
        return;
      case "Escape":
        e.preventDefault();
        onSelectCell("", ""); // close sidebar
        return;
      default:
        return;
    }

    e.preventDefault();
    setFocusedCell({ rowIdx: nextRowIdx, colIdx: nextColIdx });
    
    // Focus the element
    setTimeout(() => {
      const el = cellsRef.current[nextRowIdx]?.[nextColIdx];
      if (el) el.focus();
    }, 0);
  };

  // Helper to map cell severity to Tailwind colors
  const getCellClassName = (cell: MatrixCellResult, isSelected: boolean) => {
    const base = "w-full h-full min-h-[50px] p-2 flex flex-col items-center justify-center text-xs font-extrabold border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer select-none transition-all";
    const selectedRing = isSelected ? "ring-2 ring-slate-900 border-slate-900 z-10 scale-[1.02] shadow-md" : "border-slate-100 hover:scale-[1.01]";

    if (!cell.hasData || cell.value === 0) {
      return `${base} bg-slate-50 text-slate-400 border-slate-100 ${selectedRing}`;
    }

    if (measure === "regulatory-coverage-percentage") {
      // Semantic regulatory colors
      if (cell.value < 25) return `${base} bg-red-50 text-red-700 hover:bg-red-100 border-red-150 ${selectedRing}`;
      if (cell.value < 50) return `${base} bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-150 ${selectedRing}`;
      if (cell.value < 75) return `${base} bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-150 ${selectedRing}`;
      return `${base} bg-green-50 text-green-700 hover:bg-green-100 border-green-150 ${selectedRing}`;
    }

    // Quantitative colors
    switch (cell.severity) {
      case "critical":
        return `${base} bg-emerald-900 text-white hover:bg-emerald-950 border-emerald-950 ${selectedRing}`;
      case "high":
        return `${base} bg-emerald-600 text-white hover:bg-emerald-700 border-emerald-700 ${selectedRing}`;
      case "medium":
        return `${base} bg-emerald-100 text-emerald-800 hover:bg-emerald-250 border-emerald-250 ${selectedRing}`;
      case "low":
      default:
        return `${base} bg-emerald-50 text-emerald-700 hover:bg-emerald-100/70 border-emerald-150 ${selectedRing}`;
    }
  };

  // Helper to format values for display in the table cells
  const formatCellDisplay = (cell: MatrixCellResult) => {
    if (!cell.hasData || cell.value === 0) return "-";
    return cell.formattedValue;
  };

  const isCellSelected = (rowId: string, colId: string) => {
    return selectedCell !== null && selectedCell.rowId === rowId && selectedCell.columnId === colId;
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
      
      {/* Scrollable grid box */}
      <div className="flex-1 overflow-auto">
        <table 
          role="grid" 
          aria-label="Matriz bidimensional de capacidades arquitectónicas"
          className="min-w-full divide-y divide-slate-200 border-collapse"
        >
          {/* Sticky Column Headers */}
          <thead className="bg-slate-55 bg-slate-50 sticky top-0 z-20 shadow-xs border-b border-slate-200">
            <tr role="row">
              {/* Top-left empty corner */}
              <th 
                scope="col" 
                className="bg-slate-50 sticky left-0 top-0 z-30 border-r border-b border-slate-200 px-4 py-3 text-left text-[9px] font-extrabold text-slate-400 uppercase tracking-wider min-w-[200px]"
              >
                Ejes cruzados
              </th>
              
              {/* Dynamic Col Headers */}
              {columnHeaders.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  role="columnheader"
                  className="border-r border-b border-slate-200 px-4 py-3 text-center text-[9px] font-extrabold text-slate-500 uppercase tracking-wider min-w-[120px] max-w-[150px] whitespace-normal"
                >
                  <div className="truncate-2-lines" title={col.label}>
                    {col.label}
                  </div>
                </th>
              ))}

              {/* Totals Header column */}
              <th
                scope="col"
                role="columnheader"
                className="bg-slate-100 sticky right-0 top-0 z-30 border-l border-b border-slate-200 px-4 py-3 text-center text-[9px] font-extrabold text-slate-600 uppercase tracking-wider min-w-[90px]"
              >
                Total Fila
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-200 bg-white">
            {rowHeaders.map((row, rowIdx) => {
              const isRowSelected = selectedCell?.rowId === row.id;

              return (
                <tr key={row.id} role="row" className={isRowSelected ? "bg-slate-50/50" : ""}>
                  
                  {/* Sticky Row Header */}
                  <th
                    scope="row"
                    role="rowheader"
                    className="bg-slate-50 sticky left-0 z-10 border-r border-slate-200 px-4 py-3 text-left text-[11px] font-bold text-slate-800 tracking-tight min-w-[200px] max-w-[280px]"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      {row.color && (
                        <span 
                          className="w-2 h-2 rounded-full shrink-0" 
                          style={{ backgroundColor: row.color }}
                        />
                      )}
                      <span className="truncate block" title={row.label}>
                        {row.label}
                      </span>
                    </div>
                  </th>

                  {/* Dynamic Grid Cells */}
                  {columnHeaders.map((col, colIdx) => {
                    const cell = cells.find(c => c.rowId === row.id && c.columnId === col.id) || {
                      rowId: row.id,
                      columnId: col.id,
                      value: 0,
                      formattedValue: "-",
                      serviceDomainIds: [],
                      regulatoryMappingIds: [],
                      relationIds: [],
                      controlIds: [],
                      severity: "none" as const,
                      hasData: false
                    };

                    const isSelected = isCellSelected(row.id, col.id);
                    const isTabFocus = focusedCell.rowIdx === rowIdx && focusedCell.colIdx === colIdx;

                    const accessibleLabel = `${row.label}, ${col.label}: ${formatCellDisplay(cell)} ${cell.serviceDomainIds.length} dominios de servicio`;

                    return (
                      <td 
                        key={col.id}
                        role="gridcell"
                        className="p-0.5 border-r border-slate-150 align-middle"
                      >
                        <button
                          id={`cell-${rowIdx}-${colIdx}`}
                          ref={el => {
                            if (cellsRef.current[rowIdx]) {
                              cellsRef.current[rowIdx][colIdx] = el!;
                            }
                          }}
                          tabIndex={isTabFocus ? 0 : -1}
                          onClick={() => onSelectCell(row.id, col.id)}
                          onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                          onFocus={() => setFocusedCell({ rowIdx, colIdx })}
                          className={getCellClassName(cell, isSelected)}
                          aria-label={accessibleLabel}
                          title={accessibleLabel}
                        >
                          <span className="text-[12px] font-extrabold">{formatCellDisplay(cell)}</span>
                          {cell.serviceDomainIds.length > 0 && (
                            <span className="text-[8px] opacity-60 font-medium block mt-0.5 font-mono">
                              {cell.serviceDomainIds.length} SDs
                            </span>
                          )}
                        </button>
                      </td>
                    );
                  })}

                  {/* Sticky Row Total cell */}
                  <td 
                    role="gridcell"
                    className="bg-slate-100 sticky right-0 z-10 border-l border-slate-200 px-4 py-3 text-center font-mono font-extrabold text-[11px] text-slate-800"
                  >
                    {formatMeasureValue(totals.rowTotals[row.id] || 0, result.totals.grandTotal > 0 ? "integer" : "decimal")}
                  </td>
                </tr>
              );
            })}

            {/* Column Totals Sticky Bottom Row */}
            <tr role="row" className="bg-slate-100 font-bold border-t-2 border-slate-350 shadow-inner">
              <th
                scope="row"
                role="rowheader"
                className="bg-slate-100 sticky left-0 z-10 border-r border-slate-200 px-4 py-3 text-left text-[11px] font-extrabold text-slate-700 tracking-wider min-w-[200px]"
              >
                Total Columna
              </th>

              {columnHeaders.map((col) => (
                <td
                  key={col.id}
                  role="gridcell"
                  className="border-r border-slate-200 px-4 py-3 text-center font-mono font-extrabold text-[11px] text-slate-800"
                >
                  {formatMeasureValue(totals.columnTotals[col.id] || 0, result.totals.grandTotal > 0 ? "integer" : "decimal")}
                </td>
              ))}

              {/* Grand Total Intersection cell */}
              <td
                role="gridcell"
                className="bg-slate-900 sticky right-0 z-20 border-l border-slate-800 px-4 py-3 text-center font-mono font-extrabold text-white text-[12px]"
                title={`Gran total consolidado: ${totals.grandTotal}`}
              >
                {formatMeasureValue(totals.grandTotal, result.totals.grandTotal > 0 ? "integer" : "decimal")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
