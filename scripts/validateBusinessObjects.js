const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data", "business-object-model");

function validate() {
  console.log("=== Running Business Object Model Verification ===");

  const objectsPath = path.join(DATA_DIR, "business-objects.json");
  const attributesPath = path.join(DATA_DIR, "attributes.json");
  const relationshipsPath = path.join(DATA_DIR, "relationships.json");

  if (!fs.existsSync(objectsPath) || !fs.existsSync(attributesPath) || !fs.existsSync(relationshipsPath)) {
    console.error("❌ Essential Business Object JSON datasets are missing.");
    process.exit(1);
  }

  const objects = JSON.parse(fs.readFileSync(objectsPath, "utf8"));
  const attributes = JSON.parse(fs.readFileSync(attributesPath, "utf8"));
  const relationships = JSON.parse(fs.readFileSync(relationshipsPath, "utf8"));

  let errors = 0;
  let warnings = 0;

  // 1. Verify ID and Slug Uniqueness
  const seenIds = new Set();
  const seenSlugs = new Set();

  objects.forEach((o) => {
    if (seenIds.has(o.id)) {
      console.error(`❌ Objeto duplicado ID detectado: ${o.id}`);
      errors++;
    }
    if (seenSlugs.has(o.slug)) {
      console.error(`❌ Objeto duplicado slug detectado: ${o.slug}`);
      errors++;
    }
    seenIds.add(o.id);
    seenSlugs.add(o.slug);
  });

  // 2. Specializations Cycle Verification
  objects.forEach((o) => {
    if (o.specializationOfId) {
      let currentId = o.specializationOfId;
      const path = [o.id];
      
      while (currentId) {
        if (path.includes(currentId)) {
          console.error(`❌ Bucle cíclico detectado en especializaciones: ${path.join(" -> ")} -> ${currentId}`);
          errors++;
          break;
        }
        path.push(currentId);
        const parent = objects.find((p) => p.id === currentId);
        currentId = parent ? parent.specializationOfId : null;
      }
    }
  });

  // 3. Attribute Reference Verification
  attributes.forEach((a) => {
    if (!seenIds.has(a.businessObjectId)) {
      console.error(`❌ Atributo [${a.id}] hace referencia a objeto inexistente: ${a.businessObjectId}`);
      errors++;
    }
  });

  // 4. Relationship Reference Verification
  relationships.forEach((r) => {
    if (!seenIds.has(r.sourceBusinessObjectId)) {
      console.error(`❌ Relación [${r.id}] hace referencia a objeto origen inexistente: ${r.sourceBusinessObjectId}`);
      errors++;
    }
    if (!seenIds.has(r.targetBusinessObjectId)) {
      console.error(`❌ Relación [${r.id}] hace referencia a objeto destino inexistente: ${r.targetBusinessObjectId}`);
      errors++;
    }
  });

  console.log(`\nVerificación de Objetos concluida con: ${errors} errores y ${warnings} advertencias.`);
  if (errors > 0) {
    process.exit(1);
  }
}

validate();
