import React, { useState, useMemo } from "react";
import { Download, FileSpreadsheet, FileJson, Printer, ChevronDown } from "lucide-react";
import { MatrixResult, MatrixConfiguration } from "../domain/matrixTypes";
import { getPortalReleases } from "../../../../domain/repositories/portalRepository";

interface MatrixExportMenuProps {
  result: MatrixResult;
  config: MatrixConfiguration;
  searchQuery: string;
}

export default function MatrixExportMenu({ result, config, searchQuery }: MatrixExportMenuProps) {
  const [open, setOpen] = useState(false);

  const activeRelease = useMemo(() => {
    const releases = getPortalReleases();
    return releases.find(r => r.status === "published") || { version: "0.1.0", releaseDate: "2026-07-12" };
  }, []);

  const handleExportCSV = () => {
    setOpen(false);
    
    // Header
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "rowDimension,rowValue,columnDimension,columnValue,measure,value,serviceDomainIds\n";

    // Cell data
    result.cells.forEach(cell => {
      const rowVal = cell.rowId;
      const colVal = cell.columnId;
      const val = cell.value;
      const sds = cell.serviceDomainIds.join(";");
      csvContent += `"${config.rowDimension}","${rowVal}","${config.columnDimension}","${colVal}","${config.measure}",${val},"${sds}"\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `raia_matrix_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJSON = () => {
    setOpen(false);
    
    const payload = {
      raiaVersion: activeRelease.version,
      regulatoryBaseline: activeRelease.releaseDate,
      timestamp: new Date().toISOString(),
      configuration: {
        rowDimension: config.rowDimension,
        columnDimension: config.columnDimension,
        measure: config.measure,
        normalize: config.normalize,
        includeEmptyRows: config.includeEmptyRows,
        includeEmptyColumns: config.includeEmptyColumns
      },
      filters: {
        ...config.filters,
        searchQuery
      },
      results: {
        rowsCount: result.rowHeaders.length,
        columnsCount: result.columnHeaders.length,
        cellsCount: result.cells.length,
        cells: result.cells.map(c => ({
          rowId: c.rowId,
          columnId: c.columnId,
          value: c.value,
          formattedValue: c.formattedValue,
          serviceDomainIds: c.serviceDomainIds,
          controlIds: c.controlIds,
          relationIds: c.relationIds,
          regulatoryMappingIds: c.regulatoryMappingIds
        })),
        totals: result.totals
      }
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", `raia_matrix_export_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    setOpen(false);
    window.print();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        data-testid="matrix-export-button"
        className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-350 hover:border-slate-300 text-slate-700 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Download size={12} />
        <span>Exportar</span>
        <ChevronDown size={10} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-40 text-left">
          {/* CSV */}
          <button
            onClick={handleExportCSV}
            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-slate-50"
          >
            <FileSpreadsheet size={14} className="text-emerald-600" />
            <span>Exportar CSV</span>
          </button>
          
          {/* JSON */}
          <button
            onClick={handleExportJSON}
            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-slate-50"
          >
            <FileJson size={14} className="text-sky-600" />
            <span>Exportar JSON</span>
          </button>

          {/* PRINT */}
          <button
            onClick={handlePrint}
            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-slate-50"
          >
            <Printer size={14} className="text-slate-600" />
            <span>Guardar PNG/Imprimir</span>
          </button>
        </div>
      )}
    </div>
  );
}
