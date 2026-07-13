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
  console.log("Starting business scenarios validation checks...");

  const scenarios = loadJson("scenarios-0.1.0.json");
  const landscape = loadJson("raia-landscape-0.1.0.json");

  const sdIds = new Set(landscape.serviceDomains.map(sd => sd.id));
  const scenarioIds = new Set();

  scenarios.forEach(scen => {
    // Check unique scenario ID
    if (scenarioIds.has(scen.id)) {
      errors.push(`Duplicate Scenario ID found: ${scen.id}`);
    }
    scenarioIds.add(scen.id);

    // Validate steps sequence
    const stepNumbers = scen.steps.map(s => s.stepNumber);
    
    // Check if sorted, continuous starting from 1
    stepNumbers.forEach((num, idx) => {
      const expectedStep = idx + 1;
      if (num !== expectedStep) {
        errors.push(`Scenario ${scen.id} step sequence broken: expected step ${expectedStep} but got stepNumber ${num}`);
      }
    });

    // Validate triggering reference
    scen.steps.forEach(step => {
      if (!sdIds.has(step.sourceId)) {
        errors.push(`Scenario ${scen.id} Step ${step.stepNumber} references non-existent source Service Domain ID: ${step.sourceId}`);
      }
      if (!sdIds.has(step.targetId)) {
        errors.push(`Scenario ${scen.id} Step ${step.stepNumber} references non-existent target Service Domain ID: ${step.targetId}`);
      }
    });
  });

  console.log("\nScenarios Validation Report Summary:");
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    errors.forEach(e => console.error(`[ERROR] ${e}`));
    process.exit(1);
  } else {
    console.log("Business scenarios validation passed successfully!");
    process.exit(0);
  }
} catch (e) {
  console.error("Fatal error during scenarios validation:", e);
  process.exit(1);
}
