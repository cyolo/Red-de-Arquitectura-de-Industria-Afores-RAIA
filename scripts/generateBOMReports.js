const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data", "business-object-model");
const AUDITS_DIR = path.join(__dirname, "..", "docs", "audits");

function run() {
  console.log("=== Generating BOM CSV Audit Reports ===");

  if (!fs.existsSync(AUDITS_DIR)) {
    fs.mkdirSync(AUDITS_DIR, { recursive: true });
  }

  const objectsPath = path.join(DATA_DIR, "business-objects.json");
  const gapsPath = path.join(DATA_DIR, "business-object-gaps.json");

  if (!fs.existsSync(objectsPath) || !fs.existsSync(gapsPath)) {
    console.error("❌ Source JSON data files not found.");
    process.exit(1);
  }

  const objects = JSON.parse(fs.readFileSync(objectsPath, "utf8"));
  const gaps = JSON.parse(fs.readFileSync(gapsPath, "utf8"));

  // 1. Generate business-object-inventory.csv
  const inventoryHeaders = ["ID", "Slug", "NameEs", "Type", "Abstract", "Criticality", "Status", "Version"];
  const inventoryRows = objects.map((o) => [
    o.id,
    o.slug,
    `"${o.nameEs}"`,
    o.objectType,
    o.abstract ? "Yes" : "No",
    o.criticality,
    o.status,
    o.version
  ]);

  const inventoryCsvContent = [inventoryHeaders.join(","), ...inventoryRows.map((r) => r.join(","))].join("\n");
  fs.writeFileSync(path.join(AUDITS_DIR, "business-object-inventory.csv"), inventoryCsvContent);
  console.log("✓ Generated: business-object-inventory.csv");

  // 2. Generate business-object-gaps.csv
  const gapsHeaders = ["ID", "Type", "ObjectId", "Title", "Recommendation", "Status"];
  const gapsRows = gaps.map((g) => [
    g.id,
    g.gapType,
    g.businessObjectId || "None",
    `"${g.title}"`,
    `"${g.recommendation}"`,
    g.status
  ]);

  const gapsCsvContent = [gapsHeaders.join(","), ...gapsRows.map((r) => r.join(","))].join("\n");
  fs.writeFileSync(path.join(AUDITS_DIR, "business-object-gaps.csv"), gapsCsvContent);
  console.log("✓ Generated: business-object-gaps.csv");
}

run();
