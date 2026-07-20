const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const DIAGRAMS_DIR = path.join(DATA_DIR, "service-landscape", "overview-diagrams");

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found at: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

let errors = [];
let warnings = [];

try {
  console.log("Starting Overview Diagrams schema checks...");

  const manifestPath = path.join(DIAGRAMS_DIR, "overview-diagram-manifest.json");
  const manifest = loadJson(manifestPath);

  if (!Array.isArray(manifest)) {
    errors.push("Manifest overview-diagram-manifest.json must be a JSON array.");
  } else {
    console.log(`Loaded manifest containing ${manifest.length} diagrams.`);

    manifest.forEach((item) => {
      // Validate manifest metadata fields
      if (!item.id || !/^RAIA-OVD-\d{3}$/.test(item.id)) {
        errors.push(`Invalid or missing ID in manifest item: ${JSON.stringify(item)}`);
      }
      if (!item.slug || !/^[a-z0-9\-]+$/.test(item.slug)) {
        errors.push(`Invalid or missing slug in manifest item: ${item.id}`);
      }
      if (!item.nameEs) {
        errors.push(`Missing nameEs in manifest item: ${item.id}`);
      }
      if (!["industry", "value-stream", "business-area", "business-domain"].includes(item.level)) {
        errors.push(`Invalid level in manifest item: ${item.id}`);
      }

      // Check corresponding file
      const fileName = `${item.id}.json`;
      const filePath = path.join(DIAGRAMS_DIR, fileName);

      try {
        const diagram = loadJson(filePath);
        console.log(`✓ Diagram file exists and parsed: ${fileName}`);

        // Validate diagram schema matches manifest
        if (diagram.id !== item.id) {
          errors.push(`Diagram ID mismatch: ${diagram.id} in ${fileName} (expected: ${item.id})`);
        }
        if (diagram.slug !== item.slug) {
          errors.push(`Diagram slug mismatch: ${diagram.slug} in ${fileName} (expected: ${item.slug})`);
        }
        if (!Array.isArray(diagram.nodes)) {
          errors.push(`Diagram nodes must be an array: ${item.id}`);
        }
        if (!Array.isArray(diagram.edges)) {
          errors.push(`Diagram edges must be an array: ${item.id}`);
        }
        if (!["left-to-right", "top-to-bottom"].includes(diagram.orientation)) {
          errors.push(`Invalid diagram orientation: ${item.id}`);
        }
      } catch (err) {
        errors.push(`Failed to parse diagram file ${fileName}: ${err.message}`);
      }
    });
  }

} catch (err) {
  errors.push(`Validation script error: ${err.message}`);
}

// Print results
if (warnings.length > 0) {
  console.log(`\n=== Warnings (${warnings.length}) ===`);
  warnings.forEach(w => console.warn(`[WARN] ${w}`));
}

if (errors.length > 0) {
  console.error(`\n=== Errors (${errors.length}) ===`);
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  console.error("\n✗ Overview Diagrams validation failed.");
  process.exit(1);
} else {
  console.log("\n✓ Overview Diagrams schema validation succeeded.");
  process.exit(0);
}
