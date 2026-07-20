import fs from "fs";
import path from "path";

// Paths
const DATA_DIR = path.join(__dirname, "..", "..", "src", "data");
const OUT_DIR = path.join(DATA_DIR, "information-architecture");

interface EmbeddedBO {
  id: string;
  name: string;
  role: string;
}

interface ServiceDomain {
  id: string;
  nameEs: string;
  businessObjects?: EmbeddedBO[];
  businessAreaId: string;
  businessDomainId: string;
}

function runMigration() {
  console.log("Starting Information Architecture canonical migration...");
  
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const landscapePath = path.join(DATA_DIR, "raia-landscape-0.1.0.json");
  if (!fs.existsSync(landscapePath)) {
    console.error("Landscape JSON not found at:", landscapePath);
    process.exit(1);
  }

  const landscape = JSON.parse(fs.readFileSync(landscapePath, "utf8"));
  const serviceDomains: ServiceDomain[] = landscape.serviceDomains || [];
  
  console.log(`Loaded ${serviceDomains.length} Service Domains.`);

  const canonicalObjects: any[] = [];
  const conceptMap = new Map<string, any>();
  const objectMap = new Map<string, any>();

  // Extract embedded business objects
  serviceDomains.forEach((sd) => {
    const bos = sd.businessObjects || [];
    bos.forEach((bo) => {
      // Normalize name
      const normalizedName = bo.name.trim();
      
      // Determine logical category based on SD and Area IDs
      let domId = "RAIA-IDOM-001"; // default Persons
      if (sd.id.startsWith("RAIA-SD-02") || sd.id.startsWith("RAIA-SD-03")) {
        domId = "RAIA-IDOM-003"; // Cuenta Individual
      } else if (sd.id.startsWith("RAIA-SD-04") || sd.id.startsWith("RAIA-SD-05")) {
        domId = "RAIA-IDOM-005"; // Recaudación
      } else if (sd.id.startsWith("RAIA-SD-06") || sd.id.startsWith("RAIA-SD-07") || sd.id.startsWith("RAIA-SD-08")) {
        domId = "RAIA-IDOM-006"; // Inversión
      } else if (sd.id.startsWith("RAIA-SD-13") || sd.id.startsWith("RAIA-SD-14")) {
        domId = "RAIA-IDOM-007"; // Retiros
      } else if (sd.id.startsWith("RAIA-SD-15")) {
        domId = "RAIA-IDOM-008"; // Pensiones
      }

      // Format canonical object ID: e.g. RAIA-BO-XXX
      // We can map unique names to sequential IDs
      let cleanId = bo.id;
      if (cleanId.includes("-01")) {
        // Strip sub-IDs like RAIA-BO-001-01 to RAIA-BO-001
        const parts = cleanId.split("-");
        if (parts.length >= 4) {
          cleanId = `${parts[0]}-${parts[1]}-${parts[2]}`;
        }
      }

      if (!objectMap.has(normalizedName)) {
        const canonicalObj = {
          id: cleanId,
          slug: normalizedName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
          nameEs: normalizedName,
          aliases: [],
          description: `Objeto lógico canónico de negocio representando: ${normalizedName}.`,
          businessMeaning: `Semántica operativa de la información de ${normalizedName} en el SAR.`,
          informationDomainId: domId,
          conceptIds: [],
          objectType: bo.role === "focus" ? "master" : "transaction",
          identifierAttributeIds: [],
          attributeIds: [],
          childObjectIds: [],
          relatedObjectIds: [],
          producerServiceDomainIds: [sd.id],
          consumerServiceDomainIds: [],
          authoritativeServiceDomainIds: bo.role === "focus" ? [sd.id] : [],
          businessScenarioIds: [],
          businessEventIds: [],
          classificationIds: ["RAIA-ICLAS-002"], // Uso interno default
          qualityRuleIds: [],
          retentionPolicyIds: [],
          regulatoryMappingIds: [],
          controlIds: [],
          status: "proposed",
          version: "0.1.0",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        objectMap.set(normalizedName, canonicalObj);
        canonicalObjects.push(canonicalObj);
      } else {
        const existing = objectMap.get(normalizedName);
        if (!existing.producerServiceDomainIds.includes(sd.id)) {
          existing.producerServiceDomainIds.push(sd.id);
        }
      }
    });
  });

  console.log(`Extracted ${canonicalObjects.length} unique canonical Business Objects.`);

  // Write files
  fs.writeFileSync(path.join(OUT_DIR, "business-objects.json"), JSON.stringify(canonicalObjects, null, 2));
  console.log("Successfully exported business-objects.json");
}

if (require.main === module) {
  runMigration();
}
