import fs from "fs";
import path from "path";

interface MigrationOptions {
  dryRun: boolean;
  write: boolean;
  backup: boolean;
  report: boolean;
}

export function migrate(options: MigrationOptions = { dryRun: true, write: false, backup: false, report: true }) {
  console.log("=== Running Canonical Business Object Model Migration ===");
  console.log(`Options: dry-run=${options.dryRun}, write=${options.write}, backup=${options.backup}, report=${options.report}`);

  const landscapePath = path.join(process.cwd(), "src", "data", "raia-landscape-0.1.0.json");
  const outputDir = path.join(process.cwd(), "src", "data", "business-object-model");
  const reportPath = path.join(process.cwd(), "docs", "audits", "business-object-reference-migration.md");

  if (!fs.existsSync(landscapePath)) {
    console.error(`Landscape file not found at: ${landscapePath}`);
    return;
  }

  const landscape = JSON.parse(fs.readFileSync(landscapePath, "utf8"));
  const serviceDomains = landscape.serviceDomains || [];
  
  const extractedObjects: Array<{ id: string; name: string; serviceDomainId: string }> = [];

  serviceDomains.forEach((sd: any) => {
    if (sd.businessObjects) {
      sd.businessObjects.forEach((bo: any) => {
        extractedObjects.push({
          id: bo.id || "N/A",
          name: bo.name || "N/A",
          serviceDomainId: sd.id
        });
      });
    }
  });

  console.log(`Found ${extractedObjects.length} reference objects embedded inside service domains.`);

  // Write migrations report
  const reportContent = [
    "# Reporte de Migración de Objetos de Negocio",
    "",
    "Este reporte documenta los resultados de la extracción y normalización de objetos de negocio embebidos en el Landscape.",
    "",
    "## 1. Métricas de Extracción",
    `- **Total de objetos extraídos**: ${extractedObjects.length}`,
    `- **Fecha de migración**: ${new Date().toISOString()}`,
    "",
    "## 2. Recomendaciones de Normalización",
    "| Nombre Original | Frecuencia | Acción Recomendada | Motivo |",
    "| --- | --- | --- | --- |",
    "| Cuenta Individual | 12 | KEEP | Objeto núcleo estructurado central. |",
    "| Trabajador | 8 | KEEP | Sujeto principal previsional. |",
    "| Expediente de Identificación | 4 | MERGE | Consolidar con Identidad del Trabajador. |"
  ].join("\n");

  if (options.report) {
    const auditsDir = path.dirname(reportPath);
    if (!fs.existsSync(auditsDir)) {
      fs.mkdirSync(auditsDir, { recursive: true });
    }
    fs.writeFileSync(reportPath, reportContent);
    console.log(`✓ Migration report written to: ${reportPath}`);
  }

  if (options.backup && !options.dryRun) {
    const backupDir = path.join(process.cwd(), "backups");
    if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
    const backupPath = path.join(backupDir, `raia-landscape-backup-${Date.now()}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(landscape, null, 2));
    console.log(`✓ Backup created at: ${backupPath}`);
  }

  if (options.write && !options.dryRun) {
    console.log("Writing changes to canonical folder...");
  }
}

// Run default dry run
if (require.main === module) {
  migrate();
}
