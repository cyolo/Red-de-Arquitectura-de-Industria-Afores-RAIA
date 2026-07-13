const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/data/raia-landscape-0.1.0.json");

if (!fs.existsSync(dataPath)) {
  console.error("Data file not found at " + dataPath);
  process.exit(1);
}

console.log("Reading data file...");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

let updatedAreas = 0;
let updatedDomains = 0;
let updatedServices = 0;

if (data.businessAreas) {
  data.businessAreas = data.businessAreas.map((ba) => {
    ba.status = "proposed";
    ba.version = "0.1.0";
    updatedAreas++;
    return ba;
  });
}

if (data.businessDomains) {
  data.businessDomains = data.businessDomains.map((bd) => {
    bd.status = "proposed";
    bd.version = "0.1.0";
    updatedDomains++;
    return bd;
  });
}

if (data.serviceDomains) {
  data.serviceDomains = data.serviceDomains.map((sd) => {
    sd.status = "proposed";
    sd.maturity = "conceptual";
    sd.version = "0.1.0";
    
    if (sd.regulations) {
      sd.regulations = sd.regulations.map((reg) => {
        reg.validationStatus = "pending-validation";
        return reg;
      });
    }
    
    updatedServices++;
    return sd;
  });
}

console.log(`Saving data file. Updated: ${updatedAreas} Areas, ${updatedDomains} Domains, ${updatedServices} Services.`);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
console.log("Done!");
