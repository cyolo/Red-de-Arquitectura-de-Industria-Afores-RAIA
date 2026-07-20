const fs = require("fs");
const path = require("path");
const { z } = require("zod");

const DATA_DIR = path.join(__dirname, "..", "src", "data");

function loadJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filename}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const PortalModuleSchema = z.object({
  id: z.string().regex(/^RAIA-MOD-\d{3}$/),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  description: z.string(),
  purpose: z.string(),
  route: z.string(),
  category: z.enum([
    "reference-architecture",
    "service-landscape",
    "business-scenarios",
    "capabilities",
    "regulation",
    "governance",
  ]),
  status: z.enum(["available", "in-development", "planned", "deprecated"]),
  icon: z.string(),
  order: z.number(),
  version: z.string().optional(),
  artifactType: z.string().optional(),
  countSource: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  ownerRole: z.string().optional(),
  validationStatus: z.string().optional(),
  roadmap: z.array(z.object({
    title: z.string(),
    status: z.enum(["not-started", "in-progress", "completed", "blocked"]),
    targetDate: z.string().optional(),
    evidence: z.string().optional(),
  })).optional(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const PortalReleaseSchema = z.object({
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  name: z.string(),
  releaseDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  status: z.enum(["draft", "published", "deprecated"]),
  regulatoryBaselineDate: z.string(),
  bianReferenceBaseline: z.string().optional(),
  summary: z.string(),
  added: z.array(z.string()),
  changed: z.array(z.string()),
  deprecated: z.array(z.string()),
  removed: z.array(z.string()),
  breakingChanges: z.array(z.string()),
});

const ArchitectureArtifactSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.enum([
    "view",
    "model",
    "catalog",
    "diagram",
    "scenario",
    "reference",
    "report",
  ]),
  route: z.string(),
  status: z.enum(["draft", "proposed", "validated", "active", "deprecated"]),
  version: z.string(),
  ownerRole: z.string().optional(),
  sourceIds: z.array(z.string()),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

let errors = [];
let warnings = [];

try {
  console.log("Starting portal data validation checks...");

  const modules = loadJson("portal-modules.json");
  const releases = loadJson("releases.json");
  const artifacts = loadJson("architecture-artifacts.json");
  const landscape = loadJson("raia-landscape-0.1.0.json");

  const sdIds = new Set(landscape.serviceDomains.map(sd => sd.id));
  const moduleIds = new Set(modules.map(m => m.id));

  // 1. Validate modules schema & relations
  modules.forEach(mod => {
    try {
      PortalModuleSchema.parse(mod);
    } catch (e) {
      errors.push(`Module ${mod.id || "unknown"} fails schema validation: ${e.message}`);
    }

    if (mod.dependencies) {
      mod.dependencies.forEach(depId => {
        if (!moduleIds.has(depId)) {
          errors.push(`Module ${mod.id} depends on non-existent module: ${depId}`);
        }
      });
    }
  });

  // 2. Validate releases schema
  releases.forEach(rel => {
    try {
      PortalReleaseSchema.parse(rel);
    } catch (e) {
      errors.push(`Release v${rel.version || "unknown"} fails schema: ${e.message}`);
    }
  });

  // 3. Validate artifacts schema & source IDs references
  artifacts.forEach(art => {
    try {
      ArchitectureArtifactSchema.parse(art);
    } catch (e) {
      errors.push(`Artifact ${art.id || "unknown"} fails schema: ${e.message}`);
    }

    art.sourceIds.forEach(srcId => {
      if (srcId.startsWith("RAIA-SD-")) {
        if (!sdIds.has(srcId)) {
          errors.push(`Artifact ${art.id} references non-existent Service Domain: ${srcId}`);
        }
      } else if (srcId.startsWith("RAIA-MOD-")) {
        if (!moduleIds.has(srcId)) {
          errors.push(`Artifact ${art.id} references non-existent Module: ${srcId}`);
        }
      }
    });
  });

  console.log("\nPortal Validation Report Summary:");
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    errors.forEach(e => console.error(`[ERROR] ${e}`));
    process.exit(1);
  } else {
    console.log("Portal data validation passed successfully!");
    process.exit(0);
  }
} catch (e) {
  console.error("Fatal error during portal validation:", e);
  process.exit(1);
}
