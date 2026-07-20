const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "src", "data", "raia-landscape-0.1.0.json"), "utf8"));
console.log("Top-level keys:", Object.keys(data));
if (data.serviceDomains && data.serviceDomains.length > 0) {
  console.log("Sample Service Domain:", JSON.stringify(data.serviceDomains[0], null, 2));
}
