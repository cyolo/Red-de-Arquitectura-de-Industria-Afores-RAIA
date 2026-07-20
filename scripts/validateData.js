const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");

function loadJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filename}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

let errors = [];
let warnings = [];

try {
  console.log("Starting data validation checks...");

  // Load files
  const raia = loadJson("raia-landscape-0.1.0.json");
  const relations = loadJson("relations-0.1.0.json");
  const regulations = loadJson("regulations-0.1.0.json");
  const scenarios = loadJson("scenarios-0.1.0.json");

  const { businessAreas, businessDomains, serviceDomains } = raia;

  console.log(`Loaded:
- ${businessAreas.length} Business Areas
- ${businessDomains.length} Business Domains
- ${serviceDomains.length} Service Domains
- ${relations.length} Relationships
- ${regulations.length} Regulations
- ${scenarios.length} Business Scenarios`);

  // 1. Check ID Duplication and format
  const areaIds = new Set();
  const domainIds = new Set();
  const sdIds = new Set();
  const allIds = new Set();

  businessAreas.forEach(ba => {
    if (allIds.has(ba.id)) errors.push(`Duplicate ID found: ${ba.id} (Business Area)`);
    if (!/^RAIA-BA-\d{3}$/.test(ba.id)) errors.push(`Invalid Business Area ID format: ${ba.id}`);
    areaIds.add(ba.id);
    allIds.add(ba.id);
  });

  businessDomains.forEach(bd => {
    if (allIds.has(bd.id)) errors.push(`Duplicate ID found: ${bd.id} (Business Domain)`);
    if (!/^RAIA-BD-\d{3}$/.test(bd.id)) errors.push(`Invalid Business Domain ID format: ${bd.id}`);
    domainIds.add(bd.id);
    allIds.add(bd.id);
  });

  serviceDomains.forEach(sd => {
    if (allIds.has(sd.id)) errors.push(`Duplicate ID found: ${sd.id} (Service Domain)`);
    if (!/^RAIA-SD-\d{3}$/.test(sd.id)) errors.push(`Invalid Service Domain ID format: ${sd.id}`);
    sdIds.add(sd.id);
    allIds.add(sd.id);
  });

  // 2. Check Slug Duplication
  const allSlugs = new Set();
  [...businessAreas, ...businessDomains, ...serviceDomains].forEach(entity => {
    if (allSlugs.has(entity.slug)) {
      warnings.push(`Duplicate slug found: ${entity.slug} (${entity.id})`);
    }
    allSlugs.add(entity.slug);
  });

  // 3. Detect domains without Area
  businessDomains.forEach(bd => {
    if (!areaIds.has(bd.businessAreaId)) {
      errors.push(`Orphan Business Domain: ${bd.id} references non-existent Business Area ${bd.businessAreaId}`);
    }
  });

  // 4. Detect Service Domains without Business Domain
  serviceDomains.forEach(sd => {
    if (!domainIds.has(sd.businessDomainId)) {
      errors.push(`Orphan Service Domain: ${sd.id} references non-existent Business Domain ${sd.businessDomainId}`);
    }
    if (!areaIds.has(sd.businessAreaId)) {
      errors.push(`Service Domain ${sd.id} references non-existent Business Area ${sd.businessAreaId}`);
    }
  });

  // 5. Detect orphaned relationships (source or target doesn't exist)
  relations.forEach(rel => {
    if (!sdIds.has(rel.sourceId)) {
      errors.push(`Relationship ${rel.id} has invalid sourceId: ${rel.sourceId}`);
    }
    if (!sdIds.has(rel.targetId)) {
      errors.push(`Relationship ${rel.id} has invalid targetId: ${rel.targetId}`);
    }
  });

  // 6. Detect non-existent regulatory references
  const regulationIds = new Set(regulations.map(r => r.id));
  serviceDomains.forEach(sd => {
    sd.regulations.forEach(regRef => {
      if (!regulationIds.has(regRef.id)) {
        warnings.push(`Service Domain ${sd.id} references regulation ID ${regRef.id} which is not in regulations database`);
      }
    });
  });

  // 7. Check Business Scenario steps references
  scenarios.forEach(scen => {
    scen.steps.forEach(step => {
      if (!sdIds.has(step.sourceId)) {
        errors.push(`Scenario ${scen.id} Step ${step.stepNumber} has invalid sourceId: ${step.sourceId}`);
      }
      if (!sdIds.has(step.targetId)) {
        errors.push(`Scenario ${scen.id} Step ${step.stepNumber} has invalid targetId: ${step.targetId}`);
      }
    });
  });

  // Report validation findings
  console.log("\nValidation Report Summary:");
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (warnings.length > 0) {
    console.log("\nWarnings:");
    warnings.forEach(w => console.warn(`[WARNING] ${w}`));
  }

  if (errors.length > 0) {
    console.log("\nCritical Errors:");
    errors.forEach(e => console.error(`[ERROR] ${e}`));
    console.error("\nData validation failed. Build will be blocked.");
    process.exit(1);
  } else {
    console.log("\nData validation passed successfully! No errors found.");
    process.exit(0);
  }
} catch (e) {
  console.error("Fatal error during data validation:", e);
  process.exit(1);
}
