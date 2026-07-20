const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data", "reference-model");

function validate() {
  console.log("=== Running Industry Reference Model Verification ===");

  const modelPath = path.join(DATA_DIR, "reference-model.json");
  const manifestPath = path.join(DATA_DIR, "viewpoint-manifest.json");
  const rulesPath = path.join(DATA_DIR, "composition-rules.json");
  const traceabilityPath = path.join(DATA_DIR, "cross-model-traceability.json");
  const gapsPath = path.join(DATA_DIR, "reference-model-gaps.json");
  const baselinePath = path.join(DATA_DIR, "reference-model-baseline.json");

  if (
    !fs.existsSync(modelPath) ||
    !fs.existsSync(manifestPath) ||
    !fs.existsSync(rulesPath) ||
    !fs.existsSync(traceabilityPath) ||
    !fs.existsSync(gapsPath) ||
    !fs.existsSync(baselinePath)
  ) {
    console.error("❌ Essential Reference Model JSON datasets are missing.");
    process.exit(1);
  }

  const viewpoints = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const traceability = JSON.parse(fs.readFileSync(traceabilityPath, "utf8"));

  let errors = 0;
  let warnings = 0;

  // 1. Viewpoint ID unique check
  const seenViewpoints = new Set();
  viewpoints.forEach((v) => {
    if (seenViewpoints.has(v.id)) {
      console.error(`❌ Viewpoint duplicado ID: ${v.id}`);
      errors++;
    }
    seenViewpoints.add(v.id);
  });

  // 2. Traceability source / target validation
  traceability.forEach((t) => {
    if (!t.source || !t.source.artifactId || !t.source.artifactType) {
      console.error(`❌ Relación de trazabilidad [${t.id}] tiene un origen inválido.`);
      errors++;
    }
    if (!t.target || !t.target.artifactId || !t.target.artifactType) {
      console.error(`❌ Relación de trazabilidad [${t.id}] tiene un destino inválido.`);
      errors++;
    }
    if (!t.provenance) {
      console.error(`❌ Relación [${t.id}] no tiene procedencia (provenance).`);
      errors++;
    }
  });

  console.log(`\nVerificación de Reference Model concluida con: ${errors} errores y ${warnings} advertencias.`);
  if (errors > 0) {
    process.exit(1);
  }
}

validate();
