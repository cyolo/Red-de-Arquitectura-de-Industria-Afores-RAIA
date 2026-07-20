const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const IA_DIR = path.join(DATA_DIR, "information-architecture");

function loadJson(filename) {
  const filePath = path.join(IA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required IA file missing: ${filename}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function runValidation() {
  console.log("=== STARTING INFORMATION ARCHITECTURE VALIDATION ===");

  // 1. Load Landscape to validate references
  const landscapePath = path.join(DATA_DIR, "raia-landscape-0.1.0.json");
  if (!fs.existsSync(landscapePath)) {
    throw new Error("Landscape data file not found!");
  }
  const landscape = JSON.parse(fs.readFileSync(landscapePath, "utf8"));
  const sdIds = new Set(landscape.serviceDomains.map((sd) => sd.id));

  // 2. Load IA Files
  const domains = loadJson("information-domains.json");
  const concepts = loadJson("information-concepts.json");
  const objects = loadJson("business-objects.json");
  const attributes = loadJson("information-attributes.json");
  const assets = loadJson("information-assets.json");
  const products = loadJson("data-products.json");
  const assignments = loadJson("ownership-assignments.json");
  const lineage = loadJson("lineage-edges.json");
  const quality = loadJson("quality-rules.json");
  const classifications = loadJson("classifications.json");
  const lifecycle = loadJson("lifecycle-policies.json");
  const retention = loadJson("retention-policies.json");
  const gaps = loadJson("information-architecture-gaps.json");

  const domainIds = new Set(domains.map((d) => d.id));
  const conceptIds = new Set(concepts.map((c) => c.id));
  const objectIds = new Set(objects.map((o) => o.id));
  const attributeIds = new Set(attributes.map((a) => a.id));
  const assetIds = new Set(assets.map((a) => a.id));
  const productIds = new Set(products.map((p) => p.id));
  const classificationIds = new Set(classifications.map((c) => c.id));
  const qualityIds = new Set(quality.map((q) => q.id));

  console.log(`Loaded ${domains.length} domains, ${concepts.length} concepts, ${objects.length} business objects.`);

  // 3. Structural Semantics & Reference Validation

  // Domains Validation
  domains.forEach((dom) => {
    if (!/^RAIA-IDOM-\d{3}$/.test(dom.id)) {
      throw new Error(`Invalid Domain ID format: ${dom.id}`);
    }
    // Check service domains referential integrity
    dom.serviceDomainIds.forEach((sdId) => {
      if (!sdIds.has(sdId)) {
        throw new Error(`Domain ${dom.id} references non-existent Service Domain: ${sdId}`);
      }
    });
  });

  // Concepts Validation
  concepts.forEach((c) => {
    if (!/^RAIA-ICON-\d{3}$/.test(c.id)) {
      throw new Error(`Invalid Concept ID format: ${c.id}`);
    }
    if (!domainIds.has(c.informationDomainId)) {
      throw new Error(`Concept ${c.id} references non-existent Domain: ${c.informationDomainId}`);
    }
  });

  // Business Objects Validation
  objects.forEach((o) => {
    if (!/^RAIA-BO-\d{3}$/.test(o.id)) {
      throw new Error(`Invalid Business Object ID format: ${o.id}`);
    }
    if (!domainIds.has(o.informationDomainId)) {
      throw new Error(`Business Object ${o.id} references non-existent Domain: ${o.informationDomainId}`);
    }
    o.producerServiceDomainIds.forEach((sdId) => {
      if (!sdIds.has(sdId)) {
        throw new Error(`Business Object ${o.id} references non-existent Producer SD: ${sdId}`);
      }
    });
  });

  // Lineage Validation
  lineage.forEach((edge) => {
    if (edge.sourceType === "service-domain" && !sdIds.has(edge.sourceId)) {
      throw new Error(`Lineage edge ${edge.id} references non-existent source SD: ${edge.sourceId}`);
    }
    if (edge.targetType === "business-object" && !objectIds.has(edge.targetId)) {
      throw new Error(`Lineage edge ${edge.id} references non-existent target BO: ${edge.targetId}`);
    }
  });

  // Governance Assignments Validation
  assignments.forEach((a) => {
    if (a.targetType === "business-object" && !objectIds.has(a.targetId)) {
      throw new Error(`Ownership assignment ${a.id} references non-existent BO: ${a.targetId}`);
    }
  });

  console.log("✓ All Information Architecture datasets validated successfully!");
}

if (require.main === module) {
  try {
    runValidation();
  } catch (err) {
    console.error(`✗ Validation failed: ${err.message}`);
    process.exit(1);
  }
}
