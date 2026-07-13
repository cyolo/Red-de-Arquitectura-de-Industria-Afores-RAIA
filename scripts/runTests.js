const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");

function loadJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`[PASS] ${name}`);
    passed++;
  } catch (error) {
    console.error(`[FAIL] ${name}`);
    console.error(error);
    failed++;
  }
}

console.log("Running RAIA test suite...\n");

// Load seed data for testing
const raia = loadJson("raia-landscape-0.1.0.json");
const relations = loadJson("relations-0.1.0.json");
const regulations = loadJson("regulations-0.1.0.json");
const scenarios = loadJson("scenarios-0.1.0.json");
const { businessAreas, businessDomains, serviceDomains } = raia;

// 1. Validation of schemas & format
test("Schema and ID validation", () => {
  businessAreas.forEach(ba => {
    if (!ba.id.startsWith("RAIA-BA-")) throw new Error(`Invalid BA ID: ${ba.id}`);
    if (!ba.nameEs) throw new Error(`Missing name on BA: ${ba.id}`);
  });
  businessDomains.forEach(bd => {
    if (!bd.id.startsWith("RAIA-BD-")) throw new Error(`Invalid BD ID: ${bd.id}`);
    if (!bd.businessAreaId.startsWith("RAIA-BA-")) throw new Error(`Invalid parent BA ID: ${bd.businessAreaId}`);
  });
  serviceDomains.forEach(sd => {
    if (!sd.id.startsWith("RAIA-SD-")) throw new Error(`Invalid SD ID: ${sd.id}`);
    if (!sd.businessAreaId.startsWith("RAIA-BA-")) throw new Error(`Invalid BA reference: ${sd.businessAreaId}`);
    if (!sd.businessDomainId.startsWith("RAIA-BD-")) throw new Error(`Invalid BD reference: ${sd.businessDomainId}`);
    if (!sd.focusObject || !sd.focusObject.name) throw new Error(`Missing Focus Object in SD: ${sd.id}`);
  });
});

// 2. ID Duplications
test("ID duplication detection", () => {
  const allIds = new Set();
  [...businessAreas, ...businessDomains, ...serviceDomains].forEach(entity => {
    if (allIds.has(entity.id)) {
      throw new Error(`Duplicate ID found: ${entity.id}`);
    }
    allIds.add(entity.id);
  });
});

// 3. Relationships integrity
test("Relationships integrity", () => {
  const sdIds = new Set(serviceDomains.map(sd => sd.id));
  relations.forEach(rel => {
    if (!sdIds.has(rel.sourceId)) throw new Error(`Relation ${rel.id} has orphan source ID: ${rel.sourceId}`);
    if (!sdIds.has(rel.targetId)) throw new Error(`Relation ${rel.id} has orphan target ID: ${rel.targetId}`);
  });
});

// 4. Búsqueda logic
test("Fuzzy search simulation", () => {
  const searchMock = (query) => {
    const q = query.toLowerCase();
    return serviceDomains.filter(sd => 
      sd.id.toLowerCase().includes(q) ||
      sd.nameEs.toLowerCase().includes(q) ||
      sd.summary.toLowerCase().includes(q) ||
      sd.capabilities.some(c => c.toLowerCase().includes(q))
    );
  };

  const results = searchMock("Traspaso");
  const foundTraspaso = results.some(sd => sd.id === "RAIA-SD-045");
  if (!foundTraspaso) throw new Error("Search failed to find 'Traspaso de Cuenta' by name query");
});

// 5. Filtros logic
test("Filter matches simulation", () => {
  const filterMock = (filters) => {
    return serviceDomains.filter(sd => {
      if (filters.area && sd.businessAreaId !== filters.area) return false;
      if (filters.domain && sd.businessDomainId !== filters.domain) return false;
      if (filters.status && sd.status !== filters.status) return false;
      if (filters.actor) {
        const hasActor = sd.accountableActors.includes(filters.actor) || sd.participatingActors.includes(filters.actor);
        if (!hasActor) return false;
      }
      return true;
    });
  };

  const activeRes = filterMock({ status: "proposed" });
  if (activeRes.length === 0) throw new Error("Filter by status 'proposed' returned empty results");
  
  const areaRes = filterMock({ area: "RAIA-BA-004" });
  areaRes.forEach(sd => {
    if (sd.businessAreaId !== "RAIA-BA-004") throw new Error(`Filter by area failed. Got: ${sd.businessAreaId}`);
  });
});

// 6. Layout determinista
test("Layout determinism configuration", () => {
  const zoneMapping = {
    "RAIA-BA-008": "middle-right-bottom",
    "RAIA-BA-003": "middle-right-top",
    "RAIA-BA-004": "center-left",
    "RAIA-BA-005": "center-middle",
    "RAIA-BA-006": "center-right",
    "RAIA-BA-007": "bottom-center",
    "RAIA-BA-001": "top-left",
    "RAIA-BA-002": "top-right",
    "RAIA-BA-009": "center-top",
    "RAIA-BA-010": "middle-left",
    "RAIA-BA-011": "bottom-full"
  };

  businessAreas.forEach(ba => {
    const expectedZone = zoneMapping[ba.id];
    if (ba.layoutZone !== expectedZone) {
      throw new Error(`Deterministic layout mismatched for ${ba.id}. Expected: ${expectedZone}, Got: ${ba.layoutZone}`);
    }
  });
});

// 7. Serialización de query parameters
test("Query parameters serialization simulation", () => {
  const serializeParams = (selectedId, filters) => {
    const params = new URLSearchParams();
    if (selectedId) params.set("selected", selectedId);
    Object.entries(filters).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });
    return params.toString();
  };

  const queryStr = serializeParams("RAIA-SD-045", { area: "RAIA-BA-004", status: "proposed" });
  if (!queryStr.includes("selected=RAIA-SD-045")) throw new Error("Missing selection param");
  if (!queryStr.includes("area=RAIA-BA-004")) throw new Error("Missing area filter param");
  if (!queryStr.includes("status=proposed")) throw new Error("Missing status filter param");
});

console.log(`\nTest results: ${passed} passed, ${failed} failed.`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
