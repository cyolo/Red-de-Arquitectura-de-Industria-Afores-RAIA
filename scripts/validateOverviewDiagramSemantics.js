const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const DIAGRAMS_DIR = path.join(DATA_DIR, "service-landscape", "overview-diagrams");

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

let errors = [];
let warnings = [];

try {
  console.log("Starting Overview Diagrams semantic metamodel checks...");

  const manifestPath = path.join(DIAGRAMS_DIR, "overview-diagram-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error("Manifest not found.");
  }
  const manifest = loadJson(manifestPath);

  manifest.forEach((item) => {
    const fileName = `${item.id}.json`;
    const filePath = path.join(DIAGRAMS_DIR, fileName);
    if (!fs.existsSync(filePath)) return;

    const diagram = loadJson(filePath);

    // 1. Complexity boundaries check
    const totalNodes = diagram.nodes.length;
    const hasGrouping = diagram.groups && diagram.groups.length > 0;
    if (totalNodes > 45 && !hasGrouping) {
      warnings.push(`Complexity Warning: Diagram ${item.id} has ${totalNodes} nodes (> 45 limit) without structural groups/swimlanes.`);
    }

    // 2. Metamodel Node Semantics Validation
    diagram.nodes.forEach((node) => {
      const { id, nodeType, referenceId, label } = node;

      // Objects acting as actors check
      if (nodeType === "actor" && label.toLowerCase().includes("expediente")) {
        errors.push(`Semantic Error in ${item.id}: Business object "${label}" is classified as an actor (actor node: ${id}).`);
      }

      // Authorities acting as service domains check
      if (nodeType === "service-domain" && referenceId && referenceId.startsWith("ACT-")) {
        errors.push(`Semantic Error in ${item.id}: Authority/Actor reference "${referenceId}" is classified as a service-domain (node: ${id}).`);
      }

      // Authorities modeled as service domains text check
      if (nodeType === "service-domain" && (label.toLowerCase().includes("consar") || label.toLowerCase().includes("imss"))) {
        errors.push(`Semantic Error in ${item.id}: Authority "${label}" is modeled as a service-domain (node: ${id}).`);
      }
    });

    // 3. Status validation evidence
    if (diagram.status === "validated" && diagram.confidence === "low") {
      errors.push(`Quality Gate Error: Diagram ${item.id} is marked as "validated" but has "low" confidence.`);
    }
  });

} catch (err) {
  errors.push(`Validation script error: ${err.message}`);
}

// Print results
if (warnings.length > 0) {
  console.log(`\n=== Semantic Warnings (${warnings.length}) ===`);
  warnings.forEach(w => console.warn(`[WARN] ${w}`));
}

if (errors.length > 0) {
  console.error(`\n=== Semantic Errors (${errors.length}) ===`);
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  console.error("\n✗ Overview Diagrams semantic validation failed.");
  process.exit(1);
} else {
  console.log("\n✓ Overview Diagrams semantic validation succeeded.");
  process.exit(0);
}
