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
  console.log("Starting Overview Diagrams reference checks...");

  // Load canonical references datasets
  const landscape = loadJson(path.join(DATA_DIR, "raia-landscape-0.1.0.json"));
  const actors = loadJson(path.join(DATA_DIR, "actors-0.2.0.json"));
  const scenarios = loadJson(path.join(DATA_DIR, "scenarios-0.1.0.json"));

  const validSdIds = new Set(landscape.serviceDomains.map((sd) => sd.id));
  const validActorIds = new Set(actors.map((act) => act.id));
  const validScenarioIds = new Set(scenarios.map((scen) => scen.id));

  console.log(`Loaded reference sets: ${validSdIds.size} SDs, ${validActorIds.size} Actors, ${validScenarioIds.size} Scenarios.`);

  const manifestPath = path.join(DIAGRAMS_DIR, "overview-diagram-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error("Manifest not found.");
  }
  const manifest = loadJson(manifestPath);

  // Validate manifest level scenario references
  manifest.forEach((m) => {
    m.scenarioIds.forEach((scenId) => {
      if (!validScenarioIds.has(scenId)) {
        errors.push(`Reference Error in manifest: Diagram ${m.id} references non-existent Scenario ID: ${scenId}`);
      }
    });
  });

  // Validate internal references for each diagram
  manifest.forEach((item) => {
    const fileName = `${item.id}.json`;
    const filePath = path.join(DIAGRAMS_DIR, fileName);
    if (!fs.existsSync(filePath)) return;

    const diagram = loadJson(filePath);
    const diagramNodeIds = new Set(diagram.nodes.map((n) => n.id));

    // Check node references
    diagram.nodes.forEach((node) => {
      const { id, nodeType, referenceId, label } = node;

      if (nodeType === "service-domain") {
        if (!referenceId) {
          errors.push(`Reference Error in ${item.id}: Node "${label}" of type service-domain lacks a referenceId.`);
        } else if (!validSdIds.has(referenceId)) {
          errors.push(`Reference Error in ${item.id}: Node "${label}" references non-existent Service Domain: ${referenceId}`);
        }
      }

      if (["actor", "organization", "authority"].includes(nodeType)) {
        if (!referenceId) {
          errors.push(`Reference Error in ${item.id}: Node "${label}" of type ${nodeType} lacks a referenceId.`);
        } else if (!validActorIds.has(referenceId)) {
          errors.push(`Reference Error in ${item.id}: Node "${label}" references non-existent Actor: ${referenceId}`);
        }
      }
    });

    // Check edge references
    diagram.edges.forEach((edge) => {
      const { id, sourceNodeId, targetNodeId, description } = edge;

      if (!diagramNodeIds.has(sourceNodeId)) {
        errors.push(`Reference Error in ${item.id}: Edge "${id}" references non-existent source node: ${sourceNodeId}`);
      }
      if (!diagramNodeIds.has(targetNodeId)) {
        errors.push(`Reference Error in ${item.id}: Edge "${id}" references non-existent target node: ${targetNodeId}`);
      }
    });
  });

} catch (err) {
  errors.push(`Validation script error: ${err.message}`);
}

// Print results
if (warnings.length > 0) {
  console.log(`\n=== Reference Warnings (${warnings.length}) ===`);
  warnings.forEach(w => console.warn(`[WARN] ${w}`));
}

if (errors.length > 0) {
  console.error(`\n=== Reference Errors (${errors.length}) ===`);
  errors.forEach(e => console.error(`[ERROR] ${e}`));
  console.error("\n✗ Overview Diagrams references validation failed.");
  process.exit(1);
} else {
  console.log("\n✓ Overview Diagrams references validation succeeded.");
  process.exit(0);
}
