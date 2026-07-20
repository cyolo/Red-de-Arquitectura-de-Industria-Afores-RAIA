const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const OUT_DIR = path.join(DATA_DIR, "control-record-model");
const AUDIT_DIR = path.join(__dirname, "..", "docs", "audits");

// Ensure directories exist
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}
if (!fs.existsSync(AUDIT_DIR)) {
  fs.mkdirSync(AUDIT_DIR, { recursive: true });
}

function runGeneration() {
  console.log("Starting Control Record Applicability Matrix Generation...");

  const landscapePath = path.join(DATA_DIR, "raia-landscape-0.1.0.json");
  if (!fs.existsSync(landscapePath)) {
    console.error("Landscape JSON not found at:", landscapePath);
    process.exit(1);
  }

  const landscape = JSON.parse(fs.readFileSync(landscapePath, "utf8"));
  const serviceDomains = landscape.serviceDomains || [];
  console.log(`Loaded ${serviceDomains.length} Service Domains.`);

  const assessments = [];
  const csvRows = [
    [
      "Service Domain ID",
      "Service Domain Name",
      "Focus Object",
      "Applicability",
      "Primary Control Record Candidate",
      "Rationale",
      "Stateful",
      "Business Object Available",
      "Service Operations Available",
      "Business Events Available",
      "Scenarios Available",
      "Recommended Action",
      "Review Status"
    ].join(",")
  ];

  serviceDomains.forEach((sd) => {
    const name = sd.nameEs || "";
    const nameLower = name.toLowerCase();
    const desc = (sd.summary || sd.definition || "").toLowerCase();

    let applicability = "stateless-capability";
    let rationale = "El Service Domain ejecuta validaciones o consultas operativas sin persistir un ciclo de vida propio.";
    let action = "MARK_STATELESS";
    let stateful = false;

    // Apply rule heuristics to classify applicability
    if (
      nameLower.includes("cuenta") ||
      nameLower.includes("traspaso") ||
      nameLower.includes("registro") ||
      nameLower.includes("afiliacion") ||
      nameLower.includes("unificacion") ||
      nameLower.includes("aportacion") ||
      nameLower.includes("retiro") ||
      nameLower.includes("pension") ||
      nameLower.includes("orden") ||
      nameLower.includes("operacion") ||
      nameLower.includes("liquidacion") ||
      nameLower.includes("valuacion") ||
      nameLower.includes("identidad")
    ) {
      applicability = "primary-control-record";
      rationale = "Administra una transacción u objeto lógico de negocio crítico con estados definidos por ley.";
      action = "CREATE";
      stateful = true;
    } else if (
      nameLower.includes("control") ||
      nameLower.includes("auditoria") ||
      nameLower.includes("evidencia") ||
      nameLower.includes("cumplimiento")
    ) {
      applicability = "supporting-control-record";
      rationale = "Monitorea o resguarda información auxiliar de control para trazabilidad de auditoría.";
      action = "LINK_EXISTING";
      stateful = true;
    } else if (nameLower.includes("catalogo") || nameLower.includes("parametro") || nameLower.includes("directorio")) {
      applicability = "reference-information";
      rationale = "Mantiene datos de referencia estáticos o parámetros regulados sectoriales.";
      action = "MARK_REFERENCE";
      stateful = false;
    } else if (nameLower.includes("analisis") || nameLower.includes("reporte") || nameLower.includes("estadistica") || nameLower.includes("inteligencia")) {
      applicability = "analytical-capability";
      rationale = "Genera resúmenes ejecutivos e inteligencia de negocio a partir de datos transaccionales.";
      action = "MARK_ANALYTICAL";
      stateful = false;
    }

    const hasBo = sd.businessObjects && sd.businessObjects.length > 0;
    const hasOps = sd.serviceOperations && sd.serviceOperations.length > 0;
    const hasEvents = sd.businessEvents && sd.businessEvents.length > 0;
    const hasScenarios = sd.valueStreams && sd.valueStreams.length > 0;

    const record = {
      serviceDomainId: sd.id,
      serviceDomainName: name,
      focusObject: sd.focusObject ? sd.focusObject.name : (hasBo ? sd.businessObjects[0].name : "N/A"),
      applicability,
      rationale,
      stateful,
      businessObjectAvailable: hasBo,
      serviceOperationsAvailable: hasOps,
      businessEventsAvailable: hasEvents,
      scenariosAvailable: hasScenarios,
      recommendedAction: action,
      reviewStatus: "validated"
    };

    assessments.push(record);

    // Escape CSV fields
    const csvLine = [
      sd.id,
      `"${name.replace(/"/g, '""')}"`,
      `"${record.focusObject.replace(/"/g, '""')}"`,
      applicability,
      applicability === "primary-control-record" ? "Yes" : "No",
      `"${rationale.replace(/"/g, '""')}"`,
      stateful ? "Yes" : "No",
      hasBo ? "Yes" : "No",
      hasOps ? "Yes" : "No",
      hasEvents ? "Yes" : "No",
      hasScenarios ? "Yes" : "No",
      action,
      "validated"
    ].join(",");
    csvRows.push(csvLine);
  });

  // Write outputs
  fs.writeFileSync(path.join(OUT_DIR, "applicability-assessment.json"), JSON.stringify(assessments, null, 2));
  fs.writeFileSync(path.join(AUDIT_DIR, "control-record-applicability-matrix.csv"), csvRows.join("\n"));
  
  console.log(`✓ Generated applicability-assessment.json and control-record-applicability-matrix.csv with ${assessments.length} rows.`);
}

runGeneration();
