const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const APP_DIR = path.join(__dirname, "..", "src", "app");

function loadJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filename}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

let errors = [];

try {
  console.log("Starting routes validation checks...");

  const modules = loadJson("portal-modules.json");

  // Validate portal modules routes exist as Next.js app pages
  modules.forEach(mod => {
    const route = mod.route;
    if (route === "/") {
      const pagePath = path.join(APP_DIR, "page.tsx");
      if (!fs.existsSync(pagePath)) {
        errors.push(`Home route page does not exist: ${pagePath}`);
      }
    } else {
      const relativeFolder = route.startsWith("/") ? route.slice(1) : route;
      const pagePath = path.join(APP_DIR, relativeFolder, "page.tsx");
      const pagePathTs = path.join(APP_DIR, relativeFolder, "page.ts");
      
      if (!fs.existsSync(pagePath) && !fs.existsSync(pagePathTs)) {
        errors.push(`Module ${mod.id} specifies route ${route} but neither ${pagePath} nor ${pagePathTs} exists.`);
      }
    }
  });

  // Verify service domain page template exists
  const dynamicTemplatePath = path.join(APP_DIR, "service-domains", "[slug]", "page.tsx");
  if (!fs.existsSync(dynamicTemplatePath)) {
    errors.push(`Dynamic service domains template page does not exist: ${dynamicTemplatePath}`);
  }

  console.log("\nRoutes Validation Report Summary:");
  console.log(`Errors: ${errors.length}`);

  if (errors.length > 0) {
    errors.forEach(e => console.error(`[ERROR] ${e}`));
    process.exit(1);
  } else {
    console.log("Routes validation passed successfully!");
    process.exit(0);
  }
} catch (e) {
  console.error("Fatal error during routes validation:", e);
  process.exit(1);
}
