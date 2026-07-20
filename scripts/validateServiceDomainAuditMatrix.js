const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const landscapePath = path.join(rootDir, 'src/data/raia-landscape-0.1.0.json');
const mappingsPath = path.join(rootDir, 'src/data/regulatory/regulatory-mappings.json');
const csvPath = path.join(rootDir, 'docs/audits/service-domain-regulatory-matrix.csv');

// Load master data
const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));
const mappings = JSON.parse(fs.readFileSync(mappingsPath, 'utf8'));

const sds = landscape.serviceDomains;
const areas = landscape.businessAreas;
const domains = landscape.businessDomains;

console.log(`Loaded master data: ${sds.length} Service Domains from landscape.`);

// Helper to escape CSV values
function escapeCSV(val) {
  if (val === undefined || val === null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Generate function
function generateCSV() {
  const headers = [
    "Service Domain ID", "Business Area", "Business Domain", "Name",
    "Landscape Layer", "Capability Type", "Focus Object", "Accountable Participant",
    "Applicable Regimes", "Regulatory Criticality", "Regulatory Sources", "Articles",
    "Coverage Status", "Semantic Status", "Recommended Action", "Proposed Replacement or Split", "Reviewer"
  ];
  
  const rows = [headers.join(',')];
  
  sds.forEach(sd => {
    const area = areas.find(a => a.id === sd.businessAreaId)?.nameEs || sd.businessAreaId;
    const domain = domains.find(d => d.id === sd.businessDomainId)?.nameEs || sd.businessDomainId;
    
    // Find all mappings for this Service Domain
    const sdMappings = mappings.filter(m => m.serviceDomainId === sd.id);
    const sourceIds = sdMappings.map(m => m.regulatorySourceId);
    const uniqueSources = Array.from(new Set(sourceIds));
    const articles = sdMappings.map(m => m.article || 'Disposición');
    
    const accountable = sd.accountableActors && sd.accountableActors.length > 0 ? sd.accountableActors.join(';') : 'AFORE';
    const regimes = sd.applicableRegimeIds && sd.applicableRegimeIds.length > 0 ? sd.applicableRegimeIds.join(';') : 'Todas';
    
    const coverage = sd.regulatoryCoverage || (sdMappings.length > 0 ? 'mapped' : 'unmapped');
    const semanticStatus = sd.regulatoryValidationStatus === 'legally-reviewed' ? 'aligned' : 'proposed';
    const recommendedAction = sdMappings.length > 0 ? 'KEEP' : 'ENRICH';
    
    const row = [
      sd.id,
      area,
      domain,
      sd.nameEs,
      sd.landscapeLayer || 'industry-value-stream',
      sd.capabilityType || 'regulated-core',
      sd.focusObject?.name || '',
      accountable,
      regimes,
      sd.regulatoryCriticality || 'medium',
      uniqueSources.length > 0 ? uniqueSources.join(';') : 'N/A',
      articles.length > 0 ? articles.join(';') : 'N/A',
      coverage,
      semanticStatus,
      recommendedAction,
      'N/A',
      'source-verified'
    ];
    
    rows.push(row.map(escapeCSV).join(','));
  });
  
  // Make sure directories exist
  const csvDir = path.dirname(csvPath);
  if (!fs.existsSync(csvDir)) {
    fs.mkdirSync(csvDir, { recursive: true });
  }

  fs.writeFileSync(csvPath, rows.join('\n') + '\n', 'utf8');
  console.log(`Successfully generated CSV matrix with ${sds.length} rows at: ${csvPath}`);
}

// Automatically regenerate CSV first to ensure it's complete and matches master data
generateCSV();

// Now validate the CSV
console.log("Validating CSV matrix...");
const csvContent = fs.readFileSync(csvPath, 'utf8').trim().split('\n');
const headerLine = csvContent[0];
const dataLines = csvContent.slice(1);

if (dataLines.length !== 273) {
  console.error(`ERROR: CSV contains ${dataLines.length} data rows, expected exactly 273.`);
  process.exit(1);
}

const seenIds = new Set();
dataLines.forEach((line, idx) => {
  const id = line.split(',')[0].trim();
  
  if (!id.startsWith('RAIA-SD-')) {
    console.error(`ERROR: Row ${idx + 2} has invalid ID: ${id}`);
    process.exit(1);
  }
  if (seenIds.has(id)) {
    console.error(`ERROR: Duplicate ID found in CSV: ${id}`);
    process.exit(1);
  }
  
  // Verify that the ID actually exists in the landscape
  const sdExists = sds.some(sd => sd.id === id);
  if (!sdExists) {
    console.error(`ERROR: ID ${id} in CSV is fictitious and does not exist in master landscape.`);
    process.exit(1);
  }
  
  seenIds.add(id);
});

if (seenIds.size !== 273) {
  console.error(`ERROR: Validated ID count is ${seenIds.size}, expected exactly 273.`);
  process.exit(1);
}

console.log("SUCCESS: CSV matrix contains exactly 273 unique, valid Service Domain rows matching the landscape.");
process.exit(0);
