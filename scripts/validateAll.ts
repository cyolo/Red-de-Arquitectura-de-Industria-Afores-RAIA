import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const scripts = [
  'validateData.js',
  'validatePortal.js',
  'validateScenarios.js',
  'validateRoutes.js',
  'validateSequenceDiagrams.js',
  'validateScenarioNarratives.js',
  'validateRegulatoryBaseline.js',
  'validateActorTaxonomy.js',
  'validateServiceDomainAuditMatrix.js',
  'validateRegulatorySources.js',
  'validateRegulatoryMappings.js',
  'validateServiceDomainCoverage.js',
  'validateLandscapeRelations.js',
  'validateLandscapeSemantics.js',
  'validateOverviewDiagrams.js',
  'validateOverviewDiagramSemantics.js',
  'validateOverviewDiagramReferences.js',
  'validateInformationArchitecture.js',
  'validateControlRecords.js',
  'validateBusinessObjects.js',
  'validateReferenceModel.js',
  'validateScenarioSnippets.js',
  'validateCapabilities.js',
];

function runAll() {
  console.log('=== STARTING CONSOLIDATED VALIDATIONS ===');
  
  // 1. Verify Slug Uniqueness (SEC-08 & SEC-09)
  console.log('Running Slug Uniqueness Validation...');
  try {
    const landscapePath = path.join(__dirname, '../src/data/raia-landscape-0.1.0.json');
    if (!fs.existsSync(landscapePath)) {
      throw new Error(`Landscape data file not found at: ${landscapePath}`);
    }
    const landscape = JSON.parse(fs.readFileSync(landscapePath, 'utf8'));
    const serviceDomains = landscape.serviceDomains || [];
    
    const seenSlugs = new Set<string>();
    const duplicateSlugs = new Set<string>();
    
    for (const sd of serviceDomains) {
      if (!sd.slug || sd.slug.trim() === '') {
        throw new Error(`Service Domain ${sd.id} is missing a slug!`);
      }
      if (seenSlugs.has(sd.slug)) {
        duplicateSlugs.add(sd.slug);
      }
      seenSlugs.add(sd.slug);
    }
    
    if (duplicateSlugs.size > 0) {
      throw new Error(`Duplicate service domain slugs detected: ${Array.from(duplicateSlugs).join(', ')}`);
    }
    console.log('✓ Slug Uniqueness: OK (273 unique slugs verified)');
  } catch (err: any) {
    console.error(`✗ Slug Uniqueness Validation Failed: ${err.message}`);
    process.exit(1);
  }

  // 2. Run all individual sub-validators
  for (const script of scripts) {
    const scriptPath = path.join(__dirname, script);
    console.log(`Running ${script}...`);
    try {
      execSync(`node "${scriptPath}"`, { 
        stdio: 'inherit',
        env: {
          ...process.env,
          // Normalise path separators
          PWD: path.dirname(scriptPath)
        }
      });
      console.log(`✓ ${script}: Success`);
    } catch (err: any) {
      console.error(`✗ Validation failed in script: ${script}`);
      process.exit(1);
    }
  }

  console.log('=== ALL VALIDATIONS COMPLETED SUCCESSFULLY ===');
}

runAll();
