const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../src/data/raia-landscape-0.1.0.json");

if (!fs.existsSync(dataPath)) {
  console.error("Data file not found at " + dataPath);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const isForce = args.includes("--force");

// Check if migration is already run
const alreadyMigrated = data.serviceDomains && data.serviceDomains.every(sd => sd.version === "0.1.0" && sd.status === "proposed");

if (alreadyMigrated && !isForce) {
  console.log("Migration 001 already applied (all domains are already v0.1.0 / proposed). Use --force to re-run.");
  process.exit(0);
}

console.log("Migration 001: Aligning data to RAIA 0.1.0 (proposed / conceptual)...");
if (isDryRun) {
  console.log("[DRY RUN] No changes will be written to disk.");
}

// Backup
if (!isDryRun) {
  const backupPath = dataPath + ".bak";
  fs.copyFileSync(dataPath, backupPath);
  console.log(`Backup created at: ${backupPath}`);
}

let updatedAreas = 0;
let updatedDomains = 0;
let updatedServices = 0;

if (data.businessAreas) {
  data.businessAreas = data.businessAreas.map((ba) => {
    if (ba.version !== "0.1.0" || ba.status !== "proposed") {
      ba.status = "proposed";
      ba.version = "0.1.0";
      updatedAreas++;
    }
    return ba;
  });
}

if (data.businessDomains) {
  data.businessDomains = data.businessDomains.map((bd) => {
    if (bd.version !== "0.1.0" || bd.status !== "proposed") {
      bd.status = "proposed";
      bd.version = "0.1.0";
      updatedDomains++;
    }
    return bd;
  });
}

if (data.serviceDomains) {
  data.serviceDomains = data.serviceDomains.map((sd) => {
    let changed = false;
    if (sd.status !== "proposed") { sd.status = "proposed"; changed = true; }
    if (sd.maturity !== "conceptual") { sd.maturity = "conceptual"; changed = true; }
    if (sd.version !== "0.1.0") { sd.version = "0.1.0"; changed = true; }
    
    if (sd.regulations) {
      sd.regulations = sd.regulations.map((reg) => {
        if (reg.validationStatus !== "pending-validation") {
          reg.validationStatus = "pending-validation";
          changed = true;
        }
        return reg;
      });
    }
    
    if (changed) {
      updatedServices++;
    }
    return sd;
  });
}

if (isDryRun) {
  console.log(`[DRY RUN] Would update: ${updatedAreas} Areas, ${updatedDomains} Domains, ${updatedServices} Services.`);
} else {
  console.log(`Saving data file. Updated: ${updatedAreas} Areas, ${updatedDomains} Domains, ${updatedServices} Services.`);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
  console.log("Done!");
}
